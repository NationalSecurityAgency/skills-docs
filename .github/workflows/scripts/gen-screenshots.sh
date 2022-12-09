#!/bin/bash

# dev mode:
# ./.github/workflows/scripts/gen-screenshots.sh -d true

NUM_SKILL_EVENTS=10000

usage() { echo "Usage gen-screenshots.sh -i skilltree/skills-service -v 2.0.3" 1>&2; exit 1; }

while getopts :d:r:i:v: flag
do
    case "${flag}" in
        d) skipShutdown=${OPTARG};;
        r) shutdownAndMoveSnaps=${OPTARG};;
        i) imageName=${OPTARG};;
        v) imageVersion=${OPTARG};;
        *) usage;;
    esac
done
if [ -z "${imageName}" ] || [ -z "${imageVersion}" ]; then
    usage
fi
echo "Will use: ${imageName}:${imageVersion}";
echo "Skip Shutdown: $skipShutdown";
echo "Shutdown and remove snaps: $shutdownAndMoveSnaps";

# if image already exist remove - this is to support use of latest
docker image rm -f ${imageName}:${imageVersion}

# start skills-service
echo "Will use [${imageName}:${imageVersion}]"
SKILLS_SERVICE_CONTAINER_ID=$(docker run -d -p 8080:8080 -e SPRING_PROPS="skills.config.ui.rankingAndProgressViewsEnabled=true" ${imageName}:${imageVersion})
npm run wait:skills-service
echo "Started ${imageName}:${imageVersion} on port [8080] with container id [${SKILLS_SERVICE_CONTAINER_ID}]"

# build latest backend examples
mkdir tmp-work-dir
cd tmp-work-dir
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/java-backend-example
mvn package -DskipTests
cd target

# populate with sample data
echo "Populating skills-service with data..."
java -Dskills.service.numEvents=${NUM_SKILL_EVENTS} -Dskills.service.additionalRootUsers= -Dspring.main.web-application-type=NONE -jar java-backend-example-*.jar
echo "Completed populating data!"
cd ../../../../
rm -rf tmp-work-dir

if [ "${skipShutdown}" = "true" ]; then
    echo "Dev mode: (1) started service (2) populated data"
    exit 1
fi

# remove existing screenshots
rm -rf cypress/snapshots/*

# generate screenshots
npm run cy:run

# move screenshots
sh ./.github/workflows/scripts/move-screenshots.sh

# stop and remove container
docker stop ${SKILLS_SERVICE_CONTAINER_ID}
docker rm ${SKILLS_SERVICE_CONTAINER_ID}

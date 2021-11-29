#!/bin/bash

# dev mode:
# ./.github/workflows/scripts/gen-screenshots.sh -d true

SKILLTREE_IMAGE="skilltree/skills-service-ci"
LATEST_SKILLTREE_CI_VERSION=$(curl -s https://registry.hub.docker.com/v1/repositories/skilltree/skills-service-ci/tags | jq -r '.[] | .name' | grep -v "latest" | sort | tail -n1)
NUM_SKILL_EVENTS=10000

while getopts d:r flag
do
    case "${flag}" in
        d) skipShutdown=${OPTARG};;
        r) shutdownAndMoveSnaps=${OPTARG};;
    esac
done
echo "Skip Shutdown: $skipShutdown";
echo "Shutdown and remove snaps: $shutdownAndMoveSnaps";

# start skills-service
echo "Will use [${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION}]"
SKILLS_SERVICE_CONTAINER_ID=$(docker run -d -p 8080:8080 -e SPRING_PROPS="skills.config.ui.rankingAndProgressViewsEnabled=true" ${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION})
npm run wait:skills-service
echo "Started ${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION} on port [8080] with container id [${SKILLS_SERVICE_CONTAINER_ID}]"

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

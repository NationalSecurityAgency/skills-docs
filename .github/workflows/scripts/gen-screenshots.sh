#!/bin/bash

SKILLTREE_IMAGE="skilltree/skills-service-ci"
LATEST_SKILLTREE_CI_VERSION=$(curl -s https://registry.hub.docker.com/v1/repositories/skilltree/skills-service-ci/tags | jq -r '.[] | .name' | grep -v "latest" | sort | tail -n1)
NUM_SKILL_EVENTS=10000

# start skills-service
echo "Will use [${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION}]"
SKILLS_SERVICE_CONTAINER_ID=$(docker run -d -p 8080:8080 ${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION})
npm run wait:skills-service
echo "Started ${SKILLTREE_IMAGE}:${LATEST_SKILLTREE_CI_VERSION} on port [8080] with container id [${SKILLS_SERVICE_CONTAINER_ID}]"

# latest backend examples
curl -s https://api.github.com/repos/NationalSecurityAgency/skills-client-examples/releases/latest | grep browser_download_url | cut -d '"' -f 4 | wget -qi -

# populate with sample data
echo "Populating skills-service with data..."
java -Dskills.service.numEvents=${NUM_SKILL_EVENTS} -Dskills.service.additionalRootUsers= -Dspring.main.web-application-type=NONE -jar java-backend-example-*.jar
echo "Completed populating data!"
rm java-backend-example-*.jar

# remove existing screenshots
rm -rf cypress/snapshots/*

# generate screenshots
npm run cy:run

# move screenshots
sh ./.github/workflows/scripts/move-screenshots.sh

# stop and remove container
docker stop ${SKILLS_SERVICE_CONTAINER_ID}
docker rm ${SKILLS_SERVICE_CONTAINER_ID}

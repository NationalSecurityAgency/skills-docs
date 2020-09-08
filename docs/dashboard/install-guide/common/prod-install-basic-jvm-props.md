Java VM option to increase ``skill-service`` size of heap, in case of jar based install
```bash
java -Xmx2g -Xms2g -jar skills-service-<version>.jar
```
or docker:
```bash
docker run --name skills-service -d -p 8080:8080 -e EXTRA_JAVA_OPTS="-Xmx2g -Xms2g" skilltree/skills-service:<version>
```
Please visit [Configuration](/dashboard/install-guide/config.html) section to learn how to configure skill-service.

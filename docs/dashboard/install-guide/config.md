# Configuration 

Out of the box the SkillTree service (skills-service) comes packaged with smart defaults that are designed to work well for 
development and prototyping. In this section we'll discuss how to configure each distribution time follow by the catalog of available options.

There are two official types of distributions: 

- Jar-based: hosted on [GitHub](https://github.com/NationalSecurityAgency/skills-service/releases/latest)
- Docker: hosted on [DockerHub](https://hub.docker.com/r/skilltree/skills-service)

There generally types of configuration properties: 

- *Application properties* - passed to the application
- *JVM System properties* - passed to JVM via ```-D``` on the command line

Application properties follow the following conventions: 

- SkillTree specific props - these start with **skills.** prefix
- Spring Boot props - these start with **spring.** prefix
  - skills-service is a Spring Boot application


## How to configure Jar-based install   

Pass in **Application properties** at the end, each property should start with ``--`` (double dash), for example:

```bash                
java -jar ~/Downloads/skills-service-X.X.X.jar \
--spring.datasource.url=jdbc:postgresql://<host>:5432/skills \
--spring.datasource.username=<username> \
--spring.datasource.password=<pass>
```

Pass in **JVM System properties** before ``-jar``, using ``-D`` or ``-X`` prefix, for example:

```bash                
java -Xmx2G -Xms2G -jar ~/Downloads/skills-service-X.X.X.jar
```

## How to configure Docker-based install

Docker-based install uses environment variables to configure Application and System properties:
- *SPRING_PROPS* - Application properties
- *EXTRA_JAVA_OPTS* - System properties

The following example configures Application properties (multiple properties separated by comma): 
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:postgresql://<host>:5432/skills,\
spring.datasource.username=<username>,\
spring.datasource.password=<password>" \
skilltree/skills-service:<version>
```

This example configures both Application and System properties:
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:postgresql://<host>:5432/skills,\
spring.datasource.username=<username>,\
spring.datasource.password=<password>" \
-e EXTRA_JAVA_OPTS="-Xmx2G -Xms2G" \
skilltree/skills-service:<version>
```



## Configuration Properties Catalog

:::tip
All of these properties are Application properties unless explicitly specified otherwise.
:::  

skills.config.ui.minimumSubjectPoints
skills.config.ui.minimumProjectPoints
skills.config.ui.maxTimeWindowInMinutes
skills.config.ui.maxProjectsPerAdmin
skills.config.ui.maxSubjectsPerProject
skills.config.ui.maxBadgesPerProject
skills.config.ui.maxSkillsPerSubject

skills.config.ui.descriptionMaxLength

skills.config.ui.docsHost

skills.config.ui.paragraphValidationRegex
skills.config.ui.paragraphValidationMessage
skills.config.ui.nameValidationRegex
skills.config.ui.nameValidationMessage

skills.config.ui.maxFirstNameLength
skills.config.ui.maxLastNameLength
skills.config.ui.maxNicknameLength
skills.config.ui.minUsernameLength
skills.config.ui.minPasswordLength
skills.config.ui.maxPasswordLength

skills.config.ui.minNameLength
skills.config.ui.maxBadgeNameLength
skills.config.ui.maxProjectNameLength
skills.config.ui.maxSkillNameLength
skills.config.ui.maxSubjectNameLength
skills.config.ui.maxLevelNameLength

skills.config.ui.minIdLength
skills.config.ui.maxIdLength
skills.config.ui.maxSkillVersion
skills.config.ui.maxPointIncrement
skills.config.ui.maxNumPerformToCompletion
skills.config.ui.maxNumPointIncrementMaxOccurrences

skills.config.ui.userSuggestOptions

### Database

```properties
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

### WebSocket Stomp

```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
```

### https
```properties
server.port=8443
server.ssl.enabled=true
server.ssl.key-store-type=PKCS12
server.ssl.key-store=/path/to/keystore.p12
server.ssl.key-store-password=
server.ssl.enabled-protocols=TLSv1.2
```

### JVM Heap
These are System Properties.
```properties
-Xmx2g -Xms2g
``` 

### GC Logging
These are System Properties.

```properties
-Xlog:gc=debug:file=./gc.log:time,uptime,level,tags:filecount=5,filesize=100m
```
:::tip
Generally is only enabled in development. 
:::

### Redis HttpStore
```properties
spring.session.store-type=redis
spring.redis.host=localhost
spring.redis.password=
spring.redis.port=6379 
```

Further customization: 
```properties
# can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
# Flush mode.
spring.session.redis.flush-mode=on_save 
# Stores session namespace to use for the keys
spring.session.redis.namespace=spring:session 
```

### Spring Boot Properties

``skills-service`` is a Spring Boot application and will respect majority (if not all) Spring Bool properties.  
Here is the complete list of available [Spring Boot Properties](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties) 

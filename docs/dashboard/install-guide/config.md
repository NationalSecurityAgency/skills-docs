# Configuration 

Out-of-the-box the SkillTree service (skills-service) comes packaged with smart defaults that are designed to work well for 
the development and prototyping. In this section we'll discuss how to configure each distribution type followed by the catalog of available options.

There are two official types of distributions: 

- Jar-based: hosted on [GitHub](https://github.com/NationalSecurityAgency/skills-service/releases/latest)
- Docker: hosted on [DockerHub](https://hub.docker.com/r/skilltree/skills-service)

There are generally these types of configuration properties: 

- *Application properties* - passed to the application
- *JVM System properties* - passed to JVM via ``-D`` or ``-X`` on the command line

 
:::tip
Application properties conventions:
- SkillTree specific properties start with **skills.** prefix
- Spring Boot specific properties start with **spring.** prefix
  - skills-service is a Spring Boot application
:::

Table of Contents:
[[toc]]

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

The following example configures Application properties
```bash
docker run --name skills-service -d -p 8080:8080 \
-e SPRING_PROPS="\
spring.datasource.url=jdbc:postgresql://<host>:5432/skills,\
spring.datasource.username=<username>,\
spring.datasource.password=<password>" \
skilltree/skills-service:<version>
```
:::tip 
Multiple properties separated by a comma
:::

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

### Dashboard Project and Skill Definitions 

Limit number of items that a Dashboard user can create:
```properties
# Maximum projects that a single user can be administrator for
skills.config.ui.maxProjectsPerAdmin=25
# Maximum number of subjects in a project
skills.config.ui.maxSubjectsPerProject=25
# Maximum number of badges in a project
skills.config.ui.maxBadgesPerProject=25
# Maximum number of skills in a project
skills.config.ui.maxSkillsPerSubject=100
```

When project first created it may not have enough total points to calculate levels breakdown.  
Therefore, Skill Events are not be applied until minimum amount of points created as specified by these properties:  
```properties
# Must create at least 100 points for project 
# before skill events are applied
skills.config.ui.minimumSubjectPoints=100
# Must create at least 100 points for each 
# subject before skill events are applied 
# for skills under this subject
skills.config.ui.minimumProjectPoints=100
```

Skill definition thresholds: 
```properties
# Skill's Time Window threshold: Maximum number of minutes that can be assigned 
# to skill's Time Window property (default: 43,200 minutes = 30 days)
skills.config.ui.maxTimeWindowInMinutes=43200

# Maximum assignable skill version
skills.config.ui.maxSkillVersion=999
# maximum point increment for a sill
skills.config.ui.maxPointIncrement=10000
# maximum number of iterations required to complete a skill
skills.config.ui.maxNumPerformToCompletion=10000
# maximum number of occurrences within a time window
skills.config.ui.maxNumPointIncrementMaxOccurrences=999
```

### Dashboard: User Account Thresholds (Pass Auth Mode Only)

```properties
# Maximum number of characters for the first name 
skills.config.ui.maxFirstNameLength=30
# Maximum number of characters for the last name
skills.config.ui.maxLastNameLength=30
# Maximum number of characters for the nick name
skills.config.ui.maxNicknameLength=70
# Minimum number of characters for the user name
skills.config.ui.minUsernameLength=5
# Minimum number of characters for the password
skills.config.ui.minPasswordLength=8
# Maximum number of characters for the password
skills.config.ui.maxPasswordLength=40
```

:::tip
These attributes are not applicable in the PKI Mode 
:::

### SkillTree Documentation Link

Root URL to SkillTree documentation:
```properties
skills.config.ui.docsHost=https://code.nsa.gov/skills-docs
```

### Dashboard: Input Validation

Here are some basic thresholds that are applied at the Dashboard UI and the backend:
```properties
# Maximum number of characters for a description (ex. Subject, Badge, Skill, etc..)
skills.config.ui.descriptionMaxLength=2000

# Minimum number of characters for the name (ex. Subject, Badge, Skill, etc..) 
skills.config.ui.minNameLength=3
# Maximum number of characters for Badge's name
skills.config.ui.maxBadgeNameLength=50
# Maximum number of characters for Project's name
skills.config.ui.maxProjectNameLength=50
# Maximum number of characters for Skill's name
skills.config.ui.maxSkillNameLength=100
# Maximum number of characters for Subject's name
skills.config.ui.maxSubjectNameLength=50
# Maximum number of characters for Level's name
skills.config.ui.maxLevelNameLength=50
# Minimum number of characters for id (ex. Subject, Badge, Skill, etc..)
skills.config.ui.minIdLength=3
# Maximum number of characters for id (ex. Subject, Badge, Skill, etc..)
skills.config.ui.maxIdLength=50
```

Regex based validation for Name and Description *(this validation not enabled by default)*:
```properties
# Regular expression that each paragraph in the description must comply to
skills.config.ui.paragraphValidationRegex=
# Message to display if regex validation fails
skills.config.ui.paragraphValidationMessage=

# Regular expression that a name (ex. Subject, Badge, Skill, etc..) must comply to
skills.config.ui.nameValidationRegex=
# Message to display if regex validation fails
skills.config.ui.nameValidationMessage=
```

### Latency Profiling

``skill-service`` comes with built-in latency profiling of its endpoints, to enable:
```properties
# Enable profiling
skills.prof.enabled=false
# Profiling is only generated if endpoint's performance exceeds this number of milliseconds
skills.prof.minMillisToPrint=500
```
SkillTree profiling uses [Call Stack Profiler](https://github.com/NationalSecurityAgency/call-stack-profiler) library


### Database

Configure DB:
```properties
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

Please visit [Database Section](/dashboard/install-guide/database.html) for more information.

### WebSocket Stomp

Configure external WebSocket Stomp:
```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
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
Required for clustered skill-service deployment to persist HttpSession:
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

### https SSL (Pass Auth Mode Only)
<import-content path="/dashboard/install-guide/common/ssl-props.html"/>

### 2-way SSL (PKI Mode Only)
<import-content path="/dashboard/install-guide/common/two-way-ssl-props.html"/>

### User Info Service (PKI Mode Only)
``User Info Service`` client properties:
<import-content path="/dashboard/install-guide/common/user-info-service-props-endpoints.html"/>

If ``User Info Service`` utilizes 2-way SSL then add the following client authentication properties (Java System Properties):
<import-content path="/dashboard/install-guide/common/user-info-service-props-ssl.html"/>

If you are running with self-signed certs you can optionally disable host verification (development only):
```properties
skills.disableHostnameVerifier=false
```

### OAuth Support (Pass Auth Mode Only)
<import-content path="/dashboard/install-guide/common/oath2-support.html"/>

### Spring Boot Properties

``skills-service`` is a Spring Boot application and will respect majority (if not all) Spring Boot properties.  
Here is the complete list of available [Spring Boot Properties](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties) 

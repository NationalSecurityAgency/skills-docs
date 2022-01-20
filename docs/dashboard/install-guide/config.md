# Configuration 

Out-of-the-box the SkillTree service (skills-service) comes packaged with smart defaults that are designed to work well for 
development and prototyping. In this section we'll discuss how to configure each distribution type followed by the catalog of available options.

There are two official types of distributions: 

- Jar-based: hosted on [GitHub](https://github.com/NationalSecurityAgency/skills-service/releases/latest)
- Docker: hosted on [DockerHub](https://hub.docker.com/r/skilltree/skills-service)

There are generally two types of configuration properties: 

- *Application properties* - passed to the application
- *JVM System properties* - passed to JVM via ``-D`` or ``-X`` on the command line

 
:::tip
Application properties conventions:
- SkillTree specific properties start with a **skills.** prefix
- Spring Boot specific properties start with a **spring.** prefix
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

The Docker-based install uses environment variables to configure Application and System properties:
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
Multiple properties are separated by a comma
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

When a project is first created it may not have enough total points to calculate a sensible levels breakdown.  
Therefore, Skill Events cannot be applied until a minimum amount of points have been created for a project/subject as specified by these properties:  
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
# maximum point increment for a skill
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
These attributes are not applicable to the PKI Mode and will be ignored if PKI Mode is enabled 
:::

### SkillTree Documentation Link

Root URL of SkillTree documentation:
```properties
skills.config.ui.docsHost=https://code.nsa.gov/skills-docs
```

### SkillTree Support
<since project="skills-service" version="1.8.2" />

You can display options for your users to reach out to the support team (ex. email, chat, ticketing center, etc).

Support options are displayed in the SkillTree Dashboard:
- in the header under the ``Question Icon`` dropdown, 
- in the footer of the application.

More than one support option can be configured, here is a general template for configuring a support option: 

```properties
skills.config.ui.supportLink<N>=<url>
skills.config.ui.supportLink<N>Label=<label>
skills.config.ui.supportLink<N>Icon=<font awesome free icon>
```

For example: 

```properties
skills.config.ui.supportLink1=mailto:skilltreecoolsupport@someemailserver.com
skills.config.ui.supportLink1Label=Email Us
skills.config.ui.supportLink1Icon=fas fa-envelope-open-text

skills.config.ui.supportLink2=https://skilltreecoolestsupportcenter.com
skills.config.ui.supportLink2Label=Support Center
skills.config.ui.supportLink2Icon=fas fa-ambulance
```

Any [Free Font Awesome Icons](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free) can be specified for the ``skills.config.ui.supportLink<N>Icon`` property. 

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

Regex based validation for Name and Description *(this validation is not enabled by default)*:
```properties
# Regular expression that each paragraph in the description must comply with
skills.config.ui.paragraphValidationRegex=
# Message to display if regex validation fails
skills.config.ui.paragraphValidationMessage=

# Regular expression that a name (ex. Subject, Badge, Skill, etc..) must comply with
skills.config.ui.nameValidationRegex=
# Message to display if regex validation fails
skills.config.ui.nameValidationMessage=
```

### Latency Profiling

``skills-service`` comes with built-in latency profiling of its endpoints, to enable:
```properties
# Enable profiling
skills.prof.enabled=true
# Profiling is only generated if endpoint's performance exceeds this number of milliseconds
skills.prof.minMillisToPrint=500
```
When enabled and an overall endpoint execution time exceeds ``skills.prof.minMillisToPrint`` then the detailed call stack profiling is printed to the log.

Profiling statement will look something like this: 

```
Profiling Endpoint: /admin/projects/Project1/users
|-> getProjectUsers(projectId=Project1,query=,limit=5,page=1,orderBy=lastUpdated,ascending=false) (1) : 815ms [017ms]
|     |-> AdminUsersService.findDistinctUsers (1) : 672ms
|     |-> AdminUsersService.countTotalProjUsers (1) : 126ms
```
The output provides method call hierarchy as well as the following information:
- Total method execution time: number in ms, seconds and/or minutes
- (N): number of times method was called, m2() was called once and m3() called 5 times
- [N ms]: execution time which was not accounted for by child methods/logic; this happens when either not all of the child methods/logic is profiled OR there is a GC or JVM overhead

SkillTree profiling uses the [Call Stack Profiler](https://github.com/NationalSecurityAgency/call-stack-profiler) library

``skills-service`` also supports the [Server Timing API](https://web.dev/custom-metrics/?utm_source=devtools#server-timing-api) and when enabled will set 
server timing data in the response header. Most browsers visualize this timing data in the development tools. To enable please set the following property: 

```properties
skills.prof.serverTimingAPI.enabled=true
```
In Chrome for example, open the development tools and navigate to the Network tab. Click on the skills-service endpoint and then click on the Timing Tab. 
On the bottom you will see ``Server Timing`` section which will contains overall endpoint execution time (from the server's point of view) and associated 
profiling id that will allow you to locate the associated profiling statement. 

For example, the name in the Chrome development tools will look something like this ``profId1642707755421`` (``profId<id>``).
To locate the associated profiling statement you can search for the ``profId=1642707755421`` (``profId=<id>``):

```
Profiling Endpoint: /admin/projects/Project1/users
|-> getProjectUsers(projectId=Project1,query=,limit=5,page=1,orderBy=lastUpdated,ascending=false) profId=1642707755421 (1) : 815ms [017ms]
|     |-> AdminUsersService.findDistinctUsers (1) : 672ms
|     |-> AdminUsersService.countTotalProjUsers (1) : 126ms
```

::: tip Please note
- In order for the Server Timing API to work ``skills.prof.enabled=true`` must be set
- Profiling statements are only printed to the log if an overall endpoint execution time exceeds ``skills.prof.minMillisToPrint``
:::

### Database

Configure DB:
```properties
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

Please visit the [Database Section](/dashboard/install-guide/database.html) for more information.

### WebSocket Stomp Broker

Configure external WebSocket Stomp Broker:
```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
```

### JVM Heap
These are System Properties.
```properties
-Xms2g -Xmx2g
``` 

### GC Logging
These are System Properties.

```properties
-Xlog:gc=debug:file=./gc.log:time,uptime,level,tags:filecount=5,filesize=100m
```
:::tip
Generally gc logging is only enabled in development deployments. 
:::

### HttpStore
When deploying more than 1 instance of ``skills-service`` HttpSession must be persisted centrally. 
SkillTree supports storing HttpSession in Redis or in Postgres via JDBC. 

**Option 1:** HttpStore persisted in Redis
```properties
spring.session.store-type=redis
spring.redis.host=localhost
spring.redis.password=
spring.redis.port=6379 

# Optional: Flush mode
spring.session.redis.flush-mode=on_save 
# Optional: Stores session namespace to use for the keys
spring.session.redis.namespace=spring:session 
# Optional: can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
```

**Option 2:** HttpStore persisted in Postgres
```properties
spring.session.store-type=jdbc
spring.session.jdbc.initialize-schema=always

# Optional: can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
```

### https SSL (Pass Auth Mode Only)
<import-content path="/dashboard/install-guide/common/ssl-props.html"/>

### Email Verification (Pass Auth Mode Only)

You can enable verification of the email ownership when dashboard accounts are created by setting the following property:

```properties
skills.authorization.verifyEmailAddresses=true
```

When a new account is created that user will be sent a verification email. 
The user will have to click on the verification link in the email prior their login credentials can be used. 


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


### Progress and Ranking Views

A single point of access for training profiles available to the user as well as user's current progress and ranking.
The Progress and Ranking views give a user access to the Skills Display for _all_ projects which have ``Discoverable`` enabled 
on that instance of the SkillTree platform. It provides a single point of access for training profiles available to the
user as well as a mechanism for Projects that consist entirely of self-reported Skills to provide access to the [Ranking and Progress](/dashboard/user-guide/progress-and-ranking.html) display
for their users. 

Progress and Ranking Views are disabled by default, but can be easily enabled: 

```properties
# enable Progress and Ranking Views
skills.config.ui.rankingAndProgressViewsEnabled=true

# optionally change default for the landing page (admin is the default)
skills.config.ui.defaultLandingPage=progress
```

### Spring Boot Properties

``skills-service`` is a Spring Boot application and will respect the majority (if not all) of Spring Boot configuration properties.  
Here is the complete list of available [Spring Boot Properties](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties) 

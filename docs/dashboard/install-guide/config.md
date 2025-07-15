# Configuration 

Out-of-the-box the SkillTree service (skills-service) comes packaged with smart defaults that are designed to work well for 
development and prototyping. In this section we'll discuss how to configure each distribution type followed by the catalog of available options.

There are two official types of distributions: 

- Jar-based: hosted on <external-url label="GitHub" url="https://github.com/NationalSecurityAgency/skills-service/releases/latest" />
- Docker: hosted on <external-url label="DockerHub" url="https://hub.docker.com/r/skilltree/skills-service" />

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
# Maximum number of characters for the primary name (aka nickname)
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

#### Support Center

When enabled, the Help button in the header dropdown includes a page-aware contact link. The contact action varies based
on the current page:

- **Progress & Ranking Views**: Users are considered trainees and presented with a project-specific contact form
- **Progress & Ranking Home Page**: Users are prompted to select which project they want to contact
- **Administrative Pages**: Users are directed to a support page with a link to the ticketing system

To configure the support center, set these required properties:
```properties
skills.config.ui.contactSupportEnabled=true
skills.config.ui.contactSupportExternalUrl=<url to ticketing system>
skills.config.ui.contactSupportExternalEmail=<email to SkillTree support team>
```

For additional customization, you can specify these optional properties:
```properties
skills.config.ui.contactSupportExternalTitle=Support Center
skills.config.ui.contactSupportExternalDescription=If you have a feature request, need to report a bug, or simply have a question, the best way to get assistance is to visit the Support Center and create a ticket.
skills.config.ui.contactSupportExternalEmailDescription=As an alternative, you can reach out to the SkillTree team by sending an email to
```

:::tip
The project contact feature requires email settings to be configured. If email settings are not configured, users on
Progress & Ranking views will be directed to the support center page instead.
:::

#### Support Links
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

Any <external-url label="Free Font Awesome Icons" url="https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free" /> can be specified for the ``skills.config.ui.supportLink<N>Icon`` property. 

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
|     |-> AdminUsersService.countTotalProjUsers (3) : 126ms
```
The output provides method call hierarchy as well as the following information:
- Total method execution time: number in ms, seconds and/or minutes
- (N): number of times method was called, findDistinctUsers() was called once and countTotalProjUsers() called 3 times
- [N ms]: execution time which was not accounted for by child methods/logic; this happens when either not all of the child methods/logic is profiled OR there is  GC or JVM overhead

SkillTree profiling uses the <external-url label="Call Stack Profiler" url="https://github.com/NationalSecurityAgency/call-stack-profiler" /> library

``skills-service`` also supports the <external-url label="Server Timing API" url="https://web.dev/custom-metrics/?utm_source=devtools#server-timing-api" /> and when enabled will set 
server timing data in the response header. Most browsers visualize this timing data in their respective development tools. To enable, please set the following property: 

```properties
skills.prof.serverTimingAPI.enabled=true
```
In Chrome for example, open the development tools and navigate to the Network tab. Click on the skills-service endpoint and then click on the Timing Tab. 
On the bottom you will see ``Server Timing`` section which will contain overall endpoint execution time (from the server's point of view) and associated 
profiling id that will allow you to locate the associated profiling statement in the logs. 

For example, the name in the Chrome development tools will look something like this ``profId1642707755421`` (``profId<id>``).
To locate the associated profiling statement you can search for the ``profId=1642707755421`` (``profId=<id>``):

```text
Profiling Endpoint: /admin/projects/Project1/users
|-> getProjectUsers(projectId=Project1,query=,limit=5,page=1,orderBy=lastUpdated,ascending=false) profId=1642707755421 (1) : 815ms [017ms]
|     |-> AdminUsersService.findDistinctUsers (1) : 672ms
|     |-> AdminUsersService.countTotalProjUsers (1) : 126ms
```

::: tip Please note
- In order for the Server Timing API to work ``skills.prof.enabled`` must be set to true
- Profiling statements are only printed to the log if an overall endpoint execution time exceeds ``skills.prof.minMillisToPrint``
:::

Endpoint profiling printing threshold can be further customized / overridden per endpoint: 

```properties
# You will need to know the name of the method to customize 
skills.prof.endpoints.<endpoint-method-name>=1000
```

There are also configuration options to tweak profiling of the asynchronous jobs. Please note that the profiling of asynchronous jobs is always enabled.
``` properties
# Async Job: Changes to the original skill (ex. description, occurrences) are automatically 
# synchronized to all the imported skills as well. Default is 2000
skills.async.syncCatalogSkillDefinition.prof.minMillisToPrint=2000

# Async Job: As skill occurrences are reported to the original project they are 
#also automatically propagated to the imported skills within other projects. Default is 500
skills.async.reportSkill.prof.minMillisToPrint=500
```

### Database

Configure DB:
```properties
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

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
SkillTree supports storing HttpSession in Postgres via JDBC or in Redis. 

**Option 1:** HttpStore persisted in PostgreSQL (Recommended)
```properties
spring.session.store-type=jdbc
spring.session.jdbc.initialize-schema=always

# Optional: can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
```

**Option 2:** HttpStore persisted in Redis
```properties
spring.session.store-type=redis
spring.data.redis.host=localhost
spring.data.redis.password=
spring.data.redis.port=6379 

# Optional: Flush mode
spring.session.redis.flush-mode=on_save 
# Optional: Stores session namespace to use for the keys
spring.session.redis.namespace=spring:session 
# Optional: can specify duration suffix but if omitted then it defaults to seconds
server.servlet.session.timeout= 
```

### https SSL (Pass Auth Mode Only)
<Content path="/dashboard/install-guide/common/ssl-props.md"/>

### Email Verification (Pass Auth Mode Only)

You can enable verification of the email ownership when dashboard accounts are created by setting the following property:

```properties
skills.authorization.verifyEmailAddresses=true
```

When a new account is created that user will be sent a verification email. 
The user will have to click on the verification link in the email prior their login credentials can be used. 


### 2-way SSL (PKI Mode Only)
<Content path="/dashboard/install-guide/common/two-way-ssl-props.md"/>

### User Info Service (PKI Mode Only)
``User Info Service`` client properties:
<Content path="/dashboard/install-guide/common/user-info-service-props-endpoints.md"/>

If ``User Info Service`` utilizes 2-way SSL then add the following client authentication properties (Java System Properties):
<Content path="/dashboard/install-guide/common/user-info-service-props-ssl.md"/>

If you are running with self-signed certs you can optionally disable host verification (development only):
```properties
skills.disableHostnameVerifier=false
```

### OAuth Support (Pass Auth Mode Only)
<Content path="/dashboard/install-guide/common/oath2-support.md"/>


### Progress and Ranking Views

A single point of access for training profiles available to the user as well as user's current progress and ranking.
The Progress and Ranking views give a user access to the Skills Display for _all_ projects which have elected to set its [Project Discoverability setting](/dashboard/user-guide/projects.html#setting-project-discoverability) to ``Add to Project Catalog`` 
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

### Upgrade-In-Progress State

In order to safely upgrade the database engine, SkillTree can be easily transitioned to a Upgrade-In-Progress state. 
When that happens:
- the SkillTree Dashboard is placed into a read-only state: dashboard can be viewed and navigated but mutations will not be allowed 
- skill requests are retained in a Write-Ahead-Log (WAL) to be replayed after the upgrade is done

There are two choices of where the WAL can be stored:
1. Local file system
2. Amazon Simple Storage Service ([Amazon S3](https://aws.amazon.com/s3/)) - Recommended in case of a multi-node AWS deployment

### Storing the Write-Ahead-Log on Local File System

Please configure the following properties in order to place ``skills-service`` in the Upgrade-In-Progress state:
```properties
# place the SkillTree platform in the Upgrade-In-Progress state 
skills.config.db-upgrade-in-progress=true
# specify the location of the directory where the Write-Ahead-Logs will be stored   
skills.queued-event-path=/queued_events
```

### Storing the Write-Ahead-Log on Amazon S3

Please configure the following properties in order to place ``skills-service`` in the Upgrade-In-Progress state:
```properties
# place the SkillTree platform in the Upgrade-In-Progress state 
skills.config.db-upgrade-in-progress=true
# enable S3 support and specify the location of the directory where the Write-Ahead-Logs will be stored   
spring.cloud.aws.s3.enabled=true
skills.queued-event-path=s3://bucketname/optional-dir

# S3 files are immutable therefore the requests are cached locally and flushed to a new S3 file based on this configuration
skills.queued-event-path.commit-every-n-records=250
```


# Upgrade-In-Progress Life Cycle 

When the SkillTree Dashboard is started with the ``skills.config.db-upgrade-in-progress`` property set to ``true`` it will:
- display a prominent banner on the top of the SkillTree Dashboard and any embedded Skills Display informing users that an upgrade is in progress
- any mutation (ex. creating/editing skills/projects/badges, etc...) will redirect users to an informational page indicating that an upgrade is in progress
- skill requests are accepted and stored in the WAL in the directory specified by the ``skills.queued-event-path`` property

General steps to upgrade the database engine:
1. start the new database on a different instance/node
2. transition SkillTree production instance to the Upgrade-In-Progress state
3. export data from the current production database instance
4. import data into the new database instance
5. reconfigure SkillTree production instance to point to the new database and turn off the Upgrade-In-Progress state  
   - when the ``skills-service`` is restarted it will replay the events stored in the WAL; the WAL files will then be removed 

### Admin Dashboard Access 

Optionally, you can enable dashboard access limitations to restrict access to the admin portion of the dashboard,
controlling who can create projects, view and manage project administrative settings and features.

```properties
skills.config.ui.limitAdminAccess=true
```

When the `skills.config.ui.limitAdminAccess` property is set to `true`, a new section called `Training Creators Management`
appears on the Security page, accessible only to users with the `root` role. This section allows root administrators to add and
remove users with the Training Creator role.

With `skills.config.ui.limitAdminAccess` enabled, only users assigned the `Training Creator` role will have access to the
administrative portion of the SkillTree Dashboard.

### Private Invite Only Projects

In the case of Private Invite Only Projects, users are invited to join a project. 
Invited recipients are emailed a one-time invite code and by default that invite code can be used by any valid user. 

When ``skills.authorization.invite.validateEmail`` is set to ``true``, the invite code is compared to the user's email address
prior giving access to that private project. 

```properties
# when enabled, only users whose email addresses matche the one assigned to the invite token will be given access 
skills.authorization.invite.validateEmail=true
```

### Spring Boot Properties

``skills-service`` is a Spring Boot application and will respect the majority (if not all) of Spring Boot configuration properties.  
Here is the complete list of available <external-url label="Spring Boot Properties" url="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties" /> 

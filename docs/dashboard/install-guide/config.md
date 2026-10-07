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
# Maximum number of levels that can be defined for a project or subject
skills.levels.max=25
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

The Skills Display also has separate thresholds for reporting project and subject levels. If the total available
points are below the corresponding threshold, the reported level is set to ``0``. These are based on the defined
training points, not the points earned by an individual user:

```properties
# Minimum total available project points before reporting a project level (default: 20)
skills.project.minimumPoints=20
# Minimum total available subject points before reporting a subject level (default: 20)
skills.subjects.minimumPoints=20
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
# Maximum badge bonus expiration duration (525,600 minutes = 365 days)
skills.config.ui.maxBadgeBonusInMinutes=525600
```

Bulk skill operations have separate limits:

```properties
# Maximum number of skills imported from the Skill Catalog in one bulk import
skills.config.ui.maxSkillsInBulkImport=50
# Maximum number of user/skill combinations in one bulk skill-reporting request
skills.config.ui.maxSkillBatchSize=200
```

For bulk reporting, the batch size is the number of users multiplied by the number of skills.
For example, reporting 10 skills for 20 users reaches the default limit of 200.

Learning path validation checks prerequisite relationships for circular dependencies:

```properties
# Configured iteration limit supplied to the circular learning path checker (default: 1000)
skills.circularLearningPathChecker.maxIterations=1000
```

:::tip
The current circular learning path checker uses hard-coded recursion limits of 1,000, even though it receives
``skills.circularLearningPathChecker.maxIterations``. Changing this property currently does not change those limits.
:::

### Quiz Limits and Grader Feedback

Configure limits for quiz and survey definitions. The following properties show the default values:

```properties
# Maximum number of quiz and survey definitions that a single user can be administrator for
skills.config.ui.maxQuizDefsPerAdmin=1000
# Maximum number of questions in a quiz or survey
skills.config.ui.maxQuestionsPerQuiz=500
# Maximum number of answer options per question
skills.config.ui.maxAnswersPerQuizQuestion=10
# Maximum number of characters for a quiz or survey name
skills.config.ui.maxQuizNameLength=75
# Maximum number of characters in an author-defined answer option
# Also applies separately to each term and value in a matching question
skills.config.ui.maxQuizTextAnswerLength=2000
# Maximum number of characters in a question's answer hint
skills.config.ui.maxQuizAnswerHintLength=2000
```

Trainee responses to text-input questions and grader feedback have separate character limits:

```properties
# Maximum number of characters in a trainee's response to a text-input question
skills.config.ui.maxTakeQuizInputTextAnswerLength=50000
# Maximum number of characters in feedback provided when grading a text-input answer
skills.config.ui.maxGraderFeedbackMessageLength=50000
```

``skills.config.ui.maxQuizTextAnswerLength`` limits answer text entered when creating a question;
``skills.config.ui.maxTakeQuizInputTextAnswerLength`` limits the response entered when taking a quiz or survey.
Restart ``skills-service`` after changing these properties.

### Uploads, Attachments, and Streaming

#### Attachments

Configure attachments uploaded through the rich text editor. The following properties show the default values:

```properties
# Maximum size of an uploaded attachment
skills.config.maxAttachmentSize=128MB
# Comma-separated file extensions offered by the attachment file picker
skills.config.allowedAttachmentFileTypes=.xlsx,.docx,.pptx,.doc,.odp,.ods,.odt,.pdf,.ppt,.xls
# Comma-separated MIME types accepted by the backend for attachments
skills.config.allowedAttachmentMimeTypes=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword,application/vnd.oasis.opendocument.presentation,application/vnd.oasis.opendocument.spreadsheet,application/vnd.oasis.opendocument.text,application/pdf,application/vnd.ms-powerpoint,application/vnd.ms-excel
```

Keep the file-extension list and MIME-type list consistent when adding or removing supported attachment formats.
The file-picker extensions guide file selection; the backend validates the uploaded file's MIME type and size.

#### Video, Audio, and Slide Uploads

Configure internally hosted video/audio files and PDF slide decks. The following properties show the default values:

```properties
# Maximum size of an uploaded video or audio file
skills.config.ui.maxVideoUploadSize=250MB
# Comma-separated MIME types accepted for video and audio uploads
skills.config.allowedVideoUploadMimeTypes=video/webm,video/mp4,audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/aacp,audio/ogg,audio/webm,audio/flac
# Maximum size of an uploaded slide deck
skills.config.ui.maxSlidesUploadSize=250MB
# Comma-separated MIME types accepted for slide uploads
skills.config.allowedSlidesUploadMimeTypes=application/pdf,application/x-bzpdf,application/x-gzpdf
# Maximum number of characters in video captions
skills.config.ui.maxVideoCaptionsLength=5000
# Maximum number of characters in a video transcript
skills.config.ui.maxVideoTranscriptLength=20000
```

:::tip
Size properties accept units such as ``MB``. By default, ``skills.config.maxAttachmentSize`` also supplies Spring Boot's
multipart file and request limits, so its default of ``128MB`` can reject a video or slide upload before the
``250MB`` media-specific limit is checked. To allow larger media uploads, also increase the multipart limits
(``spring.servlet.multipart.max-file-size`` and ``spring.servlet.multipart.max-request-size``), or increase
``skills.config.maxAttachmentSize``. Allow room for multipart overhead in the request-size limit.
:::

The video/audio upload page also supports an optional progress-animation tuning:

```properties
# Divisor used to calculate the loading bar's update interval from the file size in bytes
skills.config.ui.videoUploadLoadingBarLengthyCalculationTimeoutRatio=75000
```

The loading bar's interval is calculated as file size divided by the ratio, truncated to an integer and bounded
between 100 and 1,000 milliseconds. A larger ratio produces a shorter interval. This setting controls the progress
animation, not an upload timeout or file-size limit.

#### Media Streaming

Tune how internally hosted media is served from the database. These values are in bytes:

```properties
# Response size for an open-ended byte-range request (5 MiB)
skills.config.videoStreamDefaultChunkSize=5242880
# Maximum response size fetched as an in-memory database chunk (10 MiB)
skills.config.videoStreamMaxOptimizedDbFetchSize=10485760
# Handle recognized client-disconnect exceptions in the optimized chunk-write path at DEBUG level
skills.config.suppressBrokenPipeException=true
```

``skills.config.videoStreamDefaultChunkSize`` applies to requests such as ``Range: bytes=0-``;
it does not cap responses for explicit byte ranges or requests without a range.
Responses larger than ``skills.config.videoStreamMaxOptimizedDbFetchSize`` use streaming instead of loading
the requested chunk into memory. Both size values must be positive, and the default chunk size must not exceed
the optimized database-fetch size; invalid values prevent startup.

``skills.config.suppressBrokenPipeException`` handles recognized ``Broken pipe`` and ``Connection reset by peer``
exceptions when writing an optimized chunk, which can occur when a player cancels a request.
Set it to ``false`` to propagate those exceptions instead.

Restart ``skills-service`` after changing these properties.

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

Limit the length of messages sent through the project contact form:

```properties
# Maximum number of characters in a message to project owners
skills.config.ui.maxContactOwnersMessageLength=2500
```

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
skills.config.ui.descriptionMaxLength=2000000

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
# Maximum number of characters for an admin group name
skills.config.ui.maxAdminGroupNameLength=100
# Maximum number of characters for a custom project label (ex. Project, Subject, Skill)
skills.config.ui.maxCustomLabelLength=20
# Maximum number of characters for a skill tag
skills.config.ui.maxSkillTagLength=50
# Maximum number of characters for the Root Help Url configured in project settings
skills.config.ui.maxHostLength=50
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

### Self-Reporting and Approval Workload

Configure message lengths and user-tag limits used by self-reporting and approval workflows. These are the default values:

```properties
# Maximum number of characters in a self-report message
# Defaults to the configured descriptionMaxLength (2,000,000 with packaged defaults)
skills.config.ui.maxSelfReportMessageLength=${skills.config.ui.descriptionMaxLength}
# Maximum number of characters in a self-report rejection message
skills.config.ui.maxSelfReportRejectionMessageLength=250
# Maximum number of characters in a user-tag key for approval workload configuration
skills.config.ui.maxTagKeyLengthInApprovalWorkloadConfig=15
# Maximum number of characters in a user-tag value for approval workload configuration
skills.config.ui.maxTagValueLengthInApprovalWorkloadConfig=10
# Number of roles/approvers requested per page by role and approval management views
skills.config.ui.maxRolePageSize=200
```

When an approval request has no eligible administrators or approvers subscribed to approval-request emails,
SkillTree can create a project issue to alert project administrators:

```properties
# Create a project issue when no subscribed approval-email recipients remain (default: true)
skills.selfReport.noEmailableAdmins.create-project-issue=true
```

### Notifications

#### Email Dispatch and Retry

Email notifications require configured [email settings](/dashboard/user-guide/settings.html#email-settings).
Configure dispatch, batching, and failed-notification retention using these defaults:

```properties
# Dispatch new email notifications every minute
skills.config.notifications.dispatchSchedule=0 * * * * *
# Retry failed email notifications every hour
skills.config.notifications.dispatchRetrySchedule=0 0 * * * *
# Maximum recipients per queued notification batch
skills.config.notifications.maxRecipients=50
# Retain failed notifications for this many seconds (172,800 seconds = 2 days)
skills.config.notifications.retainFailedNotificationsForNumSecs=172800
```

The schedules use Spring's six-field cron format (seconds, minutes, hours, day of month, month, day of week).
Large notification recipient lists are split into batches of ``maxRecipients``. This property also limits
the number of recipients accepted by the contact-users operation.
Failed notifications that exceed the retention period measured from the notification record's creation time are removed
when another send attempt fails.

#### Dashboard Notifications

Limit the number of latest in-app notifications returned for the current user:

```properties
# Maximum Dashboard notifications returned, ordered newest first
skills.config.webNotifications.maxNumToReturn=20
```

### Background Tasks and Maintenance

#### Asynchronous Task Scheduling and Retry

Configure the initial delay and retry policy for one-time tasks, such as Skill Catalog synchronization,
catalog import finalization, and removal of a user's skill events:

```properties
# Initial delay before a one-time task is scheduled to run, in seconds
skills.config.taskSchedulingDelayInSeconds=5
# Retry limit for general one-time tasks
skills.config.taskMaxRetries=6
```

Retry delays use ``skills.config.exponentialBackOffSeconds`` (default: ``1`` for general tasks) as the base delay
and ``skills.config.exponentialBackOffRate`` (default: ``2`` for general tasks) as the backoff multiplier.
For example, explicitly setting these properties configures a base delay of 5 seconds and a multiplier of 2:

```properties
skills.config.exponentialBackOffSeconds=5
skills.config.exponentialBackOffRate=2
```

:::tip
These two backoff properties also configure AI grading retries. When omitted, AI grading uses different
fallback defaults: a base delay of 1,800 seconds and a multiplier of 1. Explicitly setting either property
overrides its fallback for both general tasks and AI grading.
:::

Tasks explicitly marked as non-retryable stop immediately instead of following this retry policy.

#### Expired User Tokens and Database Locks 

Configure removal of old user tokens and database lock records:

```properties
# Remove tokens whose expiration date is more than this many days in the past
skills.config.userTokenCleanupDays=14
# Token cleanup schedule: daily at midnight
skills.config.cleanupExpiredTokensSchedule=0 0 0 * * *
# Remove database lock records older than this many days
skills.config.databaseLockCleanupDays=14
# Database lock cleanup schedule: daily at 01:00
skills.config.cleanupDatabaseLocksSchedule=0 0 1 * * *
```

These schedules use Spring's six-field cron format.

#### Unachievable Levels

Configure the recurring task that identifies levels users cannot achieve:

```properties
# Identify unachievable levels daily at 23:45
skills.config.unachievableLevelIdentificationSchedule=DAILY|23:45
```

This task uses the database scheduler's schedule format, such as ``DAILY|HH:mm``, rather than a bare Spring cron expression.
Restart ``skills-service`` after changing task or maintenance properties.

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

### Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) controls which browser origins can access SkillTree from another application, such as an embedded [Skills Display](http://localhost:9999/skills-client/js.html).
An origin consists of the protocol, host, and port; do not include a URL path.

The following properties configure allowed origins and credentialed requests:

```properties
# Comma-separated list of allowed origin patterns (default: * allows any origin)
skills.authorization.corsAllowedOriginPatterns=*
# Allow credentialed cross-origin requests to /api/** and /app/userInfo (default: false)
skills.authorization.corsConf.allowCredentials=false
```

``skills.authorization.corsAllowedOriginPatterns`` supports exact origins and wildcard patterns, such as ``https://*.example.com``.
It applies to ``/api/**``, ``/app/userInfo``, ``/public/log``, ``/public/status``, and ``/public/clientDisplay/config``,
as well as the ``/skills-websocket`` WebSocket/SockJS endpoint. Whitespace around entries is trimmed and empty entries are ignored.
Other HTTP endpoints do not receive cross-origin access through these properties.

For example, to allow credentialed requests from trusted applications:

```properties
skills.authorization.corsAllowedOriginPatterns=https://training.example.com,https://*.apps.example.com
skills.authorization.corsConf.allowCredentials=true
```

:::tip
When enabling credentials, configure trusted origin patterns instead of ``*``. Combining ``*`` with
``skills.authorization.corsConf.allowCredentials=true`` allows any origin to read credentialed responses from ``/api/**`` and ``/app/userInfo``.
The listed ``/public`` endpoints always disable CORS credentials. WebSocket/SockJS uses the origin patterns independently of the HTTP credentials setting.
CORS does not replace authentication or authorization.
:::

Restart ``skills-service`` after changing these properties.

### WebSocket Stomp Broker

Configure external WebSocket Stomp Broker:
```properties
skills.websocket.enableStompBrokerRelay=true
skills.websocket.relayHost=
skills.websocket.relayPort=
```

### Matomo Integration 

SkillTree can be configured to integrate with <external-url label="Matomo" url="https://matomo.org/" />, a free and open-source web analytics platform that serves as an alternative to Google Analytics. 
This integration enables tracking of user activity and provides valuable insights into user behavior.

To enable Matomo integration, configure the following properties:

```properties
skills.config.ui.matomoUrl: <Matomo Host such as https://my-matomo-server.com>
skills.config.ui.matomoSiteId: <Matomo Site ID>
```

#### Skill API Usage Tracking

In addition to browser activity, SkillTree can report skill-reporting API usage to Matomo from the backend.
This tracking is disabled by default and uses the Matomo host and site ID configured above. To enable it:

```properties
# Enable backend reporting of skill API usage to Matomo (default: false)
skills.matomo.enableSkillApiUsage=true
```

Customize the tracking request with the following properties. These are the default values:

```properties
# Tracking endpoint path appended to skills.config.ui.matomoUrl
skills.matomo.endpoint=/matomo.php
# Matomo Tracking API's rec parameter; 1 instructs Matomo to record the visit
skills.matomo.rec=1
# Prefix for the action name sent to Matomo
skills.matomo.actionRootName=Report Skill
```

The backend sends tracking requests to ``<Matomo host>/<tracking endpoint>``. Each action name follows
the format ``<actionRootName> / <projectId> / <skillId>``; for example, ``Report Skill / SafetyTraining / FirstAid``.
Skill reporting for the built-in Inception project is excluded from this backend tracking.

Tracking requests are sent asynchronously. Configure the reporting executor using these defaults:

```properties
# Core number of reporting threads
skills.matomo.minNumOfThreads=3
# Maximum number of reporting threads
skills.matomo.maxNumOfThreads=10
# Maximum number of reporting tasks waiting in the queue
skills.matomo.queueCapacity=20000
```

If the reporting executor cannot accept a task because it is saturated, that tracking request is dropped and an error
is logged. Failures when sending requests to Matomo are also logged.
Restart ``skills-service`` after changing these properties.

### UI Logging for Debugging

SkillTree can be configured to log predefined UI events for debugging purposes. 
These logs are accessible through your browser's developer tools console.

To enable UI logging, configure the following property:

```properties
# Supported log levels: TRACE, DEBUG, INFO, WARN, ERROR
skills.config.ui.logLevel=TRACE
```

### Skills Client Logging

SkillTree can receive log messages from Skills Client integrations through ``/public/log`` and write them to the backend logs.
Client logging is disabled by default. To enable it, configure the following properties:

```properties
# Enable logging of messages submitted by Skills Client integrations (default: false)
skills.config.client.loggingEnabled=true
# Client logging level (default: DEBUG)
skills.config.client.loggingLevel=DEBUG
```

``skills.config.client.loggingLevel`` is provided to the client as part of its configuration. The backend writes accepted messages
at their submitted level: ``TRACE``, ``DEBUG``, ``INFO``, ``WARN``, or ``ERROR``. The backend logger must also be configured
to display that level. For example, to include DEBUG messages:

```properties
logging.level.skills.controller.ClientLoggingController=DEBUG
```

The following properties control message validation and request limits. These are the default values:

```properties
# Maximum number of characters in an individual log message
skills.config.client.loggingMaxMessageLength=2000
# Maximum log requests per remote IP address during a one-minute window
skills.config.client.loggingMaxRequestsPerMinute=60
# Maximum number of remote IP addresses retained in the rate-limit cache
skills.config.client.loggingMaxTrackedClients=10000
```

Messages that are empty, exceed the message length limit, or specify an unsupported level are rejected with HTTP ``400``.
Newlines and control characters in accepted messages are replaced with spaces before logging.
When client logging is disabled, requests to ``/public/log`` are acknowledged without writing client messages to the backend logs.

:::tip
Rate limits are held in memory per ``skills-service`` instance and reset on restart. In addition to the per-IP limit,
each instance enforces a global limit of 100 times ``skills.config.client.loggingMaxRequestsPerMinute``
(6,000 requests per minute with the default configuration). Requests exceeding either limit receive HTTP ``429``.
Per-IP counters expire after two minutes of inactivity and can be evicted when the cache reaches ``loggingMaxTrackedClients``.
The remote IP is the address seen by the service; clients sharing a proxy address may share the same allowance.
:::

Restart ``skills-service`` after changing these properties.

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
SkillTree supports storing HttpSession in PostgreSQL via JDBC.

Configure HttpStore persistence in the shared SkillTree PostgreSQL database:
```properties
spring.session.store-type=jdbc
spring.session.jdbc.initialize-schema=always

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

Progress and Ranking Views are enabled by default, but can be easily disabled: 

```properties
# enable Progress and Ranking Views
skills.config.ui.rankingAndProgressViewsEnabled=false
```

When enabled the default landing page can be customized:
```properties
# optionally change default for the landing page (admin is the default)
skills.config.ui.defaultLandingPage=progress
```

Additional Dashboard and Skills Display presentation settings:

```properties
# Number of administered projects at which the Dashboard initially switches to the card-based view
skills.config.ui.numProjectsToStartShowingAsCards=6
# Disable achievement celebration confetti
skills.config.ui.disableEncouragementsConfetti=false
# Fraction of a motivational skill's inactivity period to wait before showing its expiration warning
skills.config.ui.motivationalSkillWarningGracePeriod=0.3
# Days after a badge's end date before an unearned badge is removed from the active Skills Display list
skills.config.ui.daysToRollOff=2
```

For example, with a 10-day inactivity period, the default motivational skill warning grace period is 3 days.
The warning appears after more than 3 days of inactivity. This setting controls warning visibility, not the
skill's expiration date. Badge roll-off changes display visibility without deleting the badge definition or earned achievements.
Restart ``skills-service`` after changing these properties.

#### Point History and Event Compaction

Configure how far back project and subject point-history responses look:

```properties
# Maximum point-history lookback in days (default: 1,825 days)
skills.config.ui.pointHistoryInDays=1825
```

This limits returned point history; it does not delete older records.
Daily user-event statistics are compacted into weekly statistics after a configurable age:

```properties
# Age in days after which daily user-event statistics are compacted into weekly statistics
skills.config.compactDailyEventsOlderThan=30
# Compaction schedule: every second during the 00:02 minute each day
skills.config.eventCompactionSchedule=* 2 0 * * *
```

The compaction schedule uses Spring's six-field cron format. To run once daily at 00:02 instead,
set ``skills.config.eventCompactionSchedule=0 2 0 * * *``.

:::tip
Increasing ``skills.config.compactDailyEventsOlderThan`` after compaction can hide weekly statistics that now
fall inside the daily-statistics window. Decreasing it can temporarily hide older daily statistics until
the next compaction run. Choose this threshold before accumulating compacted history where possible.
:::

### Skill Achievement Expiration

Configure the recurring achievement-expiration task and the warning window for skills that expire after inactivity:

```properties
# Process achievement expiration daily at 01:00 using the database scheduler's schedule format
skills.config.expireUserAchievementsSchedule=DAILY|01:00
# Fraction of the inactivity-expiration period used to calculate the warning window
skills.config.dailySkillExpirationNotificationThreshold=0.1
```

The warning window is the inactivity period multiplied by ``dailySkillExpirationNotificationThreshold``, rounded
to the nearest whole day and bounded between 1 and 7 days. For example, a 30-day inactivity period produces
a 3-day warning window with the default configuration. The threshold affects notifications, not the skill's expiration date.
The expiration task uses a database-scheduler schedule, such as ``DAILY|HH:mm``, rather than a bare Spring cron expression.

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

Limit the number of email addresses submitted in a project invitation request:

```properties
# Maximum number of recipients in one project invitation request
skills.config.ui.maxProjectInviteEmails=50
```

In the case of Private Invite Only Projects, users are invited to join a project. 
Invited recipients are emailed a one-time invite code and by default that invite code can be used by any valid user. 

When ``skills.authorization.invite.validateEmail`` is set to ``true``, the invite code is compared to the user's email address
prior giving access to that private project. 

```properties
# when enabled, only users whose email addresses matche the one assigned to the invite token will be given access 
skills.authorization.invite.validateEmail=true
```

#### Invitation Cleanup

Expired or claimed invitations are retained before being removed by a recurring cleanup task:

```properties
# Retention period for expired or claimed invitations (ISO-8601 duration; P30D = 30 days)
skills.config.projectInvites.retention-time=P30D
# Invitation cleanup schedule: daily at 23:30
skills.config.inviteCleanupSchedule=DAILY|23:30
```

The retention period controls cleanup of expired or claimed invite records; it does not set the lifetime of an active invitation.
The schedule uses the database scheduler's format, such as ``DAILY|HH:mm``, rather than a bare Spring cron expression.

### Project Expiration

SkillTree allows users to easily experiment with training profiles by creating new projects or copying existing ones.
Given this level of autonomy, organizations may see hundreds or even thousands of projects created.

SkillTree provides a project expiration feature to automatically remove abandoned projects from the system.

You can modify how the project expiration feature works by configuring the following properties:

```properties
# Enable the scheduled unused-project expiration process (default: true)
skills.config.unusedProjectDeletionEnabled=true
# Projects are considered for removal after this many days of inactivity
skills.config.expireUnusedProjectsOlderThan: 180
# After projects are marked for removal, they will not be removed for this many days.
# Project admins are notified daily and given a chance to retain the project.
skills.config.expirationGracePeriod: 7
# Project expiration schedule
skills.config.projectExpirationSchedule: "0 4 0 * * *"
```

Set ``skills.config.unusedProjectDeletionEnabled=false`` to disable the scheduled process, including marking
unused projects for removal, sending its notifications, and deleting projects after the grace period.

If a project has not been used for `expireUnusedProjectsOlderThan` days, it is flagged for removal.
Activity includes editing project definitions on the administration panel or trainees reporting skills.

Once a project is flagged for removal, project administrators are notified and can choose to retain the project.
Notifications are sent via email, so ensure you configure your [email settings](/dashboard/user-guide/settings.html#email-settings) accordingly.

The dashboard user interface will also display a warning message on a flagged project, alongside a button to retain it.

If an administrator does not retain the project within the `expirationGracePeriod` days, the project is permanently removed.

### AI Assistant Configuration

The AI Assistant enhances content creation by generating learning materials automatically. To enable this feature, configure the following settings:

#### Prerequisites
- **OpenAI API Key**: A valid API key with access to OpenAI's Chat Completions API
- **API Endpoint Access**: The service requires outbound access to:
    - `<openai-host>/v1/chat/completions` - Primary endpoint for AI text generation
    - `<openai-host>/v1/models` - Endpoint for retrieving available models

#### Enabling the AI Assistant
Add this property to enable the AI Assistant in your SkillTree Dashboard:

```properties
# Enable AI Assistant integration
skills.config.ui.enableOpenAIIntegration=true

# Required: Your OpenAI API key
skills.openai.key=your-api-key-here

# Optional: Set a different OpenAI API endpoint (default: http://localhost:50001)
# skills.openai.host=https://your-custom-openai.com

# Optional: Default model to use for AI generation (e.g., "gpt-4", "gpt-3.5-turbo")
# skills.config.ui.openaiDefaultModel=gpt-4

# Optional: Default temperature setting (0.0 to 1.0, where 0 is more deterministic)
# skills.config.ui.openaiModelDefaultTemperature=0.5

# Required: Model used for AI grading
skills.openai.gradingModel=gpt-4

# Optional: Temperature used for AI grading setting (default: 0.0)
# skills.openai.gradingModelTemperature=0.5

# Optional: Custom footer message to display in the AI Assistant interface
# skills.config.ui.openaiFooterMsg=AI-generated content should be reviewed before use
```

::: tip
AI prompts can be customized via `Settings -> AI Prompts` in the Dashboard, which requires the `root` role.
:::

#### AI Grading

``skills.openai.gradingModel`` selects the server-side model for grading text-input quiz answers and is unconfigured
by default. ``skills.openai.gradingModelTemperature`` defaults to ``0.0``.
Configure confidence, answer length, and retries with the following defaults:

```properties
# Default minimum confidence for AI grading (percentage; question settings may override it)
skills.openai.textInputAiGraderDefaultMinimumConfidenceLevel=75
# Maximum characters in the correct answer configured for AI grading
skills.config.ui.maxTextInputAiGradingCorrectAnswerLength=10000
# Retry limit for failed AI grading tasks
skills.config.aiGraderMaxRetries=48
```

The confidence setting supplies the default for question-level AI grading configuration; valid question values are
greater than 0 and no greater than 100. The correct-answer limit applies to the grading reference answer,
not the trainee's submitted response.
AI grading initially uses ``skills.config.taskSchedulingDelayInSeconds`` and, after failures, the shared
``skills.config.exponentialBackOffSeconds`` and ``skills.config.exponentialBackOffRate`` properties described
in [Asynchronous Task Scheduling and Retry](#asynchronous-task-scheduling-and-retry).
When those backoff properties are omitted, AI grading retries use a 1,800-second base delay and a multiplier of 1.

#### AI Prompt and Generation Status Settings

Configure the length of prompts edited in ``Settings -> AI Prompts`` and the interval between status messages
while content generation has not yet returned any content:

```properties
# Maximum characters in an AI prompt edited through Dashboard settings
skills.config.ui.maxAiPromptLength=5000
# Interval between generation status messages, in milliseconds
skills.config.ui.openaiTakingLongerThanExpectedTimeoutPerMsg=12000
```

``skills.config.ui.maxAiPromptLength`` limits configured prompt templates, not AI chat conversation history.
The status interval controls UI messages; it does not cancel the provider request or impose a generation timeout.

The generation status messages can also be customized as an indexed list. The following are the defaults:

```properties
skills.config.ui.openaiTakingLongerThanExpectedMessages[0]=Just a moment while I get everything ready.
skills.config.ui.openaiTakingLongerThanExpectedMessages[1]=Hang tight! Still processing your request.
skills.config.ui.openaiTakingLongerThanExpectedMessages[2]=Still working on generating the best response for you.
skills.config.ui.openaiTakingLongerThanExpectedMessages[3]=I am still trying, sorry for the delay!
skills.config.ui.openaiTakingLongerThanExpectedMessages[4]=This is taking longer than expected but I am still working on it.
skills.config.ui.openaiTakingLongerThanExpectedMessages[5]=I am trying but unfortunately it is still taking way longer than expected.
```

#### AI Grading Text Logging

Full AI grading prompts and responses are excluded from logs by default. Enable text logging for debugging:

```properties
# Log AI grading prompt and response text (default: false)
skills.openai.logPromptAndResponseText=true
```

This logs the grading system prompt and provider response text, which may include grading content. Normal prompt/response logging
uses DEBUG level for ``skills.services.openai.OpenAIService``; response text may also be logged at ERROR level
when parsing fails. Restart ``skills-service`` after changing these properties.

#### Request and Consumption Limits

The AI Assistant enforces server-side limits on chat requests, including requests made directly to `/openai/chat`.
The following defaults are enabled automatically and can be overridden using application properties.
They are intentionally generous starting values for local testing; tune them for your deployment's workload and provider capacity.
Restart SkillTree after changing these settings.

| Property | Default | Description |
| --- | --- | --- |
| `skills.openai.limits.allowedModels` | Empty list | Models permitted for AI chat. An empty list allows any model accessible to the configured provider key. When populated, matching is exact and case-sensitive, and the model selector only lists permitted models returned by the provider. |
| `skills.openai.limits.maxRequestBytes` | `10485760` (10 MiB) | Maximum size of the entire JSON request body, enforced before deserialization. Also applies to chunked requests and requests without a `Content-Length` header. |
| `skills.openai.limits.maxMessages` | `1000` | Maximum number of messages in the submitted conversation history, including both user and assistant messages. |
| `skills.openai.limits.maxMessageCharacters` | `1000000` | Maximum content length of any individual submitted message. |
| `skills.openai.limits.maxTotalMessageCharacters` | `5000000` | Maximum combined content length of all submitted messages. |
| `skills.openai.limits.maxOutputTokens` | `32768` | Maximum completion tokens requested from the provider through `max_completion_tokens`. The selected provider/model must support and honor this parameter. This is a ceiling, not the number of tokens necessarily generated. |
| `skills.openai.limits.requestsPerMinutePerUser` | `600` | Maximum admitted chat requests per authenticated user during a fixed one-minute window. Users are identified by their authenticated user ID, rather than their IP address. |
| `skills.openai.limits.requestsPerMinuteGlobal` | `6000` | Maximum admitted chat requests across all users on one SkillTree instance during a fixed one-minute window. |
| `skills.openai.limits.maxConcurrentRequestsGlobal` | `200` | Maximum active AI chat streams across all users on one SkillTree instance. Excess requests are rejected immediately rather than queued. |

Character limits count UTF-16 code units in submitted message content, including conversation history.
They do not count JSON formatting or the server's configured system prompt, and they are not token counts.
The default model setting (`skills.config.ui.openaiDefaultModel`) chooses the initial model in the UI; use `allowedModels` or provider-side model restrictions to control which models may actually be requested.

For example, these properties explicitly configure the default numeric limits and restrict chat to two provider models:

```properties
# Replace these example IDs with models available from your provider.
skills.openai.limits.allowedModels=approved-model-1,approved-model-2

skills.openai.limits.maxRequestBytes=10485760
skills.openai.limits.maxMessages=1000
skills.openai.limits.maxMessageCharacters=1000000
skills.openai.limits.maxTotalMessageCharacters=5000000
skills.openai.limits.maxOutputTokens=32768
skills.openai.limits.requestsPerMinutePerUser=600
skills.openai.limits.requestsPerMinuteGlobal=6000
skills.openai.limits.maxConcurrentRequestsGlobal=200
```

Numeric limits must be positive integers. Omitting a property retains its default; zero, negative, or null values do not disable enforcement and are rejected during startup.
Request validation takes place before rate-limit admission. Invalid requests and requests rejected by the local rate or concurrency limits do not consume request allowance.
Admitted requests count even if the provider subsequently fails. Stream capacity is released on completion, failure, or cancellation; cancellation takes effect when the server observes the client disconnect.

Rate counters and active-stream tracking are held in memory **per SkillTree instance** and reset on restart.
In a deployment with multiple replicas, the effective request allowance and active-stream capacity multiply across instances.
Fixed rate windows can also allow bursts around window boundaries; the separate active-stream cap limits simultaneous work.
Use a shared gateway if deployment-wide rate or concurrency enforcement is required.

These controls apply to AI Assistant chat. AI quiz-answer grading uses its existing server-selected model and scheduled retry policy.
Request limits do not impose a monetary budget; configure a hard usage or spending limit with the provider where supported, and verify that it rejects excess usage rather than only sending budget alerts.

#### Measuring Requests During Testing

The backend logs input sizes at **INFO** level without including message contents:

```text
AI chat input sizes: model=[...], messageCount=[12], totalCharacters=[18432], largestMessageCharacters=[4096], maxOutputTokens=[32768]
```

`totalCharacters` measures all submitted message content, while `largestMessageCharacters` measures the largest individual message.
Use these values to tune the message limits. `maxOutputTokens` is the configured ceiling, not actual output usage.

Streaming token-usage collection is enabled by default:

```properties
# Request token-usage metadata from the provider and log it when chat completes.
skills.openai.stream.stream-usage=true
```

When the provider returns usage metadata, successful completion produces an INFO log such as:

```text
Chat Usage: totalTokens=[5000], promptTokens=[3800], completionTokens=[1200], totalRuntimeMs=[2500]
```

`promptTokens` and `completionTokens` are the provider-reported input and output usage, respectively.
Token usage can include provider-specific overhead or reasoning tokens and cannot be inferred directly from character counts.
If the provider omits streaming usage metadata, SkillTree logs `Failed to collect chat usage`; consult the provider's dashboard for actual counts.
These messages appear in the backend console or container logs. If logging levels have been overridden, enable INFO for `skills.services.openai.OpenAIRequestValidator` and `skills.services.openai.OpenAIService`.

### Spring Boot Properties

``skills-service`` is a Spring Boot application and will respect the majority (if not all) of Spring Boot configuration properties.  
Here is the complete list of available <external-url label="Spring Boot Properties" url="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties" /> 

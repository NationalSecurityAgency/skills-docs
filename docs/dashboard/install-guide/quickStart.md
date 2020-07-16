# Quick Start


Overall steps to getting started with SkillTree are:
1. [Prerequisites](/dashboard/install-guide/quickStart.html#prerequisites) - don't worry there isn't much here
1. [Install Dashboard](/dashboard/install-guide/quickStart.html#install-dashboard) and create your project
1. [Integrate User Skills Display](/dashboard/install-guide/quickStart.html#integrate-user-skills-display) into your application.
1. [Report Skill Events](/dashboard/install-guide/quickStart.html#integrate-user-skills-display) using one of our drivers. 

## Prerequisites

Dashboard requires Java Runtime Environment 11 +, we suggest using [OpenJDK packages](https://openjdk.java.net/install/index.html). Please note that this is not relevant if you elect to go with the Docker based install.

## Install Dashboard

You can utilize a pre-built docker image to run a production grade Skills Dashboard or you can download the latest distribution. 

### Docker-based install

Coming very soon...

### Jar-based install

Download the latest ``.jar`` release from [GitHub skills-service/releases/](https://github.com/NationalSecurityAgency/skills-service/releases/) (under Assets section).

Using the downloaded jar you can run SkillTree dashboard and service (make sure to substitute ``X.X.X`` for an actual version):

```bash
$ java -jar ~/Downloads/skills-service-X.X.X.jar
```

Your output will look something like this (majority of the output was omitted for brevity): 
```
 .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::       (vX.X.X.RELEASE)
...
...
...
2020-07-16 19:43:01.129  INFO 9103 --- [           main] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.
2020-07-16 19:43:01.189  INFO 9103 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-07-16 19:43:01.192  INFO 9103 --- [           main] skills.SpringBootApp                     : Started SpringBootApp in 20.159 seconds (JVM running for 21.368)
```

Dashboard is now running on [http://localhost:8080](http://localhost:8080). It will prompt you to create a [Dashboard root account](/dashboard/user-guide/users.html#root).  

Well... that's it! 

:::tip Good to Know!
Please note that ``skills-service``, by default, stores its data into an embedded in-memory H2 database. 
That data is ephemeral and will not persist between application restarts. While this is a great way to get started quickly 
it is obviously not appropriate for a test or production installation. 
Please visit [Database Section](/dashboard/install-guide/database.html) to learn more.  
:::

## Integrate User Skills Display

Coming very soon...

## Report Skill Events

Coming very soon...

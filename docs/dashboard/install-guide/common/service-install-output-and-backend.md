Your output will look something like this (the majority of the output was omitted for brevity): 
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

The dashboard is now running on [http://localhost:8080](http://localhost:8080). It will prompt you to create a [Dashboard root account](/dashboard/user-guide/users.html#root).  

Well... that's it! 

:::tip Good to Know!
Please note that the ``skills-service``, by default, stores its data into an embedded in-memory H2 database. 
That data is ephemeral and will not persist between application restarts. While this is a great way to get started quickly, 
it is obviously not appropriate for a test or production installation. 
Please visit the [Database Section](/dashboard/install-guide/database.html) to learn more.  
:::

The next step is to start the ``java-backend-example`` service which:
1. Populates ``skills-service`` with sample data
1. Implements an example [Authorization Endpoint](/skills-client/auth.html) that's required to run client components

Download the latest ``java-backend-example`` from [skills-client-examples/releases](https://github.com/NationalSecurityAgency/skills-client-examples/releases)

```bash
java -jar java-backend-example-X.X.X.jar
```

Please note that the service generates and populates the skill-service with sample data so it may take few minutes to start. 
You will know the service is running when the following line appears on standard out: 
```bash
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8090 (http) with context path ''
```

On start, ``java-backend-example`` populates ``skills-service`` with a sample project named Movies. 
Once it starts, logout from the dashboard and log back in as 
- username=bill@email.org
- password=password
and explore the sample Movies project. 




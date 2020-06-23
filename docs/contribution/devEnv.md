# Development Environment

We recommend developing SkillTree in a *nix environment.

## Prerequisites 

- modern *nix environment
- JDK 11+, we suggest [Open JDK](https://openjdk.java.net/)
- [Git](https://git-scm.com/) version 2.23+
- [Node.js](https://nodejs.org/en/) v12+ and [npm](https://www.npmjs.com/) 6+
- [Maven](https://maven.apache.org/) 3.6.2+
- [PostgreSQL](https://www.postgresql.org/) 10+

## Development Overview

The following sections will cover:
1. skills-service project development 
1. skills-client project development

::: tip
More than likely your development will be scoped to the skills-service project but, although rare, there are situations when you'll need to modify the skills-client as well. 
If you are making improvements to the SkillTree dashboard or its Skills Display views then your development will be scoped within the skills-service project. 
If you have not yet, please take few minutes to review the [architecture](/contribution/architecture.html) section.
::: 

The tech stack is large but to get started you will need to be familiar (but more likely experienced) with these core technologies:

- Java and Groovy
- Spring Framework (especially Spring Boot)
- Web stack: Javascript, html, css
- Vue.js
- Cypress.io
- Build tools: maven, npm & webpack

Each sub-section follows the same flow: 
1. Get, build and test 
1. Cypress.io end-to-end tests 
1. Day-to-day development
1. Test Checklist

## Skills-service development

The skills-service project encapsulates code for the SkillTree dashboard, REST apis and Skills Display views. 

### Get, build and test
First things first, checkout the code, build  it and run all of the unit and integration tests. 
Then we'll discuss development and testing steps. 

```bash
git clone <github>:skills-service.git
```   
To build the project, run the unit tests and the backend integration tests:  
```bash
cd skills-service
mvn install
```
Since this process runs all of the service integration tests it will take a while (5 to 20 minutes depending on your hardware). 

SkillTree uses [maven](https://maven.apache.org/) and [npm](https://www.npmjs.com/) for its dependency management and to facilitate the build lifecycle.  Let's get familiar with the project's layout:
``` markdown
skills-service
└───service
│   │   pom.xml
|   └───target
|   |   skills-service-<version>.jar
|   |   ....
└───dashboard
|   │   pom.xml
|   │   package.json
|   |   ....
└───client-display
|   │   pom.xml
|   │   package.json
|   |   ....
└───e2e-tests
|   │   package.json
|   |   ....
└─── pom.xml
```

The runtime artifact is a [spring boot](https://spring.io/projects/spring-boot) application and will be created in ``service/skills-service-<version>.jar``; 
we ran ``mvn install`` to generate this artifact and the following sequence of steps were performed:
- Build dashboard web application: ``npm run build`` in dashboard project
- Build client display web application: ``npm run build`` in client-display project
- Compile Java and Groovy classes in the ``service`` project: ``mvn compile``
- Copy dashboard and client-display built apps to ``service/src/main/resources/public`` so the spring boot app can host the dashboard and the client-display web-applications
- Generate runtime artifact: ``mvn package`` in the service project

Of course this doesn't cover then entire build cycle so please familiarize yourself with all of the pom.xml and package.json files. 
Now that you have the runtime artifact, you can start the SkillTree dashboard and service like this:

```bash
java -jar service/target/skills-service-<version>.jar
```

The app will run on [http://localhost:8080](http://localhost:8080), visit it to create an account, new project, subjects, skills, etc. 
To learn more about the features of the SkillTree dashboard, please visit the [Dashboard Guide](/dashboard/user-guide/).
  
This will start SkillTree application with all of the default properties, some things to note:
- By default an in-memory H2 database is used - data will be ephemeral and will not persist between application restarts.
- App runs in [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode) which is the common use-case. 

### Cypress.io end-to-end tests

SkillTree utilizes the [cypress.io](https://www.cypress.io/) framework to perform end-to-end tests and specifically verify features of the dashboard and client-display web applications. 
Cypress tests are located in the ``e2e-tests`` project: 

``` markdown
skills-service
|   ....
└───e2e-tests
|   │   package.json
|   └───cypress
|   |   └───integration
|   |   <dashboard test name>_spec.js
|   |   |   └───client-display
|   |   |   |   <client-display test name>_spec.js   
```

The end-to-end tests stand-up the skills-service, the dashboard and the client display web applications and then execute numerous tests against these web-applications to mimic users' actions.  

To run cypress end-to-end tests (assumes that you have built skills-service.jar via the previous step):

```bash
cd skills-service/e2e-tests
npm install

# start servers in the background: skills-service and client-display
npm run cyServices:start
# run cypress integration tests
npm run cy:run
# kill background servers
npm run cyServices:kill 
```

Buckle down as these tests will take a while to run, and depending on your system specs you should expect anywhere from 5 to 20 minutes. 

::: tip
Please note that ports 8080 and 8083 have to be available on your system
:::

``npm run cyServices:start`` command starts:
- The programmatic service and the dashboard by utilizing the already built jar; will run on port 8080
- the client-display using webpack dev server; will run on port 8083

Now that you can build and run integration tests let's discuss day-to-day development setup for the skill-service project.

### Day-to-day development

Most IDEs (Intellij, Eclipse, etc...) provide first-class support for maven projects so the very first step would be to import the skills-service project into your favorite IDE. 

Please note that code additions will generally fall into these categories:
1. Enhancing the skills-service programmatic REST API
1. Making changes to the web-based dashboard application or the client-display web-based application

###### skills-service programmatic REST API

The code for the API can be found under ``skills-service/service`` which follows standard maven conventions. 

The programmatic API tests reside in ```service/src/test/java``` and you can run all of the tests via
```bash
cd skills-service/service
mvn test
``` 
You can also run any of the tests using your favorite IDE. 

::: tip
SkillTree overall testing strategy is to implement black-box integration tests and supplement with unit tests whenever an integration test is not possible.
:::

Generally programmatic API service development is facilitated via the integration tests .

Skills Service integration tests stand-up the skills-service application and then execute various endpoints validating the result.
These integration tests reside in the ``skills.intTests`` package and extend ``DefaultIntSpec.groovy`` class. 

``DefaultIntSpec.groovy`` is annotated with the [``@SpringBootTest``](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/test/context/SpringBootTest.html) annotation
which then facilitates running the Spring Boot application which exposes endpoints on a random port. 

A few things to note: 
- You should interact with the skills-service using the test client ``skills.intTests.utils.SkillsService`` class 
  - Available via ``skills.intTests.utils.DefaultIntSpec#skillsService``
  - ``SkillsService`` class represent an authenticated dashboard user
- Runtime port can be retrieved via ``skills.intTests.utils.DefaultIntSpec#localPort`` but should rarely be used directly; instead please use ``skills.intTests.utils.DefaultIntSpec#skillsService`` instead
- ``DefaultIntSpec`` setup and cleanup methods purge data from DB between each test case
- By default, tests are executed against the in-memory H2 DB
- Use the ``skills.intTests.utils.DefaultIntSpec#createService`` if you need a new ``SkillsService``
  - For example to represent another dashboard user       

There are hundred of tests in the ``skills.intTests`` package, please feel free to explore. 

###### Web-Based Dashboard and/or Client Display

Steps to develop the web-based dashboard are:
1. Stand up the service (programmatic API)
1. Bring up the webpack dev server
1. Use browser and cypress tests to drive the development

To stand up the service you can execute ``skills.SpringBootApp`` in the ``service`` project from your IDE. 
If that's not an option you can always build a jar and run it from the command line:
 ```bash
 java -jar service/target/skills-service-<version>.jar
 ```
The service will run on port 8080. 

Next is to start the webpack dev server in the ``dashboard`` project:

```bash
cd dashboard
npm run serve
```
This webpack dev server will run on port 8082 and will make the requests for data to the service running on port 8080. 

Generally development is facilitated by writing cypress tests:

```bash
cd e2e-tests
npm run cy:open:dev
``` 
You can then start adding tests under e2e-tests/cypress/integration to an existing file or by creating a new file. 

If you making changes to the client display OR want to run all of the cypress integration tests then will need to start the client-display webpack dev server:

```bash
cd client-display
nmp run serve
```
The dev server will run on port 8083 and will make the requests for the data to the service running on port 8080.

### Test Checklist

::: tip
SkillTree overall testing strategy is to implement black-box integration tests and supplement with unit tests whenever an integration test is not possible.
:::

We like tests (especially integration tests), so please make sure you thoroughly test your code.  
Prior to making a Pull Request make sure that ALL tests pass:
1. Run services tests against PostgreSQL in addition to the build-in in-memory H2 database
1. Run all Cypress tests 

Provide the following properties to run the service tests against PostgreSQL:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=<username>
spring.datasource.password=<password>
```
On a command line it would look something like this:
```bash
mvn --batch-mode test -Dspring.datasource.url=jdbc:postgresql://postgres:5432/skills -Dspring.datasource.username=user -Dspring.datasource.password=pass
```

To run all the cypress tests: 
```bash
cd skills-service/e2e-tests
npm install

# start servers in the background: skills-service and client-display to test
npm run cyServices:start
# run cypress integration tests
npm run cy:run
# kill background servers
npm run cyServices:kill 
```

## Skills-client development

Coming soon..

### Get, build and test
Coming soon..
### Cypress.io end-to-end tests
Coming soon..
### Day-to-day development
Coming soon..

  


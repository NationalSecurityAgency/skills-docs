# Development Environment

We recommend developing SkillTree in a *nix environment.

## Prerequisites 

- modern *nix environment
- JDK 19+
- [Git](https://git-scm.com/) version 2.34+
- [Node.js](https://nodejs.org/en/) v20+ and [npm](https://www.npmjs.com/) 10+
- [Maven](https://maven.apache.org/) 3.9+
- [PostgreSQL](https://www.postgresql.org/) 14+

## Development Overview

The tech stack is large but to get started you will need to be familiar (but more likely experienced) with these core technologies:

- Java and Groovy
- Spring Framework (especially [Spring Boot](https://spring.io/projects/spring-boot))
- Web stack: Javascript, html, css
- [Vue.js](https://vuejs.org/)
- [cypress.io](https://www.cypress.io/)
- Build tools: maven, npm & webpack

## Development

The skills-service project encapsulates code for the SkillTree dashboard, REST apis and Skills Display views. 

### Get, build, and test
First things first, **fork** and checkout the code (please see the [Contribution Steps](/contribution/#contribution-steps)), build it and run all of the unit and integration tests. 
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
└───e2e-tests
|   │   package.json
|   |   ....
└─── pom.xml
```

The runtime artifact is a [spring boot](https://spring.io/projects/spring-boot) application and will be created in ``service/skills-service-<version>.jar``; 
we ran ``mvn install`` to generate this artifact and the following sequence of steps were performed:
- Build dashboard web application: ``npm run build`` in dashboard project
- Compile Java and Groovy classes in the ``service`` project: ``mvn compile``
- Copy the built dashboard app to ``service/src/main/resources/public`` so the spring boot app can host the dashboard web-application
- Generate runtime artifact: ``mvn package`` in the service project

Of course this doesn't cover the entire build cycle so please familiarize yourself with all of the pom.xml and package.json files. 
Now that you have the runtime artifact, you can start the SkillTree dashboard and service using the following command:

```bash
java -jar service/target/skills-service-<version>.jar
```

The app will run on [http://localhost:8080](http://localhost:8080), visit it to create an account, new project, subjects, skills, etc. 
To learn more about the features of the SkillTree dashboard, please visit the [Dashboard Guide](/dashboard/user-guide/).
  
The SkillTree application will be started using default properties. Some things to note:
- Spring datasource properties will need to be configured for connecting to an available <external-url label="PostgreSQL" url="https://www.postgresql.org/" /> database using the following properties:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=<username>
spring.datasource.password=<password>
```
- By default the app runs in [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode) which is the common use-case. 

### Cypress.io end-to-end tests

SkillTree utilizes the [cypress.io](https://www.cypress.io/) framework to perform end-to-end tests and specifically verify features of the dashboard web application. 
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

The end-to-end tests stand-up the skills-service and the dashboard applications and then execute numerous tests against these web-applications to mimic users' actions.  

To run cypress end-to-end tests (assumes that you have built the skills-service.jar via the previous step):

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

::: tip
Please note that  you may need to clear DB tables if they were populated by the previous installation. 
Cypress tests purge all the user data except the dashboard root user, so if one was already created it 
will need to be manually deleted. The easiest way is to just delete all rows from the `user_attrs` table.
:::

Buckle down as these tests will take a while to run. Generally only select tests are executed locally and all tests are performed in the CI lifecycle, in parallel. 

::: tip
Please note that ports 8080, 1025, and 1080 have to be available on your system
:::

``npm run cyServices:start`` command starts:
- The programmatic service and the dashboard by utilizing the already built jar; will run on port 8080
- A mock smtp server; will run on ports 1025 and 1080

Now that you can build and run integration tests let's discuss day-to-day development setup for the skills-service project.

### Day-to-day development

Most IDEs (Intellij, Eclipse, etc...) provide first-class support for maven projects so the very first step would be to import the skills-service project into your favorite IDE. 

Please note that code additions will generally fall into these categories:
1. Enhancing the skills-service programmatic REST API
1. Making changes to the web-based dashboard application

###### skills-service programmatic REST API

The code for the API can be found under ``skills-service/service`` which follows standard maven conventions. 

The programmatic API tests reside in ```service/src/test/java``` and you can run all the service tests via
```bash
cd skills-service/service
mvn test
``` 
You can also run any of the tests using your favorite IDE. 

::: tip
SkillTree's overall testing strategy is to implement black-box integration tests and supplement with unit tests whenever an integration test is not possible.
:::

Generally, programmatic API service development is facilitated via the integration/service tests .

Skills Service integration tests stand-up the skills-service application and then execute various endpoints, validating the result.
These integration tests reside in the ``skills.intTests`` package and extend the ``DefaultIntSpec.groovy`` class. 

``DefaultIntSpec.groovy`` is annotated with the [``@SpringBootTest``](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/test/context/SpringBootTest.html) annotation
which facilitates running the Spring Boot application, exposing endpoints on a random port. 

A few things to note: 
- You should interact with the skills-service using the test client ``skills.intTests.utils.SkillsService`` class 
  - Available via ``skills.intTests.utils.DefaultIntSpec#skillsService``
  - ``SkillsService`` class represents an authenticated dashboard user
- Runtime port can be retrieved via ``skills.intTests.utils.DefaultIntSpec#localPort`` but should rarely be used directly; instead please use ``skills.intTests.utils.DefaultIntSpec#skillsService`` instead
- ``DefaultIntSpec`` setup and cleanup methods purge data from DB between each test case
- Use the ``skills.intTests.utils.DefaultIntSpec#createService`` method if you need a new ``SkillsService`` instance
  - For example to represent another dashboard user       

There are hundreds of tests in the ``skills.intTests`` package, please feel free to explore. 

###### Web-Based Dashboard

Steps to develop the web-based dashboard are:
1. Stand up the service (programmatic API)
1. Bring up the vite dev server
1. Use browser and cypress tests to drive development

To stand up the service you can execute ``skills.SpringBootApp`` in the ``service`` project from your IDE. 

If that's not an option you can always build a jar and run it from the command line:
 ```bash
 java -jar service/target/skills-service-<version>.jar
 ```

At a minimum will need to set DB connection properties:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=<username>
spring.datasource.password=<password>
```

The service will run on port 8080. 

Next is to start the vite dev server in the ``dashboard`` project:

```bash
cd dashboard
npm run dev
```
This vite dev server will run on port 5173 and will make requests for data to the service running on port 8080. 

Generally development is facilitated by writing cypress tests:

```bash
cd e2e-tests
npm run cy:open:dev
``` 
You can then start adding tests under e2e-tests/cypress/integration to an existing file or by creating a new file. 

###### Skills Display
[Skills Display](/skills-client/js.html#skills-display) components provides a comprehensive visualization of a user's skill and progress profile!
The code for the Skills Display is mostly encapsulated under `dashboard/src/skills-display` directory with an entry point of `SkillsDisplay.vue` Vue component. 

`SkillsDisplay.vue` is used in various scenarios:
- to show user's progress within a single project on the Progress & Ranking pages
- served as a dedicated url to power [skills-client](https://github.com/NationalSecurityAgency/skills-client) libraries
- server under several urls for testing purposes

There are three places that Sills Display need to be tested:
- `/test-skills-display/<project-id>` - most of the cypress tests utilize this url; Skills Display is served natively and is customized for testing
- `/test-skills-client/<project-id>` - Skills Display is served within an iframe simulating [skills-client](https://github.com/NationalSecurityAgency/skills-client)'s usage; see cypress tests for examples
- `/progress-and-rankings/projects/<project-id>` - Dashboard's usage of skills-display to show user's progress and rankings for a single project

### Test Checklist

::: tip
SkillTree's overall testing strategy is to implement black-box integration tests and supplement with unit tests whenever an integration test is not possible.
:::

We like tests (especially integration tests), so please make sure you thoroughly test your code.  
Prior to making a Pull Request make sure that ALL tests pass, once you push your branch GitHub Actions CI will execute all the service and Cypress tests.

Provide the following properties to run the service tests against PostgreSQL:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/skills
spring.datasource.username=<username>
spring.datasource.password=<password>
```
On the command line it would look something like this:
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
# Development Environment

We recommend developing SkillTree in a *nix environment.

## Prerequisites

- Modern *nix environment
- JDK 25+
- [Git](https://git-scm.com/) version 2.52+
- [Node.js](https://nodejs.org/en/) v26+ and [npm](https://www.npmjs.com/) 11+
- [Maven](https://maven.apache.org/) 3.9+
- [PostgreSQL](https://www.postgresql.org/) 17+
- [Docker](https://github.com/docker) 29+

## Development Overview

The tech stack is large. To get started, you should be familiar (and ideally experienced) with these core technologies:

- Java and Groovy
- Spring Framework (especially [Spring Boot](https://spring.io/projects/spring-boot))
- Web stack: JavaScript, HTML, CSS
- [Vue.js](https://vuejs.org/)
- [cypress.io](https://www.cypress.io/)
- Build tools: Maven, npm, and webpack

## Development

The skills-service project encapsulates the code for the SkillTree dashboard, REST APIs, and Skills Display views.

### Get and build
First, **fork** and check out the code (please see the [Contribution Steps](/contribution/#contribution-steps)), build it, and run all unit and integration tests.
After that, we will discuss development and testing steps.

```bash
git clone <github>:skills-service.git
```   
To build the project:
```bash
cd skills-service
mvn install -DskipTests
```

This command builds the project without running any tests. Because there are thousands of tests in the project, it is best to run only the tests related to what you are currently working on. GitHub Actions CI will run the full test suite to ensure there are no regressions.

SkillTree uses [Maven](https://maven.apache.org/) and [npm](https://www.npmjs.com/) for dependency management and to manage the build lifecycle. Let's get familiar with the project layout:
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

The runtime artifact is a [Spring Boot](https://spring.io/projects/spring-boot) application that is created in ``service/skills-service-<version>.jar``.
When we ran ``mvn install`` to generate this artifact, the following sequence of steps was performed:
- Built the dashboard web application: ``npm run build`` in the dashboard project
- Compiled Java and Groovy classes in the ``service`` project: ``mvn compile``
- Copied the built dashboard app to ``service/src/main/resources/public`` so the Spring Boot application can host the dashboard web application
- Generated the runtime artifact: ``mvn package`` in the service project

Of course, this does not cover the entire build cycle, so please take a moment to familiarize yourself with all the pom.xml and package.json files.

SkillTree uses [PostgreSQL](https://www.postgresql.org/) as its database. If you already have a PostgreSQL instance running locally, please make sure it is configured with a user named `postgres` and the password `skillsPassword`. This user must have full permissions to an empty database named `skills`.

If a PostgreSQL database is not already available, you can easily start one using a Docker container (see example below). Alternatively, visit the official documentation at <external-url label="https://www.postgresql.org" url="https://www.postgresql.org" /> for other installation options.

```bash
docker run --name skills-postgres \
--restart unless-stopped \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=skills \
-e POSTGRES_PASSWORD=skillsPassword \
-p 5432:5432 \
-d postgres:17-alpine
```

Now that you have a database and the runtime artifact, you can start the SkillTree dashboard and service using the following command:

```bash
java -jar service/target/skills-service-<version>.jar \
--spring.datasource.url=jdbc:postgresql://localhost:5432/skills \
--spring.datasource.username=postgres \
--spring.datasource.password=skillsPassword
```

The application will run on [http://localhost:8080](http://localhost:8080). Visit this URL to create an account, build a new project, add subjects, create skills, and more.
To learn more about the features of the SkillTree dashboard, please visit the [Dashboard Guide](/dashboard/user-guide/).

- By default, the application runs in [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode), which is the standard use case.

### Cypress.io end-to-end tests

SkillTree utilizes the [cypress.io](https://www.cypress.io/) framework to perform end-to-end tests and verify the features of the dashboard web application.
Cypress tests are located in the ``e2e-tests`` project:

``` markdown
skills-service
|   ....
└───e2e-tests
|   │   package.json
|   └───cypress
|   |   └───e2e
|   |   <dashboard test name>_spec.js
|   |   |   └───client-display
|   |   |   |   <client-display test name>_spec.js   
```

The end-to-end tests launch the skills-service and dashboard applications, then execute tests against them to mimic real user actions.

To run the Cypress end-to-end tests (this assumes you have already built the skills-service.jar in the previous step):

```bash
cd skills-service/e2e-tests
npm install

# starts required services in the background:
npm run cyServices:start
# purge existing db data
npm run backend:clearDb
# run a single cypress integration test
npm run cy:run -- --spec "cypress/e2e/add_skills_in_batch_spec.js" 
# kill background servers
npm run cyServices:kill 
```

::: tip
Please note that you may need to clear your database tables if they were populated during a previous installation.
Cypress tests purge all user data except for the dashboard root user. If a root user was already created, it
must be manually deleted. The easiest way is to delete all rows from the `user_attrs` table or clear all tables by running:
```bash
npm run backend:clearDb
```
:::

Note that we only ran a single test here. Generally, you will only execute selected tests locally, while the entire suite runs in parallel during the CI lifecycle.

::: tip
Please ensure that ports `8080`, `1025`, `1080`, and `8280` are available on your system.
:::

The ``npm run cyServices:start`` command starts:
- The backend service and the dashboard on port `8080`, utilizing the previously built JAR file.
- A mock SMTP server running on ports `1025` and `1080`.
- A WireMock server running on port `8280`.

Now that you can build the project and run integration tests, let's look at the day-to-day development setup for the skills-service project.


### Day-to-day development

Most IDEs (IntelliJ, Eclipse, etc.) provide first-class support for Maven projects, so the very first step is to import the skills-service project into your favorite IDE.

Please note that code additions will generally fall into these two categories:
1. Enhancing the `skills-service` programmatic REST API
1. Making changes to the web-based dashboard application

###### skills-service programmatic REST API

The code for the API can be found under ``skills-service/service``, which follows standard Maven conventions.

The programmatic API tests reside in ```service/src/test/java```. You can run a single test using the following command:
```bash
cd skills-service/service
# mvn test -Dtest=<test-name>, for example:
mvn test -Dtest=skills.intTests.AdminBadgesSpecs
``` 

You can also run any of these tests directly using your favorite IDE.

::: tip
SkillTree's overall testing strategy is to implement black-box integration tests and supplement them with unit tests whenever an integration test is not possible.
:::

Generally, programmatic API service development is driven and facilitated via integration/service tests.

Skills Service integration tests stand up the skills-service application and then execute various endpoints to validate the results.
These integration tests reside in the ``skills.intTests`` package and extend the ``DefaultIntSpec.groovy`` class.

``DefaultIntSpec.groovy`` is annotated with the [``@SpringBootTest``](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/test/context/SpringBootTest.html) annotation,
which handles running the Spring Boot application and exposing endpoints on a random port.

A few things to note:
- You should interact with the skills-service using the test client ``skills.intTests.utils.SkillsService`` class.
  - This is available via ``skills.intTests.utils.DefaultIntSpec#skillsService``.
  - The ``SkillsService`` class represents an authenticated dashboard user.
- The runtime port can be retrieved via ``skills.intTests.utils.DefaultIntSpec#localPort`` but should rarely be used directly; please use ``skills.intTests.utils.DefaultIntSpec#skillsService`` instead.
- The ``DefaultIntSpec`` setup and cleanup methods purge data from the database between each test case.
- Use the ``skills.intTests.utils.DefaultIntSpec#createService`` method if you need a new ``SkillsService`` instance (for example, to represent a different dashboard user).

There are hundreds of tests in the ``skills.intTests`` package; please feel free to explore them.

###### Web-Based Dashboard

The steps to develop the web-based dashboard are:
1. Stand up the service (programmatic API).
1. Bring up the Vite dev server.
1. Use a browser and Cypress tests to drive development.

To stand up the service, you can execute ``skills.SpringBootApp`` in the ``service`` project directly from your IDE.

If that is not an option, you can always build a JAR and run it from the command line:
```bash
java -jar service/target/skills-service-<version>.jar \
--spring.datasource.url=jdbc:postgresql://localhost:5432/skills \
--spring.datasource.username=postgres \
--spring.datasource.password=skillsPassword
```

The service will run on port `8080`.

Next, start the Vite dev server in the ``dashboard`` project:

```bash
cd dashboard
npm run dev
```
The Vite dev server will run on port `5173` and will forward data requests to the service running on port 8080.

Generally, development is facilitated by writing Cypress tests:

```bash
cd e2e-tests
npm run cy:open:dev
``` 
You can then start adding tests under `e2e-tests/cypress/e2e` to an existing file or by creating a new file.

###### Skills Display
The [Skills Display](/skills-client/js.html#skills-display) components provide a comprehensive visualization of a user's skill and progress profile!
The code for the Skills Display is mostly encapsulated under the `dashboard/src/skills-display` directory.

`SkillsDisplay.vue` is used in various scenarios:
- To show a user's progress within a single project on the Progress & Ranking pages.
- Served as a dedicated URL to power [skills-client](https://github.com/NationalSecurityAgency/skills-client) libraries.
- Served under several URLs for testing purposes.

There are three places where the Skills Display needs to be tested:
- `/test-skills-display/<project-id>` - Most Cypress tests utilize this URL; the Skills Display is served natively and is customized for testing.
- `/test-skills-client/<project-id>` - The Skills Display is served within an iframe to simulate [skills-client](https://github.com/NationalSecurityAgency/skills-client) usage; see Cypress tests for examples.
- `/progress-and-rankings/projects/<project-id>` - The Dashboard's native usage of skills-display to show a user's progress and rankings for a single project.

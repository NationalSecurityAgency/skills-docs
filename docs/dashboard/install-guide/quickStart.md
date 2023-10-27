# Quick Start

The steps to getting started with SkillTree are:
1. [Prerequisites](/dashboard/install-guide/quickStart.html#_1-prerequisites) - don't worry there isn't much here
1. [Install and Start the Dashboard](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) and create your project
1. *(Optional)* [Integrate Client Libraries](/dashboard/install-guide/quickStart.html#_3-integrate-client-libraries) into your application (examples will be provided)

::: tip Please Note
Please note that the integrating the SkillTree Client Library is **optional** and is only applicable when integrating gamification training directly into an existing or new web application.
:::

## 1. Prerequisites
- JDK 17+, we suggest <external-url label="Open JDK" url="https://openjdk.java.net/" />
  - Please note that this is not relevant if you elect to go with the Docker based installation.
- <external-url label="Git" url="https://git-scm.com/" /> version 2.23+
- <external-url label="Node.js" url="https://nodejs.org/en/" /> v12+ and <external-url label="npm" url="https://www.npmjs.com/" /> 6+
- <external-url label="PostgreSQL" url="https://www.postgresql.org/" /> 12+

::: tip 
If a PosgtgreSQL database is not already available, one can easily be started using a docker container (see example below), or visit the official please documentation <external-url label="https://www.postgresql.org" url="https://www.postgresql.org" /> for other installation options.

```bash
docker run --network=host -e POSTGRES_USER=skills -e POSTGRES_PASSWORD=skillsPassword -d postgres
```
:::

## 2. Install & Start Dashboard and Service
You have 2 options:
- Option 1 - utilize a pre-built docker image 
- Option 2 - download and run the jar-based distribution 

### Option 1 - Docker-based install

The ``skills-service`` docker image is hosted on <external-url label="DockerHub" url="https://hub.docker.com/r/skilltree/skills-service" /> and can be started like this: 

```bash
docker run --name skills-service -d -p 8080:8080 -e SPRING_PROPS="\
spring.datasource.url=jdbc:postgresql://localhost:5432/skills,\
spring.datasource.username=skills,\
spring.datasource.password=skillsPassword" skilltree/skills-service:<tag_version>
```

::: tip IMPORTANT
Please note that the ``latest`` tag is **not** published to DockerHub and ``:<tag_version>`` must be specified explicitly.
Available tags can be found on <external-url label="DockerHub tags page" url="https://hub.docker.com/r/skilltree/skills-service/tags" />.
:::

You can tail the application logs via:
```bash
docker logs -f <container_id>
```

<import-content path="/dashboard/install-guide/common/service-install-output-and-backend.html"/>

### Option 2 - Jar-based install

Download the latest ``.jar`` release from <external-url label="GitHub skills-service/releases/" url="https://github.com/NationalSecurityAgency/skills-service/releases/" /> (under the Assets section).

```bash
curl -s https://api.github.com/repos/NationalSecurityAgency/skills-service/releases/latest | grep browser_download_url | cut -d '"' -f 4 | wget -qi -
```

Using the downloaded jar you can run the SkillTree dashboard and service (make sure to substitute ``X.X.X`` for an actual version):

```bash
$ java -Dspring.datasource.url=jdbc:postgresql://localhost:5432/skills \
-Dspring.datasource.username=skills \
-Dspring.datasource.password=skillsPassword \
-jar ~/Downloads/skills-service-X.X.X.jar
```

<import-content path="/dashboard/install-guide/common/service-install-output-and-backend.html"/>

## 3. Integrate Client Libraries

::: tip Please Note
Please note that integrating the SkillTree Client Libraries is **optional** and is only applicable when integrating gamification training directly into an existing or new web application.
:::

This section assumes that you already have running 
- ``skills-service`` on port ``8080`` 
- ``java-backend-example`` on port ``8090``

### Client App Integration Example

To run the Hello World example, clone the ``skills-client-examples`` project and start the <external-url label="live-server" url="https://www.npmjs.com/package/live-server" /> development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/js-example
npm install
npm run serve
```
<external-url label="live-server" url="https://www.npmjs.com/package/live-server" /> displays the development server url at startup, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092) 


If you want to build the Hello World client integration application yourself, here are the steps:

```bash
mkdir js-example
cd js-example
npm init
# accept defaults
npm install --save-dev live-server
```

You can install the SkillTree JS lib using npm:
```bash
npm install @skilltree/skills-client-js --save
```
However, these examples will utilize ``<script>`` tags to import the SkillTree library: 

```js
<script type="module">
    import {
        SkillsConfiguration,
        SkillsDisplayJS,
        SkillsReporter
    } from 'https://unpkg.com/@skilltree/skills-client-js/dist/skills-client-js.esm.min.js'

// Use imported components
// ...
</script>
```

Configure the SkillTree client library - this only needs to happen once per user session:
```js
SkillsConfiguration.configure({
    serviceUrl: 'http://localhost:8080',
    projectId: 'movies',
    authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});
```
<import-content path="/dashboard/install-guide/common/prod-env-tip.html"/>

Pluggable user skill and ranking visualization:
```js
const clientDisplay = new SkillsDisplayJS({version: 1});
clientDisplay.attachTo(document.querySelector('#skills-client-container'));
```

Report Skill Events when a user performs actions in the application:
```js
document.querySelector('#reportSkillButton').onclick = function () {
    SkillsReporter.reportSkill('IronMan');
};
```
Handle event reporting results in one place:
```js
// just so we can always see the response
SkillsReporter.configure({notifyIfSkillNotApplied: true});
SkillsReporter.addSuccessHandler((result) => {
    document.querySelector('#reportResultContainer').innerHTML = JSON.stringify(result, null, ' ');
});
```

The full example can be found @ <external-url label="skills-client-examples/js-example/index.html" url="https://github.com/NationalSecurityAgency/skills-client-examples/blob/master/js-example/index.html" />

Now start the server:
```bash
npx live-server --no-browser --port=8092 --open=app --cors --proxy=/api:http://localhost:8090/api --proxy=/native:http://localhost:8092/
```
<external-url label="live-server" url="https://www.npmjs.com/package/live-server" /> displays development server url on startup, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092). 

For further details regarding integrating SkillTree into your application, please visit our [Integration Guide](/skills-client/).  




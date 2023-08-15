# Quick Start

The steps to getting started with SkillTree are:
1. [Prerequisites](/dashboard/install-guide/quickStart.html#_1-prerequisites) - don't worry there isn't much here
1. [Install and Start the Dashboard](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) and create your project
1. *(Optional)* [Integrate Client Libraries](/dashboard/install-guide/quickStart.html#_3-integrate-client-libraries) into your application (examples will be provided)

::: tip Please Note
Please note that the integrating the SkillTree Client Libraries is **optional** and is only applicable when integrating gamification training directly into an existing or new web application.
:::

## 1. Prerequisites
- JDK 17+, we suggest <external-url label="Open JDK" url="https://openjdk.java.net/" />
  - Please note that this is not relevant if you elect to go with the Docker based install.
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

Below are the directions for each supported library, please proceed to one of your liking:
- [Option 1 - Vue.js Example](/dashboard/install-guide/quickStart.html#option-1-vue-js-example)
- [Option 2 - React Example](/dashboard/install-guide/quickStart.html#option-2-react-integration-example)
- [Option 3 - Angular Example](/dashboard/install-guide/quickStart.html#option-3-angular-integration-example)
- [Option 4 - Pure JS Example](/dashboard/install-guide/quickStart.html#option-4-pure-js-integration-example)

### Option 1 - Vue.js Example

To run the Hello World Vue.js example, clone the ``skills-client-examples`` project and start the Vue development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/vuejs-example
npm install
npm run serve
```
Vue CLI displays the development server url at startup, it will likely be this: 
[http://localhost:8081/](http://localhost:8081/) 

If you want to build the Hello World Vue.js application yourself, here are the steps: 

::: tip
This example uses <external-url label="Vue CLI" url="https://cli.vuejs.org/" /> to quickly scaffold a Single Page Application.
:::

```bash
npm install -g @vue/cli
vue create vuejs-example
# accept all of the defaults, press enter
cd vuejs-example
npm run serve
``` 

Feel free to check out the Vue.js splash page then kill the server. 
Let's install and use some of the SkillTree components.

```bash
npm install --save @skilltree/skills-client-vue
```

Configure SkillTree:

``main.js``
```js{3,7-12}
import Vue from 'vue'
import App from './App.vue'
import { SkillsDirective, SkillsConfiguration } from '@skilltree/skills-client-vue';

Vue.config.productionTip = false

Vue.use(SkillsDirective);
SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});

new Vue({
  render: h => h(App),
}).$mount('#app')
```

<import-content path="/dashboard/install-guide/common/prod-env-tip.html"/>

Copy the HelloWorld components from ``skills-client-examples/vuejs-example/src/components``:

- ``HelloWorldSkillsDisplay.vue`` - Pluggable user skill and ranking visualization 
- ``HelloWorldSkillsEventReporting.vue`` - Report Skill Events when user preforms actions in the application
- ``HelloWorldGlobalEventHandler.vue`` - Handle event reporting results in one place

Now you can use these components in ``App.vue``:

```js
<template>
    <div>
        <h1>Current User's Skills Display</h1>
        <hello-world-skills-display/>
        <h1>Report Skill Events</h1>
        <hello-world-skills-event-reporting/>
        <h3>Result:</h3>
        <hello-world-global-event-handler/>
    </div>
</template>

<script>
    import HelloWorldSkillsDisplay from "./components/HelloWorldSkillsDisplay";
    import HelloWorldSkillsEventReporting from "./components/HelloWorldSkillsEventReporting";
    import HelloWorldGlobalEventHandler from "./components/HelloWorldGlobalEventHandler";

    export default {
        name: 'App',
        components: {
            HelloWorldGlobalEventHandler,
            HelloWorldSkillsEventReporting,
            HelloWorldSkillsDisplay,
        }
    }
</script>

<style>
    body {
        margin: 0px;
        padding-bottom: 3rem;
        text-align: center;
    }
</style>
```
For further details regarding integrating SkillTree into your application, please visit our [Integration Guide](/skills-client/).

### Option 2 - React Integration Example

To run the Hello World React example clone the ``skills-client-examples`` project and start the React development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/react-example
npm install
npm run start
```
React CLI displays the development server url at startup, it will likely be this: 
[ http://localhost:3000]( http://localhost:3000) 


If you want to build the Hello World React application yourself, here are the steps:

::: tip
This example uses <external-url label="Create React App" url="https://reactjs.org/docs/create-a-new-react-app.html/" /> to quickly scaffold a Single Page Application.
:::

```bash
npm install -g create-react-app
create-react-app react-example
cd react-example
npm run start
```

Feel free to check out the React splash page then kill the server. Let's install and use some of the SkillTree components.

```bash
npm install --save @skilltree/skills-client-react
```

Configure SkillTree:

``index.js``
```js{6,8-12}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SkillsConfiguration } from '@skilltree/skills-client-react';

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
```

<import-content path="/dashboard/install-guide/common/prod-env-tip.html"/>

Copy the HelloWorld components from ``skills-client-examples/react-example/src/skilltree``:

- ``HelloWorldSkillsDisplay.js`` - Pluggable user skill and ranking visualization 
- ``HelloWorldSkillsEventReporting.js`` - Report Skill Events when user preforms actions in the application
- ``HelloWorldGlobalEventHandler.js`` - Handle event reporting results in one place

Now you can use these components in ``App.js``:
```js{3-5,11,14,16}
import React from 'react';
import './App.css';
import HelloWorldSkillsDisplay from './HelloWorldSkillsDisplay';
import HelloWorldSkillsEventReporting from './HelloWorldSkillsEventReporting';
import HelloWorldGlobalEventHandler from './HelloWorldGlobalEventHandler';

function App() {
  return (
    <div className="App">
        <h1>Current User's Skills Display</h1>
        <HelloWorldSkillsDisplay />

        <h1>Report Skill Events</h1>
        <HelloWorldSkillsEventReporting />
        <h3>Result:</h3>
        <HelloWorldGlobalEventHandler />
    </div>
  );
}

export default App;
```
For further details regarding integrating SkillTree into your application, please visit our [Integration Guide](/skills-client/).

### Option 3 - Angular Integration Example


To run the Hello World Angular example, clone the ``skills-client-examples`` project and start the Angular development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/ng-example
npm install
npm run serve
```
Angular CLI displays the development server url at startup, it will likely be this: 
[http://localhost:4200/](http://localhost:4200/) 

If you want to build the Hello World Angular application yourself, here are the steps: 

::: tip
This example uses <external-url label="Angular CLI" url="https://angular.io/cli/" /> to quickly scaffold a Single Page Application.
:::

```bash
npm install -g @angular/cli
ng new ng-example
# accept all of the defaults, press enter
cd ng-example
npm run start
``` 

Feel free to check out the Angular splash page then kill the server. 
Let's install and use some of the SkillTree components.

```bash
npm install --save @skilltree/skills-client-ng
```

Configure SkillTree:

``main.ts``
```js{3,1-16}
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SkillsConfiguration } from '@skilltree/skills-client-ng';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

<import-content path="/dashboard/install-guide/common/prod-env-tip.html"/>

Copy the HelloWorld components from ``skills-client-examples/ng-example/src/app/components/*/*.ts`` to ``src/app/``:

- ``hello-world-skills-display.component.ts`` - Pluggable user skill and ranking visualization 
- ``hello-world-event-reporting.component.ts`` - Report Skill Events when user preforms actions in the application
- ``hello-world-global-event-reporting.component.ts`` - Handle event reporting results in one place

Now you can import and declare the components in ``app.module.ts``:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SkillsLevelModule, SkillsDisplayModule, SkilltreeModule } from '@skilltree/skills-client-ng'

import { AppComponent } from './app.component';
import { HelloWorldGlobalEventHandlerComponent } from './hello-world-global-event-handler.component';
import { HelloWorldSkillsDisplayComponent } from './hello-world-skills-display.component';
import { HelloWorldEventReportingComponent } from './hello-world-event-reporting.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldGlobalEventHandlerComponent,
    HelloWorldSkillsDisplayComponent,
    HelloWorldEventReportingComponent
  ],
  imports: [
    BrowserModule,
    SkillsLevelModule,
    SkilltreeModule,
    SkillsDisplayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

...and use the components in ``app.component.ts``:
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <div>
      <h1>Current User's Skills Display</h1>
        <app-hello-world-skills-display></app-hello-world-skills-display>
      <h1>Report Skill Events</h1>
        <app-hello-world-event-reporting></app-hello-world-event-reporting>
      <h3>Result:</h3>
        <app-hello-world-global-event-handler></app-hello-world-global-event-handler>
    </div>
  </div>
  `,
  styles: [`
    pre {
      margin: auto;
      padding: 1rem;
      border: 1px solid #dddddd !important;
      overflow: auto;
      border-radius: 6px;
      background-color: #f6f8fa;
      min-height: 3rem;
      max-width: 80rem;
    
    }
    
    .res {
      text-align: left;
    }
  `]
})
export class AppComponent {
  title = 'ng-example';
}

```
For further details regarding integrating SkillTree into your application, please visit our [Integration Guide](/skills-client/).

### Option 4 - Pure JS Integration Example

To run the Hello World Pure JS example, clone the ``skills-client-examples`` project and start the <external-url label="live-server" url="https://www.npmjs.com/package/live-server" /> development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/js-example
npm install
npm run serve
```
<external-url label="live-server" url="https://www.npmjs.com/package/live-server" /> displays the development server url at startup, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092) 


If you want to build the Hello World Pure JS application yourself, here are the steps:

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




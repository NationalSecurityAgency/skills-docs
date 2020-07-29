# Quick Start

The steps to getting started with SkillTree are:
1. [Prerequisites](/dashboard/install-guide/quickStart.html#_1-prerequisites) - don't worry there isn't much here
1. [Install and Start the Dashboard](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) and create your project
1. [Integrate Client Libraries](/dashboard/install-guide/quickStart.html#_3-integrate-client-libraries) into your application (examples will be provided)

## 1. Prerequisites
- JDK 11+, we suggest [Open JDK](https://openjdk.java.net/)
  - Please note that this is not relevant if you elect to go with the Docker based install.
- [Git](https://git-scm.com/) version 2.23+
- [Node.js](https://nodejs.org/en/) v12+ and [npm](https://www.npmjs.com/) 6+

## 2. Install & Start Dashboard and Service
You have 2 options:
- Option 1 - utilize a pre-built docker image 
- Option 2 - download and run the jar-based distribution 

### Option 1 - Docker-based install

The ``skills-service`` docker image is hosted on [DockerHub](https://hub.docker.com/r/skilltree/skills-service) and can be started like this: 

```bash
docker run --name skills-service -d -p 8080:8080 skilltree/skills-service:latest
```

then you can tail the running container's logs:
```bash
docker logs -f <container_id>
```

<import-content path="/dashboard/install-guide/common/service-install-output-and-backend.html"/>

### Option 2 - Jar-based install

Download the latest ``.jar`` release from [GitHub skills-service/releases/](https://github.com/NationalSecurityAgency/skills-service/releases/) (under the Assets section).

```bash
curl -s https://api.github.com/repos/NationalSecurityAgency/skills-service/releases/latest | grep browser_download_url | cut -d '"' -f 4 | wget -qi -
```

Using the downloaded jar you can run the SkillTree dashboard and service (make sure to substitute ``X.X.X`` for an actual version):

```bash
$ java -jar ~/Downloads/skills-service-X.X.X.jar
```

<import-content path="/dashboard/install-guide/common/service-install-output-and-backend.html"/>

## 3. Integrate Client Libraries

This section assumes that you already have running 
- ``skills-service`` on port ``8080`` 
- ``java-backend-example`` on port ``8090``

Belows are the directions for each supported library, please proceed to one of your liking:
- [Option 1 - Vue.js Example](/dashboard/install-guide/quickStart.html#option-1-vue-js-example)
- [Option 2 - React Example](/dashboard/install-guide/quickStart.html#option-2-react-integration-example)
- [Option 3 - Angular Example](/dashboard/install-guide/quickStart.html#option-3-angular-integration-example)
- [Option 4 - Pure JS Example](/dashboard/install-guide/quickStart.html#option-4-pure-js-integration-example)

### Option 1 - Vue.js Example

To run the Hello World Vue.js example, clone the ``skills-client-examples`` project and start the Vue development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/vuejs-example
npm run serve
```
Vue CLI displays the development server url at startup, it will likely be this: 
[http://localhost:8081/](http://localhost:8081/) 

If you want to build the Hello World Vue.js application yourself, here are the steps: 

::: tip
This example uses [Vue CLI](https://cli.vuejs.org/) to quickly scaffold a Single Page Application.
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
:::tip
In a production environment we'd configure these resources using the ``https`` protocol. 
Please review the [Authorization](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) for greater detail. 
:::

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
npm run start
```
React CLI displays the development server url at startup, it will likely be this: 
[ http://localhost:3000]( http://localhost:3000) 


If you want to build the Hello World Vue.js application yourself, here are the steps:

::: tip
This example uses [Create React App](https://reactjs.org/docs/create-a-new-react-app.html/) to quickly scaffold a Single Page Application.
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

:::tip
In a production environment we'd configure these resources using the ``https`` protocol. 
Please review the [Authorization](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) for greater detail. 
:::

Copy the HelloWorld components from ``skills-client-examples/react-example/src/skilltree``:

- ``HelloWorldSkillsDisplay.js`` - Pluggable user skill and ranking visualization 
- ``HelloWorldSkillsEventReporting.js`` - Report Skill Events when user preforms actions in the application
- ``HelloWorldGlobalEventHandler.js`` - Handle event reporting results in one place

Now you can use these components in ``App.js``:
```js{3-5,11,14,16}
import React from 'react';
import './App.css';
import HelloWorldSkillsDisplay from './skilltree/HelloWorldSkillsDisplay';
import HelloWorldSkillsEventReporting from './skilltree/HelloWorldSkillsEventReporting';
import HelloWorldGlobalEventHandler from './skilltree/HelloWorldGlobalEventHandler';

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

Coming Soon ...

### Option 4 - Pure JS Integration Example

To run the Hello World Pure JS example, clone the ``skills-client-examples`` project and start the [live-server](https://www.npmjs.com/package/live-server) development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/js-example
npm run serve
```
[live-server](https://www.npmjs.com/package/live-server) displays the development server url at startup, it will likely be this: 
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
:::tip
In a production environment we'd configure these resources using the ``https`` protocol. 
Please review the [Authorization](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) for greater detail. 
:::

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

The full example can be found @ [skills-client-examples/js-example/index.html](https://github.com/NationalSecurityAgency/skills-client-examples/blob/master/js-example/index.html)

Now start the server:
```bash
npx live-server --no-browser --port=8092 --open=app --cors --proxy=/api:http://localhost:8090/api --proxy=/native:http://localhost:8092/
```
[live-server](https://www.npmjs.com/package/live-server) displays development server url on startup, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092). 

For further details regarding integrating SkillTree into your application, please visit our [Integration Guide](/skills-client/).  




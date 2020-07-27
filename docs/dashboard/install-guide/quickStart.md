# Quick Start

Overall steps to getting started with SkillTree are:
1. [Prerequisites](/dashboard/install-guide/quickStart.html#_1-prerequisites) - don't worry there isn't much here
1. [Install and Start Dashboard](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) and create your project
1. [Integrate Client Libraries](/dashboard/install-guide/quickStart.html#_3-integrate-client-libraries) into your application (we'll show examples)

## 1. Prerequisites
- JDK 11+, we suggest [Open JDK](https://openjdk.java.net/)
  - Please note that this is not relevant if you elect to go with the Docker based install.
- [Git](https://git-scm.com/) version 2.23+
- [Node.js](https://nodejs.org/en/) v12+ and [npm](https://www.npmjs.com/) 6+

## 2. Install & Start Dashboard and Service
You have 2 options:
- Option 1 - utilize a pre-built docker image 
- Option 2 - download and run jar-based distribution 

### Option 1 - Docker-based install

Coming very soon...

### Option 2 - Jar-based install

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

Next step is to start ``java-backend-example`` service which:
1. Populates ``skills-service`` with sample data
1. Implements example [Authorization Endpoint](/skills-client/auth.html) that's required to run client components

Download the latest ``java-backend-example`` from [skills-client-examples/releases](https://github.com/NationalSecurityAgency/skills-client-examples/releases)

```bash
java -jar java-backend-example-X.X.X.jar
```

Please note that service generate and populate skill-service with sample data so it may take few minutes to start. 
You will know the service is running when the following line appears on standard out: 
```bash
o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8090 (http) with context path ''
```

On start ``java-backend-example`` populates ``skills-service`` with a sample project called Movies. 
Once it starts logout from the dashboard and log back in as 
- username=bill@email.org
- password=password
and explore the sample Movies project. 

## 3. Integrate Client Libraries

This section assumes that you are already have running 
- ``skills-service`` on port ``8080`` 
- ``java-backend-example`` on port ``8090``

Belows are the directions for each supported library, please proceed to one of your liking:
- [Option 1 - Vue.js Example](/dashboard/install-guide/quickStart.html#option-1-vue-js-example)
- [Option 2 - React Example](/dashboard/install-guide/quickStart.html#option-2-react-integration-example)
- [Option 3 - Angular Example](/dashboard/install-guide/quickStart.html#option-3-angular-integration-example)
- [Option 4 - Pure JS Example](/dashboard/install-guide/quickStart.html#option-4-pure-js-integration-example)

### Option 1 - Vue.js Example

To run Hello World Vue.js example clone ``skills-client-examples`` project and start Vue development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/vuejs-example
npm run serve
```
Vue CLI displays development server url, it will likely be this: 
[http://localhost:8081/](http://localhost:8081/) 

If you want to build Hello World Vue.js application yourself, here are the steps: 

This example used [Vue CLI](https://cli.vuejs.org/) to quickly scaffold Single Page Application.

```bash
npm install -g @vue/cli
vue create vuejs-example
# accept all of the defaults, press enter
cd vuejs-example
npm run serve
``` 
Vue CLI will print out the url for the service probably will be 
[http://localhost:8081/](http://localhost:8081/)

Feel free to check out Vue.js splash page then kill the server. 
Let's install and use some of the SkillTree components.

```bash
npm install --save @skilltree/skills-client-vue
```

Configure SkillTree:

``main.js`` (added lines are highlight)
```js{3,7-12}
import Vue from 'vue'
import App from './App.vue'
import { SkillsDirective, SkillsConfiguration } from '@skilltree/skills-client-vue';

Vue.config.productionTip = false

Vue.use(SkillsDirective);
SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'moviesa',
  authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});

new Vue({
  render: h => h(App),
}).$mount('#app')
```
:::tip
In production environment we'd configure ``https`` protocol.  
:::
:::tip
In a production environment the authenticator URL will come from the same 
host as the served web-application with a secure channel in between. 
Please review [Authorizatoin](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) 
sections to learn more, 
but for now let's keep going with this quick-start guide! 
:::
Copy HelloWorld components from ``skills-client-examples/vuejs-example/src/components``:

- ``HelloWorldSkillsDisplay.vue`` - Pluggable user skill and ranking visualization 
- ``HelloWorldSkillsEventReporting.vue`` - Report Skill Events when user preforms actions in the application
- ``HelloWorldGlobalEventHandler.vue`` - Handle event reporting results in one place

Now you can use these components in the ``App.vue``:

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
For further detail of how to integrate SkillTree into your application please visit our [Integration Guide](/skills-client/).

### Option 2 - React Integration Example

To run Hello World React example clone ``skills-client-examples`` project and start React development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/react-example
npm run start
```
React CLI displays development server url, it will likely be this: 
[ http://localhost:3000]( http://localhost:3000) 


If you want to build Hello World Vue.js application yourself, here are the steps:

This example used [Create React App](https://reactjs.org/docs/create-a-new-react-app.html/) to quickly scaffold Single Page Application.

```bash
npm install -g create-react-app
create-react-app react-example
cd react-example
npm run start
```
React CLI displays development server url, it will likely be this: 
[ http://localhost:3000]( http://localhost:3000) 

Feel free to check out React splash page then kill the server. Let's install and use some of the SkillTree components.

```bash
npm install --save @skilltree/skills-client-react
```

Configure SkillTree:

``index.js`` (added lines are highlight)
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
In production environment we'd configure ``https`` protocol.  
:::
:::tip
In a production environment the authenticator URL will come from the same 
host as the served web-application with a secure channel in between. 
Please review [Authorizatoin](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) 
sections to learn more, 
but for now let's keep going with this quick-start guide! 
:::
Copy HelloWorld components from ``skills-client-examples/react-example/src/skilltree``:

- ``HelloWorldSkillsDisplay.js`` - Pluggable user skill and ranking visualization 
- ``HelloWorldSkillsEventReporting.js`` - Report Skill Events when user preforms actions in the application
- ``HelloWorldGlobalEventHandler.js`` - Handle event reporting results in one place

Now you can use these components in the ``App.js``:
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
For further detail of how to integrate SkillTree into your application please visit our [Integration Guide](/skills-client/).

### Option 3 - Angular Integration Example

Coming Soon ...

### Option 4 - Pure JS Integration Example

To run Hello World Pure JS example clone ``skills-client-examples`` project and start [live-server](https://www.npmjs.com/package/live-server)  development server:

```bash
git clone git@github.com:NationalSecurityAgency/skills-client-examples.git
cd skills-client-examples/js-example
npm run serve
```
[live-server](https://www.npmjs.com/package/live-server) displays development server url, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092) 


If you want to build Hello World Pure JS application yourself, here are the steps:

```bash
mkdir js-example
cd js-example
npm init
# accept defaults
npm install --save-dev live-server
```

You can install SkillTree JS lib using npm:
```bash
npm install @skilltree/skills-client-js --save
```
However, these examples will utilize ``<script>`` to import the SkillTree library: 

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

Configure SkillTree client library - only need to happen once per app:
```js
SkillsConfiguration.configure({
    serviceUrl: 'http://localhost:8080',
    projectId: 'movies',
    authenticator: 'http://localhost:8090/api/users/user4@email.com/token',
});
```
:::tip
In production environment we'd configure ``https`` protocol.  
:::
:::tip
In a production environment the authenticator URL will come from the same 
host as the served web-application with a secure channel in between. 
Please review [Authorizatoin](/skills-client/auth.html) and [Configuration](/skills-docs/dashboard/install-guide/config.html) 
sections to learn more, 
but for now let's keep going with this quick-start guide! 
:::

Pluggable user skill and ranking visualization:
```js
const clientDisplay = new SkillsDisplayJS({version: 1});
clientDisplay.attachTo(document.querySelector('#skills-client-container'));
```

Report Skill Events when user preforms actions in the application:
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
[live-server](https://www.npmjs.com/package/live-server) displays development server url, it will likely be this: 
[http://127.0.0.1:8092](http://127.0.0.1:8092). 

For further detail of how to integrate SkillTree into your application please visit our [Integration Guide](/skills-client/).  




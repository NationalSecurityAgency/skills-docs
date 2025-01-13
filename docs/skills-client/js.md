# Client App Integration

To install client libraries using npm:

``` js
npm install @skilltree/skills-client-js --save
```

Distribution is also available through Content Delivery Network (CDN) using https://unpkg.com:
[https://unpkg.com/@skilltree/skills-client-js@latest/dist/skills-client-js.esm.min.js](https://unpkg.com/@skilltree/skills-client-js@latest/dist/skills-client-js.esm.min.js)

This JS library contains: 
1. Skills Configuration - Global configuration used by Skills utilities.
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using Vue.js directives or JS utility

Generally you will be in one of **these scenarios**: 
1. [Option 1](/skills-client/js.html#option-1-javascript-module-bundler): Use a JavaScript module bundler such as [webpack](https://webpack.js.org/) or [rollup.js](https://rollupjs.org)
1. [Option 2](/skills-client/js.html#option-2-script-type-module-tag): Import the skills JS library via the html ```<script type="module">``` tag 
1. [Option 3](/skills-client/js.html#option-3-script-type-text-javascript-tag): Import the skills JS library via the html ```<script type="text/javascript">``` tag

## Option 1: JavaScript module bundler

When using module bundler such as [webpack](https://webpack.js.org/) or [rollup.js](https://rollupjs.org) 
you can take advantage of module imports, for example: 

```  js
import { SkillsConfiguration, SkillsDisplayJS, SkillsReporter } from '@skilltree/skills-client-js';
 
// code using SkillsConfiguration, SkillsDisplayJS and SkillsReporter
// examples in the following sections
 ```

Alternatively you can import individually:

```  js
import { SkillsConfiguration } from '@skilltree/skills-client-js';
 
// code using SkillsConfiguration
// examples in the following sections
 ``` 

## Option 2: ```<script type="module">``` tag

If you're not using a JavaScript module bundler such as webpack or rollup.js, you may wish to import the module
using the html ```<script type="module">``` tag.

Then your import will look something like this:
```   js{2}
<head>
    <script type="module">
        import {
            SkillsConfiguration,
            SkillsDisplayJS,
            SkillsReporter
        } from 'https://unpkg.com/@skilltree/skills-client-js/dist/skills-client-js.esm.min.js';

        // code using SkillsConfiguration, SkillsDisplay and SkillsReporter
        // examples in the following sections
    </script> 
</head>
 ```

Alternatively you can import individually:

```  js{2}
<head>
    <script type="module">
        import { SkillsConfiguration } from 'https://unpkg.com/@skilltree/skills-client-js/dist/skills-client-js.esm.min.js';
    
        // code using SkillsConfiguration
        // examples in the following sections
    </script> 
</head>
 ``` 

## Option 3: ```<script type="text/javascript">``` tag

You may also import the module using the html ```<script type="text/javascript">``` tag in order to support older
browsers.  When importing the library this way you will need to reference SkillTree objects  using a global wrapper 
object named SkillsClient.

Then your code will look something like this
```  js{2,7}
<head>
    <script type="text/javascript" src="https://unpkg.com/@skilltree/skills-client-js/dist/skills-client-js.umd.min.js"></script>
    <script>
        // code using SkillsConfiguration, SkillsDisplay and SkillsReporter examples
        // in the following sections, but using the global SkillsClient wrapper

        this.SkillsClient.SkillsConfiguration.configure({
           serviceUrl: 'http://localhost:8080',
           projectId: 'your-project-id',
           authenticator: 'pki',
        });
    </script> 
</head>
 ```

## Skills Configuration

<Content path="/skills-client/common/skillsConfiguration/js/clientConfig.md"/>

## Skills Display

<Content path="/skills-client/common/skillsDisplayIntro.md"/>

Usage is trivial:

Here is an example of initializing SkillsDisplayJS (assuming you already configured via ``` SkillsConfiguration.configure```, see the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) )
* Note: This assumes there is a DIV in your DOM with id ```skills-client-container``` for SkillsDisplayJS to attach to

``` js{2-3}
SkillsConfiguration.afterConfigure().then(() => {
    const clientDisplay = new SkillsDisplayJS();
    clientDisplay.attachTo(document.querySelector('#skills-client-container'));
});
```
To avoid race conditions, please ensure that the configuration is loaded by adding `SkillsDisplayJS` creation within the
`SkillsConfiguration.afterConfigure()` callback.

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplayJS constructor:

``` js
SkillsConfiguration.afterConfigure().then(() => {
    const clientDisplay = new SkillsDisplayJS({
        version: 1,
    });
});
```

 SkillsDisplayJS constructor object:

<Content path="/skills-client/common/skillsDisplayArguments.md"/>

### Route changed event <since project="skills-client" version="3.3.0" />

Each time a user navigates within the Skills Client Display, if configured, the `handleRouteChanged` callback function will be invoked and passed the new path that was navigated to.  This can be useful if the hosting application displays a breadcrumb and would like to update the current location within the Skills Client Display component.

``` js
const handleRouteChanged = (newPath) => {
    console.log(`New Skills Display path: [${newPath}]`);
};
    
SkillsConfiguration.afterConfigure().then(() => {
    const clientDisplay = new SkillsDisplayJS({
        handleRouteChanged: handleRouteChanged,
    });
});
```

#### Programmatic navigation <since project="skills-client" version="3.3.1" />

The internal route of the Skills Client Display component can be changed by passing the desired path to the `navigate()` method.  This can be useful if the hosting application displays a breadcrumb and would like to navigate to different locations within the Skills Client Display component by clicking a breadcrumb link for example.

``` js
  <button type="button" onclick="navigate()">Navigate</button>
  
  navigate() {
    this.clientDisplay.navigate('/subjects/subj0')
  }
}
```

### Skills Display Options Object

<Content path="/skills-client/common/skillsDisplayOptionsObject.md"/>

### Skills Display Theme Object

<Content path="/skills-client/common/slillsDisplayTheme.md"/>

## Skills Level Display

The ```skills-client-js``` library also includes a convenient component to display the users's current overall level in the application. This can be
used to display the user's current level consistently throughout the application, for example, in the application header.

::: warning Reminder
Before using the SkillsLevel component, you must make sure to initialize SkillsConfiguration
with your system settings.  
:::

* Note: This assumes there is a DIV in your DOM with id ```skills-level-container``` for SkillsLevelJS to attach to

``` js{2-3}
SkillsConfiguration.afterConfigure().then(() => {
    const skillsLevel = new SkillsLevelJS();
    skillsLevel.attachTo(document.querySelector('#skills-level-container'));
});
```

## Skills Event Reporting

The ```skills-client-js```  library also includes the SkillsReporter utility used to report skills events.

### SkillsReporter JS Utility

::: warning Reminder
Before using the SkillsReporter utility, you must make sure to initialize SkillsConfiguration
with your system settings.  See the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) 
:::

Import the SkillsReporter into your project

``` js
SkillsReporter.reportSkill(skillId)
  .then((response) => {
    // response = metatdata describing how that skill influenced user's skills posture
  })
  .catch((error) => {
    // error = object describing why this error occrued
  });
```

a response object may look something like this:
<Content path="/skills-client/common/skillsReporter/responseObject.md"/>

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### Global Event Handling

<Content path="/skills-client/common/skillsReporter/globalEventHandling.md"/>

### SkillsReporter Configuration

<Content path="/skills-client/common/skillsReporter/reporterConfiguration.md"/>



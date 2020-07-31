# Pure JS Integration

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

## Option 1: JavaScript module bundler

When using module bundler such as [webpack](https://webpack.js.org/) or [rollup.js](https://rollupjs.org) 
you can take advantage of module imports, for example: 

```  js
import { SkillsConfiguration, SkillsDisplay, SkillsReporter } from '@skilltree/skills-client-js';
 
// code using SkillsConfiguration, SkillsDisplay and SkillsReporter
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

## Skills Configuration

<import-content path="/skills-client/common/skillsConfiguration/js/clientConfig.html"/>

## Skills Display

<import-content path="/skills-client/common/skillsDisplayIntro.html"/>

Usage is trivial:

Here is an example of initializing SkillsDisplayJS (assuming you already configured via ``` SkillsConfiguration.configure```, see the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) )
* Note: This assumes there is a DIV in your DOM with id ```skills-client-container``` for SkillsDisplayJS to attach to

``` js{3-4}
SkillsConfiguration.afterConfigure().then(() => {
  const initializeSkillsDisplay = () => {
    const clientDisplay = new SkillsDisplayJS();
    clientDisplay.attachTo(document.querySelector('#skills-client-container'));
  };
});
```

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplayJS constructor:

``` js
const clientDisplay = new SkillsDisplayJS({
    version: 1,
});
```

 SkillsDisplayJS constructor object:

<import-content path="/skills-client/common/skillsDisplayArguments.html"/>


### Skills Display Options Object

<import-content path="/skills-client/common/skillsDisplayOptionsObject.html"/>

### Skills Display Theme Object

<import-content path="/skills-client/common/slillsDisplayTheme.html"/>

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
<import-content path="/skills-client/common/skillsReporter/responseObject.html"/>

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### Global Event Handling

<import-content path="/skills-client/common/skillsReporter/globalEventHandling.html"/>

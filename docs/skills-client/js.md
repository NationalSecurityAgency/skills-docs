# Pure JS Integration

To install client libraries using npm:

``` js
npm install @skills/skills-client-js --save
```

This will give you access to 
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using Vue.js directives or JS utility 
1. Skills Configuration - Global configuration used by Skills utilities.

If you're not using a JavaScript module bundler such as webpack or rollup.js, you may wish to import the module
using the ```<script>``` tag.

1. First you must include the SkillsClient [ESM](https://tc39.es/ecma262/#sec-modules) module
    
    * Download the artifact ```@skills/skills-client-js``` from npm
    * Copy ```./node_modules/@skills/skills-client-js/dist``` to your assets folder in your project

::: tip
This library is also available as a [UMD](https://github.com/umdjs/umd) module so if you are using CommonJS you can use ```require``` statements (or ```import``` statements if you are using a bundler) to import them, or you can use [AMD](https://github.com/amdjs/amdjs-api).
:::
## Skills Configuration

<import-content path="/skills-client/common/skillsConfiguration/js/clientConfig.html"/>

## Skills Display

<import-content path="/skills-client/common/skillsDisplayIntro.html"/>

Usage is trivial:

Here is example of initializing SkillsDisplayJS (assuming you already configured via ``` SkillsConfiguration.configure```, see the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) )
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

## Skills Event Reporting

The ```skills-client-js``` library is packaged with the service used to report skills events.

### SkillsReporter JS Utility

::: warning Reminder
Before using the SkillsReporter utility, you must make sure to initialize SkillsConfiguration
with your system settings.  See the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) 
:::

Import the SkillsReporter into your project

``` js
<head>
...
    <script type="module">

    import { SkillsReporter } from './assets/js/@skills/skills-client-js/dist/skills-client-js.esm.min.js'

    SkillsReporter.reportSkill(skillId)
      .then((response) => {
        // response = metatdata describing how that skill influenced user's skills posture
      })
      .catch((error) => {
        // error = object describing why this error occrued
      });
...    
</head>
```

a response object may look something like this:
<import-content path="/skills-client/common/skillsReporter/responseObject.html"/>

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### Global Event Handling

<import-content path="/skills-client/common/skillsReporter/globalEventHandling.html"/>

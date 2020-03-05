# Pure JS Integration

To install client libraries:

``` js
npm install @skills/skills-client-js --save
```

This will give you access to 
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using Vue.js directives or JS utility 
1. Skills Configuration - Global configuration used by Skills utilities.

## Skills Configuration

<import-content path="/skills-client/common/skillsConfiguration/js/clientConfig.html"/>

## Skills Display

<import-content path="/skills-client/common/skillsDisplayIntro.html"/>

Usage is trivial:
1. First you must include the [UMD](https://github.com/umdjs/umd) module SkillsClient
    
    * Download the artifact ```@skills/skills-client-js``` from npm
    * Copy ```./node_modules/@skills/skills-client-js/dist``` to your assets folder in your project

::: tip
This library is [UMD](https://github.com/umdjs/umd) module so if you are using CommonJS you can use ```require``` statements (or ```import``` statements if you are using a bundler) to import them, or you can use [AMD](https://github.com/amdjs/amdjs-api).
:::

Here is example of initializing SkillsDisplayJS (assuming you already configured via ``` SkillsClient.SkillsConfiguration.configure```, see the [SkillsConfiguration Documentation](/skills-client/js.html#skills-configuration) )
* Note: This assumes there is a DIV in your DOM with id ```skills-display-container``` for SkillsDisplayJS to attach to
* Note: This javascript should be executed AFTER the imports of the ```@skills``` libraries above

``` js{3-4,12,14}
SkillsClient.SkillsConfiguration.afterConfigure().then(() => {
  const initializeSkillsDisplay = () => {
    const clientDisplay = new SkillsClient.SkillsDisplayJS();
    clientDisplay.attachTo(document.querySelector('#skills-client-container'));
  };

  // Make sure #skills-client-container is loaded on the DOM, otherwise 
  // wait until it is to initialize the SkillsDisplay.
  if (document.readyState === "complete"
    || document.readyState === "loaded"
    || document.readyState === "interactive") {
    initializeSkillsDisplay();
  } else {
    document.addEventListener("DOMContentLoaded", initializeSkillsDisplay);
  }
});
```

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplayJS constructor:

``` js
const clientDisplay = new SkillsClient.SkillsDisplayJS({
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
  <script type="text/javascript" src="assets/js/@skills/skills-client-reporter/dist/skills-client-js.umd.min.js" />
  ...

  <script type="text/javascript">
    SkillsClient.SkillsReporter.reportSkill(skillId)
      .then((response) => {
        // response = metatdata describing how that skill influenced user's skills posture
      })
      .catch((error) => {
        // error = object describing why this error occrued
      });
  </script>
</head>
```

a response object may look something like this:
``` js
{
  "success": true,
  "skillApplied": true,
  "explanation": "Skill event was applied",
  "completed": []
}
```

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### Global Event Handling

<import-content path="/skills-client/common/skillsReporter/globalEventHandling.html"/>

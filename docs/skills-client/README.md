# Skills Client

[[toc]]

## Authorization

### Authorization Endpoint

Production based installation will require you to implement an authorization endpoint. 
The goal of the endpoint is to authorize a specific user so skills display and skills reporting can be properly secured.    


The authorization endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
stay protected. 
:::


## Integration
### Vue.js

To install client libraries:

``` js
npm install @skills/skills-client-vue --save
```

This will give you access to 
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using Vue.js directives or JS utility 

#### Skills Configuration

Step one is to globally configure Skills client, we suggest application's entry point
such as main.js or App.vue: 

::: warning Reminder
SkillsConfiguration is a singleton and you only need to provide configuration information once per your applications
runtime.
:::


``` js
import { SkillsConfiguration } from '@skills/skills-client-vue';

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8091/api/users/user1/token',
});

```

This configuration is used by Skills Display and Skills Reporting libraries so you won't need to configure those separately.  
 
 ```SkillsConfiguration.configure``` parameters:

| Parameter        | Explanation           |
| ------------- |:-------------|
| serviceUrl      | url to the skills service - this is the same url as the dashboard - User Interface and service endpoints are colocated | 
| projectId      | the id of project that was created in dashboard; visualize and report skills for the project with this id |   
| authenticator | url to your [Authorization Endpoint](/skills-client/#authorization-endpoint); if skills platform is installed in pki mode then you must set this value to ``pki`` |   

#### Skills Display

Skills Display component which provides comprehensive visualization of user's skill and progress profile!

![User Skills Image](./Screenshot_2019-06-12_UserSkills.png)

Previously installed ```skills-client-vue``` library is packaged with Skills Display component. 

Usage is trivial:
1. Import SkillsDisplay component: ```import { SkillsDisplay } from '@skills/skills-client-vue';```
1. Utilize SkillsDisplay component: ```<skills-display/>```

Here is a full example of a Vue.js single-file component that uses SkillsDisplay: 

``` js{3,8,11}
<template>
    <div class="container">
        <skills-display/>
    </div>
</template>

<script>
    import { SkillsDisplay } from '@skills/skills-client-vue';
    export default {
        name: "ShowSkills",
        components: {SkillsDisplay},
        data() {
            return {
                token: '',
                version: 0,
            };
        },
    }
</script>

<style scoped>
</style>
``` 

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills-versioning.html) then you need to provide version property to 
the SkillsDisplay component:

``` js
<skills-display :version="currentVersion"/>
```

 SkillsDisplay component properties:

| Prop        | Explanation           |
| ------------- |:-------------|
| version      | (optional) version to use in [Skills Versioning](/dashboard/user-guide/skills-versioning.html) paradigm | 

#### Skill Event Reporting 

```skills-client-vue``` library is packaged with ability to report skill events either using Vue.js directives or JS utility. 

##### v-skill directive 

Globally install the directive, we suggest placing in your application's entry point such as main.js or App.vue: 

``` js
import { SkillsDirective } from '@skills/skills-client-vue';

Vue.use(SkillsDirective);
``` 

Now you can use v-skills directive to report skill events, the following example will report an event for a skill with id 'IronMan' when the button is clicked:

``` js
<button v-skills="'IronMan'">Report Skill</button>
```

By default v-skills directive will utilize click event, so the following code is functionally equivalent to the example above:

``` js
<button v-skills:click="'IronMan'">Report Skill</button>
```

v-skills directive supports any arbitrary event, here is an example of input event: 

``` js
<input type="text" v-skills:input="\'Thor\'"/>
```  

For an extensive list of events take a look at [Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Web/Events). 

Skills service add-skill-event endpoint responds with a comprehensive metatdata describing how that skill influenced user's skills posture. 
v-skills directive provides a way to capture that result via a callback method, for example: 

``` js{3}
<input type="text" 
    v-skills:input="'Thor'" 
    @skills-report-response="onReporterResponse"/>
```

and then let's say:

``` js
onReporterResponse(response) {
   // do what you need with response object
},
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

For a full description of the response object please take a look at [Programmatic API section of this guide](/dashboard/user-guide/programmatic-interface.html).

In some extreme cases a not success HTTP call could be made, such as access denied or internal server error.  You can
also listen on the @skills-report-error event to handle these situations.

``` js{4}
<input type="text" 
    v-skills:input="'Thor'" 
    @skills-report-response="onReporterResponse"
    @skills-report-error="onReporterError" />
```

##### SkillsReporter JS utility 
  
If you find that v-skills directive is not meeting your needs then there is always JS utility to report skills: 

``` js
import SkillsReporter from '@skills/skills-client-reporter';


SkillsReporter.reportSkill(skillId)
    .then((res) => {
        // res = metatdata describing how that skill influenced user's skills posture
    })
    .catch((err) => {
        // err = object describing why this error occrued
    });
```

### React
### Angular Display
### Pure JavaScript Display
## Architecture


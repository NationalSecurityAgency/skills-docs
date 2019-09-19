# Vue.js Integration

To install client libraries:

``` js
npm install @skills/skills-client-vue --save
```

This will give you access to 
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using Vue.js directives or JS utility 

## Skills Configuration

Step one is to globally configure the Skills client, we suggest including it in the application's entry point
such as main.js or App.vue: 

::: warning Reminder
SkillsConfiguration is a singleton and you only need to provide configuration information once per your application's
runtime.
:::

::: danger Stop
***SkillsConfiguration.logout()*** must be called when a user logs out of your 
application. SkillsConfiguration caches the authenticator end point which is more 
than likely specific to the currently logged in user.
:::

``` js
import { SkillsConfiguration } from '@skills/skills-client-vue';

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8091/api/users/user1/token',
});

 . . . .

// User logs out
logoutButton.onClick(() => {
    // VERY IMPORTANT
    SkillsConfiguration.logout();
});

```

This configuration is used by the Skills Display and Skills Reporting libraries so you won't need to configure those separately.  
 
 ```SkillsConfiguration.configure``` parameters:

| Parameter        | Explanation           |
| ------------- |:-------------|
| serviceUrl      | url to the skills service - this is the same url as the dashboard - User Interface and service endpoints are co-located | 
| projectId      | the id of the project that was created in the dashboard; visualize and report skills for the project with this id |   
| authenticator | url to your [Authorization Endpoint](/skills-client/#authorization-endpoint); if the skills platform is installed in pki mode then you must set this value to ``pki`` |   

If you are running in ``pki`` mode then your configuration will look something like this:

 ``` js
 import SkillsConfiguration from '@skills/skills-client-configuration';
 
 SkillsConfiguration.configure({
   serviceUrl: 'http://localhost:8080',
   projectId: 'movies',
   authenticator: 'pki',
 });
 
 ```

SkillsConfiguration supplies the ***afterConfigure()*** method which returns a promise which will be resolved once the ***SkillsConfiguration.configure*** method
completes.  This allows support, for example, for configuration options to be supplied by the server asynchronously.

 ``` js{3,4,5,6}
 import SkillsConfiguration from '@skills/skills-client-configuration';
 
 SkillsConfiguration.afterConfigure()
   .then(() => {
     // SkillsConfiguration.configure has been called 
   });

 axios.get('my/configuration/endpoint')
   .then((result) => {
      SkillsConfiguration.configure(result.data);
    });
 ```

## Skills Display

The Skills Display component provides a comprehensive visualization of a user's skill and progress profile!

![User Skills Image](./screenshots/Screenshot_2019-06-12_UserSkills.png)

The previously installed ```skills-client-vue``` library is packaged with the Skills Display component. 

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
    }
</script>

<style scoped>
</style>
``` 

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplay component:

``` js
<skills-display :version="currentVersion"/>
```

 SkillsDisplay component properties:

| Prop        | Explanation           |
| ------------- |:-------------|
| version      | (optional) version to use in [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) paradigm | 
| options      | (optional) options object to control various behaviors of skills-display. See [Skills Display Options Object](#skills-display-options-object)

### Skills Display Options Object

#### Auto scroll behavior

As a convenience, by default, the Skills Client Display will auto scroll to top whenever the user navigates to a new
page (route) within the display. You can disable this setting with the options.disableAutoScroll option described below.

| Prop          | Type          | Default      | Explanation  |
| ------------- | ------------- |:-------------| -----------  |
| options.disableAutoScroll     | boolean | false          | Disable auto scroll to top on route change. | 
| options.autoScrollStrategy    | string  | 'top-of-frame' | On route change, either scroll to the top of the entire document, or the top of skills-display ('top-of-page' or 'top-of-frame') |


## Skill Event Reporting 

The ```skills-client-vue``` library is packaged with the ability to report skill events using either Vue.js directives or the JS utility. 

### v-skill directive 

Globally install the directive, we suggest placing it in your application's entry point such as main.js or App.vue: 

``` js
import { SkillsDirective } from '@skills/skills-client-vue';

Vue.use(SkillsDirective);
``` 

Now you can use the v-skills directive to report skill events, the following example will report an event for a skill with id 'IronMan' when the button is clicked:

``` js
<button v-skills="'IronMan'">Report Skill</button>
```

By default, the v-skills directive will utilize a click event, so the following code is functionally equivalent to the example above:

``` js
<button v-skills:click="'IronMan'">Report Skill</button>
```

The v-skills directive supports any arbitrary event, here is an example of input event: 

``` js
<input type="text" v-skills:input="\'Thor\'"/>
```  

For an extensive list of events take a look at [Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Web/Events). 

The Skills service add-skill-event endpoint responds with a comprehensive metatdata object describing how that skill influenced the user's skills posture. 
The v-skills directive provides a way to capture that result via a callback method, for example: 

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

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

There are times when the HTTP call could fail, such as access denied or internal server error.  You can
also listen on the @skills-report-error event to handle these situations.

``` js{4}
<input type="text" 
    v-skills:input="'Thor'" 
    @skills-report-response="onReporterResponse"
    @skills-report-error="onReporterError" />
```

### Global Event Handling

In many cases it is useful to define a **global** success and/or error handler function rather than defining event listeners on
each element where you include the v-skills directive.  For example, if you wanted to globally display a toaster message if the recording 
of a skill failed.  The v-skills directive supports this by allowing you to attach one or many handlers to the directive.

``` js{13,14}
import { SkillsDirective } from '@skills/skills-client-vue';

Vue.use(SkillsDirective);

const myGlobalSuccessHandler = (event) => {
    toastr.success('skill successfully recorded!');
};

const myGlobalErrorHandler = (event) => {
    toastr.error('There was an error recording your skill');
};

SkillsDirective.addSuccessHandler(myGlobalSuccessHandler);
SkillsDirective.addErrorHandler(myGlobalErrorHandler);
```

For a full description of the success response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### SkillsReporter JS utility 
  
If you find that the v-skills directive is not meeting your needs then there is always the JS utility to report skills: 

``` js
import { SkillsReporter } from '@skills/skills-client-vue';

SkillsReporter.reportSkill(skillId)
    .then((res) => {
        // res = metatdata describing how that skill influenced user's skills posture
    })
    .catch((err) => {
        // err = object describing why this error occrued
    });
```

As described above in [Global Event Handling](#global-event-handling) the SkillsReporter native javascript utility allows
you to configure global success and error handlers utilizing the ***addSuccessHandler*** and the ***addErrorHandler*** methods.

``` js{11,12}
import { SkillsReporter } from '@skills/skills-client-vue';

const myGlobalSuccessHandler = (event) => {
    toastr.success('skill successfully recorded!');
};

const myGlobalErrorHandler = (event) => {
    toastr.error('There was an error recording your skill');
};

SkillsReporter.addSuccessHandler(myGlobalSuccessHandler);
SkillsReporter.addErrorHandler(myGlobalErrorHandler);
```

### Report Event By Listening to Routes

While the skills client library doesn't provide an automatic way to report skills based on route changes it is quite 
easy to implement if you are using [Vue Router](https://router.vuejs.org/). Here is an example using Vue Router 
[Global After Hooks](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks):

```js
import Vue from 'vue';
import Router from 'vue-router';
import { SkillsReporter, SkillsConfiguration } from '@skills/skills-client-vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        reportSkillId: 'ViewHomePage',
      },
    },
  ],
});

router.afterEach((to) => {
  if (to.meta.reportSkillId) {
    SkillsConfiguration.afterConfigure()
      .then(() => {
        SkillsReporter.reportSkill(to.meta.reportSkillId);
      });    
  }
});
```  

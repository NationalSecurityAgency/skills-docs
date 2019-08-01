# Skills Client

[[toc]]

## Skills Display

Skills Display component which provides comprehensive visualization of user's skill and progress profile!

![User Skills Image](./Screenshot_2019-06-12_UserSkills.png)

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

If you are running in ``pki`` mode then your configuration will look something like this:

 ``` js
 import SkillsConfiguration from '@skills/skills-client-configuration';
 
 SkillsConfiguration.configure({
   serviceUrl: 'http://localhost:8080',
   projectId: 'movies',
   authenticator: 'pki',
 });
 
 ```

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
    }
</script>

<style scoped>
</style>
``` 

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide version property to 
the SkillsDisplay component:

``` js
<skills-display :version="currentVersion"/>
```

 SkillsDisplay component properties:

| Prop        | Explanation           |
| ------------- |:-------------|
| version      | (optional) version to use in [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) paradigm | 

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

In many cases it useful to define a **global** success and/or error handler function rather than defining event listeners on
each element you include the v-skills directive.  For example, if you wanted to global display a toaster message if the recording 
of a skill failed.  The v-skills directive supports this through a configuration option using the **configure** function when 
you import the directive.

``` js{13,14,15,16}
import { SkillsDirective } from '@skills/skills-client-vue';

Vue.use(SkillsDirective);

const myGlobalSuccessHandler = (event) => {
    toastr.success('skill successfully recorded!');
};

const myGlobalErrorHandler = (event) => {
    toastr.error('There was an error recording your skill');
};

SkillsDirective.configure({
  globalSuccessHandler: myGlobalSuccessHandler,
  globalErrorHandler: myGlobalErrorHandler,
});
```

##### SkillsReporter JS utility 
  
If you find that v-skills directive is not meeting your needs then there is always JS utility to report skills: 

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

##### Report Event By Listening to Routes

While skills client library doesn't provide an automatic way to report skills based on route changes it is quite 
easy to implement if you are using [Vue Router](https://router.vuejs.org/). Here is an example using Vue Router 
[Global After Hooks](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks):

```js
import Vue from 'vue';
import Router from 'vue-router';
import { SkillsReporter } from '@skills/skills-client-vue';

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
    SkillsReporter.reportSkill(to.meta.reportSkillId);
  }
});
```  

### React
### Angular
### Pure JavaScript
## Authorization

### Authorization Endpoint

::: tip Note
Please note that Authorization Endpoint is not needed if you are running dashboard in PKI mode. 
:::

Production based installation will require you to implement an authorization endpoint. 
The goal of the endpoint is to authorize a specific user so skills display and skills reporting can be properly secured.    

The authorization endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
stay protected. 
:::

To retrieve temporary client token skill dashboard provides ``/oauth/token`` endpoint and expects the following parameters:
1. Auth Param: ``Client Id`` (from skills dashboard)
1. Auth Param: ``Client Secret`` (from skills dashboard)
1. Data Variable Asking for client credentials:  ``grant_type=client_credentials`` (can be hardcoded)
1. Data Variable specifies which user to retrieve credentials for: ``proxy_user=<user name>`` (specific to user that client display is being loaded for)

This is an implementation of OAuth2 protocol to retrieve temporary client token. To learn more about OAuth2 here are a couple of resources: 
- [https://auth0.com/docs/protocols/oauth2](https://auth0.com/docs/protocols/oauth2)
- [https://oauth.net/2/](https://oauth.net/2/)
- [https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) 

Below are a number of examples of how you could implement authentication endpoint that will be utilized by client display. 

#### Spring Boot Example

Here is a working example of REST endpoint within Spring Boot's application: 

```java
    @CrossOrigin()
    @GetMapping("/users/{user}/token")
    public String getUserAuthToken1(@PathVariable String user) {
        // this is skill's service endpoint that will provide you client token
        String serviceTokenUrl = this.dashboardUrl + "/oauth/token";
        // 1. auth param: client id
        String clientId = this.clientId;
        // 2. auth param: client secret
        String clientSecret = this.secret;
        
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        // 3. Data Variable Asking for client credentials
        body.add("grant_type", "client_credentials");
        // 4. Data Variable specifies which user to retrieve credentials for
        body.add("proxy_user", user);

        RestTemplate oAuthRestTemplate = new RestTemplate();
        oAuthRestTemplate.setInterceptors(Arrays.asList(new BasicAuthenticationInterceptor(clientId, clientSecret)));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        ResponseEntity<String> responseEntity = oAuthRestTemplate.postForEntity(serviceTokenUrl, new HttpEntity<>(body, headers), String.class);
        return responseEntity.getBody();
    }
```

#### CURL Example
Here is an example using CURL (please substitute your values of ``client-id``, ``client-secret``, ``dashboard-url`` and ``user-to-proxy-for``):

```bash
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy-user=user-to-proxy-for"
```


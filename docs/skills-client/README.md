# Skills Client

[[toc]]

## Skills Display

The Skills Display component provides comprehensive visualization of user's skill and progress profile!

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

Step one is to globally configure the Skills client, we suggest including it in the application's entry point
such as main.js or App.vue: 

::: warning Reminder
SkillsConfiguration is a singleton and you only need to provide configuration information once per your application's
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

#### Skills Display

The Skills Display component provides comprehensive visualization of user's skill and progress profile!

![User Skills Image](./Screenshot_2019-06-12_UserSkills.png)

Previously installed ```skills-client-vue``` library is packaged with the Skills Display component. 

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

#### Skill Event Reporting 

The ```skills-client-vue``` library is packaged with the ability to report skill events using either Vue.js directives or the JS utility. 

##### v-skill directive 

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

For a full description of the response object please take a look at the [Programmatic API section of this guide](/dashboard/user-guide/programmatic-interface.html).

There are times when the HTTP call could fail, such as access denied or internal server error.  You can
also listen on the @skills-report-error event to handle these situations.

``` js{4}
<input type="text" 
    v-skills:input="'Thor'" 
    @skills-report-response="onReporterResponse"
    @skills-report-error="onReporterError" />
```

##### Global Event Handling

In many cases it is useful to define a **global** success and/or error handler function rather than defining event listeners on
each element where you include the v-skills directive.  For example, if you wanted to globally display a toaster message if the recording 
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

##### Report Event By Listening to Routes

While the skills client library doesn't provide an automatic way to report skills based on route changes it is quite 
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
Please note that the Authorization Endpoint is not needed if you are running the dashboard in PKI mode. 
:::

Production based installation will require you to implement an authorization endpoint. 
The goal of the endpoint is to authorize a specific user so that the skills display and skills reporting can be properly secured.    

The authorization endpoint produces a user specific temporary client token by utilizing a project's ```Client ID``` and ```Client Secret``` 
(found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ) 

::: warning Reminder
Friendly reminder that you ***must*** keep ```Client ID``` and ```Client Secret``` protected/hidden/private as it serves as the
project's authentication mechanism. That is why these attributes must only be used within your server-side endpoint so they can
stay protected. 
:::

To retrieve a temporary client token skill, the dashboard provides a ``/oauth/token`` endpoint and expects the following parameters:
1. Auth Param: ``Client Id`` (from skills dashboard)
1. Auth Param: ``Client Secret`` (from skills dashboard)
1. Data Variable Asking for client credentials:  ``grant_type=client_credentials`` (can be hardcoded)
1. Data Variable specifies which user to retrieve credentials for: ``proxy_user=<user name>`` (specific to user that client display is being loaded for)

This is an implementation of the OAuth2 protocol to retrieve a temporary client token. To learn more about OAuth2 here are a couple of resources: 
- [https://auth0.com/docs/protocols/oauth2](https://auth0.com/docs/protocols/oauth2)
- [https://oauth.net/2/](https://oauth.net/2/)
- [https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2) 

Below are a number of examples of how you could implement an authentication endpoint that will be utilized by the client display. 

#### Spring Boot Example

Here is a working example of a REST endpoint within a Spring Boot application: 

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

## Programmatic Endpoints

Client side libraries take care of reporting skills and visualizing display results, however there are times when you'd want to call programmatic endpoints directly. 

Some examples include:
- You may not be able to use one of the supported frameworks to reports skills
- You may need to report skill events from server side components
- You are using plain old Javascript support and you want to preview user's level

Public Endpoints:
- [``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``](#report-skill-events-endpoint)
  - *HTTP Methods:* POST, PUT
  - *Purpose:* Report Skill Events
  - *Detailed Description:* [Click Here](#report-skill-events-endpoint)
- [``[Service URL]``/api/projects/``[Project Id]``/level](#retrieve-current-level-endpoint)
  - *HTTP Method:* GET
  - *Purpose:* Retrieve user's current overall level
  - *Detailed Description:* [Click Here](#retrieve-current-level-endpoint)

Both of these endpoints require authentication and user id in order to perform their functions. 
When running in [PKI Mode Installation](/dashboard/install-guide.html#pki-mode) user id will be implicitly retrieved from the certificate. 

In [FORM Mode Installation](/dashboard/install-guide.html#form-mode) OAuth2 protocol is utilized, you will need to:
1. retrieve user specific temporary client token
   - using project's ```Client ID``` and ```Client Secret``` (found in the dashboard under ```Project -> Access -> 'Trusted Client Properties'``` ).
   - this action accomplishes authentication 
   - ``user-to-proxy-for`` is provided in the request which is ``user id``
   - result token encapsulates ``user id`` so the service will know what user to perform this action for 
1. call the endpoint and set the user token on the request

Here is CURL based example: (please substitute your values of ``client-id``, ``client-secret``, ``dashboard-url`` and ``user-to-proxy-for``):
   
```bash
curl client-id:client-secret@dashboard-url/oauth/token -d "grant_type=client_credentials&proxy-user=user-to-proxy-for"
```

and then (please substitute your values of ``access_token_from_first_call``, ``dashboard-url``):
```bash
curl -H "Authorization: access_token_from_first_call" http://dashboard-url/api/projects/FirstProject/level
```

### Report Skill Events Endpoint

If the existing libraries do not suffice or you need to report skill events from your server components (ex. batch, async, streaming, etc..) 
then you can [POST](https://en.wikipedia.org/wiki/POST_(HTTP))/[PUT](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to the endpoint directly in order to report a single skill event:

``[Service URL]``/api/projects/``[Project Id]``/skills/``[Skill Id]``

where
- **Service URL**: Fully qualified URL of the skills service/dashboard, if you are running it locally then something like ``http://localhost:8082`` 
- **Project Id**: Project id for the reported skill
- **Skill Id**: For the reported skill

For example, to report a skill with id ``SkillA`` for a project with id ``ProjectA`` for a locally hosted service POST to the following URL: 

```
http://localhost:8082/api/projects/ProjectA/skills/SkillA
```

#### Endpoint Result Object 

Skill events are applied immediately and atomically based on the currently configured ruleset (via dashboard). 
Endpoint returns an object that depicts how this event affected user's progress. 

Event result object provides:
- status whether skill was applied or rejected
- if skill was rejected, reason for that rejection
- achievements completed by this event including 
  - completion of a skill
  - leveling-up for a project or a subject
  - achievement of a badge or a gem

Here is an example of an event that (1) was successfully applied, (2) completed/achieved that skill, and (3) achieved level 2 for subject named *Cool Subject* 

```json
{
   "success":true,
   "skillApplied":true,
   "explanation":"Skill event was applied",
   "completed":[{
      "type":"Subject",
      "level":2,
      "id":"CoolSubjectId",
      "name":"Cool Subject"
    }, {
      "type":"Skill",
      "level":null,
      "id":"ImportantSkill",
      "name":"This is a very important skill"
    }]
}
```

Here is a reference table for result's fields and their meaning:
| Field | Explanation | 
|:------- |:----------- | 
| success | *type=boolean*: ``true`` if there were no issues reporting the skill, ``false`` is there was a server side failure which would happen if the service is down or you stumbled on a bug |
| skillApplied | *type=boolean*: ``true`` if this event contributed points to the skill; ``false`` if the event didn't contribute points - ``explanation`` field will tell you why (see examples below) |
| explanation | *type=string*: human readable explanation about how this skill event was handled; this field will explain why an event wasn't able to contribute points (see examples below) |
| completed | *type=list*: metadata of a completed item if this event caused user to level-up, complete a skill or earn a badge/gem (just to mention a few) | 
| completed.type | *type=string*: type of the completed item, will be one of these well-known values: ``Overall``, ``Subject``, ``Skill``, ``Badge``. ``Overall`` indicates that user leveled-up for the entire project, ``Subject`` indicates that user leveled-up for a specific subject, ``Skill`` indicates that this skill is fully accomplished, ``Badge`` indicates that badge/gem was earned. |
| completed.level | *type=int*: indicates which level user achieved via this skill event; only applicable to ``Overall`` and ``Subject`` types |
| completed.id | *type=string*: id of the completed item, in case of ``Skill`` type this will be skill id, in case of ``Subject`` type it will be subject id and so on... |
| completed.name | *type=string*: human friendly name of the event and can be used to display to the end user | 
 
Here is an example where skill did not contribute any points because it's already fully accomplished: 
```json
{
   "success":true,
   "skillApplied":false,
   "explanation":"This skill reached its maximum points",
   "completed":[]
}
``` 

Here is an example where skill did not contribute any points because it has unfulfilled dependencies: 
```json
{
   "success":true,
   "skillApplied":false,
   "explanation":"Not all dependent skills have been achieved. Missing achievements for 1 out of 1. Waiting on completion of [FirstProject:skill1Skill].",
   "completed":[]
}
```
Here is an example where skill contributed the points but did not complete anything:
```json
{
   "success":true,
   "skillApplied":true,
   "explanation":"Skill event was applied",
   "completed":[]
}
```

::: tip
You can use this result object to implement a messaging center - to report messages of encouragement to your users as they complete skills, level-up and earn badges. 
:::

### Retrieve Current Level Endpoint

An endpoint that allows to retrieve user's overall level. You may want to use this endpoint to show user's level in the header of your application. 
Keep in mind that it will be user's current level and you will need to check result of [Report Skills Events Endpoint](#report-skill-events-endpoint) in order to discover when that user leveled-up. 

::: warning
If you are using one of the supported frameworks (Vue.js, React, Angular) there is no reason to ever call this endpoint directly. 
You should be utilizing provided reactive component that will retrieve user's current level and automatically update the level if/when that user leveled-up.  
::: 

To get user's current level you can perform GET on:
``[Service URL]``/api/projects/``[Project Id]``/level

where
- **Service URL**: Fully qualified URL of the skills service/dashboard, if you are running it locally then something like ``http://localhost:8082`` 
- **Project Id**: Project id for the reported skill

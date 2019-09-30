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
import SkillsConfiguration from '@skills/skills-client-configuration';

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

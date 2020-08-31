This configuration is used by the Skills Display and Skills Reporting libraries so you won't need to configure those separately.  
 
 ```SkillsConfiguration``` ```configure``` parameters:

| Parameter        |Type| Explanation           |
| ------------- |:-------------- |:-------------|
| serviceUrl    | String (representing URL) | url to the skills service - this is the same url as the dashboard - the User Interface and service endpoints are co-located | 
| projectId      | String | the id of the project that was created in the dashboard; visualize and report skills for the project with this id |   
| authenticator | String ('pki', or url to Authentication endpoint) | url to your [Authentication Endpoint](/skills-client/authorization.html#authentication); if the skills platform is installed in pki mode then you must set this value to ``pki`` |   

SkillsConfiguration supplies the ***afterConfigure()*** method which returns a promise which will be resolved once the **SkillsConfiguration** ***configure*** method
completes.  This allows support, for example, for configuration options to be supplied by the server asynchronously.

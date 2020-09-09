When using Password Auth Mode, the dashboard can also support OAuth2 based authentication. 
Currently, OAuth2 is only supported for Google and GitHub user accounts.  Google and/or GitHub login buttons get automatically added to the Login page when configured.  To configure, you will need a client ID and client Secret credentials.  These credentials can be created and managed through the providers OAuth management pages found here: [Google](https://console.developers.google.com/apis/credentials) and [GitHub](https://github.com/settings/developers).  

Once the client ID and secret are setup, they are enabled by adding the following properties:

```properties
security.oauth2.client.registration.google.client-id: <Google client id here>
security.oauth2.client.registration.google.client-secret: <Google client secret here>
security.oauth2.client.registration.google.redirectUriTemplate: 'http://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'
security.oauth2.client.registration.google.iconClass: fab fa-google

security.oauth2.client.registration.github.client-id: <GitHub client id here>
security.oauth2.client.registration.github.client-secret: <GitHub client secret here>
security.oauth2.client.registration.github.redirectUriTemplate: 'http://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'
security.oauth2.client.registration.github.iconClass: fab fa-github
```
Excluding either one of the Google or GitHub configuration sections will prevent the respective OAuth login button from being added to the Login page. 

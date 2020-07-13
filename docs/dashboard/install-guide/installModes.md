# Installation Modes

The Skill Tree dashboard application supports two separate modes of authentication.  The dashboard can be configured for password based authentication, *or*, PKI based authentication. 

## Password Auth Mode
When configured for password based authentication, users will need to manually create a Skill Tree account by clicking on the "Sign Up" link on the main login page.  After creating an account, users can login using the username and password that was used when creating the account.

Password Auth Mode is enabled by default, or can be explicitly enabled by setting the following property:  

```skills.authorization.authMode=FORM```

### OAuth Support
When using Password Auth Mode, the dashboard can also support OAuth2 based authentication.  Currently, OAuth2 is only supported for Google and GitHub user accounts.  Google and/or GitHub login buttons get automatically added to the Login page when configured.  To configure, you will need a client ID and client Secret credentials.  These credentials can be created and managed through the providers OAuth management pages found here: [Google](https://console.developers.google.com/apis/credentials) and [GitHub](https://github.com/settings/developers).  

Once the client ID and secret are setup, they are enabled by adding the following configuration to the application.yml file:

```
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: <Google client id here>
            client-secret: <Google client secret here>
            redirectUriTemplate: 'http://localhost:8080/{action}/oauth2/code/{registrationId}'
            iconClass: fab fa-google
          github:
            client-id: <GitHub client id here>
            client-secret: <GitHub client secret here>
            redirectUriTemplate: 'http://localhost:8080/{action}/oauth2/code/{registrationId}'
            iconClass: fab fa-github
```
Note: Replace localhost:8080 with the actual hostname and port where the Skill Tree dashboard is running.

Excluding either one of the Google or GitHub configuration sections will prevent the respective OAuth login button from being added to the Login page. 

## PKI Auth Mode
When configured for PKI based authentication, the user's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore. 

To enable PKI Auth Mode, set the following configuration property:
```skills.authorization.authMode=PKI```

Additionally, the dashboard must be configured with an external "User Info Service".  The User Info Service will need to provide REST based endpoints that can return user information for the client certificate's Distinguished Name (DN).  The User Info Service is configured by adding the following configuration properties:

```
skills.authorization.userInfoUri=http://localhost:9090/userInfo?dn={dn}"
skills.authorization.userQueryUri=http://localhost:9090/userQuery?query={query}"
skills.authorization.userInfoHealthCheckUri=http://localhost:9090/actuator/health
```  

Note: Replace localhost:9090 with the actual hostname and port where the user info service is running.

The userInfoUri endpoint must return valid JSON with the following properties for a given user's DN:

``` js
    String firstName
    String lastName
    String nickname
    String email
    String username
    String usernameForDisplay
    String userDn
``` 

The userQueryUri must retun a list of the above JSON objects for user DN's that meet the query criteria.

The userInfoHealthCheckUri endpoint should return the following JSON object:

``` js
{"status":"UP"}

```
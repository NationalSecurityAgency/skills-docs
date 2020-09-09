# Installation Modes

The SkillTree dashboard and service (skills-service) supports two separate modes of authentication.  The dashboard can be configured for password based authentication, *or*, PKI based authentication. 


- [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode): Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)  
- [PKI Auth Mode](/dashboard/install-guide/installModes.html#pki-auth-mode): PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.  
 
:::tip
Definitely use Password Auth Mode if you are not sure which mode is applicable to you.
:::

## Password Auth Mode
When configured for password based authentication, users will need to manually create a SkillTree account by clicking on the "Sign Up" link on the main login page.  After creating an account, users can login using the username and password that was used when creating the account.

Password Auth Mode is enabled by default, or can be explicitly enabled by setting the following property:  

```properties
skills.authorization.authMode=FORM
```

### OAuth Support
<import-content path="/dashboard/install-guide/common/oath2-support.html"/> 

## PKI Auth Mode
PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization.
When configured for PKI based authentication, the user's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.

To enable PKI Auth Mode, set the following configuration property:
```properties
skills.authorization.authMode=PKI
```

PKI Mode requires:
- running ``User Info Service``
- configure client properties to communicate with ``User Info Service``

### User Info Service

In the PKI Mode, authentication performed using PKI certificate - the only information that is extracted from certificate is a Distinguished Name (DN). 
User Info Service provides a way to look up users' metadata by DN, such as name and email. 
It is your responsibility to implement and run User Info Service.   

The User Info Service configured in skills-service by adding the following configuration properties:

<import-content path="/dashboard/install-guide/common/user-info-service-props-endpoints.html"/> 

The User Info Service will need to implement the following REST endpoints that can return user information for the client certificate's Distinguished Name (DN):
- skills.authorization.userInfoUri
- skills.authorization.userQueryUri
- skills.authorization.userInfoHealthCheckUri

#### skills.authorization.userInfoUri endpoint

The endpoint returns user information by DN. The endpoint configured via ``skills.authorization.userInfoUri`` and expects dn parameter, for example ``/userInfo?dn={dn}``.  
This endpoint must return valid JSON with the following properties for a given user's DN:

``` json
{
    "firstName":"<value>",
    "lastFirstName":"<value>",
    "email":"<value>",
    "username":"<value>",
    "userDn":"<value>",
    "usernameForDisplay":"<value>"
}
``` 
- *username:* property is a unique user's identifier; can be a number formatted as a string, ex. ``000001``
- *usernameForDisplay:* this is how user will be display in the SkillTree dashboard

#### skills.authorization.userQueryUri endpoint

This endpoint used by the SkillTree dashboard dropdowns to suggest existing users. 

The endpoint configured by ``skills.authorization.userQueryUri`` and expects query parameter, for example: ``/userQuery?query={query}``.
This endpoint must return a list of the above JSON objects for user DN's that meet the query criteria. For example: 

```json
[
    {
        "firstName":"<value>",
        "lastFirstName":"<value>",
        "email":"<value>",
        "username":"<value>",
        "userDn":"<value>",
        "usernameForDisplay":"<value>"
    },
    {
        "firstName":"<value>",
        "lastFirstName":"<value>",
        "email":"<value>",
        "username":"<value>",
        "userDn":"<value>",
        "usernameForDisplay":"<value>"
    }
]
```
#### skills.authorization.userInfoHealthCheckUri endpoint

Health check endpoint. 
The endpoint configured by ``skills.authorization.userInfoHealthCheckUri`` property should return the following JSON object:

``` json
{"status":"UP"}
```

#### optional 2-way SSL
If your ``User Info Service`` is configured to use 2-way SSL then ``skills-service`` must add the following client authentication properties (Java System Properties):
<import-content path="/dashboard/install-guide/common/user-info-service-props-ssl.html"/>

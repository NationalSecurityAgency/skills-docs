
When using Password Auth Mode, the dashboard can also support OAuth2 based authentication. 
Currently, OAuth2 is only supported for Google, GitHub, GitLab and Azure Active Directory.  
Login buttons get automatically added to the Login page when configured.  
To configure, you will need a client ID and client Secret credentials.  
These credentials can be created and managed through the providers OAuth 
<external-url label="Google" url="https://console.developers.google.com/apis/credentials" />, <external-url label="GitHub" url="https://github.com/settings/developers" />, <external-url label="GitLab" url="https://gitlab.com/-/profile/applications" />, or <external-url label="Azure AD" url="https://portal.azure.com/" /> management pages.  

Once the client ID and secret are set up, they are enabled by adding the following properties:

```properties
# Google
spring.security.oauth2.client.registration.google.client-id=<Google client id here>
spring.security.oauth2.client.registration.google.client-secret=<Google client secret here>
spring.security.oauth2.client.registration.google.redirectUriTemplate='https://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'
spring.security.oauth2.client.registration.google.iconClass=fab fa-google

# GitHub
spring.security.oauth2.client.registration.github.client-id=<GitHub client id here>
spring.security.oauth2.client.registration.github.client-secret=<GitHub client secret here>
spring.security.oauth2.client.registration.github.redirectUriTemplate='https://<SkillTree Dashboard Host>/{action}/oauth2/code/{registrationId}'
spring.security.oauth2.client.registration.github.iconClass=fab fa-github

# GitLab
spring.security.oauth2.client.registration.gitlab.client-id=<GitLab client id here>
spring.security.oauth2.client.registration.gitlab.client-secret=<GitLab  client secret here>
spring.security.oauth2.client.registration.gitlab.redirect-uri=https://<SkillTree Dashboard URL>/{action}/oauth2/code/{registrationId}
spring.security.oauth2.client.registration.gitlab.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.gitlab.clientName=GitLab
spring.security.oauth2.client.registration.gitlab.iconClass=fab fa-gitlab
spring.security.oauth2.client.provider.gitlab.authorization-uri=https://gitlab.com/oauth/authorize
spring.security.oauth2.client.provider.gitlab.token-uri=https://gitlab.com/oauth/token
spring.security.oauth2.client.provider.gitlab.user-info-uri=https://gitlab.com/api/v4/user
spring.security.oauth2.client.provider.gitlab.user-name-attribute=username

# Azure AD
spring.security.oauth2.client.registration.azure.client-id=<Azure App Registration client ID>
spring.security.oauth2.client.registration.azure.client-secret=<Azure App Registration client secret>
spring.security.oauth2.client.registration.azure.redirect-uri=https://<SkillTree Dashboard URL>/{action}/oauth2/code/{registrationId}
spring.security.oauth2.client.registration.azure.iconClass=fab fa-microsoft
spring.security.oauth2.client.registration.azure.scope=openid,profile,email
spring.security.oauth2.client.registration.azure.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.azure.client-name=Azure
spring.security.oauth2.client.registration.azure.provider=azuread
spring.security.oauth2.client.provider.azuread.authorization-uri=https://login.microsoftonline.com/common/oauth2/v2.0/authorize
spring.security.oauth2.client.provider.azuread.token-uri=https://login.microsoftonline.com/common/oauth2/v2.0/token
spring.security.oauth2.client.provider.azuread.user-info-uri=https://graph.microsoft.com/oidc/userinfo
spring.security.oauth2.client.provider.azuread.jwk-set-uri=https://login.microsoftonline.com/common/discovery/keys
```
Excluding a provider configuration section will prevent the respective OAuth login button from being added to the Login page. 

Note: To disable username/password authentication entirely and *only* support OAuth based authentication, set the following configuration property:
```properties
skills.authorization.oAuthOnly=true
```
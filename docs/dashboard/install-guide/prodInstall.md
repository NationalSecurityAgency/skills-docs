# Production Installation

SkillTree encourages a high-availability and horizontally scalable production installation. 
To achieve both of these goals, multiple instances of skills-service must be installed on different nodes/instances. 
Each skills-service node will have the same configuration and is designed to scale-up or scale down horizontally. 
You can add or remove instances any time. 

<Content path="/dashboard/install-guide/common/install-tip.md"/>

There are two installation modes: 

- [Password Auth Mode](/dashboard/install-guide/prodInstall.html#password-auth-mode-install): Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)  
- [PKI Auth Mode](/dashboard/install-guide/prodInstall.html#pki-auth-mode-install): PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.

:::tip
Definitely use Password Auth Mode if you are not sure which mode is applicable to you.
:::

## Password Auth Mode Install

<Content path="/dashboard/install-guide/common/install-type-intro.md"/> 

![Production Installation for Pass Auth Mode](./diagrams/ProdInstall-Pass.jpg) 

<Content path="/dashboard/install-guide/common/services-explanations.md"/>
**4: Spring Session for HTTP Session Management:** Required for a clustered skills-service deployment to persist HttpSession
   - SkillTree uses <external-url label="Spring Session" url="https://docs.spring.io/spring-boot/docs/2.7.0/reference/htmlsingle/#web.spring-session"/> for managing a user’s session information in a clustered environment without being tied to an application container-specific solution.        
:::tip
SkillTree recommends using JDBC to store the HTTP session in a clustered environment due to its simplicity, and since a shared PostgreSQL instance is already required there is no need to run a separate product. 
For example, adding the following two properties is all that is required to utilize the existing SkillTree PostgreSQL database for session management:
```properties
spring.session.store-type=jdbc
spring.session.jdbc.initialize-schema=always
```
:::

**5: Shared keystore for JSON Web Token (JWT) Generation:** Required for a clustered skills-service deployment for JWT generation.  If running your SkillTree server in [https SSL](/dashboard/install-guide/config.html#https-ssl-pass-auth-mode-only) mode, you can use the same keystore file for JWT by adding the following property:
```properties
security.oauth2.jwt.useKeystore=true
```
### Auth Mode skills-service Configuration

<Content path="/dashboard/install-guide/common/prod-install-basic-config.md"/>
             

<Content path="/dashboard/install-guide/common/ssl-props.md"/>

<Content path="/dashboard/install-guide/common/prod-install-basic-jvm-props.md"/>

## PKI Auth Mode Install
<Content path="/dashboard/install-guide/common/install-type-intro.md"/>

![Production Installation for Pass PKI Mode](./diagrams/ProdInstall-Pki.jpg)

<Content path="/dashboard/install-guide/common/services-explanations.md"/>
**4: User Info Service** - Provides user information based on PKI's Distinguished Name (DN)
   - You are responsible for implementing this service, please visit the [User Info Service](/dashboard/install-guide/installModes.html#user-info-service) section to learn more.
   - Make sure to run it in High Availibility mode 

### PKI Mode skills-service configuration

<Content path="/dashboard/install-guide/common/prod-install-basic-config.md"/>

Enable PKI mode install:
```properties
skills.authorization.authMode=PKI
```

<Content path="/dashboard/install-guide/common/two-way-ssl-props.md"/>

``User Info Service`` client properties:
<Content path="/dashboard/install-guide/common/user-info-service-props-endpoints.md"/>

If ``User Info Service`` utilizes 2-way SSL then add the following client authentication properties (Java System Properties):
<Content path="/dashboard/install-guide/common/user-info-service-props-ssl.md"/>

<Content path="/dashboard/install-guide/common/prod-install-basic-jvm-props.md"/>

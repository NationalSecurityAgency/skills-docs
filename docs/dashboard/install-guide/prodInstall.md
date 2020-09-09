# Production Installation

SkillTree encourages a high-availability and horizontally scalable production installation. 
To achieve both of these goals, multiple instances of skills-service must be installed on different nodes/instances. 
Each skills-service node will have the same configuration and is designed to scale-up or scale down horizontally. 
You can add or remove instances any time. 

<import-content path="/dashboard/install-guide/common/install-tip.html"/>

There are two installation modes: 

- [Password Auth Mode](/dashboard/install-guide/prodInstall.html#password-auth-mode-install): Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)  
- [PKI Auth Mode](/dashboard/install-guide/prodInstall.html#pki-auth-mode-install): PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.

:::tip
Definitely use Password Auth Mode if you are not sure which mode is applicable to you.
:::

## Password Auth Mode Install

<import-content path="/dashboard/install-guide/common/install-type-intro.html"/> 

![Production Installation for Pass Auth Mode](./diagrams/ProdInstall-Pass.jpg) 

<import-content path="/dashboard/install-guide/common/services-explanations.html"/>
**4: Redis:** Required for clustered skills-service deployment to persist HttpSession  
   - [Redis](https://redis.io/)'s installation, setup and management is outside of the scope of this section, please visit [https://redis.io/](https://redis.io/)        
 
### Auth Mode skills-service Configuration

<import-content path="/dashboard/install-guide/common/prod-install-basic-config.html"/>
             

<import-content path="/dashboard/install-guide/common/ssl-props.html"/>

<import-content path="/dashboard/install-guide/common/prod-install-basic-jvm-props.html"/>

## PKI Auth Mode Install
<import-content path="/dashboard/install-guide/common/install-type-intro.html"/>

![Production Installation for Pass PKI Mode](./diagrams/ProdInstall-Pki.jpg)

<import-content path="/dashboard/install-guide/common/services-explanations.html"/>
**4: User Info Service** - Provides user information based on PKI's Distinguished Name (DN)
   - You are responsible for implementing this service, please visit the [User Info Service](/dashboard/install-guide/installModes.html#user-info-service) section to learn more.
   - Make sure to run it in High Availibility mode 

### PKI Mode skills-service configuration

<import-content path="/dashboard/install-guide/common/prod-install-basic-config.html"/>

Enable PKI mode install:
```properties
skills.authorization.authMode=PKI
```

<import-content path="/dashboard/install-guide/common/two-way-ssl-props.html"/>

``User Info Service`` client properties:
<import-content path="/dashboard/install-guide/common/user-info-service-props-endpoints.html"/>

If ``User Info Service`` utilizes 2-way SSL then add the following client authentication properties (Java System Properties):
<import-content path="/dashboard/install-guide/common/user-info-service-props-ssl.html"/>

<import-content path="/dashboard/install-guide/common/prod-install-basic-jvm-props.html"/>

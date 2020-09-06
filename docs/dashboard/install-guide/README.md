# Overview

This section focuses on installing the SkillTree platform. 
Once the service installed you will have access to the management dashboard and API. 

<import-content path="/dashboard/install-guide/common/install-tip.html"/>

There are two official distributions: 

- Jar-based: hosted on [GitHub](https://github.com/NationalSecurityAgency/skills-service/releases/latest)
- Docker: hosted on [DockerHub](https://hub.docker.com/r/skilltree/skills-service)

[Quick Start](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) shows how to install and start each type of the distribution. 

The next consideration would be to select installation mode. 
SkillTree platforms supports two modes:

- [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode): Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)  
- [PKI Auth Mode](/dashboard/install-guide/installModes.html#pki-auth-mode): PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.
 
:::tip
Definitely use Password Auth Mode if you are not sure which mode is applicable to you.
:::
Please visit [Installation Modes](/dashboard/install-guide/installModes.html) section to learn more. 

So what's next: 
- [Production Installation](/dashboard/install-guide/prodInstall.html): A detailed documentation for production-grade installation.
- [Quick Start](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service): Become familiar with starting service, dashboard and what client-lib integration looks like.
- [Configuration](/dashboard/install-guide/config.html): SkillTree configuration options. 


   


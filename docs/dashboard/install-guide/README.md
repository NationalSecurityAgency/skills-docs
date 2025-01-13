# Overview

This section focuses on installing the SkillTree platform. 
Once the service is installed you will have access to the management dashboard and API. 

<Content path="/dashboard/install-guide/common/install-tip.md"/>

There are two official distributions: 

- Jar-based: hosted on <external-url label="GitHub" url="https://github.com/NationalSecurityAgency/skills-service/releases/latest" />
- Docker: hosted on <external-url label="DockerHub" url="https://hub.docker.com/r/skilltree/skills-service" />

[Quick Start](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service) shows how to install and start each distribution type. 

Once a distribution has been selected, the next consideration is to select an installation mode. 
The SkillTree platform supports two modes:

- [Password Auth Mode](/dashboard/install-guide/installModes.html#password-auth-mode): Accounts created and managed by SkillTree and/or delegated to OAuth2 authentication provider (ex. GitHub, Google, etc..)  
- [PKI Auth Mode](/dashboard/install-guide/installModes.html#pki-auth-mode): PKI Mode is for intranets where organizations utilize PKI with 2-way SSL certificates to implement authentication and authorization. User's browser must be setup with a personal PKI certificate and that certificate must be issued by a Certificate Authority trusted in the dashboard application's truststore.
 
:::tip
Use Password Auth Mode if you are not sure which mode is applicable to you.
:::
Please visit the [Installation Modes](/dashboard/install-guide/installModes.html) section to learn more. 

So what's next? 
- [Quick Start](/dashboard/install-guide/quickStart.html#_2-install-start-dashboard-and-service): Become familiar with starting the service, the dashboard and what client-lib integration looks like.
- [Development Installation](/dashboard/install-guide/devInstall.html): Run the dashboard and the service on your test and/or development environments.
- [Production Installation](/dashboard/install-guide/prodInstall.html): Detailed documentation for production-grade installations.
- [Configuration](/dashboard/install-guide/config.html): SkillTree configuration and catalog of options. 


   


<Content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.md"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/js/configExamplePki.md"
    form-path="/skills-client/common/skillsConfiguration/js/configExampleForm.md"/>

<Content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.md"/>

 ``` js
 SkillsConfiguration.afterConfigure()
    .then(() => {
        // SkillsConfiguration.configure has been called 
    });

 axios.get('my/configuration/endpoint')
    .then((result) => {
          SkillsConfiguration.configure(result.data);
    });
 ```

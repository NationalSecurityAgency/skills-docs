<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.html"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/ng/configExamplePki.html"
    form-path="/skills-client/common/skillsConfiguration/ng/configExampleForm.html"/>

<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.html"/>

 ``` js{3-6}
 import { SkillsConfiguration } from '@skilltree/skills-client-ng';
 
 SkillsConfiguration.afterConfigure()
   .then(() => {
     // SkillsConfiguration.configure has been called 
   });

 axios.get('my/configuration/endpoint')
   .then((result) => {
      SkillsConfiguration.configure(result.data);
    });
 ```

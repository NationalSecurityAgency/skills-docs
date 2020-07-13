<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.html"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/react/configExamplePki.html"
    form-path="/skills-client/common/skillsConfiguration/react/configExampleForm.html"/>

<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.html"/>

 ``` js{3-6}
 import { SkillsConfiguration } from '@skills/skills-client-react';
 
 SkillsConfiguration.afterConfigure()
   .then(() => {
     // SkillsConfiguration.configure has been called 
   });

 axios.get('my/configuration/endpoint')
   .then((result) => {
      SkillsConfiguration.configure(result.data);
    });
 ```
e

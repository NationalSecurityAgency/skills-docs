<Content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.md"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/react/configExamplePki.md"
    form-path="/skills-client/common/skillsConfiguration/react/configExampleForm.md"/>

<Content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.md"/>

 ``` js{3-6}
 import { SkillsConfiguration } from '@skilltree/skills-client-react';
 
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

<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.html"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/js/configExamplePki.html"
    form-path="/skills-client/common/skillsConfiguration/js/configExampleForm.html"/>

<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.html"/>

 ``` js{7-10}
<head>
...
    <script type="module">

    import { SkillsConfiguration } from './assets/js/@skills/skills-client-js/dist/skills-client-js.esm.min.js'

     SkillsConfiguration.afterConfigure()
        .then(() => {
            // SkillsConfiguration.configure has been called 
        });
    
     axios.get('my/configuration/endpoint')
        .then((result) => {
              SkillsConfiguration.configure(result.data);
        });
...    
</head>
 ```

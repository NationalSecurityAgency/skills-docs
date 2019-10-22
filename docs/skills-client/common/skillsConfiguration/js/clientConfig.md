<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationHeader.html"/>

<form-and-pki 
    pki-path="/skills-client/common/skillsConfiguration/js/configExamplePki.html"
    form-path="/skills-client/common/skillsConfiguration/js/configExampleForm.html"/>

<import-content path="/skills-client/common/skillsConfiguration/skillsConfigurationParameters.html"/>

 ``` js{6-9}
<head>
...
    <script type="text/javascript" src="assets/@skills/skills-configuration/dist/SkillsConfiguration.umd.min.js">

    <script type="text/javascript">
         SkillsConfiguration.default.afterConfigure()
            .then(() => {
                // SkillsConfiguration.configure has been called 
            });
        
         axios.get('my/configuration/endpoint')
            .then((result) => {
                  SkillsConfiguration.default.configure(result.data);
            });
    </script>
...    
</head>
 ```

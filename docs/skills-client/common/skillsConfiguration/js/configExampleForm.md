``` js
<head>
...
    <script type="text/javascript" src="assets/@skills/skills-configuration/dist/SkillsConfiguration.umd.min.js">

    <script type="text/javascript">
        SkillsConfiguration.default.configure({
            serviceUrl: 'http://localhost:8080',
            projectId: 'movies',
            authenticator: 'http://localhost:8091/api/users/user1/token',
        });
    </script>
...    
</head>
```

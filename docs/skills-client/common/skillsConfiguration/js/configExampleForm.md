``` js
<head>
...
    <script type="text/javascript" src="assets/js/@skills/skills-client-js/dist/skills-client-js.umd.min.js">

    <script type="text/javascript">
        SkillsClient.SkillsConfiguration.configure({
            serviceUrl: 'http://localhost:8080',
            projectId: 'movies',
            authenticator: 'http://localhost:8091/api/users/user1/token',
        });
    </script>
...    
</head>
```

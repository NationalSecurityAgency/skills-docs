::: danger Stop

***SkillsConfiguration.logout()*** must be called when a user logs out of your 
application. SkillsConfiguration caches the authenticator end point which is more 
than likely specific to the currently logged in user.
:::

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

        // User logs out
        logoutButton.onClick(() => {
            // VERY IMPORTANT
            SkillsConfiguration.default.logout();
        });
    </script>
...    
</head>
```

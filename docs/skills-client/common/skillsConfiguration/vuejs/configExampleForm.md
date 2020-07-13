::: danger Stop

***SkillsConfiguration.logout()*** must be called when a user logs out of your 
application. SkillsConfiguration caches the authenticator end point which is more 
than likely specific to the currently logged in user.
:::

``` js
import { SkillsConfiguration } from '@skilltree/skills-client-vue';

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'movies',
  authenticator: 'http://localhost:8091/api/users/user1/token',
});

 . . . .

// User logs out
logoutButton.onClick(() => {
    // VERY IMPORTANT
    SkillsConfiguration.logout();
});
```

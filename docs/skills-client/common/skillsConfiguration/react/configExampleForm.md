::: danger Stop

***SkillsConfiguration.logout()*** must be called when a user logs out of your 
application. SkillsConfiguration caches the authenticator end point which is more 
than likely specific to the currently logged in user.
:::

``` js
import { SkillsConfiguration } from '@skilltree/skills-client-react';

SkillsConfiguration.configure({
  serviceUrl: 'http://localhost:8080',
  projectId: 'your-project-id',
  authenticator: 'http://<your-app-hosts>/api/users/user1/token',
});

 . . . .

// User logs out
logoutButton.onClick(() => {
    // VERY IMPORTANT
    SkillsConfiguration.logout();
});
```

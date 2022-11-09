# Angular Integration

To install client libraries:

``` js
npm install @skilltree/skills-client-ng --save
```

This JS library contains:
1. Skills Configuration - Global configuration used by Skills utilities.
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using JS utility

## Skills Configuration

<import-content path="/skills-client/common/skillsConfiguration/ng/clientConfig.html"/>

## Skills Display

<import-content path="/skills-client/common/skillsDisplayIntro.html"/>

The previously installed ```skills-client-ng``` library is packaged with the Skills Display component. 

First, import the module into your app.module.ts file:

```js
import { SkillsDisplayModule } from '@skilltree/skills-client-ng'

@NgModule({
  declarations: [
    ShowSkillsComponent,
  ],
  imports: [SkillsDisplayModule],
})
export class YourAppModule {
}
```
Now that the SkillsDisplayModule has been imported, Usage is trivial:
1. Import SkillsDisplay component: ```import { SkillsDisplay } from '@skilltree/skills-client-ng';```
1. Utilize SkillsDisplay component: ```<skills-display/>```

Here is a full example of an Angular single-file component that uses SkillsDisplay:

``` js{7}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <skills-display/>
    </div>
  `,
})
export class ShowSkillsComponent {
  constructor() { }
}
``` 

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplay component:

``` js
<skills-display [version]="currentVersion"/>
```

 SkillsDisplay component properties:

<import-content path="/skills-client/common/skillsDisplayArguments.html"/>

### Route changed event <since project="skills-client" version="3.3.0" />

Each time a user navigates within the Skills Client Display, the `handleRouteChanged` event is emitted containing the new path that was navigated to.  This can be useful if the hosting application displays a breadcrumb and would like to update the current location within the Skills Client Display component.

``` js{7,14-16}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <skills-display [handleRouteChanged]="skillsDisplayRouteChanged">
    </div>
  `,
})
export class ShowSkillsComponent {
  constructor() { }
  
  skillsDisplayRouteChanged = (newPath: string) => {
     console.log(`New Skills Display path: [${newPath}]`);
  }
}
```

#### Programmatic navigation <since project="skills-client" version="3.3.1" />

The internal route of the Skills Client Display component can be changed by passing the desired path to the `navigate()` method.  This can be useful if the hosting application displays a breadcrumb and would like to navigate to different locations within the Skills Client Display component by clicking a breadcrumb link for example.

``` js{7,14-15,19-21}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <button (click)="navigate()">Navigate</button>
        <skills-display/>
    </div>
  `,
})
export class ShowSkillsComponentExample {

  @ViewChild('skillsDisplay')
  skillsDisplay: ShowSkillsComponent;

  constructor() { }
  
  navigate() {
    this.skillsDisplay.navigate('/subjects/subj0')
  }
}
```

### Skills Display Options Object

<import-content path="/skills-client/common/skillsDisplayOptionsObject.html"/>

### Skills Display Theme Object

<import-content path="/skills-client/common/slillsDisplayTheme.html"/>

## Skills Level Display

The ```skills-client-ng``` library also includes a convenient component to display the users's current overall level in the application. This can be
used to display the user's current level consistently throughout the application, for example, in the application header.

::: warning Reminder
Before using the SkillsLevel component, you must make sure to initialize SkillsConfiguration
with your system settings.  
:::

First, import the module into your app.module.ts file:
```js
import { SkillsLevelModule } from '@skilltree/skills-client-ng'

@NgModule({
  declarations: [
    ShowSkillsLevelComponent,
  ],
  imports: [SkillsLevelModule],
})
export class YourAppModule {
}
```
then simply declare the skill-level component where appropriate
```js{7}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <skills-level/>
    </div>
  `,
})
export class ShowSkillsLevelComponent {
  constructor() { }
}
``` 

## Skill Event Reporting 

The ```skills-client-ng``` library is packaged with the ability to report skill events using either Angular directives or the JS utility. 

### skilltree directive 

Import the directive in your app.module.ts file: 

```js
import { SkilltreeModule } from '@skilltree/skills-client-ng'

@NgModule({
  imports: [SkilltreeModule],
})
export class YourAppModule {
}
```

Now you can use the skill-tree directive to report skill events, the following example will report an event for a skill with id 'IronMan' when the button is clicked:

``` js
<button [skilltree]="'IronMan'">Report Skill</button>
```

The ```skilltree``` directive supports both ```<button>``` and ```<input>``` HTML node types. For a ```<button>``` element, the ```click``` event will trigger the skill event reporting and on ```<input>``` elements the ```input``` event will trigger the skill event reporting for the passed in skillId.  Here is an example of an input event: 

``` js
<input type="text" [skilltree]="\'Thor\'"><input/>
```  

The Skills service add-skill-event endpoint responds with a comprehensive metatdata object describing how that skill influenced the user's skills posture. 
The ```skilltree``` directive provides a way to capture that result via a callback method, for example: 

``` js{3}
<input type="text" 
    [skilltree]="'Thor'" 
    (skills-report-success)="onReporterResponse"/>
```

and then let's say:

``` js
onReporterResponse(response) {
   // do what you need with response object
},
```

a response object may look something like this:
<import-content path="/skills-client/common/skillsReporter/responseObject.html"/>

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

There are times when the HTTP call could fail, such as access denied or internal server error.  You can
also listen on the ```skills-report-error``` event to handle these situations.

``` js{4}
<input type="text" 
    [skilltree]="'Thor'" 
    (skills-report-success)="onReporterResponse"
    (skills-report-error)="onReporterError" />
```

### SkillsReporter JS utility 
  
If you find that the ```skilltree``` directive is not meeting your needs then there is always the JS utility to report skills: 

``` js
import { SkillsReporter } from '@skilltree/skills-client-ng';

SkillsReporter.reportSkill(skillId)
    .then((res) => {
        // res = metatdata describing how that skill influenced user's skills posture
    })
    .catch((err) => {
        // err = object describing why this error occrued
    });
```

### Global Event Handling

<import-content path="/skills-client/common/skillsReporter/globalEventHandling.html"/>

Here is a full example that registers and handles an event by displaying a toast message: 

``` js
export class ToastExampleComponent 
    registerToDisplayProgress() {
        const myGlobalSuccessHandler = (result) => {
          if (result.completed) {
            result.completed.forEach((completedItem) => {
              this.handleEvent(completedItem);
            });
          }
        };
        SkillsReporter.addSuccessHandler(myGlobalSuccessHandler);
    }

    handleEvent(completedItem) {
        let title = '';
        let msg = '';
        switch (completedItem.type) {
        case 'Overall':
          title = `Level ${completedItem.level}!!!!`;
          msg = `Wow! Congratulations on the Overall Level ${completedItem.level}!`;
          break;
        case 'Subject':
          title = 'Subject Level Achieved!!';
          msg = `Impressive!! Level ${completedItem.level} in ${completedItem.name} subject!`;
          break;
        case 'Skill':
          title = 'Skill Completed!!';
          msg = `Way to complete ${completedItem.name} skill!!!`;
          break;
        case 'Badge':
          title = `${completedItem.name}!!!`;
          msg = `You are now a proud owner of ${completedItem.name} badge!!!`;
          break;
        default:
          title = 'Completed!!';
          msg = `Way to finish ${completedItem.name}!`;
        }
        
        this.displayToast(msg, title);
    }
}
```
Please note that the displayToast implementation is omitted as that will be specific to your application. 

### SkillsReporter Configuration

<import-content path="/skills-client/common/skillsReporter/reporterConfiguration.html"/>

### Report Event By Listening to Routes

While the skilltree client library doesn't provide an automatic way to report skills based on route changes it is quite 
easy to implement if you are using [Angular Router](https://angular.io/guide/router). Here is an example using Vue Router 
[Router Events](https://angular.io/guide/observables-in-angular#router):

```ts
import { Router, NavigationEnd  } from '@angular/router';
constructor(private router:Router) {
  this.routeEvent(this.router);
}
routeEvent(router: Router){
  router.events.subscribe(e => {
    if(e instanceof NavigationEnd) {
      const reportSkillId = router.routerState.snapshot.root.params['reportSkillId']
      if (reportSkillId) {
        SkillsConfiguration.afterConfigure()
          .then(() => {
            SkillsReporter.reportSkill(reportSkillId);
          });    
      }
    }
  });
}
```  

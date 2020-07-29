# React Integration

To install client libraries:

``` js
npm install @skilltree/skills-client-react --save
```

This JS library contains:
1. Skills Configuration - Global configuration used by Skills utilities.
1. Skills Display - Visualize your website users' skill profile
1. Skill Event Reporting - Report skill events using JS utility

## Skills Configuration
::: warning Reminder
Before using the SkillsDisplay, you must make sure to initialize SkillsConfiguration
with your system settings. 
:::
<import-content path="/skills-client/common/skillsConfiguration/react/clientConfig.html"/>

## Skills Display

<import-content path="/skills-client/common/skillsDisplayIntro.html"/>

The previously installed ```skills-client-react``` library is packaged with the Skills Display component. 

Usage is trivial:
1. Import the SkillsDisplay component: ```import { SkillsDisplay } from '@skilltree/skills-client-react';```
1. Utilize the SkillsDisplay component: ```<SkillsDisplay/>```

Here is a full example of a React component that uses SkillsDisplay: 

``` js{3,8,11}
import { SkillsDisplay } from '@skilltree/skills-client-react';

const MyComponent = (props) => {
    return (
        <div className="myComp">
            <SkillsDisplay />
        </div>
    );
};

export default MyComponent;
``` 

If you are taking advantage of [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you need to provide the version property to 
the SkillsDisplay component:

``` js
<SkillsDisplay version="1"/>
```

SkillsDisplay component properties:

<import-content path="/skills-client/common/skillsDisplayArguments.html"/>

### Skills Display Options Object

<import-content path="/skills-client/common/skillsDisplayOptionsObject.html"/>

### Skills Display Theme Object

<import-content path="/skills-client/common/slillsDisplayTheme.html"/>

## Skills Level Display
The ```skills-client-react``` library also includes a convenient component to display the users's current overall level in the application. This can be
used to display the user's current level consistently throughout the application, for example, in the application header.
::: warning Reminder
Before using the SkillsLevel component, you must make sure to initialize SkillsConfiguration
with your system settings.  
:::
``` js
import { SkillsLevel } from '@skilltree/skills-client-react';
import Button from "react-bootstrap/Button"

const MyLevelDisplay = (props) => {
    return (
      <Button variant="primary">
          <SkillsLevel projectId={props.projectId}/>
      </Button>
    );
};

export default MyLevelDisplay;

```

## Skills Event Reporting

The ```skills-client-react``` library also includes the SkillsReporter utility used to report skills events.

### SkillsReporter JS Utility
::: warning Reminder
Before using the SkillsReporter utility, you must make sure to initialize SkillsConfiguration
with your system settings.  See the [SkillsConfiguration Documentation](/skills-client/react.html#skills-configuration) 
:::

Import the SkillsReporter into your project and integrate it into actions within your UI.

``` js
import { SkillsReporter } from '@skilltree/skills-client-react';

const MyComponent = () => {
    const reportSkill = (skillId) => {
        SkillsReporter.reportSkill(skillId)
            .then((response) => {
                //do something with the response
            });
    };
    
    return (
        <div className="myApp">
            <button onClick={() => reportSkill('buttonClickedSkill')}>Click Me!</button>
        </div>
    );
};

export default MyComponent;

```

SkillsReporter.reportSkill returns a metadata response object describing how that skill action influenced the user's skills posture.  A response object may look something like this:
<import-content path="/skills-client/common/skillsReporter/responseObject.html"/>

For a full description of the response object please see [Endpoint Result Object](/skills-client/endpoints.html#endpoint-result-object).

### Global Event Handling

<import-content path="/skills-client/common/skillsReporter/globalEventHandling.html"/>

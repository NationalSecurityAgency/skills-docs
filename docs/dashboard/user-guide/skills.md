# Skills

Projects are composed of Subjects which are made of Skills and a single skill defines a training unit within the gamification framework. 
To complete a skill users may need to perform the same action multiple times - repetition is important for retention after all. A Skill definition specifies
how many times a skill has to be performed and each occurrence is called a Skill Event.   

To create a skill, navigate to ``Project -> Subject`` then click on ``Skill +``, the following skill properties can be specified:

| Property | Explanation | 
|:------- |:----------- | 
| Skill Name | Display name of the skill |
| Skill ID | Skill ID that will be used to report skill events |
| Point Increment | Number of points added for each skill event; used in conjunction with the 'Occurrences to Completion' property | 
| Occurrences to Completion | Number of successful occurrences to fully accomplish this skill; used in conjunction with the 'Point Increment' property |
| [Time Window](/dashboard/user-guide/skills.html#time-window) | Used in conjunction with the 'Max Occurrences Within Window' property; once this Max Occurrences is reached, points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). When 'Time Window' is disabled skill events are applied immediately."
| Max Occurrences Within Window | Used in conjunction with the [Time Window](/dashboard/user-guide/skills.html#time-window) property; Once this Max Occurrences is reached, points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). |    
| Version | *(Optional)* Utilize [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) to support running multiple versions of client software |
| Description | *(Optional)* Description of how to perform this skill. The Description property supports markdown. 
| Help URL/Path | *(Optional)* URL pointing to a help article further depicting information about this skill or capability. Please note that this property works in conjunction with the [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) project setting| 

::: tip
To calculate the total points that completion of a particular skill will give a user:

Total Points = Point Increment * Occurrences to Completion
:::

##### Best Practices

- "Repetition is the mother of learning" - use the ``Occurrences to Completion`` property in conjunction with the [Time Window](/dashboard/user-guide/skills.html#time-window) property to balance between requiring repetition of an action and spacing out that repetition 
- For Help Url - configure the [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) for the project and then enter a path relative to that root. It will then be an easy change if the location of help articles changes.   

## Time Window

Time Window is a powerful feature that limits awarding of points to a maximum number of occurrences within the configured time span. 
This feature provides a balance between requiring repetition of an action and spacing out that repetition. 

> “Repetition is the mother of learning, the father of action, which makes it the architect of accomplishment.” - Zig Ziglar  


When designing a gamification profile, the Time Window must be considered in conjunction with the ``Occurrences to Completion`` property. 
For example, you may want to require 30 occurrences to complete a skill but only up to 5 occurrences within a 24 hour window. 
This means that it will take a user at a minimum, 6 days to complete this skill. Here are the properties for this hypothetical example:
-  *Occurrences to Completion*: 30
-  *Time Window*: 24 hours 0 minutes
-  *Max Occurrences Within Window*: 5

This is just a fictitious example and values will depend on your gamification needs.  

You can also disable the Time Window property of a Skill, which will force each event to be applied immediately (up to ``Occurrences to Completion``). To disable, uncheck the checkbox next to the Time Window property.   

## Skills Versioning

Skill versioning is a mechanism that allows addition of the new skills without affecting existing software running with an older skill profile.
Versioning is mostly pertinent to the Display Libraries that visualize the skill profile for the version they were declared with. 

Here are simple steps to enable Skills Versioning in your application:
1. When creating a skill specify a target version (always last deployed version + 1)
   - Version selection can be found on the top-right in the create/edit skills modal
1. When initializing the display component, provide the latest target version for that instance. 
   - [Vue.Js](/skills-client/#vue-js)  
   - [React](/skills-client/#react)
   - [Angular](/skills-client/#angular)
   - [Pure JavaScript](/skills-client/#pure-javascript)


Let's walk through a simple scenario to get a better understanding of how Skill Versioning operates. 

We have developed software and are releasing a ``version 0`` that integrates skills display and event reporting using the Vue.js library. 
In the initial release, all of the skills will be created with ``version 0``. The integrated display component will then be initialized with ``version 0``,
like this:
``` js
<skills-display version="0"/>
```
This software instance will then get deployed and the skill profile for ``version 0`` is displayed. 

Now we are working on the next release which we will label as ``version 1``. 
Any skill created with ``version 1`` will not be visible in the already deployed software, configured to visualize skills with ``version 0``
The version will need to be updated in the integrated display component to use ``version 1``, like this:
 ``` js
 <skills-display version="1"/>
 ```
The updated software running the ``version 1`` profile will expose skills declared with both ``version 0`` and ``version 1``.
Both versions of software can then run simultaneously and each version will present its own gamification profile. 
::: tip Please Note
Please note that skills from previous versions are automatically included, so version 3 will contain skills declared with versions 3, 2, 1 and 0  
:::   

::: warning Important
Conveniently, the Skills Dashboard provides a way to view the [Client Display](/dashboard/user-guide/users.html#client-display) for a specific version. 
Navigate to ``Project -> User -> Client Display`` and then select a previous version on the drop-down located above the client display.  
:::

Limitations: 
- Deletes are not directly supported. To remove a skill, please perform the following procedure:
  1. update all the client code that is reporting events for the skill that is to be deleted
  1. deploy the version that is not using the skill
  1. delete the skill using the dashboard
- Edits to skills are not versioned and will be immediately visible to any display with this or earlier versions. This is mostly likely the behavior you want as any edit to a skill is a fix or an improvement.
- Versioning is only applicable to new skills and doesn't apply to operations done on subjects, badges or other items within the gamificiation framework.  
  
     
## Manually Add Skill Event

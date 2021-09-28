# Skills

Projects are composed of Subjects which are made of Skills and a single skill defines a training unit within the gamification framework. 
To complete a skill, users may need to perform the same action multiple times - repetition is important for retention after all. A Skill definition specifies
how many times a skill has to be performed. Each occurrence is called a Skill Event.   

![SkillTree Skills Page](../../screenshots/admin/page-skills.png)

To create a skill, navigate to ``Project -> Subject`` then click on ``Skill +``, the following skill properties can be specified:

![SkillTree Skills Page](../../screenshots/admin/modal-skills-new_skill.png)

| Property | Explanation | 
|:------- |:----------- | 
| Skill Name | Display name of the skill |
| Skill ID | Skill ID that will be used to report skill events |
| Point Increment | Number of points added for each skill event; used in conjunction with the 'Occurrences to Completion' property | 
| Occurrences to Completion | Number of successful occurrences to fully accomplish this skill; used in conjunction with the 'Point Increment' property |
| [Time Window](/dashboard/user-guide/skills.html#time-window) | Used in conjunction with the 'Max Occurrences Within Window' property; once this Max Occurrences is reached, points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). When 'Time Window' is disabled skill events are applied immediately."
| Max Occurrences Within Window | Used in conjunction with the [Time Window](/dashboard/user-guide/skills.html#time-window) property; Once this Max Occurrences is reached, points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). |
| [Self Reporting](/dashboard/user-guide/self-reporting.html) | (Optional) When checked Self Reporting is enabled for this skill. The type of ``Approval Queue`` or ``Honor System`` can then be selected. Please visit [Self Reporting](/dashboard/user-guide/self-reporting.html) to learn more. | 
| Version | *(Optional)* Utilize [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) to support running multiple versions of client software |
| Description | *(Optional)* Description of how to perform this skill. The Description property supports markdown. 
| Help URL/Path | *(Optional)* URL pointing to a help article providing further information about this skill or capability. Please note that this property works in conjunction with the [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) project setting| 

::: tip
To calculate the total points that completion of a particular skill will give a user:

Total Points = Point Increment * Occurrences to Completion
:::

# Copy Skill
To use an existing Skill as a template for a new Skill, you can use the [copy skill button](./screenshots/copy_skill_20210618.png) button available on a Skill row displayed on the Subject page. 
This will open a new Skill dialog populated with the details of the selected copy-from Skill. The name and id will be prepended with ``Copy of`` which can be changed
before the new Skill is saved. Saving this dialog will create a new Skill that falls within the same Subject as the copy-from Skill.

##### Best Practices

- "Repetition is the mother of learning" - use the ``Occurrences to Completion`` property in conjunction with the [Time Window](/dashboard/user-guide/skills.html#time-window) property to balance between requiring repetition of an action and spacing out that repetition (for example, prevent users from spamming an action in one sitting to max out a Skill by setting a Time Window of 1-8 hours)
- Help Url - configure the [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) for the project and then enter a path relative to that root. It will then be an easy change if the location of help articles changes.   

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

Skill versioning is a mechanism that allows the addition of new skills without affecting existing software running with an older skill profile.
Versioning is mostly pertinent to the Display Libraries that visualize the skill profile for the version they were declared with. 

Here are simple steps to enable Skills Versioning in your application:
1. When creating a skill, specify a target version (always last deployed version + 1)
   - Version selection can be found on the top-right in the create/edit skills dialogued
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
Any skill created with ``version 1`` will not be visible in the already deployed software, configured to visualize skills with ``version 0``.
The version will need to be updated in the integrated display component to use ``version 1``, like this:
 ``` js
 <skills-display version="1"/>
 ```
The updated software running the ``version 1`` profile will expose skills declared with both ``version 0`` and ``version 1``.
Both versions of software can then run simultaneously and each version will present its own gamification profile. 
::: tip Please Note
The skills from previous versions are automatically included, so version 3 will contain skills declared with versions 3, 2, 1 and 0  
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
In the event that a Skill is not automatically reported (Skills such as "Attend Presentation" or "Submit a Success Story" are examples of Skill events that might require manual addition), Skill Events can be manually added through the Dashboard.
1. Locate the Subject that contains the Skill for which you would like to add an event
1. Select ```Manage``` for the located Subject
1. Locate the Skill and select ```Manage```
    * The ```Filter``` box on the top left of the Skills table can be used to quickly locate a particular Skill
1. Select ```Add Event``` from the Navigation menu on the left
1. Enter the ```User Id``` of the user for whom the Skill Event will be added (note that the field supports type-ahead to locate existing users)
1. Enter a date on which the Skill Event occurred (this will default to today's date)
1. Select ```Add```

## Incremental Changes
This section explain how various scenarios are handled when skills are modified/removed/added 
*AFTER* your application users already earned points, completed skills, achieved levels and obtained badges.

::: tip Overall Strategy
1. Never take away achieved levels and/or earned badges. 
1. Re-calculate users' points when skill's points and/or occurrences are mutated. 
:::

*SCENARIO:* **Point Increment is increased** :arrow_up:

Recall that *Point Increment* is the number of points applied for each skill event. 
Delta in *Point Increment* will then be added for any of the already performed skill events. 
For example if a user performed 2 skill events and *Point Increment* changed from 5 points to 8 points (delta = 3) then 
user will be awarded additional 6 (3 * 2) points. 
If these additional points place a user into the next level then that level will be awarded the next time an event is reported for that user. 

*SCENARIO:* **Point Increment is increased** :arrow_down:

Recall that *Point Increment* is the number of points applied for each skill event. 
Delta in *Point Increment* will then be substructed for any of the already performed skill events. 
For example if a user performed 2 skill events and *Point Increment* changed from 10 points to 6 points (delta = 4) then 
8 (4 * 2) points will be substructed from the user's points.

*SCENARIO:* **Occurrences to Completion is increased** :arrow_up:

Recall that *Occurrences to Completion* is the number of successful occurrences to fully accomplish a skill. 
Any users that have already completed the skill based on the lower number of occurrences will now have an opportunity to complete new/additional occurrences and earn those points. 

Additional occurrences will cause a completed skill to be worth additional points which in turn may shift the points profile of a user, technically placing certain users outside of their currently achieved level. 
If so, those users will *NOT* lose their current level (per our overall strategy) but rather it will take them a bit longer to achieve the next level.  

If the increase to occurrences was made for a skill that belongs to a badge, then any user that has already earned that badge will retain the badge achievement. 
     
*SCENARIO:* **Occurrences to Completion is decreased** :arrow_down:

Recall that *Occurrences to Completion* is the number of successful occurrences to fully accomplish a skill. 
Points are subtracted for users that already achieved the removed occurrences. 

If the removal causes a user to qualify for achievement of the edited skill, then that completed skill is awarded to the user. 
Subsequently if the completion of that skill completes a badge then the badge is awarded to that user.   

Any previously achieved levels and badges are retained even if the removed occurrences contributed to the achievement of those levels and/or badges. 

*SCENARIO:* **Skill is removed**

For a given user, if this was the last skill to be completed before a badge is achieved then the badge is awarded to that user.

*SCENARIO:* **Skill is added**

New skill will equate to extra points which in turn may shift points profile which then may technically place certain users outside of their currently earned level. 
If so, those users will *NOT* lose their current level (per our overall strategy) but rather it will take them a bit longer to achieve the next level.  
 

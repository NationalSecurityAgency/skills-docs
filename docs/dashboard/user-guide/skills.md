# Skills

Project is composed of Subjects which are made of Skills and a single skill defines a training unit within the gamification framework. 
To complete a skill users may need to perform the same action multiple times - repetition is important after all. Skill definition specifies
how many times a skill has to be performed and each occurrence is called Skill Event.   

To create a skill navigate to ``Project -> Subject`` then click on ``Skill +``, the following skill properties can be specified:

| Property | Explanation | 
|:------- |:----------- | 
| Skill Name | Display name of the skill |
| Skill ID | Skill ID that will be used to report skill events |
| Point Increment | Number of points added for each skill event; used in conjunction with 'Occurrences to Completion' property | 
| Occurrences to Completion | Number of successful occurrences to fully accomplish this skill; used in conjunction with 'Point Increment' property |
| [Time Window](/dashboard/user-guide/skills.html#time-window) | Used in conjunction with 'Max Occurrences Within Window' property; once this Max Occurrences reached points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). When 'Time Window' is disabled skill events are applied immediately."
| Max Occurrences Within Window | Used in conjunction with [Time Window](/dashboard/user-guide/skills.html#time-window) property; Once this Max Occurrences reached points will not be incremented until outside of the configured [Time Window](/dashboard/user-guide/skills.html#time-window). |    
| Version | (Optional) Utilize [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) to support running multiple versions of client software |
| Description | (Optional) Description of how to perform this skill. Description supports markdown. 
| Help URL/Path | (Optional) URL pointing to a help article further depicting information about this skill or capability. Please note that this property works in conjunction with [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) | 

::: tip
To calculate total points that a particular skill will provide:

Total Points = Point Increment * Occurrences to Completion
:::

##### Best Practices

- "Repetition is the mother of learning" - use ``Occurrences to Completion`` property in conjunction with [Time Window](/dashboard/user-guide/skills.html#time-window) property to balance between requiring repetition of an action and spacing out that repetition 
- For Help Url - configure [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) for the project and then enter path relative to that root. It will then be an easy change if location of help article changes.   

## Time Window

Time Window is a powerful feature that limits awards of point to a max occurrences within the configured time span. 
This feature provides balance between requiring repetition of an action and spacing out that repetition. 

> “Repetition is the mother of learning, the father of action, which makes it the architect of accomplishment.” - Zig Ziglar  


When designing gamification profile Time Window must be considered in conjunction with ``Occurrences to Completion`` property. 
For example you may want to require 30 occurrences to complete a skill but only up to 5 occurrences within 24 hour window. 
This means that it will take a user at a minimum 6 days to complete this skill. Here are the properties for this hypothetical example:
-  *Occurrences to Completion*: 30
-  *Time Window*: 24 hours 0 minutes
-  *Max Occurrences Within Window*: 5

Obviously this is just a fictitious example and values will depend on your gamification needs.  

You can also disable Time Window all together which will force each event to be applied immediately (up to ``Occurrences to Completion``). To disable uncheck checkbox next to the Time Window.   

## Skills Versioning

## Manually Add Skill Event

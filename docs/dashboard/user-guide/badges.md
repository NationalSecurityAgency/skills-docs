# Badges

Badges add another facet to the overall gamification profile and allows you to further reward your users by providing these prestigious symbols. 
Badges are a collection of skills and when all of the skills are accomplished that badge is earned. 

Creating badges is simple: 
1. Navigate to ``Project -> Badges`` and click ``Badge +``
   - You can (and should) assign an [Icon](/dashboard/user-guide/icons.html) to your badge.
1. Once a badge is created you can assign existing skills to that badge under ``Project -> Badge -> Skills``
 
| Property | Explanation | 
|:------- |:----------- | 
| Badge Name | Display name of the badge |
| Badge ID | The badge ID |
| Description | *(Optional)* Description, can be used to describe how to achieve the badge or what it's significance is. The Description property supports markdown.
| Help URL/Path | *(Optional)* URL pointing to a help article further documenting information about this badge. Please note that this property works in conjunction with the [Root Help Url](/dashboard/user-guide/projects.html#setting-root-help-url) project setting|
| Enable Gem Feature | *(Optional)* Enables the [Gem](#Gem) feature, allowing badges to be only available within a specific time window

## Gem

Gems are special badges that are only available within a configured time window. 
Users must complete all of the gem's skills within that window in order to earn this precious stone!  

You can enable and configure a gem within the badge edit dialog by selecting ``Enable Gem Feature``. 


## Global Badges

Global Badges are a special kind of badge that is made up of a collection of skills and/or levels that span across project boundaries.  

Global Badges consist of:
- *Project's Levels*: Project levels that a user must achieve in order to earn the badge
- *List of Skills*: Skills from any project
 
When all of the configured skills and levels are accomplished, that badge is achieved.
Global Badges are specifically used to reward users for achieving skills that involve multiple projects, 
and can only be created by Dashboard users that have the [Supervisor](/dashboard/user-guide/users.html#user-roles) role.  

Creating global badges is simple: 
1. Navigate to ``Home -> Badges`` and click ``Badge +``
   - You can (and should) assign an [Icon](/dashboard/user-guide/icons.html) to your badge.
1. Once a badge is created you can assign existing skills and/or project levels to that badge.  
  - To assign skills,  ``Home -> Badge -> Manage -> Skills``
  - To assign project levels,  ``Home -> Badge -> Manage -> Levels``

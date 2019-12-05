# Overview

Dashboard is a web-based user interface that enables creation and management of applications' training profile. 
It also offers a window into corporate visibility of application expertise and provides metrics and various visualizations.  
Dashboard is used by application administrators/integrators as well as supervisors. 
 
![Dashboard with Integrated Application Image](./diagrams/DashboardWithIntegratedApp.jpg)

If your organization is running Skills as a Service platform then you will be provided with its URL to get started. 
If you are installing Skills as a Service platform from scratch (see [Install Guide](/dashboard/install-guide/)) then... well you just know where it's running. 
   
## Building Training Profile

If you are integrating gamification training into your application you will first need to build a training profile. 
You will first create a brand new project. 
Projects are composed of Subjects which are made of Skills and a single skill defines a training unit within the gamification framework. 

Consider the following items when designing your training profile:

1. [Subjects](/dashboard/user-guide/subjects.html): Subjects are a way to group and organize skill definitions and skill training profile.
   - Do your best to create subjects in multiples of 3. On a larger screen, the Skills Display renders up-to 3 subjects per row so 3, 6, 9, 12, etc.. will look the best. 
   - Design subjects to encourage your users to be able to achieve sub-specialty of your application. Subjects implement [levels model](/dashboard/user-guide/levels.html) so users are awarded subject level achievements.
1. [Skills](/dashboard/user-guide/skills.html): Skill defines a training unit within the gamification framework.
   - To complete a skill, users may need to perform the same action multiple times - repetition is important for retention after all. Each occurrence is called a Skill Event.
   - Description is important and can be a place where training steps are documented. 
   - Help URL can always be used to point to additional resources.  
1. [Levels](/dashboard/user-guide/levels.html): Levels are users' achievement path - the overall goal of the application usage is to achieve the highest level. 
   - Levels are tracked for the entire project as well as for each subject which provides users many ways to progress forward.
   - The Skills dashboard supports two flexible ways to manage levels: Percentage Based (default) and Point based. If you are not sure which to go with stick with the default.    
1. [Badges](/dashboard/user-guide/badges.html): Badges add another facet to the overall gamification profile and allows you to further reward your users by providing these prestigious symbols. 
   - Badges are a collection of skills and when all of the skills are accomplished that badge is earned.
1. [Global Badges](/dashboard/user-guide/badges.html#global-badges): Global Badges are a special kind of badge that is made up of a collection of skills and/or levels that span across project boundaries.
1. [Dependencies](/dashboard/user-guide/dependencies.html): Dependencies add another facet to the overall gamification profile, which forces users to complete skills in a specified order.
1. [Cross-Project Dependencies](/dashboard/user-guide/dependencies.html#cross-project-dependencies): Cross-Project Dependencies facilitate cross-application training and enable users to become domain experts across several applications. 
   - These dependencies are critical when actions are required to be performed in more than one tool in order to complete a task.

::: tip
Consider creating skills that won't be reported automatically but rather will require users to contact the application owner who will then 
[Manually add the Skill](/dashboard/user-guide/skills.html#manually-add-skill-event). Why would you do that? If you want to encourage
customer interaction such as collecting success stories. In fact ``Report A Success Story`` can be a skill of its own!
:::


## Browser Support

Skills as a Service is supported on all major browsers since the following versions:

<browser-support />

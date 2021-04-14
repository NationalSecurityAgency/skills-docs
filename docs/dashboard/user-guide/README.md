# Overview

At the heart of the SkillTree platform is the SkillTree dashboard - a web-based user interface. 
The SkillTree Dashboard provides these main functions: 
1. Enables creation and management of an applications' [training profile](/dashboard/user-guide/#building-training-profile)
1. Visualizes user's [Progress and Ranking](/dashboard/user-guide/progress-and-ranking.html)
1. Provides corporate visibility of application expertise and offers metrics and various visualizations.  

![Skills Platform Overview Image](../../overview/diagrams/SkillTreePlatformOverview.png)

::: tip
- If your organization is running the SkillTree platform, then you will be provided with its URL to get started. 
- If you are installing the SkillTree platform from scratch (see [Install Guide](/dashboard/install-guide/)) then... well you just know where it's running. 
:::

Dashboard encompasses two main views: 

- [Progress and Ranking](/dashboard/user-guide/progress-and-ranking.html): A single point of access for training profiles available to the user as well as user's current progress and ranking
- [Admin View](/dashboard/user-guide/admin-view.html): Create and manage training profiles for one or more projects

By default, the [Progress and Ranking](/dashboard/user-guide/progress-and-ranking.html) view is the landing page but can be changed to the [Admin View](/dashboard/user-guide/admin-view.html) via [Preferences Page](/dashboard/user-guide/settings.html#preferences)

## Building Training Profile

When integrating gamification a training into your application, you will first need to build a training profile. 
The first step is to create a brand-new project. 
Projects are composed of Subjects which are made of Skills, and a single skill defines a training unit within the gamification framework. 

Consider the following items when designing your training profile:

1. [Subjects](/dashboard/user-guide/subjects.html): Subjects are a way to group and organize skill definitions. They provide a theme for a group of skills and can have their own specific achievement levels.
   - Do your best to create subjects in multiples of 3. On a larger screen, the Skills Display renders up-to 3 subjects per row so 3, 6, 9, 12, etc., will look the best. 
   - Design subjects to encourage your users to be able to achieve sub-specializations within your application. Subjects implement a [levels model](/dashboard/user-guide/levels.html) so users are awarded subject level achievements.
1. [Skills](/dashboard/user-guide/skills.html): A Skill defines a single training unit within the gamification framework.
   - To complete a skill, users may need to perform the same action multiple times - repetition is important for retention after all. Each occurrence is called a Skill Event.
   - Description is optional and can be used to document training steps or additional references or information related to the skill. 
   - Help URL can be used to point to additional resources.
1. [Self Reporting](/dashboard/user-guide/self-reporting.html): Self Report is a feature that empowers users to mark skills as completed directly in the SkillTree dashboard OR through the embedded Skills Display component. Training profiles can be crafted consisting of:
   - only self-reported skills OR
   - a mix of self-reported skills and skills that are reported programmatically OR
   - a project could have no self-reported skills at all
1. [Levels](/dashboard/user-guide/levels.html): Levels are users' achievement path - the overall goal of the training profile is to encourage users to achieve the highest level. 
   - Levels are tracked for the entire project as well as for each subject which provides users many ways to progress forward, as well as frequent positive reinforcement opportunities.
   - The Skills dashboard supports two ways to manage levels: Percentage Based (default) and Point based. If you are not sure which to go with stick with the default.    
1. [Badges](/dashboard/user-guide/badges.html): Badges add another facet to the overall gamification training profile and allow you to further reward your users by providing these prestigious symbols of achievement. 
   - Badges are a collection of skills and when all of the skills are completed that badge is awarded.
1. [Global Badges](/dashboard/user-guide/badges.html#global-badges): Global Badges are a special kind of badge that is made up of a collection of skills and/or levels that span across project boundaries.
1. [Dependencies](/dashboard/user-guide/dependencies.html): Dependencies add another facet to the overall gamification training profile, which forces users to complete skills in a specified order.
1. [Cross-Project Dependencies](/dashboard/user-guide/dependencies.html#cross-project-dependencies): Cross-Project Dependencies facilitate cross-application training and enable users to become domain experts across several applications. 
   - These dependencies are critical when actions are required to be performed in more than one tool in order to complete a task.

::: tip
Consider creating skills that won't be reported automatically but rather will require users to contact the application owner who will then 
[Manually add the Skill](/dashboard/user-guide/skills.html#manually-add-skill-event). Why would you do that? If you want to encourage
customer interaction such as collecting success stories. In fact ``Report A Success Story`` can be a skill of its own!
:::

## Browser Support

SkillTree is supported on all major browsers since the following versions:

<browser-support />

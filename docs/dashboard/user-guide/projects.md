# Projects

A Project is an overall container that represents the skills ruleset for a single application with gamified training. 
Project's administrator(s) manage training skills definitions, subjects, levels, dependencies and other attributes that make up an application's training profile.

Creating a project is simple, all you need is a name. While the project id is required, it will be automatically generated (you can optionally override the generated id).

A Project is composed of Subjects which are made up of Skills and a single skill defines a training unit within the gamification framework. 
Once the project is created you have an empty canvas to compose and manage your application's training profile. 
Generally the next step is to create a number of subjects and then start constructing skills definitions within those subjects.

The Dashboard user that creates a project is automatically granted the role of administrator of that project. Project administrators enjoy the following benefits: 

| Function | Explanation | 
|:------- |:----------- | 
| [Subjects](/dashboard/user-guide/subjects.html) | Add, edit or remove subjects | 
| [Skills](/dashboard/user-guide/skills.html)  | Add, edit or remove skills definitions | 
| [Access Management](/dashboard/user-guide/access-management.html) | Assign or remove project's administrators | 
| [Badges](/dashboard/user-guide/badges.html) | Add, edit or remove project's badges |
| [Levels](/dashboard/user-guide/levels.html) | Customize number of levels and their attributes |
| [Dependencies](/dashboard/user-guide/dependencies.html) | Specify the order of skills completion. For example skill A must be completed before skill B can be attempted | 
| [Cross-project Dependencies](/dashboard/user-guide/cross-project-deps.htm) | Create and manage skill dependencies across multiple projects which practically equates to cross-application skills |
| Stats | Charts and graph. These are page specific - project, subject, badge, and user will have stats specifically for those pages |       
| [Settings](/dashboard/user-guide/projects.html#settings) | Project level settings |   

## Settings

To manage and view project-wide settings navigate to ``Project -> Settings``. The following project-level settings are available: 

#### Setting: Use Points For Levels

``Use Points For Levels`` - switch between 2 level management strategies: 
1. Percentage based - levels are calculated based on configured percentages of total available points (ex. Level 1 = 10% of total points)
1. Point based - project admins specify start and end number of points for each level

By default the Percentage based strategy is selected, changing ``Use Points For Levels`` setting to ``true`` enables Point Based explicit level point management. To learn more please see the [Levels](/dashboard/user-guide/levels.html) section.

::: warning
You must define at least 100 points for a project before switching to point-based levels management
:::

#### Setting: Root Help Url

Skill definition's ``Help Url/Path`` will be treated relative to this ``Root Help Url``. For example, if 

- ``Root Help Url`` =  ``http://www.myHelpDocs.com``
-  and skill definition ``Help Url`` = ``/importan/article`` 

then the client display will append ``Root Help Url`` and  ``Help Url`` to produce ``http://www.myHelpDocs.com/importan/article``.

::: tip
If ``Help Url`` starts with ``http`` or ``https`` then ``Root Help Url`` will NOT be utilized.
:::  


 

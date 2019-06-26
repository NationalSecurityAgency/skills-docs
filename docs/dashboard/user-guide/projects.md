# Projects

Project is an overall container that represents skills' ruleset for a single application with gamified training. 
Project's administrator(s) manage training skills definitions, subjects, levels, dependencies and other attributes that make up application's training profile.

To create a project all you need is to specify a name. While project id is required it will be automatically generated which you can optionally override.

Project is composed of Subjects which are made of Skills and a single skill a smallest training unit within the gamification framework. 
Once the project is created you have an empty canvas to compose and manage your trainign profile. 
Generally the next step is to create number of subjects and then start constructing skills definitions within those subjects.

Dashboard user that creates a project is automatically granted a role of administrator of that project. Project administrators enjoy the following benefits: 

| Function | Explanation | 
|:------- |:----------- | 
| [Subjects](/dashboard/user-guide/subjects.html) | Add, edit or remove subjects | 
| [Skills](/dashboard/user-guide/skills.html)  | Add, edit or remove skills definitions | 
| [Access Management](/dashboard/user-guide/access-management.html) | Assign or remove project's administrators | 
| [Badges](/dashboard/user-guide/badges.html) | Add, edit or remove project's badges |
| [Levels](/dashboard/user-guide/levels.html) | Customize number of levels and their attributes |
| [Dependencies](/dashboard/user-guide/dependencies.html) | Specify the order of skills completion. For example skill A must be completed before skill B can be attempted | 
| [Cross-project Dependencies](/dashboard/user-guide/cross-project-deps.htm) | Provides ability to crate and manage skill dependencies across multiple projects which practically equates to cross-application skills |
| Stats | Charts and graph. These are page specific - project, subject, badge, and user will have stats specifically for those pages |       
| [Settings](/dashboard/user-guide/projects.html#settings) | Project level settings |   

## Settings

Navigate to Project -> Settings: these are project-wide settings.

| Settings | Explanation |
|:-------- |:------------|
| Use Points For Levels | By default levels are calculated based on configured percentages of total available points (ex. Level 1 = 10% of total points). Switching this property to true enables explicit level point management - project admins specify start and end number of points for each level. To learn more please see [Levels](/dashboard/user-guide/levels.html) section. | 

 

# Skill Groups <since project="skills-service" version="1.8.0" />


Skill Groups is a way to group/organize skills under a subject. 
Projects are composed of Subjects which are made of either [Skills](/dashboard/user-guide/skills.html) or Skill Groups. 
A group is a collection of 2 or more skills that you want to keep and achieve together.
A group is achieved when all of its skills are fully completed. 
Alternatively, a group can be configured to only require ``N`` number of the group's skills. 

::: tip Partial Requirement Example
If let's say a group has ``5`` skills, you can configure it to only require ``3`` skills.
In this case, when any of the ``3`` skills under that group are completed then the group achievement is awarded!
:::

![Skills Group Screenshot](../../screenshots/admin/page-skills-group.png)

To create a group, navigate to ``Project -> Subject`` then click on ``Group +``, the following group properties can be specified:

![New Skills Group Modal](../../screenshots/admin/modal-new-group.png)

| Property | Explanation | 
|:------- |:----------- | 
| Group Name | Display name of the skill |
| Group ID | Group ID that will be used to identify this group |
| Description | *(Optional)* Description of how to perform this skill. The Description property supports markdown.

After a group is created then the skills can be added to a group. To add Skills to the group expand the group and click on ``Add Skill To Group`` button. 
This will bring up a new skill dialog, to learn more about skills and their attributes please visit the [Skills Section](/dashboard/user-guide/skills.html). 

::: tip 
A Group by default is not visible on the Skills Display and will be labeled with the ``Disabled`` tag. To make the group visible click on ``Go Live`` button.
To learn more please visit [Group's Lifecycle Section](/dashboard/user-guide/skills-groups.html#groups-visibility-lifecycle) below.
:::

## Groups Visibility Lifecycle

When a group is initially created it will have ``0`` skills and will be tagged as ``Disabled``. 
Skills can then be added to the group but it will continue to be disabled until ``Go Live`` button is clicked and the action is confirmed. 

Disabled group has the following behavior and attributes:
- Group is NOT visible in the ``Skills Display``
- Skill events cannot be reported for any skill under the group

Disabled state allows project administrators to fully customize groups before exposing them for user consumption. 
There is really only 1 requirement in order to ``Go Live`` is that the group must have at least 2 skills. 
Once a group is switched to a ``Live`` sate it can never return to the ``Disabled`` state.  

## Partial Skill Requirement

Groups have an option to only require ``N`` skills out of the total available number of skills.
If let's say a group has ``5`` skills, you can configure it to only require ``3`` skills.
In this case, when any of the ``3`` skills under that group are completed then the group achievement is awarded!

Please note that in order to modify number of the required skills ``Point Increment`` and ``Point Occurrences`` attributes must match for all the skills under that group. 
If ``Point Increment`` and ``Point Occurrences`` are not aligned then the SkillTree dashboard will present a sync dialog to seamlessly align these attributes. 
The reason for this requirement is that the group's skills points contribute to the subject's and project's points and with a partial number of skill requirement 
there would be no consistent way to calculate points if they didn't align between the skills in that group.   

::: tip Partial Requirement Example
Let's say a group has ``5`` skills with the partial skill requirement of ``3``. If each skill is ``10`` points then the group has ``30`` total points. 
Same ``30`` points will contribute to the subject's and project's points as well. Although user can complete all ``5`` skills only ``30`` points will be awarded. 
:::
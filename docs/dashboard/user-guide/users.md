# Users

This section describes different types of dashboard users and their corresponding roles and permissions. 
It will also touch on access management, and a way to view the Skill Display through your users' eyes.  

## User Roles

### Project Admin
Project admins are assigned to a particular project. 
The Project admin role enables management of the training profile for that project such as creating and modifying subjects, skills, badges, etc..    

### Root
The Root role is meant for administering the dashboard itself and not any specific project. Users with the Root role can view the Inception project. 
Users with the Root role can also assign Supervisor and Root roles to other dashboard users. 

Please visit the [Security Setting Section](/dashboard/user-guide/settings.html#security-settings) to learn how to assign this role.

### Supervisor
The Supervisor role allows users to manage Global Badges. Only users with the Root role can assign the Supervisor role.     

Please visit the [Security Setting Section](/dashboard/user-guide/settings.html#security-settings) to learn how to assign this role.

### User Agreement <since project="skills-service" version="1.5.0" :is-block="true"/>
Users with the Root user role can configure a User Agreement that all dashboard users must acknowledge before being permitted to use any features of the Dashboard application.
User Agreement configuration can be accessed by clicking on the user settings icon on the top right of the screen and selecting ```Settings -> System```. The User Agreement setting configuration supports Markdown.
Once a User Agreement has been configured, all Dashboard users will be required to acknowledge the User Agreement after logging in. 

::: tip
Note that if the content of the User Agreement is changed, Dashboard users who acknowledged a previous version will be required to acknowledge the updated version.
::: 

## Skills Display / Client Display

You can see what the skills profile and progress display would like for a particular user by navigating to a specific user page in the dashboard - ``Project -> Users -> Select a User -> Client Display``. 
This is the same exact pluggable [Skills Display](/skills-client/#skills-display) that you would be embedding into your application so it can provide the ability to view the [Skills Display](/skills-client/#skills-display) through that user's point of view.  
The client display will depict the project skills profile and user's points at that exact moment. 

::: tip 
We suggest visiting the [Skills Display](/skills-client/#skills-display) view often while building a skill profile to better understand how your users will view the gamification profile and their progress. 
Optionally you can also [Add Events Manually](/dashboard/user-guide/skills.html#manually-add-skill-event) to better understand the client display.  
::: 

If your gamification profile is utilizing [Skills Versioning](/dashboard/user-guide/skills.html#skills-versioning) then you can view 
what the [Skills Display](/skills-client/#skills-display) would look like for a specific version by selecting a different version in the drop-down located on the top-right of the page. 

## Performed Skills

To see a history of a user's performed skill events please visit ``Project -> Users -> Select a User -> Performed Skills``. Furthermore you have the ability to remove a skill event if needed.  

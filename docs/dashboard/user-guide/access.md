# Access Management
The Project Access menu supports adding or removing Project Administrators, and inviting users to join a project if the project has been configured as an Invite Only project as well as revoking a user's access.

## Project Admininstrator
Project Administrator's can modify all 
aspects of a Project, up to and including deleting a Project. The initial creator of a Project will automatically be assigned
as the Project Administrator, however, any number of Project Administrators may be assigned. A Project Administrator role is necessary to approve
self-reported Skill requests. Depending on the installation mode, a user may need to have a dashboard account before 
being added as a Project Administrator.

## Invite Only <since project="skills-service" version="2.0.0" />
If the project has been configured with a visibility of ``Private Invite Only``, invite and access revocation are controlled here.

::: tip
The ``Project User: Invite`` and ``Project User: Revoke`` user interface controls are only displayed if the project has been configured with a [Visibility](/dashboard/user-guide/projects.html#setting-visibility) of Invite Only
:::

### Invite Users <since project="skills-service" version="2.0.0" />
Users are invited to join a project that has been configured as ``Private Invite Only`` via email. Invite recipients are added via the ``Email Addresses`` input field and can be added one at a time or by using a comma or semicolon separated list
or by entering one email address per line in the ``Email Addresses`` input field (email addresses in the form of ``<some@email.address> Firstname Lastname`` are also supported). Once email addresses have been entered into the ``Email Addresses`` input field, 
they must be added as recipients using the ``Add Recipients`` button. These steps may be performed several times before the ``Send Invites`` button is pressed at which point all accumulated email addresses will be sent an email with a unique, one-time use invite to join the project.

Project invites may be configured to expire if not accepted within a certain time frame. Please note that the expiration configuration is only applicable to how long the invite code itself is valid. Once a user has accepted a valid invite code and joined the project, the invite expiration
configuration is no longer relevant for that user.

::: tip
Each email recipient receives a unique project invite code, therefore distribution lists or group email accounts should not be added as recipients as only the first person to claim the invite will be able to use it.
:::

::: warning Important
To invite users to join a ``Private Invite Only`` project, the SkillTree instance MUST be configured to support email. Please see [Email Server Settings](/dashboard/user-guide/settings.html#email-settings) for more information.
:::

### Revoke Access
Once a user has accepted an invitation to join a project configured for Invite Only visibility, that user will show up under the Revoke Access table at which point their access can be revoked and they will no longer have access to the project.

::: tip
When a user's access to an Invite Only project has been revoked, only that user's access is removed. Their achievement history is retained in case they are granted access in the future or the project's visibility is changed.
:::

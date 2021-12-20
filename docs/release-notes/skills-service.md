# Skills Service Release Notes

This page documents high-level release notes for [SkillTree Centralized Service](https://github.com/NationalSecurityAgency/skills-service) which encompasses the dashboard and API. 

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

#### 1.8.4
<release-date date="Dec. 2021" />
- Upgraded log4j to address [CVE-2021-45105](https://nvd.nist.gov/vuln/detail/CVE-2021-45105)
- Option to verify email ownership when dashboard accounts are created

#### 1.8.3
<release-date date="Dec. 2021" />
- Upgraded log4j to address [CVE-2021-44228](https://www.cisa.gov/uscert/ncas/current-activity/2021/12/13/cisa-creates-webpage-apache-log4j-vulnerability-cve-2021-44228)
- Added support for storing HTTP Session via JDBC

#### 1.8.2
<release-date date="Dec. 2021" />
- Added ability to display support options; configurable support options are displayed in the header and footer of the dashboard
- Bug Fix: Editing a skill decrements # of skills in the subject's stats

#### 1.8.1
<release-date date="Dec. 2021" />
- Removed username/password login features when `skills.authorization.oAuthOnly=true`
- Improved how external links display within markdown
- Upgraded skills-client libraries to v3.4.1 in dashboard
- Bug fixes and general usability improvements

#### 1.8.0
<release-date date="Nov. 2021" />
- Implemented Skills Groups - brand new way to define and manage skills
  - Ability to group 2 or more skills under a group
  - Group has a name and a description and its own progress
  - A group can be configured with partial skill requirements (ex. 2 out of 5 skills are required to achieve this group)
  - Groups are managed via Dashboard and visualized in the Skills Display embeddable component and Progress and Ranking views. 
- Added project-level customization for the term ``Level`` in the Skills Display embeddable component and Progress and Ranking views
- For a project, added ability to search and navigate directly to a skill across all the subjects
- Made the email body expandable for Contact Users and Contact Admins pages
- Improved usability of self-report skill request and rejection messages
- Added ability to modify project's level requirement for a Global Badge 
- Bug fixes
 
#### 1.7.1
<release-date date="Nov. 2021" />
- Bug fix: Project and/or subject level-based achievements may not be awarded when a skill is edited or removed   

#### 1.7.0  
<release-date date="Sep. 2021" />
- Implemented store and display of aporoval history for self-report skills
- Added ``Badges`` display for ``Progress and Ranking`` views
  - shows all global badges and project badges within the customized ``My Projects`` 
  - displays earned and available badges as well as current badge progress
- Bug fixes      

#### 1.6.0  
<release-date date="Aug. 2021" />
- Added ability to drag-and-drop projects, subjects and badges in order to arrange their display order
- New project ``Contact Users`` page that enables project administrators to send emails to all or a sub-set of the project's user base
  - Ability to contact users based on project/subject level achievement or specific skill/badge achievements
  - Supports markdown for the body of the email
- New ``Contact Admins`` page 
  - Only available to users with the ``ROOT`` access role
  - Email all project administrators 
  - Supports markdown for the body of the email
- Redesigned ``Progress and Ranking`` views
  - Empowered users to customize the projects displayed to only those of interest to the user
  - Added drag-and-drop ability to arrange project cards
  - Navigation within Skills Display component is now reflected in the dashboard's breadcrumb navigation bar
- Added ability to theme Skill Display's title card
- Added ability to assign tags to users and to generate metrics/charts based on those tags
- Bug fixes

#### 1.5.3  
<release-date date="Ju,. 2021" />
- Bug Fix: Added locking for project expiration/deletion/notification

#### 1.5.2  
<release-date date="Jul. 2021" />
- Bug Fixes

#### 1.5.1  
<release-date date="Jul. 2021" />
- Bug Fixes

#### 1.5.0  
<release-date date="Jun. 2021" />
- Implemented Leaderboard in the SkillsDisplay views
  - Displays ``Top 10`` users OR ``10 Around Me`` users
  - Users can Opt-Out in the Dashboard Settings from Leaderboard participation
  - Administrators can Opt-out all of the project administrators from Leaderboard participation 
- Added SkillTree brand to the title section of the SkillsDisplay component
- Added breadcrumb to the title section of the SkillsDisplay component
- Implemented ability to configure User Agreement for dashboard users; when configured, User Agreement is presented at first login. Changes to User Agreement will cause it to be re-displayed to any users who accepted the previous version.
- Implemented workflow to remove unused projects
  - (1) discover unused, (2) notify administrators (3) remove if action is not taken
- Improved look-and-feel for projects, subjects and badges, navigation, and metrics cards
- Improve admin's projects page display and latency to better handle many projects per user
- Improve usability of initiating an edit of an item (project, subject, skill or badge)
- Ability to copy an existing skill
- Bug fixes and CI improvements
 

#### 1.4.0  
<release-date date="Apr. 2021" />
- implemented ``Progress and Ranking``page  - *new default* landing page
  - visualize user's progress and ranking across all of the integrated projects
  - provide capability to drill down to each project and view its ``Skills Display`` 
  - added the ability to customize landing page per user between ``Progress and Ranking`` and the original ``Project Admin`` view
  - project admin can place the project into production mode via the ``Settings`` page which will then display that project on the ``Progress and Ranking`` page  
- added ``Self Reporting`` capability
  - ``Skills Display`` presents an "I did it" button for skills with self-reporting enabled
  - project admins can configure self reported skills as either ``Honor System`` or ``Requires Approval``
  - implemented new ``Self Report`` project page to manage approval requests
  - email notifications are sent when points are requested, approved, and rejected
- implemented accessibility testing and drastically improved accessibility compliance
  - automated accessibility score generated on every push to master and prominently displayed on GitHub
- added storage of ALL user events related to a skill id, whether applied or not
  - updated metrics to utilize ALL events
  - added ``Post Achievement`` metrics to depict whether a skill is utilized after achievement
- created new ``Issues`` project page; exposed errors when a *skill id* is reported that does not exist in the project's definition
- added ability to configure custom email html header and footer in the dashboard's settings
- added ``Admin`` stamp in the header to clearly indicate when using Administrative portion of the dashboard
- implemented additional ``Skills Display`` component theme options
- replaced vue-table-2 with the vue-bootstrap Table Component

#### 1.3.1
<release-date date="Jan. 2021" />
- Enabled cross-origin resource sharing (CORS) on the ``/app/userInfo`` endpoint.

#### 1.3.0
<release-date date="Dec. 2020" />
- Revamped project-level and cross-project visualizations and metrics
- Updated Logo
- Enhanced look-and-feel of the dashboard application
- Added full OAuth support for the SkillTree platform (dashboard as well as client libraries)
- Added ability for dashboard's administrators to pin and unpin projects
- Upgraded maven and npm dependencies
- Number of minor bugs fixed
- Corrected so that achievements are awarded on the date of the last qualifying event
- Visualized achieved levels on the points' timeline metric within Client Display
- Added CI workflow that runs skills-service tests using 2-way PKI 
- Added CI workflow that runs skills-service tests against RabbitMQ stomp broker 
- Added CI workflow that runs skills-service tests with OAuth setup

#### 1.2.2
<release-date date="Sep. 2020" />
- Changed base image from alpine to slim-buster
- Updated dependency version from 3.0.0 to 3.0.1 for skills-client-vue to fix bug related to previewing user's display in the dashboard

#### 1.2.1
<release-date date="Sep. 2020" />
Added the ability to enable and receive logging from the skills-client libraries

#### 1.2.0
<release-date date="Sep. 2020" />
- Implemented extensive GitHub Actions Continuous Integration (CI)
- Enhanced websocket based notifications - alert users of previously non-notified achievements when user starts a session for an application that utilizes skill-client libraries (ex. event listeners)
- Improved back button behavior when users drill down within display component then navigate away from the page hosting the display component and finally returns to the component and uses the back button.
- Introduced Badge's life-cycle (create -> configure -> go live) for project-based and global badges.
- Added ability to customize footer and header in the dashboard
- Implemented process to publish jar-based releases to GitHub
- Implemented process to publish docker images to DockerHub
- Implemented password reset feature
- Enhanced Markdown support in the Dashboard and Skills Display applications
- Improved directory structure of skills-service project and renamed its runtime artifact
- Added support to store HttpSession in Redis
- Added numerous new tests, fixed multitude of bugs and and improved overall stability


#### 1.1.4
<release-date date="Jul. 2020" />
- Generated skills-service docker image and published to DockerHub
- Upgraded dashboard to use the latest published release of @skilltree/skills-client-vue


#### 1.1.3
<release-date date="Jul. 2020" />

**Bug Fixes:**
- Users table 'Last Updated' column actually shows creation date
- In PKI mode gracefully handle if user info is not available anymore in user-info-service
- Dashboard suggest users returns error (404)
- New version alert does not come up when version updated
- Global Badge's project's level must be achieved based on project's overall level and not subject's level
- Global Badges do not show up after access is given
- Fixed sporadic Cypress failures

**Performance Improvement:**
- Do not retry when user could not be retrieved from user-info-service
- Improve Browser Caching: Cache .js and .css named resources but never cache .html resources


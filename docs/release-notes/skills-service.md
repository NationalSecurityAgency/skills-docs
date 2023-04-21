# Dashboard and API Release Notes

This page documents high-level release notes for <external-url label="SkillTree Centralized Service" url="https://github.com/NationalSecurityAgency/skills-service" /> which encompasses the dashboard and API. 

<conditional visibilityFlag="showInstallGuide">

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

</conditional>

## 2.5.0 <release-date date="April. 2022" />
- Implemented Quiz and Survey result displays with the metrics for questions and answers
- Enhanced Quiz/Survey runs with user metrics
- Improved skill filter on Skills Display to include all self report types (Approval, Honor System, Quiz and Survey)
- Added ability to contact project's administrators from `Manage My Projects` page (aka. projects catalog)
- Implemented extra level of resiliency to preserve quiz and question attributes (ex. description) by utilizing Browser's IndexedDB storage

## 2.4.0 <release-date date="March. 2022" />
- Added ability to create and manage [Quizzes and Surveys](/dashboard/user-guide/quizzes-and-surveys.html) and seamlessly administer by associating to the Skills or by running independently
  - Association of a `Quiz` or a `Survey` to an existing skill requires successful completion of that Quiz/Survey in order to earn the skill and its points
  - `Quiz` supports _Single Choice_ and _Multiple Choice_ questions
  - `Survey` supports _Single Choice_, _Multiple Choice_ and _Text Input_ questions
  - A `Quiz` supports the following configurations
    - Number of questions required to pass a quiz
    - Maximum number of attempts
  - Quizzes and Surveys seamlessly integrate with the majority of SkillTree's existing features including Skills Catalog and Badges
- Using the [Description Editor](/dashboard/user-guide/rich-text-editor.html) added ability to attach files to descriptions including Subjects, Skills and Badges
  - Upload is only allowed for the supported file types which by default includes `.pdf`, `.xlsx`, `.docx`, and `.pptx` extensions
- Added ability to change the font size in the [Description Editor](/dashboard/user-guide/rich-text-editor.html)
- Added ability to attach documents and screenshots with a self-report approval request
- Enhanced Project's Skills Metrics to display Skills Tags and to allow filtering by Skill Tags
- Added ability to display user-tag-based metrics on subject and skill pages
- Implemented extra level of resiliency to preserve skill/badge/project/subject attributes (ex. description) by utilizing Browser's IndexedDB storage
- Added `Navigate to the top` button that allows users to easily scroll to the top of a lengthy page
- On the badge page, added `Live` status and, if applicable, a `Go Live` button


## 2.3.0 <release-date date="Dec. 2022" />
- Ability to **split self-approval workload** between multiple Approvers or Admins
  - An approver can be assigned to handle requests from specific users
  - An approver can be assigned to approve specific skills
  - An approver can be assigned to approve users that have a certain user tag and/or that tag starts with a certain value
  - Ability to designate a fallback catch-all approver
- **Custom skill tags** - a new lightweight facet to categorize and group skills
  - Project admins can create custom tags and attach them to skills
  - Skill tags are visualized in the Skills Display to give users consuming the training another way to comprehend, categorize and filter skills
- Enhanced skill's ``Post Achievement Metrics`` to show a table for the users that continued to utilize the feature after achieving the skill
  - Ability to toggle between users that ``Continued Using`` vs. ``Stopped Using``
- Enhanced Dashboard's gamified training - updated descriptions, added new skills and created 6 new badges!
- Added ability to clear all the skill events for a user
  - The action effectively removes the user from that project and all of its views

## 2.2.3 <release-date date="Nov. 2022" />
- Big Fixes

## 2.2.2 <release-date date="Nov. 2022" />
- Big Fixes

## 2.2.1 <release-date date="Nov. 2022" />
- Upgrade Spring Boot

## 2.2.0 <release-date date="Nov. 2022" />
- Added a full-featured [Rich Text Editor](/dashboard/user-guide/rich-text-editor.html) to create and manage descriptions for skills, subjects, groups, badges and projects
  - Supports an array of features including headings, copy-and-paste, blockquotes, tables, links, and much more...
  - Supports inserting, uploading and copy-and-pasting images
- Implemented new [Project Approver Role](/dashboard/user-guide/projects.html#access)
  - approve and deny Self Reporting approval requests while only getting a read-only view of the project
- *Skills Display:* show that a skill belongs to a badge on the Subject's and Skill's pages
  - allow users to easily navigate to the badge
- *Skills Display:* Added ``Belongs to a Badge`` and ``Pending Approval`` filters to the skill's filters
- *Skills Display:* Improved look-and-feel of the skill filters
- Remember last sort order on tables
  - the latest sort selection is stored in browser's local storage
- For Private Invite Only projects implemented ability to [manage invites pending acceptance](/dashboard/user-guide/projects.html#manage-invites-pending-acceptance)
  - show invites pending acceptance
  - allows to revoke, remind and extends invites 
- Bug Fixes

## Release History

### 2.1.X Releases

#### 2.1.3 <release-date date="Oct. 2022" />
- Bug Fixes

#### 2.1.2 <release-date date="Oct. 2022" />
- Bug Fixes

#### 2.1.1 <release-date date="Oct. 2022" />
- Bug Fixes

#### 2.1.0 <release-date date="Sep. 2022" />
- Ability to [contact project admins](/dashboard/user-guide/progress-and-ranking.html#contact-project-admins) directly through the SkillTree Dashboard
- Ability to configure a project description which is then visualized in the Dashboard and optionally in the Skills Display
- Ability to [share discoverable projects](/dashboard/user-guide/projects.html#share-project) via a share-able link
  - When users visit the link they are directed to the project AND the project is automatically added to My Projects
- Visualize users' progress on the users table (% and progress bar)
- Ability to always show group's description on the Subject page in the Skills Display 
- Ability to navigate to the next and the previous skill directly from the Skill page in the Skills Display 
- On the Skills Display Subject page show  a``Last Viewed`` indicator next to the latest visited skill
  - A button that enables users to easily jump to the last viewed skill
  - Application auto scrolls to the latest viewed skill when navigating from the Skill to the Subject page 
- Improved Help Urls to allow non-encoded spaces

### 2.0.X Releases

#### 2.0.2 <release-date date="August. 2022" />
- Bug Fixes

#### 2.0.1 <release-date date="August. 2022" />
- Bug Fixes

#### 2.0.0 <release-date date="August. 2022" />
- [Invite-Only / Private Project](/dashboard/user-guide/projects.html#setting-visibility) - Progress and Ranking pages can only be accessed by users who have been invited to join the project and who have accepted the invite, any other user attempting to access the project will receive an ``Access Denied`` error
- [Copy Project Definition](/dashboard/user-guide/projects.html#copy-project) - use an existing Project as a template - copy its training profile (subjects, skills, badges, etc..) into a brand-new project.
- [Move Skills](/dashboard/user-guide/skills.html#move-skills) between subjects and groups in the same project.
- Project-level capability to [customize certain labels](/dashboard/user-guide/projects.html#setting-custom-labels) on the Skills Display components
- Optionally require the comment/justification for self-report skills
- When old client lib is being used, display a record on the [Issues](/dashboard/user-guide/issues.html) page that suggests upgrading
- Send notification email when root and project admins are added


### 1.X Releases

#### 1.12.2 <release-date date="July. 2022" />
- Accessibility improvements

#### 1.12.1 <release-date date="July. 2022" />
- Bug Fixes

#### 1.12.0 <release-date date="July. 2022" />
- [Same Project Skill Reuse](/dashboard/user-guide/skills.html#same-project-skill-reuse) - a feature that facilitates the re-use of skills in the same projects 
- Ability to unsubscribe to self-report approval requests emails
- Accessibility improvements
- Bug Fixes

#### 1.11.1 <release-date date="July. 2022" />
- Bug Fixes

#### 1.11.0
<release-date date="June. 2022" />
- Accessibility improvements
- Bug Fixes

#### 1.10.1 <release-date date="June. 2022" />
- Bug Fixes

#### 1.10.0 <release-date date="June. 2022" />
- Ability to export Skills to the Catalog that are defined under a Skill Group
- Ability to import Catalog Skills into a Skill Group
- Added Removal Safety Check dialog to projects, subjects and badges
- Simplified how Skill Groups are stored and managed
- Accessibility improvements
- Bug Fixes

#### 1.9.5 <release-date date="May. 2022" />
- Implemented Upgrade-In-Progress feature that puts the SkillTree Dashboard into a read-only state while retaining skill requests in a Write-Ahead-Log to be replayed after the upgrade is done
- Improved performance of loading user table for a given project
- Bug Fixes

#### 1.9.4 <release-date date="May. 2022" />
- additional performance profiling

#### 1.9.3 <release-date date="May. 2022" />
- Bug Fixes

#### 1.9.2 <release-date date="May. 2022" />
- For Skills exported to the Catalog, show how many and which projects those skills were imported into
- Check the point system of an importing project and warn users when finalizing catalog skills if imported points are outside of the existing point scheme
- Bug Fixes

#### 1.9.1 <release-date date="Apr. 2022" />
- Upgraded Spring Boot address a variety of different CVEs
- Added a tag to indicate that a skill event came from an imported skill on the Performed Skills page
- Improved usability when bulk importing Catalog Skills
- Bug Fixes

#### 1.9.0 <release-date date="Apr. 2022" />
- Implemented [Skills Catalog](/dashboard/user-guide/skills-catalog.html), a feature that facilitates the re-use of skills across projects:
  - Skills can be exported to the Catalog which makes those skills available for re-use in other projects. 
  - Once exported to the catalog, those skills can be easily imported into other projects as a read-only skill. 
  - As skill occurrences are reported to the original project they are also automatically propagated to the imported skills within other projects.
  - Changes to the original skill (ex. description, occurrences) are automatically synchronized to all the imported skills as well. 
- Added resilient and distributed asynchronous job execution framework
- Enhanced profiling printing thresholds to be configurable per-endpoint

#### 1.8.10 <release-date date="Feb. 2022" />
- Ensured that db connections and transaction aren't opened until after a user is retrieved

#### 1.8.9 <release-date date="Feb. 2022" />
- Bug Fix: After changing Skill Group's ID child skills fail to expand
- Bug Fix: Adding more than 10 skills to a skill group causes the > 10 skills to not be visible/accessi

#### 1.8.8 <release-date date="Feb. 2022" />
- Added support for actuator metrics and prometheus metrics

#### 1.8.7 <release-date date="Jan. 2022" />
- Added OAuth2 support for Azure Active Directory

#### 1.8.6 <release-date date="Jan. 2022" />
- Support enabling actuator metrics
- Using CProf metrics to optionally expose overall endpoint execution time via the Server Timing API

#### 1.8.5 <release-date date="Jan. 2022" />
- Bug Fix: Changing the display order of skills in a Skill Group results in a 400 error

#### 1.8.4 <release-date date="Dec. 2021" />
- Upgraded log4j to address <external-url label="CVE-2021-45105" url="https://nvd.nist.gov/vuln/detail/CVE-2021-45105" />
- Option to verify email ownership when dashboard accounts are created

#### 1.8.3 <release-date date="Dec. 2021" />
- Upgraded log4j to address <external-url label="CVE-2021-44228" url="https://www.cisa.gov/uscert/ncas/current-activity/2021/12/13/cisa-creates-webpage-apache-log4j-vulnerability-cve-2021-44228" />
- Added support for storing HTTP Session via JDBC

#### 1.8.2 <release-date date="Dec. 2021" />
- Added ability to display support options; configurable support options are displayed in the header and footer of the dashboard
- Bug Fix: Editing a skill decrements # of skills in the subject's stats

#### 1.8.1 <release-date date="Dec. 2021" />
- Removed username/password login features when `skills.authorization.oAuthOnly=true`
- Improved how external links display within markdown
- Upgraded skills-client libraries to v3.4.1 in dashboard
- Bug fixes and general usability improvements

#### 1.8.0 <release-date date="Nov. 2021" />
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
 
#### 1.7.1 <release-date date="Nov. 2021" />
- Bug fix: Project and/or subject level-based achievements may not be awarded when a skill is edited or removed   

#### 1.7.0 <release-date date="Sep. 2021" />
- Implemented store and display of approval history for self-report skills
- Added ``Badges`` display for ``Progress and Ranking`` views
  - shows all global badges and project badges within the customized ``My Projects`` 
  - displays earned and available badges as well as current badge progress
- Bug fixes      

#### 1.6.0 <release-date date="Aug. 2021" />
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

#### 1.5.3 <release-date date="Ju,. 2021" />
- Bug Fix: Added locking for project expiration/deletion/notification

#### 1.5.2 <release-date date="Jul. 2021" />
- Bug Fixes

#### 1.5.1 <release-date date="Jul. 2021" />
- Bug Fixes

#### 1.5.0 <release-date date="Jun. 2021" />
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
 

#### 1.4.0 <release-date date="Apr. 2021" />
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

#### 1.3.1 <release-date date="Jan. 2021" />
- Enabled cross-origin resource sharing (CORS) on the ``/app/userInfo`` endpoint.

#### 1.3.0 <release-date date="Dec. 2020" />
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

#### 1.2.2 <release-date date="Sep. 2020" />
- Changed base image from alpine to slim-buster
- Updated dependency version from 3.0.0 to 3.0.1 for skills-client-vue to fix bug related to previewing user's display in the dashboard

#### 1.2.1 <release-date date="Sep. 2020" />
Added the ability to enable and receive logging from the skills-client libraries

#### 1.2.0 <release-date date="Sep. 2020" />
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


#### 1.1.4 <release-date date="Jul. 2020" />
- Generated skills-service docker image and published to DockerHub
- Upgraded dashboard to use the latest published release of @skilltree/skills-client-vue


#### 1.1.3 <release-date date="Jul. 2020" />

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


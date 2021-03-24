# Skills Service Release Notes

This page documents high-level release notes for [SkillTree Centralized Service](https://github.com/NationalSecurityAgency/skills-service) which encompasses the dashboard and API. 

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

#### 1.4.0  
<release-date date="Apr. 2021" />
- implemented ``Progress and Ranking``page  - *new default* landing page
  - visualize user's progress and ranking across all of the integrated projects
  - provides capability to drill down to each project and view its ``Skills Display`` 
  - added the ability to customize landing page between ``Progress and Ranking`` and the original ``Project Admin`` view
  - project admin can place the project into the production mode via the ``Settings`` page which will then display that project on the ``Progress and Ranking`` page  
- added ``Self Reporting`` capability
  - ``Skills Display`` presents "I did it" button for the self-reporting enabled skills
  - project admins can configure self reported skills as either ``Honor System`` or ``Requires Approval``
  - implemented new ``Self Report`` project page to manage requests
  - sent email notifications when points are requested, approved and rejected
- implemented accessibility testing and drastically improved accessibility compliance
  - automated accessibility score generation and prominently displayed on the GitHub
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


# Skills Service Release Notes

This page documents high-level release notes for [SkillTree Centralized Service](https://github.com/NationalSecurityAgency/skills-service) which encompasses the dashboard and API. 

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

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


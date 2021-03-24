# Skills Client Release Notes

This page documents high-level release notes for [SkillTree Client](https://github.com/NationalSecurityAgency/skills-client) libraries - Vue.js, React, Angular, and Native JS libraries used by the SkillTree integrated applications

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

#### 3.2.0
<release-date date="Apr. 2021" />
- Allow ``SkillsConfiguration.configure`` to be called multiple times
- Disabled automatic OAuth redirection by default
- Improved Cypress.io tests

#### 3.1.1
<release-date date="Dec. 2020" />
- Upgraded axios

#### 3.1.0
<release-date date="Dec. 2020" />
- Added full OAuth support for the SkillTree platform (dashboard as well as client libraries)
- Upgraded maven and npm dependencies

#### 3.0.1
<release-date date="Sep. 2020" />
- Added JS-based logging
- Improved error messages
- Bug fix where Existing Authorization headers can cause client-display rendering to fail

#### 3.0.0
<release-date date="Sep. 2020" />
- Implemented Angular SkillTree Integration libraries
- Implemented process to publish releases to Npmjs
- Implemented extensive GitHub Actions Continuous Integration (CI)
- Native JS Level Component implementation
- Improved error handling and enhanced error messages when bad configuration is supplied
- Improved documentation
- Changed Native JS SkillDisplayJS component to allow construction without specifying parameters
- Added numerous new tests, fixed multitude of bugs and and improved overall stability



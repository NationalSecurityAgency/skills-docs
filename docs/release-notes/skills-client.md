# Client Libraries Release Notes

This page documents high-level release notes for <external-url label="SkillTree Client" url="https://github.com/NationalSecurityAgency/skills-client" /> libraries - JS libraries used by the SkillTree integrated applications

<conditional visibilityFlag="showInstallGuide">

To obtain deployable artifacts please visit [Distributions](/dashboard/install-guide/distributions.html) page.

</conditional>

::: tip Important Note:
To enable seamless integration with Skills Display, this library utilizes an iFrame wrapper to retrieve
the necessary views and data from the skills-service application. This deliberate architectural design choice is a key
aspect of the SkillTree Platform, as it minimizes the need for frequent upgrades to the skills-client library.

By decoupling the Skills Display functionality from the skills-client library, we've achieved a significant advantage:
most updates and improvements to Skills Display will be automatically reflected in the skills-client library whenever
the skills-service application is upgraded. This means that skills-client integrators can enjoy the benefits of new
features and enhancements without the need for manual library updates.

As a result, **the skills-client libraries are intentionally designed to be relatively static, with infrequent releases**.
This approach ensures that integrators can rely on a stable and consistent library, while still benefiting from the
ongoing evolution of the SkillTree Platform.
:::

## 3.6.0 
<release-date date="Oct. 2024" />
- Added the ability to place the skills-client library in a dormant state. When the library is in a dormant state, it
  becomes inactive and does not perform authentication, network communication, skill reporting, or any other activities.
- Upgraded JS libraries
- Bug Fixes

## 3.5.0 
<release-date date="Sep. 2022" />
- Ensure that skills-client react libraries work with React 18
- Removed history package dependency
- Addressed 3rd party library security vulnerabilities
- Allowed options to be passed to the Skills Display component for future configuration options
- Added ability to respond to scroll events from the Skills Display component

## 3.4.1 
<release-date date="Dec. 2021" />
- Detect when the web-socket connection errors, and if the message indicates an invalid_token, then obtain a new token and reconnect

## 3.4.0 
<release-date date="Nov. 2021" />
- Ensure that skills-client react libraries work with React 17

## 3.3.1 
<release-date date="Jul. 2021" />
- Implemented (``navigate``) method for programmatic navigation in the ``SkillsDisplay`` component 

## 3.3.0 
<release-date date="Jun. 2021" />
- Improved resilience of skill event reporting. Failed attempts are stored in browser's local cache and are retried
- Enhanced ``SkillsDisplay`` component to support browser's native back button as well as deep linking; this feature was added in all of the libraries
- Implemented route changed event (``handleRouteChanged``) in the ``SkillsDisplay`` component 
- Bug Fixes

## 3.2.0 
<release-date date="Apr. 2021" />
- Allow ``SkillsConfiguration.configure`` to be called multiple times
- Disabled automatic OAuth redirection by default
- Improved Cypress.io tests

## 3.1.1 
<release-date date="Dec. 2020" />
- Upgraded axios

## 3.1.0 
<release-date date="Dec. 2020" />
- Added full OAuth support for the SkillTree platform (dashboard as well as client libraries)
- Upgraded maven and npm dependencies

## 3.0.1 
<release-date date="Sep. 2020" />
- Added JS-based logging
- Improved error messages
- Bug fix where Existing Authorization headers can cause client-display rendering to fail

## 3.0.0 
<release-date date="Sep. 2020" />
- Implemented Angular SkillTree Integration libraries
- Implemented process to publish releases to Npmjs
- Implemented extensive GitHub Actions Continuous Integration (CI)
- Native JS Level Component implementation
- Improved error handling and enhanced error messages when bad configuration is supplied
- Improved documentation
- Changed Native JS SkillDisplayJS component to allow construction without specifying parameters
- Added numerous new tests, fixed multitude of bugs and and improved overall stability



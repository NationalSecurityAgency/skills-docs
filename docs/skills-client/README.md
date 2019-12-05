# Overview

Generally integration follows the following steps:

1. Create and customize your training profile in the skill's dashboard
1. Integrate client [Skill Display](/skills-client/#client-display-integration) libraries
1. Integrate skill [event reporting](/skills-client/#report-events-integration) either using client libraries and/or REST endpoints

![An image](./diagrams/IntegratedApplication.jpg)
   
Please visit [Dashboard Guide](/dashboard/user-guide/) to learn about the best practices and options for customizing your gamificaiton training profile.
This Integration Guide focuses on step 2 and 3: integration of the Client Display and the reporting libraries. 

## Client Display Integration 

We generally recommend the following integration pattern:

1. Put a button in the header that depicts the level (ex. ``Level 1``)
   - We like on the top right but this really depends on your layout
1. Clicking on the button will take you to the page that renders Skills Display
   - All client JS libraries support Skills Display
   - Dedicate a full page to Skills Display    
1. (Optional) Theme Skills Display to match your application   
1. (Optional) Display user progress summary on your home page or splash page
   - Pass ``true`` to skills display ``options.isSummaryOnly``

Skills Display support is provided for the following libraries: 
- [Vue.js](/skills-client/vuejs.html)
- [React](/skills-client/react.html)
- Angular (Coming soon)
- [Pure JS](/skills-client/js.html)

## Report Events Integration

Your can either use one of the supported libraries or utilize endpoint directly:
- [Vue.js](/skills-client/vuejs.html)
- [React](/skills-client/react.html)
- Angular (Coming soon)
- [Pure JS](/skills-client/js.html)
- [REST Endpoints](/skills-client/endpoints.html#programmatic-endpoints)

## Browser Support

Skills as a Service is supported on all major browsers since the following versions:

<browser-support />

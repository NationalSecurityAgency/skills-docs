(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{325:function(t,e,i){t.exports=i.p+"assets/img/client-display-proj.9b2a30b0.png"},476:function(t,e,i){t.exports=i.p+"assets/img/Integration-Overview.471756a4.jpg"},477:function(t,e,i){t.exports=i.p+"assets/img/IntegratedApplication.27a1dbe0.jpg"},478:function(t,e,i){t.exports=i.p+"assets/img/Integration-SkillsDisplay.8a427f91.jpg"},479:function(t,e,i){t.exports=i.p+"assets/img/Integration-Reporter.10e16667.jpg"},555:function(t,e,i){"use strict";i.r(e);var s=i(51),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("In order to support rapid integration SkillTree has taken an innovative approach of supplying fully navigable "),s("strong",[t._v("Ranking and Visualization")]),t._v(" views.\nUser's progress and ranking is visualized using a JS "),s("RouterLink",{attrs:{to:"/skills-client/#skills-display-integration"}},[t._v("Skills Display")]),t._v(" component that comes with the provided\n"),s("RouterLink",{attrs:{to:"/skills-client/#skilltree-client-libraries"}},[t._v("SkillTree Client Libraries")]),t._v(". These libraries also enable instrumenting your application to report skill events\nvia the JS skill reporting utility.")],1),t._v(" "),s("p",[s("img",{attrs:{src:i(476),alt:"Integrated Application Image"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Please Note")]),t._v(" "),s("p",[t._v("In order to support rapid integration SkillTree does "),s("strong",[t._v("not")]),t._v(" expose an API to retrieve individual gamification training profile components such as skills, subjects, badges, etc... but rather\nprovides fully navigable and themeable "),s("strong",[t._v("Ranking and Visualization views")]),t._v(" that implement display of those concepts.")])]),t._v(" "),s("p",[t._v("To integrate with the SkillTree service/dashboard please execute the following steps:")]),t._v(" "),s("ol",[s("li",[t._v("Create and customize your training profile in the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/"}},[t._v("SkillTree Dashboard")]),s("conditional",{attrs:{visibilityFlag:"skillTreeServiceUrl"}},[t._v(" ( "),s("service-url"),t._v(" )")],1)],1),t._v(" "),s("li",[t._v("Embed "),s("strong",[t._v("Ranking and Visualization")]),t._v(" views using the "),s("RouterLink",{attrs:{to:"/skills-client/#skills-display-integration"}},[t._v("Skill Display")]),t._v(" component")],1),t._v(" "),s("li",[t._v("Instrument your application to report "),s("RouterLink",{attrs:{to:"/skills-client/#report-events-integration"}},[t._v("skill events")]),t._v(" "),s("ul",[s("li",[t._v("Use the SkillTree "),s("RouterLink",{attrs:{to:"/skills-client/#report-events-integration"}},[t._v("Reporting JS Utility")]),t._v(" and/or "),s("RouterLink",{attrs:{to:"/skills-client/endpoints.html"}},[t._v("REST endpoints")])],1),t._v(" "),s("li",[t._v("IDs for the skill events reported must match the training profile created in step 1.")])])],1)]),t._v(" "),s("p",[s("img",{attrs:{src:i(477),alt:"Integrated Application Image"}})]),t._v(" "),s("p",[t._v("Please visit the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/"}},[t._v("Dashboard Guide")]),t._v(" to learn about the best practices and options for customizing your gamification training profile.\nThis Integration Guide focuses on step 2 and 3: integration of the Client Display and the reporting libraries.")],1),t._v(" "),s("h2",{attrs:{id:"skilltree-client-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skilltree-client-libraries"}},[t._v("#")]),t._v(" SkillTree Client Libraries")]),t._v(" "),s("p",[t._v("SkillTree Client JS libraries are used to integrate gamified training into your web-application.\nThese libraries are hosted on "),s("a",{attrs:{href:"https://www.npmjs.com/search?q=%40skilltree",target:"_blank",rel:"noopener noreferrer"}},[t._v("NpmJs.com"),s("OutboundLink")],1),t._v(" so they can be easily installed.")]),t._v(" "),s("p",[t._v("SkillTree client libraries support:")]),t._v(" "),s("ul",[s("li",[t._v("Fully navigable "),s("strong",[t._v("Ranking and Visualization")]),t._v(" views via the "),s("RouterLink",{attrs:{to:"/skills-client/#skills-display-integration"}},[t._v("Skill Display")]),t._v(" component")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/#report-events-integration"}},[t._v("SkillsReporter")]),t._v(" JS utility to report skill events")],1),t._v(" "),s("li",[t._v("A convenient component to display user's current overall level in the application.")]),t._v(" "),s("li",[t._v("Global event handler JS functions that allows applications to register for all skill events\n"),s("ul",[s("li",[t._v("Ex. in order to display encouragements for things like points earned and levels completed")])])])]),t._v(" "),s("p",[t._v("There are several libraries supported, please visit the following links to learn more:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/skills-client/vuejs.html"}},[t._v("Vue.js")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/react.html"}},[t._v("React")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/angular.html"}},[t._v("Angular")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/js.html"}},[t._v("Pure JS")])],1)]),t._v(" "),s("h2",{attrs:{id:"skills-display-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skills-display-integration"}},[t._v("#")]),t._v(" Skills Display Integration")]),t._v(" "),s("p",[t._v("The Skills Display component provides fully navigable and themeable "),s("strong",[t._v("Ranking and Visualization")]),t._v(" views.\nThis UI component is integrated into your web-based application by utilizing SkillTree libraries which are hosted on "),s("a",{attrs:{href:"https://www.npmjs.com/search?q=%40skilltree",target:"_blank",rel:"noopener noreferrer"}},[t._v("NpmJs.com"),s("OutboundLink")],1),t._v(" so they can be easily installed.")]),t._v(" "),s("p",[s("img",{attrs:{src:i(478),alt:"Integrated Application Image"}})]),t._v(" "),s("p",[t._v("Below is a screenshot of the component's landing view:")]),t._v(" "),s("p",[s("img",{attrs:{src:i(325),alt:"Skills Platform Skills Display Image"}}),t._v("\nRank, Badges and Subject cards are clickable and allow users to drill down to those views.\nPlease visit the "),s("RouterLink",{attrs:{to:"/overview/#ranking-and-progress-display"}},[t._v("Screenshots")]),t._v(" section to see more examples of the Skills Display component.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can easily theme this component to match your application's look-and-feel.")])]),t._v(" "),s("p",[t._v("Skills Display visualizes gamified training progress and ranking for a user, which includes subjects, skills, badges and dependencies just to mention a few.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Please Note")]),t._v(" "),s("p",[t._v("In order to support rapid integration SkillTree does "),s("strong",[t._v("not")]),t._v(" expose an API to retrieve specific gamification training profile components such as skills, subjects, badges, etc... but rather\nprovides fully navigable "),s("strong",[t._v("Ranking and Visualization views")]),t._v(" that implement display of those concepts.")])]),t._v(" "),s("p",[t._v("When integrating the Skills Display component into your application we generally recommend the following integration pattern:")]),t._v(" "),s("ol",[s("li",[t._v("Put a button in the header that displays the user's level (ex. "),s("code",[t._v("Level 1")]),t._v(")\n"),s("ul",[s("li",[t._v("We like placement on the top right but this really depends on your layout")])])]),t._v(" "),s("li",[t._v("Clicking on the button will take you to the page that renders the Skills Display\n"),s("ul",[s("li",[t._v("Use one of the provided client libraries if using an explicitly supported UI framework or the Pure JS client library if using a different UI framework")]),t._v(" "),s("li",[t._v("Dedicate a full page to the Skills Display")])])]),t._v(" "),s("li",[t._v("(Optional) Theme Skills Display to match your application")]),t._v(" "),s("li",[t._v("(Optional) Display user progress summary on your home page or splash page\n"),s("ul",[s("li",[t._v("Pass "),s("code",[t._v("true")]),t._v(" to skills display "),s("code",[t._v("options.isSummaryOnly")])])])])]),t._v(" "),s("p",[t._v("Skills Display support is provided for the following libraries, please navigate to a specific library to learn more:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/skills-client/vuejs.html"}},[t._v("Vue.js")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/react.html"}},[t._v("React")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/angular.html"}},[t._v("Angular")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/js.html"}},[t._v("Pure JS")])],1)]),t._v(" "),s("h2",{attrs:{id:"report-events-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#report-events-integration"}},[t._v("#")]),t._v(" Report Events Integration")]),t._v(" "),s("p",[t._v("When reporting skill events you have 2 options:")]),t._v(" "),s("ul",[s("li",[t._v("Option 1: Directly from JS code - SkillTree libraries come with a SkillsReporter JS utility that enables you to report skill events.")]),t._v(" "),s("li",[t._v("Option 2: From the backend server using SkillTree REST endpoints")])]),t._v(" "),s("p",[s("img",{attrs:{src:i(479),alt:"Skills Platform Report Skill Events Image"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Generally option 1 is the most common use-case but sometimes it's easier to derive skill events on the backend server.")])]),t._v(" "),s("p",[t._v("Please visit the following sections to learn more:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/skills-client/vuejs.html"}},[t._v("Vue.js")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/react.html"}},[t._v("React")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/angular.html"}},[t._v("Angular")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/js.html"}},[t._v("Pure JS")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/skills-client/endpoints.html#programmatic-endpoints"}},[t._v("REST Endpoints")])],1)]),t._v(" "),s("h2",{attrs:{id:"browser-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browser-support"}},[t._v("#")]),t._v(" Browser Support")]),t._v(" "),s("p",[t._v("SkillTree is supported on all major browsers since the following versions:")]),t._v(" "),s("browser-support")],1)}),[],!1,null,null,null);e.default=l.exports}}]);
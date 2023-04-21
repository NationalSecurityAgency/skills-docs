(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{568:function(e,t,a){"use strict";a.r(t);var s=a(51),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dashboard-and-api-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard-and-api-release-notes"}},[e._v("#")]),e._v(" Dashboard and API Release Notes")]),e._v(" "),a("p",[e._v("This page documents high-level release notes for "),a("external-url",{attrs:{label:"SkillTree Centralized Service",url:"https://github.com/NationalSecurityAgency/skills-service"}}),e._v(" which encompasses the dashboard and API.")],1),e._v(" "),a("conditional",{attrs:{visibilityFlag:"showInstallGuide"}},[a("p",[e._v("To obtain deployable artifacts please visit "),a("RouterLink",{attrs:{to:"/dashboard/install-guide/distributions.html"}},[e._v("Distributions")]),e._v(" page.")],1)]),e._v(" "),a("h2",{attrs:{id:"_2-5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-0"}},[e._v("#")]),e._v(" 2.5.0 "),a("release-date",{attrs:{date:"April. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented Quiz and Survey result displays with the metrics for questions and answers")]),e._v(" "),a("li",[e._v("Enhanced Quiz/Survey runs with user metrics")]),e._v(" "),a("li",[e._v("Improved skill filter on Skills Display to include all self report types (Approval, Honor System, Quiz and Survey)")]),e._v(" "),a("li",[e._v("Added ability to contact project's administrators from "),a("code",[e._v("Manage My Projects")]),e._v(" page (aka. projects catalog)")]),e._v(" "),a("li",[e._v("Implemented extra level of resiliency to preserve quiz and question attributes (ex. description) by utilizing Browser's IndexedDB storage")])]),e._v(" "),a("h2",{attrs:{id:"_2-4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-0"}},[e._v("#")]),e._v(" 2.4.0 "),a("release-date",{attrs:{date:"March. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added ability to create and manage "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/quizzes-and-surveys.html"}},[e._v("Quizzes and Surveys")]),e._v(" and seamlessly administer by associating to the Skills or by running independently\n"),a("ul",[a("li",[e._v("Association of a "),a("code",[e._v("Quiz")]),e._v(" or a "),a("code",[e._v("Survey")]),e._v(" to an existing skill requires successful completion of that Quiz/Survey in order to earn the skill and its points")]),e._v(" "),a("li",[a("code",[e._v("Quiz")]),e._v(" supports "),a("em",[e._v("Single Choice")]),e._v(" and "),a("em",[e._v("Multiple Choice")]),e._v(" questions")]),e._v(" "),a("li",[a("code",[e._v("Survey")]),e._v(" supports "),a("em",[e._v("Single Choice")]),e._v(", "),a("em",[e._v("Multiple Choice")]),e._v(" and "),a("em",[e._v("Text Input")]),e._v(" questions")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("Quiz")]),e._v(" supports the following configurations\n"),a("ul",[a("li",[e._v("Number of questions required to pass a quiz")]),e._v(" "),a("li",[e._v("Maximum number of attempts")])])]),e._v(" "),a("li",[e._v("Quizzes and Surveys seamlessly integrate with the majority of SkillTree's existing features including Skills Catalog and Badges")])])],1),e._v(" "),a("li",[e._v("Using the "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/rich-text-editor.html"}},[e._v("Description Editor")]),e._v(" added ability to attach files to descriptions including Subjects, Skills and Badges\n"),a("ul",[a("li",[e._v("Upload is only allowed for the supported file types which by default includes "),a("code",[e._v(".pdf")]),e._v(", "),a("code",[e._v(".xlsx")]),e._v(", "),a("code",[e._v(".docx")]),e._v(", and "),a("code",[e._v(".pptx")]),e._v(" extensions")])])],1),e._v(" "),a("li",[e._v("Added ability to change the font size in the "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/rich-text-editor.html"}},[e._v("Description Editor")])],1),e._v(" "),a("li",[e._v("Added ability to attach documents and screenshots with a self-report approval request")]),e._v(" "),a("li",[e._v("Enhanced Project's Skills Metrics to display Skills Tags and to allow filtering by Skill Tags")]),e._v(" "),a("li",[e._v("Added ability to display user-tag-based metrics on subject and skill pages")]),e._v(" "),a("li",[e._v("Implemented extra level of resiliency to preserve skill/badge/project/subject attributes (ex. description) by utilizing Browser's IndexedDB storage")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Navigate to the top")]),e._v(" button that allows users to easily scroll to the top of a lengthy page")]),e._v(" "),a("li",[e._v("On the badge page, added "),a("code",[e._v("Live")]),e._v(" status and, if applicable, a "),a("code",[e._v("Go Live")]),e._v(" button")])]),e._v(" "),a("h2",{attrs:{id:"_2-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-0"}},[e._v("#")]),e._v(" 2.3.0 "),a("release-date",{attrs:{date:"Dec. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Ability to "),a("strong",[e._v("split self-approval workload")]),e._v(" between multiple Approvers or Admins\n"),a("ul",[a("li",[e._v("An approver can be assigned to handle requests from specific users")]),e._v(" "),a("li",[e._v("An approver can be assigned to approve specific skills")]),e._v(" "),a("li",[e._v("An approver can be assigned to approve users that have a certain user tag and/or that tag starts with a certain value")]),e._v(" "),a("li",[e._v("Ability to designate a fallback catch-all approver")])])]),e._v(" "),a("li",[a("strong",[e._v("Custom skill tags")]),e._v(" - a new lightweight facet to categorize and group skills\n"),a("ul",[a("li",[e._v("Project admins can create custom tags and attach them to skills")]),e._v(" "),a("li",[e._v("Skill tags are visualized in the Skills Display to give users consuming the training another way to comprehend, categorize and filter skills")])])]),e._v(" "),a("li",[e._v("Enhanced skill's "),a("code",[e._v("Post Achievement Metrics")]),e._v(" to show a table for the users that continued to utilize the feature after achieving the skill\n"),a("ul",[a("li",[e._v("Ability to toggle between users that "),a("code",[e._v("Continued Using")]),e._v(" vs. "),a("code",[e._v("Stopped Using")])])])]),e._v(" "),a("li",[e._v("Enhanced Dashboard's gamified training - updated descriptions, added new skills and created 6 new badges!")]),e._v(" "),a("li",[e._v("Added ability to clear all the skill events for a user\n"),a("ul",[a("li",[e._v("The action effectively removes the user from that project and all of its views")])])])]),e._v(" "),a("h2",{attrs:{id:"_2-2-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3"}},[e._v("#")]),e._v(" 2.2.3 "),a("release-date",{attrs:{date:"Nov. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Big Fixes")])]),e._v(" "),a("h2",{attrs:{id:"_2-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2"}},[e._v("#")]),e._v(" 2.2.2 "),a("release-date",{attrs:{date:"Nov. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Big Fixes")])]),e._v(" "),a("h2",{attrs:{id:"_2-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1"}},[e._v("#")]),e._v(" 2.2.1 "),a("release-date",{attrs:{date:"Nov. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Upgrade Spring Boot")])]),e._v(" "),a("h2",{attrs:{id:"_2-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-0"}},[e._v("#")]),e._v(" 2.2.0 "),a("release-date",{attrs:{date:"Nov. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added a full-featured "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/rich-text-editor.html"}},[e._v("Rich Text Editor")]),e._v(" to create and manage descriptions for skills, subjects, groups, badges and projects\n"),a("ul",[a("li",[e._v("Supports an array of features including headings, copy-and-paste, blockquotes, tables, links, and much more...")]),e._v(" "),a("li",[e._v("Supports inserting, uploading and copy-and-pasting images")])])],1),e._v(" "),a("li",[e._v("Implemented new "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#access"}},[e._v("Project Approver Role")]),e._v(" "),a("ul",[a("li",[e._v("approve and deny Self Reporting approval requests while only getting a read-only view of the project")])])],1),e._v(" "),a("li",[a("em",[e._v("Skills Display:")]),e._v(" show that a skill belongs to a badge on the Subject's and Skill's pages\n"),a("ul",[a("li",[e._v("allow users to easily navigate to the badge")])])]),e._v(" "),a("li",[a("em",[e._v("Skills Display:")]),e._v(" Added "),a("code",[e._v("Belongs to a Badge")]),e._v(" and "),a("code",[e._v("Pending Approval")]),e._v(" filters to the skill's filters")]),e._v(" "),a("li",[a("em",[e._v("Skills Display:")]),e._v(" Improved look-and-feel of the skill filters")]),e._v(" "),a("li",[e._v("Remember last sort order on tables\n"),a("ul",[a("li",[e._v("the latest sort selection is stored in browser's local storage")])])]),e._v(" "),a("li",[e._v("For Private Invite Only projects implemented ability to "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#manage-invites-pending-acceptance"}},[e._v("manage invites pending acceptance")]),e._v(" "),a("ul",[a("li",[e._v("show invites pending acceptance")]),e._v(" "),a("li",[e._v("allows to revoke, remind and extends invites")])])],1),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h2",{attrs:{id:"release-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-history"}},[e._v("#")]),e._v(" Release History")]),e._v(" "),a("h3",{attrs:{id:"_2-1-x-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-x-releases"}},[e._v("#")]),e._v(" 2.1.X Releases")]),e._v(" "),a("h4",{attrs:{id:"_2-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-3"}},[e._v("#")]),e._v(" 2.1.3 "),a("release-date",{attrs:{date:"Oct. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_2-1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2"}},[e._v("#")]),e._v(" 2.1.2 "),a("release-date",{attrs:{date:"Oct. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_2-1-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1"}},[e._v("#")]),e._v(" 2.1.1 "),a("release-date",{attrs:{date:"Oct. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_2-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0"}},[e._v("#")]),e._v(" 2.1.0 "),a("release-date",{attrs:{date:"Sep. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Ability to "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/progress-and-ranking.html#contact-project-admins"}},[e._v("contact project admins")]),e._v(" directly through the SkillTree Dashboard")],1),e._v(" "),a("li",[e._v("Ability to configure a project description which is then visualized in the Dashboard and optionally in the Skills Display")]),e._v(" "),a("li",[e._v("Ability to "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#share-project"}},[e._v("share discoverable projects")]),e._v(" via a share-able link\n"),a("ul",[a("li",[e._v("When users visit the link they are directed to the project AND the project is automatically added to My Projects")])])],1),e._v(" "),a("li",[e._v("Visualize users' progress on the users table (% and progress bar)")]),e._v(" "),a("li",[e._v("Ability to always show group's description on the Subject page in the Skills Display")]),e._v(" "),a("li",[e._v("Ability to navigate to the next and the previous skill directly from the Skill page in the Skills Display")]),e._v(" "),a("li",[e._v("On the Skills Display Subject page show  a"),a("code",[e._v("Last Viewed")]),e._v(" indicator next to the latest visited skill\n"),a("ul",[a("li",[e._v("A button that enables users to easily jump to the last viewed skill")]),e._v(" "),a("li",[e._v("Application auto scrolls to the latest viewed skill when navigating from the Skill to the Subject page")])])]),e._v(" "),a("li",[e._v("Improved Help Urls to allow non-encoded spaces")])]),e._v(" "),a("h3",{attrs:{id:"_2-0-x-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-x-releases"}},[e._v("#")]),e._v(" 2.0.X Releases")]),e._v(" "),a("h4",{attrs:{id:"_2-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-2"}},[e._v("#")]),e._v(" 2.0.2 "),a("release-date",{attrs:{date:"August. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_2-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-1"}},[e._v("#")]),e._v(" 2.0.1 "),a("release-date",{attrs:{date:"August. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0"}},[e._v("#")]),e._v(" 2.0.0 "),a("release-date",{attrs:{date:"August. 2022"}})],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#setting-visibility"}},[e._v("Invite-Only / Private Project")]),e._v(" - Progress and Ranking pages can only be accessed by users who have been invited to join the project and who have accepted the invite, any other user attempting to access the project will receive an "),a("code",[e._v("Access Denied")]),e._v(" error")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#copy-project"}},[e._v("Copy Project Definition")]),e._v(" - use an existing Project as a template - copy its training profile (subjects, skills, badges, etc..) into a brand-new project.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html#move-skills"}},[e._v("Move Skills")]),e._v(" between subjects and groups in the same project.")],1),e._v(" "),a("li",[e._v("Project-level capability to "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#setting-custom-labels"}},[e._v("customize certain labels")]),e._v(" on the Skills Display components")],1),e._v(" "),a("li",[e._v("Optionally require the comment/justification for self-report skills")]),e._v(" "),a("li",[e._v("When old client lib is being used, display a record on the "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/issues.html"}},[e._v("Issues")]),e._v(" page that suggests upgrading")],1),e._v(" "),a("li",[e._v("Send notification email when root and project admins are added")])]),e._v(" "),a("h3",{attrs:{id:"_1-x-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-x-releases"}},[e._v("#")]),e._v(" 1.X Releases")]),e._v(" "),a("h4",{attrs:{id:"_1-12-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-2"}},[e._v("#")]),e._v(" 1.12.2 "),a("release-date",{attrs:{date:"July. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Accessibility improvements")])]),e._v(" "),a("h4",{attrs:{id:"_1-12-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-1"}},[e._v("#")]),e._v(" 1.12.1 "),a("release-date",{attrs:{date:"July. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-12-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-0"}},[e._v("#")]),e._v(" 1.12.0 "),a("release-date",{attrs:{date:"July. 2022"}})],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html#same-project-skill-reuse"}},[e._v("Same Project Skill Reuse")]),e._v(" - a feature that facilitates the re-use of skills in the same projects")],1),e._v(" "),a("li",[e._v("Ability to unsubscribe to self-report approval requests emails")]),e._v(" "),a("li",[e._v("Accessibility improvements")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-11-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-1"}},[e._v("#")]),e._v(" 1.11.1 "),a("release-date",{attrs:{date:"July. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-11-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-0"}},[e._v("#")]),e._v(" 1.11.0")]),e._v(" "),a("release-date",{attrs:{date:"June. 2022"}}),e._v(" "),a("ul",[a("li",[e._v("Accessibility improvements")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-10-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-1"}},[e._v("#")]),e._v(" 1.10.1 "),a("release-date",{attrs:{date:"June. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-10-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-0"}},[e._v("#")]),e._v(" 1.10.0 "),a("release-date",{attrs:{date:"June. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Ability to export Skills to the Catalog that are defined under a Skill Group")]),e._v(" "),a("li",[e._v("Ability to import Catalog Skills into a Skill Group")]),e._v(" "),a("li",[e._v("Added Removal Safety Check dialog to projects, subjects and badges")]),e._v(" "),a("li",[e._v("Simplified how Skill Groups are stored and managed")]),e._v(" "),a("li",[e._v("Accessibility improvements")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-5"}},[e._v("#")]),e._v(" 1.9.5 "),a("release-date",{attrs:{date:"May. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented Upgrade-In-Progress feature that puts the SkillTree Dashboard into a read-only state while retaining skill requests in a Write-Ahead-Log to be replayed after the upgrade is done")]),e._v(" "),a("li",[e._v("Improved performance of loading user table for a given project")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-4"}},[e._v("#")]),e._v(" 1.9.4 "),a("release-date",{attrs:{date:"May. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("additional performance profiling")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-3"}},[e._v("#")]),e._v(" 1.9.3 "),a("release-date",{attrs:{date:"May. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-2"}},[e._v("#")]),e._v(" 1.9.2 "),a("release-date",{attrs:{date:"May. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("For Skills exported to the Catalog, show how many and which projects those skills were imported into")]),e._v(" "),a("li",[e._v("Check the point system of an importing project and warn users when finalizing catalog skills if imported points are outside of the existing point scheme")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-1"}},[e._v("#")]),e._v(" 1.9.1 "),a("release-date",{attrs:{date:"Apr. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Upgraded Spring Boot address a variety of different CVEs")]),e._v(" "),a("li",[e._v("Added a tag to indicate that a skill event came from an imported skill on the Performed Skills page")]),e._v(" "),a("li",[e._v("Improved usability when bulk importing Catalog Skills")]),e._v(" "),a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-9-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-0"}},[e._v("#")]),e._v(" 1.9.0 "),a("release-date",{attrs:{date:"Apr. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/skills-catalog.html"}},[e._v("Skills Catalog")]),e._v(", a feature that facilitates the re-use of skills across projects:\n"),a("ul",[a("li",[e._v("Skills can be exported to the Catalog which makes those skills available for re-use in other projects.")]),e._v(" "),a("li",[e._v("Once exported to the catalog, those skills can be easily imported into other projects as a read-only skill.")]),e._v(" "),a("li",[e._v("As skill occurrences are reported to the original project they are also automatically propagated to the imported skills within other projects.")]),e._v(" "),a("li",[e._v("Changes to the original skill (ex. description, occurrences) are automatically synchronized to all the imported skills as well.")])])],1),e._v(" "),a("li",[e._v("Added resilient and distributed asynchronous job execution framework")]),e._v(" "),a("li",[e._v("Enhanced profiling printing thresholds to be configurable per-endpoint")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-10"}},[e._v("#")]),e._v(" 1.8.10 "),a("release-date",{attrs:{date:"Feb. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Ensured that db connections and transaction aren't opened until after a user is retrieved")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-9"}},[e._v("#")]),e._v(" 1.8.9 "),a("release-date",{attrs:{date:"Feb. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fix: After changing Skill Group's ID child skills fail to expand")]),e._v(" "),a("li",[e._v("Bug Fix: Adding more than 10 skills to a skill group causes the > 10 skills to not be visible/accessi")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-8"}},[e._v("#")]),e._v(" 1.8.8 "),a("release-date",{attrs:{date:"Feb. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added support for actuator metrics and prometheus metrics")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-7"}},[e._v("#")]),e._v(" 1.8.7 "),a("release-date",{attrs:{date:"Jan. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added OAuth2 support for Azure Active Directory")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-6"}},[e._v("#")]),e._v(" 1.8.6 "),a("release-date",{attrs:{date:"Jan. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Support enabling actuator metrics")]),e._v(" "),a("li",[e._v("Using CProf metrics to optionally expose overall endpoint execution time via the Server Timing API")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-5"}},[e._v("#")]),e._v(" 1.8.5 "),a("release-date",{attrs:{date:"Jan. 2022"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fix: Changing the display order of skills in a Skill Group results in a 400 error")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-4"}},[e._v("#")]),e._v(" 1.8.4 "),a("release-date",{attrs:{date:"Dec. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Upgraded log4j to address "),a("external-url",{attrs:{label:"CVE-2021-45105",url:"https://nvd.nist.gov/vuln/detail/CVE-2021-45105"}})],1),e._v(" "),a("li",[e._v("Option to verify email ownership when dashboard accounts are created")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-3"}},[e._v("#")]),e._v(" 1.8.3 "),a("release-date",{attrs:{date:"Dec. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Upgraded log4j to address "),a("external-url",{attrs:{label:"CVE-2021-44228",url:"https://www.cisa.gov/uscert/ncas/current-activity/2021/12/13/cisa-creates-webpage-apache-log4j-vulnerability-cve-2021-44228"}})],1),e._v(" "),a("li",[e._v("Added support for storing HTTP Session via JDBC")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-2"}},[e._v("#")]),e._v(" 1.8.2 "),a("release-date",{attrs:{date:"Dec. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added ability to display support options; configurable support options are displayed in the header and footer of the dashboard")]),e._v(" "),a("li",[e._v("Bug Fix: Editing a skill decrements # of skills in the subject's stats")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-1"}},[e._v("#")]),e._v(" 1.8.1 "),a("release-date",{attrs:{date:"Dec. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Removed username/password login features when "),a("code",[e._v("skills.authorization.oAuthOnly=true")])]),e._v(" "),a("li",[e._v("Improved how external links display within markdown")]),e._v(" "),a("li",[e._v("Upgraded skills-client libraries to v3.4.1 in dashboard")]),e._v(" "),a("li",[e._v("Bug fixes and general usability improvements")])]),e._v(" "),a("h4",{attrs:{id:"_1-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-0"}},[e._v("#")]),e._v(" 1.8.0 "),a("release-date",{attrs:{date:"Nov. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented Skills Groups - brand new way to define and manage skills\n"),a("ul",[a("li",[e._v("Ability to group 2 or more skills under a group")]),e._v(" "),a("li",[e._v("Group has a name and a description and its own progress")]),e._v(" "),a("li",[e._v("A group can be configured with partial skill requirements (ex. 2 out of 5 skills are required to achieve this group)")]),e._v(" "),a("li",[e._v("Groups are managed via Dashboard and visualized in the Skills Display embeddable component and Progress and Ranking views.")])])]),e._v(" "),a("li",[e._v("Added project-level customization for the term "),a("code",[e._v("Level")]),e._v(" in the Skills Display embeddable component and Progress and Ranking views")]),e._v(" "),a("li",[e._v("For a project, added ability to search and navigate directly to a skill across all the subjects")]),e._v(" "),a("li",[e._v("Made the email body expandable for Contact Users and Contact Admins pages")]),e._v(" "),a("li",[e._v("Improved usability of self-report skill request and rejection messages")]),e._v(" "),a("li",[e._v("Added ability to modify project's level requirement for a Global Badge")]),e._v(" "),a("li",[e._v("Bug fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-7-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-1"}},[e._v("#")]),e._v(" 1.7.1 "),a("release-date",{attrs:{date:"Nov. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug fix: Project and/or subject level-based achievements may not be awarded when a skill is edited or removed")])]),e._v(" "),a("h4",{attrs:{id:"_1-7-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-0"}},[e._v("#")]),e._v(" 1.7.0 "),a("release-date",{attrs:{date:"Sep. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented store and display of approval history for self-report skills")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Badges")]),e._v(" display for "),a("code",[e._v("Progress and Ranking")]),e._v(" views\n"),a("ul",[a("li",[e._v("shows all global badges and project badges within the customized "),a("code",[e._v("My Projects")])]),e._v(" "),a("li",[e._v("displays earned and available badges as well as current badge progress")])])]),e._v(" "),a("li",[e._v("Bug fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-0"}},[e._v("#")]),e._v(" 1.6.0 "),a("release-date",{attrs:{date:"Aug. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Added ability to drag-and-drop projects, subjects and badges in order to arrange their display order")]),e._v(" "),a("li",[e._v("New project "),a("code",[e._v("Contact Users")]),e._v(" page that enables project administrators to send emails to all or a sub-set of the project's user base\n"),a("ul",[a("li",[e._v("Ability to contact users based on project/subject level achievement or specific skill/badge achievements")]),e._v(" "),a("li",[e._v("Supports markdown for the body of the email")])])]),e._v(" "),a("li",[e._v("New "),a("code",[e._v("Contact Admins")]),e._v(" page\n"),a("ul",[a("li",[e._v("Only available to users with the "),a("code",[e._v("ROOT")]),e._v(" access role")]),e._v(" "),a("li",[e._v("Email all project administrators")]),e._v(" "),a("li",[e._v("Supports markdown for the body of the email")])])]),e._v(" "),a("li",[e._v("Redesigned "),a("code",[e._v("Progress and Ranking")]),e._v(" views\n"),a("ul",[a("li",[e._v("Empowered users to customize the projects displayed to only those of interest to the user")]),e._v(" "),a("li",[e._v("Added drag-and-drop ability to arrange project cards")]),e._v(" "),a("li",[e._v("Navigation within Skills Display component is now reflected in the dashboard's breadcrumb navigation bar")])])]),e._v(" "),a("li",[e._v("Added ability to theme Skill Display's title card")]),e._v(" "),a("li",[e._v("Added ability to assign tags to users and to generate metrics/charts based on those tags")]),e._v(" "),a("li",[e._v("Bug fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-5-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-3"}},[e._v("#")]),e._v(" 1.5.3 "),a("release-date",{attrs:{date:"Ju,. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fix: Added locking for project expiration/deletion/notification")])]),e._v(" "),a("h4",{attrs:{id:"_1-5-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2"}},[e._v("#")]),e._v(" 1.5.2 "),a("release-date",{attrs:{date:"Jul. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-5-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1"}},[e._v("#")]),e._v(" 1.5.1 "),a("release-date",{attrs:{date:"Jul. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Bug Fixes")])]),e._v(" "),a("h4",{attrs:{id:"_1-5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-0"}},[e._v("#")]),e._v(" 1.5.0 "),a("release-date",{attrs:{date:"Jun. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented Leaderboard in the SkillsDisplay views\n"),a("ul",[a("li",[e._v("Displays "),a("code",[e._v("Top 10")]),e._v(" users OR "),a("code",[e._v("10 Around Me")]),e._v(" users")]),e._v(" "),a("li",[e._v("Users can Opt-Out in the Dashboard Settings from Leaderboard participation")]),e._v(" "),a("li",[e._v("Administrators can Opt-out all of the project administrators from Leaderboard participation")])])]),e._v(" "),a("li",[e._v("Added SkillTree brand to the title section of the SkillsDisplay component")]),e._v(" "),a("li",[e._v("Added breadcrumb to the title section of the SkillsDisplay component")]),e._v(" "),a("li",[e._v("Implemented ability to configure User Agreement for dashboard users; when configured, User Agreement is presented at first login. Changes to User Agreement will cause it to be re-displayed to any users who accepted the previous version.")]),e._v(" "),a("li",[e._v("Implemented workflow to remove unused projects\n"),a("ul",[a("li",[e._v("(1) discover unused, (2) notify administrators (3) remove if action is not taken")])])]),e._v(" "),a("li",[e._v("Improved look-and-feel for projects, subjects and badges, navigation, and metrics cards")]),e._v(" "),a("li",[e._v("Improve admin's projects page display and latency to better handle many projects per user")]),e._v(" "),a("li",[e._v("Improve usability of initiating an edit of an item (project, subject, skill or badge)")]),e._v(" "),a("li",[e._v("Ability to copy an existing skill")]),e._v(" "),a("li",[e._v("Bug fixes and CI improvements")])]),e._v(" "),a("h4",{attrs:{id:"_1-4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-0"}},[e._v("#")]),e._v(" 1.4.0 "),a("release-date",{attrs:{date:"Apr. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("implemented "),a("code",[e._v("Progress and Ranking")]),e._v("page  - "),a("em",[e._v("new default")]),e._v(" landing page\n"),a("ul",[a("li",[e._v("visualize user's progress and ranking across all of the integrated projects")]),e._v(" "),a("li",[e._v("provide capability to drill down to each project and view its "),a("code",[e._v("Skills Display")])]),e._v(" "),a("li",[e._v("added the ability to customize landing page per user between "),a("code",[e._v("Progress and Ranking")]),e._v(" and the original "),a("code",[e._v("Project Admin")]),e._v(" view")]),e._v(" "),a("li",[e._v("project admin can place the project into production mode via the "),a("code",[e._v("Settings")]),e._v(" page which will then display that project on the "),a("code",[e._v("Progress and Ranking")]),e._v(" page")])])]),e._v(" "),a("li",[e._v("added "),a("code",[e._v("Self Reporting")]),e._v(" capability\n"),a("ul",[a("li",[a("code",[e._v("Skills Display")]),e._v(' presents an "I did it" button for skills with self-reporting enabled')]),e._v(" "),a("li",[e._v("project admins can configure self reported skills as either "),a("code",[e._v("Honor System")]),e._v(" or "),a("code",[e._v("Requires Approval")])]),e._v(" "),a("li",[e._v("implemented new "),a("code",[e._v("Self Report")]),e._v(" project page to manage approval requests")]),e._v(" "),a("li",[e._v("email notifications are sent when points are requested, approved, and rejected")])])]),e._v(" "),a("li",[e._v("implemented accessibility testing and drastically improved accessibility compliance\n"),a("ul",[a("li",[e._v("automated accessibility score generated on every push to master and prominently displayed on GitHub")])])]),e._v(" "),a("li",[e._v("added storage of ALL user events related to a skill id, whether applied or not\n"),a("ul",[a("li",[e._v("updated metrics to utilize ALL events")]),e._v(" "),a("li",[e._v("added "),a("code",[e._v("Post Achievement")]),e._v(" metrics to depict whether a skill is utilized after achievement")])])]),e._v(" "),a("li",[e._v("created new "),a("code",[e._v("Issues")]),e._v(" project page; exposed errors when a "),a("em",[e._v("skill id")]),e._v(" is reported that does not exist in the project's definition")]),e._v(" "),a("li",[e._v("added ability to configure custom email html header and footer in the dashboard's settings")]),e._v(" "),a("li",[e._v("added "),a("code",[e._v("Admin")]),e._v(" stamp in the header to clearly indicate when using Administrative portion of the dashboard")]),e._v(" "),a("li",[e._v("implemented additional "),a("code",[e._v("Skills Display")]),e._v(" component theme options")]),e._v(" "),a("li",[e._v("replaced vue-table-2 with the vue-bootstrap Table Component")])]),e._v(" "),a("h4",{attrs:{id:"_1-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1"}},[e._v("#")]),e._v(" 1.3.1 "),a("release-date",{attrs:{date:"Jan. 2021"}})],1),e._v(" "),a("ul",[a("li",[e._v("Enabled cross-origin resource sharing (CORS) on the "),a("code",[e._v("/app/userInfo")]),e._v(" endpoint.")])]),e._v(" "),a("h4",{attrs:{id:"_1-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-0"}},[e._v("#")]),e._v(" 1.3.0 "),a("release-date",{attrs:{date:"Dec. 2020"}})],1),e._v(" "),a("ul",[a("li",[e._v("Revamped project-level and cross-project visualizations and metrics")]),e._v(" "),a("li",[e._v("Updated Logo")]),e._v(" "),a("li",[e._v("Enhanced look-and-feel of the dashboard application")]),e._v(" "),a("li",[e._v("Added full OAuth support for the SkillTree platform (dashboard as well as client libraries)")]),e._v(" "),a("li",[e._v("Added ability for dashboard's administrators to pin and unpin projects")]),e._v(" "),a("li",[e._v("Upgraded maven and npm dependencies")]),e._v(" "),a("li",[e._v("Number of minor bugs fixed")]),e._v(" "),a("li",[e._v("Corrected so that achievements are awarded on the date of the last qualifying event")]),e._v(" "),a("li",[e._v("Visualized achieved levels on the points' timeline metric within Client Display")]),e._v(" "),a("li",[e._v("Added CI workflow that runs skills-service tests using 2-way PKI")]),e._v(" "),a("li",[e._v("Added CI workflow that runs skills-service tests against RabbitMQ stomp broker")]),e._v(" "),a("li",[e._v("Added CI workflow that runs skills-service tests with OAuth setup")])]),e._v(" "),a("h4",{attrs:{id:"_1-2-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2"}},[e._v("#")]),e._v(" 1.2.2 "),a("release-date",{attrs:{date:"Sep. 2020"}})],1),e._v(" "),a("ul",[a("li",[e._v("Changed base image from alpine to slim-buster")]),e._v(" "),a("li",[e._v("Updated dependency version from 3.0.0 to 3.0.1 for skills-client-vue to fix bug related to previewing user's display in the dashboard")])]),e._v(" "),a("h4",{attrs:{id:"_1-2-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1"}},[e._v("#")]),e._v(" 1.2.1 "),a("release-date",{attrs:{date:"Sep. 2020"}})],1),e._v(" "),a("p",[e._v("Added the ability to enable and receive logging from the skills-client libraries")]),e._v(" "),a("h4",{attrs:{id:"_1-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-0"}},[e._v("#")]),e._v(" 1.2.0 "),a("release-date",{attrs:{date:"Sep. 2020"}})],1),e._v(" "),a("ul",[a("li",[e._v("Implemented extensive GitHub Actions Continuous Integration (CI)")]),e._v(" "),a("li",[e._v("Enhanced websocket based notifications - alert users of previously non-notified achievements when user starts a session for an application that utilizes skill-client libraries (ex. event listeners)")]),e._v(" "),a("li",[e._v("Improved back button behavior when users drill down within display component then navigate away from the page hosting the display component and finally returns to the component and uses the back button.")]),e._v(" "),a("li",[e._v("Introduced Badge's life-cycle (create -> configure -> go live) for project-based and global badges.")]),e._v(" "),a("li",[e._v("Added ability to customize footer and header in the dashboard")]),e._v(" "),a("li",[e._v("Implemented process to publish jar-based releases to GitHub")]),e._v(" "),a("li",[e._v("Implemented process to publish docker images to DockerHub")]),e._v(" "),a("li",[e._v("Implemented password reset feature")]),e._v(" "),a("li",[e._v("Enhanced Markdown support in the Dashboard and Skills Display applications")]),e._v(" "),a("li",[e._v("Improved directory structure of skills-service project and renamed its runtime artifact")]),e._v(" "),a("li",[e._v("Added support to store HttpSession in Redis")]),e._v(" "),a("li",[e._v("Added numerous new tests, fixed multitude of bugs and and improved overall stability")])]),e._v(" "),a("h4",{attrs:{id:"_1-1-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4"}},[e._v("#")]),e._v(" 1.1.4 "),a("release-date",{attrs:{date:"Jul. 2020"}})],1),e._v(" "),a("ul",[a("li",[e._v("Generated skills-service docker image and published to DockerHub")]),e._v(" "),a("li",[e._v("Upgraded dashboard to use the latest published release of @skilltree/skills-client-vue")])]),e._v(" "),a("h4",{attrs:{id:"_1-1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3"}},[e._v("#")]),e._v(" 1.1.3 "),a("release-date",{attrs:{date:"Jul. 2020"}})],1),e._v(" "),a("p",[a("strong",[e._v("Bug Fixes:")])]),e._v(" "),a("ul",[a("li",[e._v("Users table 'Last Updated' column actually shows creation date")]),e._v(" "),a("li",[e._v("In PKI mode gracefully handle if user info is not available anymore in user-info-service")]),e._v(" "),a("li",[e._v("Dashboard suggest users returns error (404)")]),e._v(" "),a("li",[e._v("New version alert does not come up when version updated")]),e._v(" "),a("li",[e._v("Global Badge's project's level must be achieved based on project's overall level and not subject's level")]),e._v(" "),a("li",[e._v("Global Badges do not show up after access is given")]),e._v(" "),a("li",[e._v("Fixed sporadic Cypress failures")])]),e._v(" "),a("p",[a("strong",[e._v("Performance Improvement:")])]),e._v(" "),a("ul",[a("li",[e._v("Do not retry when user could not be retrieved from user-info-service")]),e._v(" "),a("li",[e._v("Improve Browser Caching: Cache .js and .css named resources but never cache .html resources")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);
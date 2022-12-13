(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{374:function(e,t,o){e.exports=o.p+"assets/img/component-conf-approval-workload-withSkillsAdded.a6f7f408.png"},446:function(e,t,o){e.exports=o.p+"assets/img/client-display-skills-selfReport.6412ca8b.png"},447:function(e,t,o){e.exports=o.p+"assets/img/page-project-self_report.943e516d.png"},448:function(e,t,o){e.exports=o.p+"assets/img/Self_Report_Unsubscribe_20220720.052f12a4.png"},449:function(e,t,o){e.exports=o.p+"assets/img/component-conf-approval-workload-skills.7e60206b.png"},450:function(e,t,o){e.exports=o.p+"assets/img/component-conf-approval-workload-fallback.decb46f6.png"},545:function(e,t,o){"use strict";o.r(t);var s=o(51),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"self-reporting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#self-reporting"}},[e._v("#")]),e._v(" Self Reporting")]),e._v(" "),s("p",[e._v("Self Report is a feature that empowers users to mark skills as completed directly in the SkillTree dashboard OR through the embedded Skills Display component.\nA project administrator can enable "),s("code",[e._v("Self Reporting")]),e._v(" for a skill, set of skills or even all the skills in a project.\nSkills that have been configured with Self Reporting expose an "),s("code",[e._v("I did it")]),e._v(" button, allowing users to self report completion of those skills.")]),e._v(" "),s("p",[e._v("There are two "),s("code",[e._v("Self report")]),e._v(" types available:")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("Honor System")]),e._v(" - points are awarded immediately")]),e._v(" "),s("li",[s("code",[e._v("Approval Queue")]),e._v(" - request goes into the project's approval queue; project administrators can approve or deny requests.  Note When choosing Approval Queue, you may also choose to require users to submit a justification when self-reporting this skill by selecting the 'Justification Required' check box.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Project administrators can craft training profiles consisting of:")]),e._v(" "),s("ul",[s("li",[e._v("only self-reported skills "),s("em",[e._v("OR")])]),e._v(" "),s("li",[e._v("a mix of self-reported skills and skills that are reported programmatically "),s("em",[e._v("OR")])]),e._v(" "),s("li",[e._v("a project could have no self-reported skills at all")])])]),e._v(" "),s("h2",{attrs:{id:"configuring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[e._v("#")]),e._v(" Configuring")]),e._v(" "),s("p",[e._v("Self reporting is enabled and configured for each skill individually.\nWhen creating or editing a skill")]),e._v(" "),s("ol",[s("li",[e._v("select "),s("code",[e._v("Self Reporting")]),e._v(" checkbox")]),e._v(" "),s("li",[e._v("then select "),s("code",[e._v("Self Reporting")]),e._v(" type ("),s("code",[e._v("Approval Queue")]),e._v(" or "),s("code",[e._v("Honor System")]),e._v(")")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("By default, Self Reporting is disabled when creating or modifying a skill.\nIf your project primarily consists of Self Reported skills then you can easily change the default by navigating to the "),s("code",[e._v("Project -> Settings")]),e._v(" tab.\nThere you can enable Self Reporting and select its default type for all the skills that will be created after that point.")])]),e._v(" "),s("p",[e._v("Please see "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#setting-self-report-default"}},[e._v("Setting: Self Report Default")])],1),e._v(" "),s("h2",{attrs:{id:"skills-display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skills-display"}},[e._v("#")]),e._v(" Skills Display")]),e._v(" "),s("p",[e._v("Once Self Reporting is enabled for a skill, users will see an "),s("code",[e._v("I did it")]),e._v(" button on the Skills Display that will allow them to report the completion of that skill")]),e._v(" "),s("p",[s("img",{attrs:{src:o(446),alt:"Skills with Self Reporting"}})]),e._v(" "),s("p",[e._v("Skills with Self Reporting can be accessed in the Skills Display component embedded within your application (via "),s("RouterLink",{attrs:{to:"/skills-client/#client-display-integration"}},[e._v("Client Libraries")]),e._v(")")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("IDEA")]),e._v(" "),s("p",[e._v("You could create a project that consists purely of Self Reported skills!\nAlternatively you can have only some skills configured with Self Reporting or no skills at all.")])]),e._v(" "),s("h2",{attrs:{id:"approval-queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approval-queue"}},[e._v("#")]),e._v(" Approval Queue")]),e._v(" "),s("p",[e._v("If a skill is configured with Self Reporting type of the "),s("code",[e._v("Approval Queue")]),e._v(" then points will not be awarded right away but rather go\nthrough the simple approval workflow:")]),e._v(" "),s("ol",[s("li",[e._v("User click "),s("code",[e._v("I did it")]),e._v(" button and requests points")]),e._v(" "),s("li",[e._v("Request appears on the project's Self Report page (see the Screenshot below)")]),e._v(" "),s("li",[e._v("Project administrator approves or reject requests")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(447),alt:"SkillTree Skills Page"}})]),e._v(" "),s("h3",{attrs:{id:"approval-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approval-history"}},[e._v("#")]),e._v(" Approval History "),s("since",{attrs:{project:"skills-service",version:"1.7.0"}})],1),e._v(" "),s("p",[e._v("Project administrators can can either approve or reject points/skill requests.\nApprovals and rejections are documented in the "),s("code",[e._v("Approval History")]),e._v(" section.")]),e._v(" "),s("p",[e._v("Approval History tracks:")]),e._v(" "),s("ul",[s("li",[e._v("Skill name and skill id")]),e._v(" "),s("li",[e._v("Whether request was approved or rejected")]),e._v(" "),s("li",[e._v("Requester's and approver's user ids")]),e._v(" "),s("li",[e._v("requested and approved/rejected dates")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Approval History")]),e._v(" table can be sorted by all of its columns or filtered by "),s("code",[e._v("Skill Name")]),e._v(", "),s("code",[e._v("User Id")]),e._v(" and/or "),s("code",[e._v("Approver Id")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"notifications"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notifications"}},[e._v("#")]),e._v(" Notifications")]),e._v(" "),s("p",[e._v("SkillTree will send email notifications to project administrators when points are requested, approved or rejected.")]),e._v(" "),s("p",[e._v("Project administrators can unsubscribe from notifications by navigating to the "),s("code",[e._v("Self Report")]),e._v(" page within their project.\nThe "),s("code",[e._v("Self Reported Skills Requiring Approval")]),e._v(" section contains a Subscribed/Unsubscribed toggle on the top-right of the component.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(448),alt:"Self Report Unsubscribe Example"}})]),e._v(" "),s("conditional",{attrs:{visibilityFlag:"showInstallGuide"}},[s("p",[e._v("Please note, depending on the installation mode, an email sometimes is not available for non-admin users,\nin that case an email notification will not be emitted. This is not an issue in the PKI or Oauth installation modes.\nTo learn more please visit "),s("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html"}},[e._v("Installation Modes")]),e._v(" section.\nIf your organization is already running a centralized service then your POC would be able to answer that question.")],1),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("SkillTree "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/users.html#root"}},[e._v("Root Admin")]),e._v(" must configure email notification settings before this feature can work.\nPlease visit the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/settings.html#email-notifications"}},[e._v("Email Notifications Settings")]),e._v(" to learn more.")],1)])]),e._v(" "),s("h2",{attrs:{id:"split-approval-workload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split-approval-workload"}},[e._v("#")]),e._v(" Split Approval Workload")]),e._v(" "),s("p",[e._v("By default, all Self Approval requests are routed to the project's approvers and administrators\nand they all will see the requests and will be able to approve them.\nAll approvers and administrators will also get notifications, unless disabled of course\n(please see the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/self-reporting.html#notifications"}},[e._v("Notification")]),e._v(" section).")],1),e._v(" "),s("p",[e._v("If your SkillTree project has a large number of users submitting Self Report Approval requests it may overwhelm your\nproject's Approvers. SkillTree offers a flexible way to split the Self Approval workload between multiple Approvers\nand/or Administrators.")]),e._v(" "),s("ul",[s("li",[e._v("An approver can be assigned to approve requests from specific users")]),e._v(" "),s("li",[e._v("An approver can be assigned to approve requests for specific skills")]),e._v(" "),s("li",[e._v("An approver can be assigned to approve requests from users that have a certain user tag and/or that tag starts with a certain value (example: user's assigned org)")]),e._v(" "),s("li",[e._v("Ability to designate a fallback (i.e catch-all) approver")])]),e._v(" "),s("p",[e._v("To configure the Self Approval workload please navigate to the "),s("code",[e._v("Project -> Self Report")]),e._v(" and then click the "),s("code",[e._v("Configure")]),e._v(" button on the top right.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(374),alt:"Self Report Configure Approval"}})]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Please note that the project needs at least 2 Approvers/Admins in order to configure the Approval Workload.\nTo add Approvers please navigate to the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#access"}},[s("code",[e._v("Project -> Access")])]),e._v(" page")],1)]),e._v(" "),s("p",[e._v("There are 2 user roles that can approve/deny Self Report requests, let's review:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Admin")]),e._v(": enables management of the training profile for that project such as creating and modifying subjects, skills, badges, etc.")]),e._v(" "),s("li",[s("strong",[e._v("Approver")]),e._v(": allowed to approve and deny Self Reporting approval requests while only getting a read-only view of the project.")])]),e._v(" "),s("p",[e._v("Please visit the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#access"}},[e._v("Access")]),e._v(" section to learn more about adding these roles.")],1),e._v(" "),s("p",[e._v("To configure which requests are routed to an approver please click the "),s("code",[e._v("Edit")]),e._v(" button for that Approver/Admin.\nThat will expand the configuration options. Here is an example of configured skills:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(449),alt:"Self Report Configure Approval"}})]),e._v(" "),s("p",[s("img",{attrs:{src:o(374),alt:"Self Report Configure Approval"}})]),e._v(" "),s("p",[e._v("Any request for a configured skill will then be routed to that approver and the remaining unmatched requests are forwarded to the\nfallback user (in this case implicit Default Fallback user).")]),e._v(" "),s("p",[e._v("The overall strategy is simple - if the request matched a setting parameter (ex. skill) then it's routed to that approver.\nIf multiple approvers are matched, for example:")]),e._v(" "),s("ol",[s("li",[e._v("one approver is assigned to approve requests for a skill "),s("strong",[e._v("and")])]),e._v(" "),s("li",[e._v("another approver is configured to approve all the requests for a particular user.")])]),e._v(" "),s("p",[e._v("Then "),s("em",[e._v("the requests for that skill by the configured user")]),e._v(" will be forwarded to both Aprovers:")]),e._v(" "),s("ol",[s("li",[e._v("first approver matching by skill configuration "),s("strong",[e._v("and")])]),e._v(" "),s("li",[e._v("second approver matching by user-based configuration.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Pending Requests vs. History")]),e._v(" "),s("p",[e._v("If Split Approval Workload is configured then each Approver/Admin will see approval requests that only match their configuration.")]),e._v(" "),s("p",[e._v("As far as approval history goes however, Aprovers and Admins have a slightly different view.\nUsers with an "),s("em",[e._v("Approver")]),e._v(" role will "),s("strong",[e._v("only")]),e._v(" see the history of the requests that they approved while users with\nan "),s("em",[e._v("Admin")]),e._v(" role will see the history of all the requests "),s("em",[e._v("(it's an Admin role after all)")]),e._v(".")])]),e._v(" "),s("p",[e._v("Even when Split Approval Workload is configured an Approver or an Admin can still turn off email notifications  (please see the "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/self-reporting.html#notifications"}},[e._v("Notification")]),e._v(" section).\nUsers that turn off notifications simply won't get an email but will still be able to see and approve pending requests.")],1),e._v(" "),s("p",[e._v('Any unmatched requests are forwarded to all the fallback Approvers or Admins. Fallback can be implicit or explicit.\nImplicit means that specific Approvers/Admins were not specified as handlers of the unmatched request.\nTo configure an explicit fallback user change its switch to "on":')]),e._v(" "),s("p",[s("img",{attrs:{src:o(450),alt:"Self Report Configure Approval"}})]),e._v(" "),s("p",[e._v("Configuring explicit fallback users will then prevent requests from being forwarded to users without any configuration.\nA very simple example is utilizing this feature to configure all the requests to go to a specific\nApprover only, as depicted in the screenshot above.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);
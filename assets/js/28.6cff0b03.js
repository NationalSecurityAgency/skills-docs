(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{433:function(e,t,i){e.exports=i.p+"assets/img/page-skills-group.e9152f90.png"},434:function(e,t,i){e.exports=i.p+"assets/img/modal-new-group.1127d204.png"},514:function(e,t,i){"use strict";i.r(t);var o=i(41),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"skill-groups"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#skill-groups"}},[e._v("#")]),e._v(" Skill Groups "),o("since",{attrs:{project:"skills-service",version:"1.8.0"}})],1),e._v(" "),o("p",[e._v("Skill Groups is a way to group/organize skills under a subject.\nProjects are composed of Subjects which are made of either "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html"}},[e._v("Skills")]),e._v(" or Skill Groups.\nA group is a collection of 2 or more skills that you want to keep and achieve together.\nA group is achieved when all of its skills are fully completed.\nAlternatively, a group can be configured to only require "),o("code",[e._v("N")]),e._v(" number of the group's skills.")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Partial Requirement Example")]),e._v(" "),o("p",[e._v("If let's say a group has "),o("code",[e._v("5")]),e._v(" skills, you can configure it to only require "),o("code",[e._v("3")]),e._v(" skills.\nIn this case, when any of the "),o("code",[e._v("3")]),e._v(" skills under that group are completed then the group achievement is awarded!")])]),e._v(" "),o("p",[o("img",{attrs:{src:i(433),alt:"Skills Group Screenshot"}})]),e._v(" "),o("p",[e._v("To create a group, navigate to "),o("code",[e._v("Project -> Subject")]),e._v(" then click on "),o("code",[e._v("Group +")]),e._v(", the following group properties can be specified:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(434),alt:"New Skills Group Modal"}})]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Property")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Explanation")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("Group Name")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Display name of the skill")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("Group ID")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[e._v("Group ID that will be used to identify this group")])]),e._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[e._v("Description")]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("em",[e._v("(Optional)")]),e._v(" Description of how to perform this skill. The Description property supports markdown.")])])])]),e._v(" "),o("p",[e._v("After a group is created then skills can be added to the group. To add Skills to the group expand the group and click on the "),o("code",[e._v("Add Skill To Group")]),e._v(" button.\nThis will bring up a new skill dialog, to learn more about skills and their attributes please visit the "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html"}},[e._v("Skills Section")]),e._v(".")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("When first created, a Group is not visible on the Skills Display and will be labeled with the "),o("code",[e._v("Disabled")]),e._v(" tag in the Project Administration dashboard. To make the group visible click on the "),o("code",[e._v("Go Live")]),e._v(" button.\nTo learn more, please visit the "),o("RouterLink",{attrs:{to:"/dashboard/user-guide/skills-groups.html#groups-visibility-lifecycle"}},[e._v("Group's Lifecycle Section")]),e._v(" below.")],1)]),e._v(" "),o("h2",{attrs:{id:"groups-visibility-lifecycle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#groups-visibility-lifecycle"}},[e._v("#")]),e._v(" Groups Visibility Lifecycle")]),e._v(" "),o("p",[e._v("When a group is initially created it will have "),o("code",[e._v("0")]),e._v(" skills and will be tagged as "),o("code",[e._v("Disabled")]),e._v(".\nSkills can then be added to the group but it will continue to be disabled until the "),o("code",[e._v("Go Live")]),e._v(" button is clicked and the action is confirmed.")]),e._v(" "),o("p",[e._v("Disabled groups have the following behavior and attributes:")]),e._v(" "),o("ul",[o("li",[e._v("Group is NOT visible in the "),o("code",[e._v("Skills Display")])]),e._v(" "),o("li",[e._v("Skill events cannot be reported for any skill under the group")])]),e._v(" "),o("p",[e._v("The disabled state allows project administrators to fully customize groups before exposing them for user consumption.\nThere is only 1 requirement in order to "),o("code",[e._v("Go Live")]),e._v(" - that the group must have at least 2 skills.\nOnce a group is switched to a "),o("code",[e._v("Live")]),e._v(" state it can never return to the "),o("code",[e._v("Disabled")]),e._v(" state.")]),e._v(" "),o("h2",{attrs:{id:"partial-skill-requirement"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#partial-skill-requirement"}},[e._v("#")]),e._v(" Partial Skill Requirement")]),e._v(" "),o("p",[e._v("Groups have an option to only require "),o("code",[e._v("N")]),e._v(" skills out of the total available number of skills added to the group.\nFor example, if a group has "),o("code",[e._v("5")]),e._v(" skills, you can configure it to only require the completion of "),o("code",[e._v("3")]),e._v(" skills.\nIn this case, when any "),o("code",[e._v("3")]),e._v(" skills under that group are completed then the group achievement is awarded!")]),e._v(" "),o("p",[e._v("Please note that in order to modify the number of required skills in a group, the "),o("code",[e._v("Point Increment")]),e._v(" and "),o("code",[e._v("Point Occurrences")]),e._v(" attributes must match for all the skills under that group.\nIf "),o("code",[e._v("Point Increment")]),e._v(" and "),o("code",[e._v("Point Occurrences")]),e._v(" are not aligned then the SkillTree dashboard will present a sync dialog to seamlessly align these attributes.\nThe reason for this requirement is that the group's skills points contribute to the subject's and project's points and when partial completion is configured\nthere would be no consistent way to calculate points if they didn't align between the skills in that group.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Partial Requirement Example")]),e._v(" "),o("p",[e._v("Let's say a group has "),o("code",[e._v("5")]),e._v(" skills with the partial skill requirement of "),o("code",[e._v("3")]),e._v(". If each skill is "),o("code",[e._v("10")]),e._v(" points then the group has "),o("code",[e._v("30")]),e._v(" total points.\nThe same "),o("code",[e._v("30")]),e._v(" points will contribute to the subject's and project's points as well. Although a user can complete all "),o("code",[e._v("5")]),e._v(" skills in the group, only "),o("code",[e._v("30")]),e._v(" points will be awarded.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
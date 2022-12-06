(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{340:function(e,t,a){e.exports=a.p+"assets/img/page-project-levels.90a42997.png"},535:function(e,t,a){"use strict";a.r(t);var s=a(51),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#levels"}},[e._v("#")]),e._v(" Levels")]),e._v(" "),s("p",[e._v("Levels are users' achievement path - the overall goal of the gameified training profile is to encourage users to achieve the highest level.\nLevels are tracked for the entire "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html"}},[e._v("project")]),e._v(" as well as for each "),s("RouterLink",{attrs:{to:"/dashboard/user-guide/subjects.html"}},[e._v("subject")]),e._v(" which provides users many ways to progress forward.")],1),e._v(" "),s("p",[e._v("The Skills dashboard supports two flexible ways to manage levels:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#percentage-based-levels"}},[e._v("Percentage Based")]),e._v(" "),s("em",[e._v("(default)")]),e._v(": Each level is defined as a percentage of "),s("strong",[e._v("overall")]),e._v(" points and the actual level's point range is calculated based on that percentage.")]),e._v(" "),s("li",[s("a",{attrs:{href:"#point-based-levels"}},[e._v("Point based")]),e._v(": Level's from and to points are configured explicitly.")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("There can be only one level strategy selected and it will apply to the "),s("strong",[e._v("entire")]),e._v(" project including project levels and subject levels.")])]),e._v(" "),s("p",[e._v("Please visit "),s("code",[e._v("Project -> Settings")]),e._v(" to configure a level management strategy.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(340),alt:"SkillTree Levels Page"}})]),e._v(" "),s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best practices")]),e._v(" "),s("ul",[s("li",[e._v("Consider starting with the "),s("a",{attrs:{href:"#percentage-based-levels"}},[e._v("Percentage Based")]),e._v(" strategy as each level's points are generated from a percentage so it's quick to get started. Once the majority of skills are created and the overall points are stable then the switch to the "),s("a",{attrs:{href:"#point-based-levels"}},[e._v("Point based")]),e._v(" strategy may be considered.")]),e._v(" "),s("li",[e._v("Initially, play around with both strategies but then select one strategy and stick with it. Both strategies work very well so it's a matter of preference.")]),e._v(" "),s("li",[e._v("See the "),s("a",{attrs:{href:"#percentage-based-vs-points-based"}},[e._v("Percentage Based vs. Points Based")]),e._v(" section to determine which option works best for you.")])]),e._v(" "),s("h2",{attrs:{id:"percentage-based-levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#percentage-based-levels"}},[e._v("#")]),e._v(" Percentage Based Levels")]),e._v(" "),s("p",[e._v("Each level is defined as a percentage of "),s("strong",[e._v("overall")]),e._v(" points and the actual level's point range is calculated based on that percentage.\nBy default, projects and subjects are created with "),s("strong",[e._v("5")]),e._v(" levels:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Level")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Percentage")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("1")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("10%")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("2")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("25%")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("3")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("45%")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("4")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("67%")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("5")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("92%")])])])]),e._v(" "),s("p",[e._v("This allows levels to be fluid as Skills are defined and "),s("strong",[e._v("overall")]),e._v(" points change.")]),e._v(" "),s("h2",{attrs:{id:"point-based-levels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#point-based-levels"}},[e._v("#")]),e._v(" Point Based Levels")]),e._v(" "),s("p",[e._v("Using "),s("code",[e._v("Project -> Settings")]),e._v(", levels can be changed to a points based strategy, where each level requires the project administrator to define an explicit point range. From and to points are defined with "),s("code",[e._v("from")]),e._v(" being exclusive and "),s("code",[e._v("to")]),e._v(" being inclusive.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Please Note")]),e._v(" "),s("p",[e._v("A project must have at least 100 total points defined before this setting can be enabled.")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Empty Project and Subject")]),e._v(" "),s("p",[e._v("In the event that a project is switched to points based levels, any "),s("strong",[e._v("empty")]),e._v(' subjects (subjects with no skills) will have levels defined\nbased on a theoretical points maximum of 1000 e.g., "Level 1" at 100-250 points, "Level 2" at 250-450 points, "Level 3" at 450-670, etc. These values can\nbe easily edited after the configuration change if desired.')])]),e._v(" "),s("h2",{attrs:{id:"percentage-based-vs-points-based"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#percentage-based-vs-points-based"}},[e._v("#")]),e._v(" Percentage Based vs. Points Based")]),e._v(" "),s("p",[e._v("So which strategy is right for your application? As always the answer is... it depends 😃!")]),e._v(" "),s("p",[e._v("The percentage based approach is the easiest to manage - the points are always calculated (and re-calculated) based on the defined percentages.\nAs skills are added, and therefore the overall amount of points goes up, the point requirements for levels are re-calculated.")]),e._v(" "),s("p",[e._v("But what about users that already achieved a particular level based on the previously defined points (as calculated based on the percentages)?\nThe system's overall approach is to never take away achievements therefore that achieved level will persist.\nUsers will simply need to earn those missing points in addition to the next level's point requirements in order to progress to the next level.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Please note")]),e._v(" "),s("p",[e._v("Our overall methodology is to "),s("strong",[e._v("never")]),e._v(" take away achievements")])]),e._v(" "),s("p",[e._v("If you don't like the idea that the point requirements to achieve a particular level will vary with time (as skills are added) then the points based management strategy is for you.\nOnce you switch to the "),s("a",{attrs:{href:"#point-based-levels"}},[e._v("Point based")]),e._v(" strategy each level will have an explicit "),s("em",[e._v("from")]),e._v(" and "),s("em",[e._v("to")]),e._v(" points defined.")]),e._v(" "),s("p",[e._v("As new skills are added, the extra points will "),s("em",[e._v("not")]),e._v(" affect existing levels and without further actions will "),s("em",[e._v("not")]),e._v(" influence what it takes to achieve those levels.\nYou really have two options to address this issue:")]),e._v(" "),s("ol",[s("li",[e._v("change "),s("em",[e._v("from")]),e._v(" and "),s("em",[e._v("to")]),e._v(" points of each level "),s("em",[e._v("OR")])]),e._v(" "),s("li",[e._v("create additional levels that encapsulate the newly added points.")])]),e._v(" "),s("p",[e._v("Approach #1 has the same issues as the percentage based strategy. Approach #2 requires careful planning so that when new points are added a new level is created to accommodate those points.")])])}),[],!1,null,null,null);t.default=l.exports}}]);
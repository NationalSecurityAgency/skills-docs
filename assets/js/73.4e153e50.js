(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{527:function(a,s,e){"use strict";e.r(s);var t=e(51),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"development-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-installation"}},[a._v("#")]),a._v(" Development Installation")]),a._v(" "),e("p",[a._v("SkillTree's "),e("code",[a._v("skills-service")]),a._v(" is configured with smart defaults and will work out-of-the-box.\nThe only sticky wicket is that by default SkillTree stores its data in an embedded in-memory H2 database.\nThat data is ephemeral and will not persist between application restarts.")]),a._v(" "),e("p",[a._v("You can easily setup one of 3 options:")]),a._v(" "),e("ol",[e("li",[a._v("Make the embedded H2 database persistent to a file")]),a._v(" "),e("li",[a._v("Configure an external H2 database (H2 server mode)")]),a._v(" "),e("li",[a._v("Configure PostgreSQL (would also be used in production)")])]),a._v(" "),e("p",[a._v("The following 2 sections will provide examples using Docker and Jar-based distributions:")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Please note that all of these example run in the "),e("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html#password-auth-mode"}},[a._v("Password Auth Mode")]),a._v(".\nPlease visit "),e("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html#pki-auth-mode"}},[a._v("PKI Auth Mode")]),a._v(" if you are interested in that mode. However, definitely use the "),e("RouterLink",{attrs:{to:"/dashboard/install-guide/installModes.html#password-auth-mode"}},[a._v("Password Auth Mode")]),a._v(" if you are not sure which mode is applicable to you.")],1)]),a._v(" "),e("h2",{attrs:{id:"docker-distribution-dev-install-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-distribution-dev-install-examples"}},[a._v("#")]),a._v(" Docker Distribution Dev Install Examples")]),a._v(" "),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with embedded H2 database persistent to a file:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" skills-service "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPRING_PROPS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\\nspring.datasource.url=jdbc:h2:file:/h2-db"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nskilltree/skills-service:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Please note that in this example the H2 database is persisted to file in "),e("code",[a._v("/h2-db")]),a._v(" within that container only.\nRemoving the container will cause data loss.")]),a._v(" "),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with external H2 database:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" skills-service "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPRING_PROPS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\\nspring.datasource.url=jdbc:h2:tcp://<host>:1521/skills,\\\nspring.datasource.username=<username>,\\\nspring.datasource.password=<password>"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nskilltree/skills-service:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with PostgreSQL:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" skills-service "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SPRING_PROPS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\\nspring.datasource.url=jdbc:postgresql://<host>:5432/skills,\\\nspring.datasource.username=<username>,\\\nspring.datasource.password=<password>"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nskilltree/skills-service:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h2",{attrs:{id:"jar-based-distribution-development-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jar-based-distribution-development-installation"}},[a._v("#")]),a._v(" Jar-Based distribution development installation")]),a._v(" "),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with embedded H2 database persistent to a file:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" ~/Downloads/skills-service-X.X.X.jar "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.url")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:h2:file:~/h2-db \n")])])]),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with external H2 database:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" ~/Downloads/skills-service-X.X.X.jar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.url")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:h2:tcp://"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":1521/skills "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.username")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.password")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pass"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Run "),e("code",[a._v("skills-service")]),a._v(" with PostgreSQL:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" ~/Downloads/skills-service-X.X.X.jar "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.url")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:postgresql://"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(":5432/skills "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.username")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--spring.datasource.password")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pass"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
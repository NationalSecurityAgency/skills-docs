(window.webpackJsonp=window.webpackJsonp||[]).push([[13,52],{376:function(e,t,a){"use strict";a.r(t);var i={name:"SkillTreeVideo",props:{videoMeta:{type:Object,required:!0}}},r=a(41),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"h2"},[e._v(e._s(e.videoMeta.title))]),e._v(" "),a("p",{staticClass:"text-secondary",staticStyle:{"font-size":"1.1rem"}},[e._v("\n    "+e._s(e.videoMeta.description)+"\n  ")]),e._v(" "),a("div",{staticStyle:{"margin-left":"2rem","margin-right":"2rem"}},[a("a",{attrs:{href:e.videoMeta.url,target:"_blank"}},[a("i",{staticClass:"fas fa-camera-retro border p-2 text-secondary border-secondary rounded",staticStyle:{"font-size":"1.5rem"}}),e._v(" Watch the Video "),a("i",{staticClass:"fas fa-external-link-alt"})])])])}),[],!1,null,"3632c159",null);t.default=s.exports},453:function(e){e.exports=JSON.parse("[]")},471:function(e,t,a){"use strict";a.r(t);var i=a(453),r={name:"SkillTreeVideos",components:{SkillTreeVideo:a(376).default},data:function(){return{videoMeta:i}}},s=a(41),n=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.videoMeta,(function(t){return a("div",{key:t.title},[a("skill-tree-video",{staticClass:"mt-5",attrs:{"video-meta":t}}),e._v(" "),a("hr")],1)})),0)}),[],!1,null,"d730084e",null);t.default=n.exports}}]);
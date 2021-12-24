(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(11),n(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=n(0);var j=function(e){var t=e.categories,n=void 0===t?[]:t,r=e.setCurrentCategory,a=e.contactSelected,s=e.currentCategory,i=e.setContactSelected;return Object(c.useEffect)((function(){document.title=o(s.name)}),[s]),Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:" "})," Kyle Ferguson"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return i(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return i(!0)},children:"Contact"})}),n.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(s.name===e.name&&!a&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){r(e),i(!1)},children:o(e.name)})},e.name)}))]})})]})};var d=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:'Kyle Ferguson is always thinking forward and contiuously learning new technologies to add to my skillset / knowledge base. I am going through this Full Stack Development program to my current technical skillset to the limit and feed my constant curiousity for how things function "under the hood" of the internet and websites. I intend to bring this deeper technical understanding to my current job operating as a Delivery Manager and setting up my team of developers for success.'})})]})},h=n(3),u=n(5);var b=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],j=s[1],d=n.name,b=n.email,m=n.message,O=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(r(Object(u.a)(Object(u.a)({},n),{},Object(h.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:O})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:O})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:O})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})},m=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Experience"}),Object(l.jsxs)("p",{children:["I've been working with the Salesforce platform since 2015. I graduated from the University of Houston in 2017. Currently, I'm working as a Delivery Manager at CapTech Consulting and going through the Full Stack Development program at UT Austin. Connect with me on ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/salesforcekyle/",children:" LinkedIn! "})," or ",Object(l.jsx)("a",{href:"https://github.com/kferguson52",children:" GitHub "})," "]})]})},O=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:"Photo Port"}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://kferguson52.github.io/photo-port/",children:"Photo Port Example React Portfolio"})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://kferguson52.github.io/weather-dashboard/",children:"Weather Dashboard"})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://madileesmith.github.io/ffxiv-character-data/",children:"FF Character Bios"})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://kferguson52.github.io/food-festival/",children:"Food Festival"})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://kferguson52.github.io/taskmaster-pro/",children:"TaskMaster Pro"})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://kferguson52.github.io/friendly-parakeet/",children:"Password Generator"})})]})},x=(new Date).getFullYear(),f=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{children:["Kyle Ferguson \xa9 ",x]})})},g=function(e){e.selectedNavItem,e.setSelectedNavItem;return Object(l.jsx)("header",{className:"site-header py-5",children:"React Portfolio"})};var p=function(){var e=Object(c.useState)([{name:"portfolio",description:"Collection of projects related to react"},{name:"resume",description:"Connect with me on LinkedIn!"}]),t=Object(i.a)(e,1)[0],n=Object(c.useState)(t[0]),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),h=Object(i.a)(o,2),u=h[0],x=h[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(j,{categories:t,setCurrentCategory:s,currentCategory:a,contactSelected:u,setContactSelected:x}),Object(l.jsx)("main",{children:u?Object(l.jsx)(b,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{currentCategory:a}),Object(l.jsx)(O,{currentCategory:a}),Object(l.jsx)(d,{})]})}),Object(l.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.3ce77819.chunk.js.map
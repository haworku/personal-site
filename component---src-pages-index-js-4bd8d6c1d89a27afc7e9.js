(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(e,t,a){"use strict";a.r(t);a(19);var n=a(0),i=a.n(n),r=a(204),l=a(202),o=(a(52),a(215),a(217)),c=(a(205),{container:{display:"flex"}}),m={github:{name:"GitHub",link:"https://www.github.com/haworku",icon:i.a.createElement(o.a,null)},linkedin:{name:"LinkedIn",link:"https://www.linkedin.com/in/haworku",icon:i.a.createElement(o.b,null)}},s=function(e){var t=e.network;return i.a.createElement("button",{"aria-label":"Share via "+m[t].name,className:"social-icon",onClick:function(e){e.preventDefault(),window.open(m[t].link)},href:m[t].link},m[t].icon)},u=function(){return i.a.createElement("div",{style:c.container},i.a.createElement(s,{id:"linkedin",network:"linkedin"}),i.a.createElement(s,{id:"github",network:"github"}))},d=(a(206),{mainText:{marginLeft:"10px"}});t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement("h1",{className:"site-title",style:Object.assign({},d.mainText,{marginLeft:0})},"Hana Worku"),i.a.createElement("p",{style:d.mainText},"Pardon the mess - I'm rebuilding my personal site. Until then, find me on social."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(u,null)))}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Hana Worku"}}}}},202:function(e,t,a){"use strict";var n=a(203),i=a(0),r=a.n(i),l=a(207),o=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},203:function(e){e.exports={data:{site:{siteMetadata:{title:"Hana Worku",description:"Personal site for Hana Worku",author:"@haworku"}}}}},204:function(e,t,a){"use strict";var n=a(201),i=a(0),r=a.n(i),l=a(95),o=(a(205),function(e){e.siteTitle;return r.a.createElement("header",{style:{background:"rgba(102, 0, 255, 0.46)",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}},r.a.createElement("h2",{style:{margin:0}},r.a.createElement(l.Link,{activeClassName:"nav-link-active",to:"/",className:"nav-link"},"Home"),r.a.createElement(l.Link,{activeClassName:"nav-link-active",to:"/about/",className:"nav-link"},"About"))))});o.defaultProps={siteTitle:""};var c=o,m=(a(206),{container:{margin:"0 auto",display:"flex",flexDirection:"column",padding:"0px 1.0875rem 1.45rem",paddingTop:0},main:{flex:1,margin:"2rem"},footer:{textAlign:"center",width:"100%"}});t.a=function(e){var t=e.children,a=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),r.a.createElement("div",{style:m.container},r.a.createElement("main",{style:m.main},t)))}}}]);
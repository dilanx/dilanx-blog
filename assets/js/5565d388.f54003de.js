"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={date:new Date("2023-05-30T00:00:00.000Z"),updated:new Date("2023-05-31T00:00:00.000Z"),authors:["dilan"],tags:["projects","paper","northwestern"],image:"/img/discontinuing-the-paper-url-save-data-system/preview.jpg"},s="Discontinuing the Paper URL Save Data System",l={permalink:"/discontinuing-the-paper-url-save-data-system",source:"@site/blog/discontinuing-the-paper-url-save-data-system.md",title:"Discontinuing the Paper URL Save Data System",description:"Starting June 02 2023, Paper will no longer support the URL save data system that has existed since launch.",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"projects",permalink:"/tags/projects"},{label:"paper",permalink:"/tags/paper"},{label:"northwestern",permalink:"/tags/northwestern"}],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"Dilan Nair",title:"Software Developer",url:"https://www.dilanxd.com",icon:{letters:"DN",font:"bold 1.3rem Charter"},key:"dilan"}],frontMatter:{date:"2023-05-30T00:00:00.000Z",updated:"2023-05-31T00:00:00.000Z",authors:["dilan"],tags:["projects","paper","northwestern"],image:"/img/discontinuing-the-paper-url-save-data-system/preview.jpg"},nextItem:{title:"A Comprehensive React Tutorial for Beginners",permalink:"/a-comprehensive-react-tutorial-for-beginners"}},i={authorsImageUrls:[void 0]},p=[{value:"What you should know",id:"what-you-should-know",level:2},{value:"What you should do",id:"what-you-should-do",level:2},{value:"Why this change is happening",id:"why-this-change-is-happening",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starting ",(0,r.kt)("strong",{parentName:"p"},"June 02 2023"),", Paper will no longer support the URL save data system that has existed since launch."),(0,r.kt)("admonition",{title:"Don't waste your time",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't know what the URL save data system is or don't use it, this change won't affect you at all.")),(0,r.kt)("h2",{id:"what-you-should-know"},"What you should know"),(0,r.kt)("p",null,"If you've used ",(0,r.kt)("strong",{parentName:"p"},"Paper")," or its predecessor ",(0,r.kt)("strong",{parentName:"p"},"Plan Northwestern"),", you may know about the URL save data system. These consist of URLs that can get super long and usually look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://www.paper.nu/?<some stuff here>\n")),(0,r.kt)("p",null,"Note the ",(0,r.kt)("strong",{parentName:"p"},"? question mark")," before the rest of the data. URLs that use the ",(0,r.kt)("strong",{parentName:"p"},"# hashtag")," (shortened links) are not affected by this change."),(0,r.kt)("p",null,"Starting May 12 2023, ",(0,r.kt)("strong",{parentName:"p"},"these long links will no longer load plan or schedule data"),". If the link you use includes this data, it will be ignored and removed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sharing plans and schedules by link will still be possible!")," The shortened links will now be the default. Pressing ",(0,r.kt)("strong",{parentName:"p"},"Export")," then ",(0,r.kt)("strong",{parentName:"p"},"Share link")," will automatically generate a shortened link to share instead of requiring you to press a button to shorten it."),(0,r.kt)("h2",{id:"what-you-should-do"},"What you should do"),(0,r.kt)("p",null,"If you aren't using the account system, use it! However, the most recently edited plan and schedule will continue to be saved to your browser as normal. If you use these long links as a way to save your plans or schedules, it'll no longer work."),(0,r.kt)("p",null,"If this change has caught you by surprise, you can load plans and schedules that use these legacy URLs by going to ",(0,r.kt)("strong",{parentName:"p"},"Settings"),", then ",(0,r.kt)("strong",{parentName:"p"},"General")," (the ",(0,r.kt)("strong",{parentName:"p"},"gear icon")," button, which is selected by default), then selecting the ",(0,r.kt)("strong",{parentName:"p"},"Load legacy URL")," option."),(0,r.kt)("h2",{id:"why-this-change-is-happening"},"Why this change is happening"),(0,r.kt)("p",null,"This feature has existed since the launch of Plan Northwestern, through the launch of Paper. However, the URLs are annoying, long, and will often cause old plans and schedules to be loaded because of browsers autocompleting the URL. Because shortened links exist for sharing, it makes more sense just to use that, especially since links are not permanently tied to a plan or schedule. They represent the data on the plan and schedule and will not update if the plan or schedule is updated. Instead, the link will change. This is still true for shortened links, but they're much easier to handle and don't live in the address bar (they're read and removed as the link is loaded)."))}h.isMDXComponent=!0}}]);
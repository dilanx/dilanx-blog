"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[103],{3882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(6900),r=n(8077),l=n(1944),i=n(5281),o=n(9460),s=n(6841),c=n(6341),m=n(5999),d=n(7294);const u=d.forwardRef((function({title:e,titleId:t,...n},a){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))}));const f=d.forwardRef((function({title:e,titleId:t,...n},a){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}));var g=n(6850);const v={paginationSublabel:"paginationSublabel_nQFp",left:"left_e3sR",right:"right_Hw6c"};function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function h(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(g.Z,p({},n,{subLabel:a.createElement("div",{className:(0,r.Z)(v.paginationSublabel,v.left)},a.createElement(u,{className:"d-arrow"}),"Newer Post")})),t&&a.createElement(g.Z,p({},t,{subLabel:a.createElement("div",{className:(0,r.Z)(v.paginationSublabel,v.right)},"Older Post",a.createElement(f,{className:"d-arrow"})),isNext:!0})))}var b=n(5893);function L(){const{assets:e,metadata:t}=(0,o.C)(),{title:n,description:a,date:r,tags:i,authors:s,frontMatter:c}=t,{keywords:m}=c,d=e.image??c.image;return(0,b.jsxs)(l.d,{title:n,description:a,keywords:m,image:d,children:[(0,b.jsx)("meta",{property:"og:type",content:"article"}),(0,b.jsx)("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&(0,b.jsx)("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&(0,b.jsx)("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")})]})}var x=n(6668);function E(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function k(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=k({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function C(e){const t=e.getBoundingClientRect();return t.top===t.bottom?C(e.parentNode):t}function H(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>C(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(C(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function N(){const e=(0,d.useRef)(0),{navbar:{hideOnScroll:t}}=(0,x.L)();return(0,d.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function _(e){const t=(0,d.useRef)(void 0),n=N();(0,d.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=H(o,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var w=n(9960);function j(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?(0,b.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,b.jsxs)("li",{children:[(0,b.jsx)(w.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,b.jsx)(j,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const y=d.memo(j);function O(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i,...o}=e;const s=(0,x.L)(),c=l??s.tableOfContents.minHeadingLevel,m=i??s.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,d.useMemo)((()=>k({toc:E(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:c,maxHeadingLevel:m});return _((0,d.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m}}),[a,r,c,m])),(0,b.jsx)(y,{toc:u,className:n,linkClassName:a,...o})}const I={tableOfContents:"tableOfContents_tlZ9",tocLink:"tocLink_OkFP",active:"active_B3Iu",docItemContainer:"docItemContainer_Tb8c"};function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A.apply(this,arguments)}const M=`table-of-contents__link toc-highlight ${I.tocLink}`,P=I.active;function Z(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(I.tableOfContents,"thin-scrollbar",t)},a.createElement(O,A({},n,{linkClassName:M,linkActiveClassName:P})))}function B(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:l}=(0,o.C)(),{nextItem:i,prevItem:m,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:g}=d;return a.createElement(s.Z,{sidebar:t,toc:!u&&l.length>0?a.createElement(Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:g}):void 0},a.createElement(c.Z,null,n),(i||m)&&a.createElement(h,{nextItem:i,prevItem:m}))}function R(e){const t=e.content;return a.createElement(o.n,{content:e.content,isBlogPostPage:!0},a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(L,null),a.createElement(B,{sidebar:e.sidebar},a.createElement(t,null))))}}}]);
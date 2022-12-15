"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[103],{245:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(2638),r=n(2715);function c(e){const{sidebar:t,toc:n,children:c,...i}=e;return a.createElement(l.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--9",itemScope:!0,itemType:"http://schema.org/Blog"},c),a.createElement("aside",{className:"col col--3 dblog-aside"},n&&a.createElement("div",{className:"dblog-toc"},n),a.createElement(r.Z,{sidebar:t})))))}},7651:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(9960),c=n(6767),i=n.n(c);function o(e){return e.href?a.createElement(r.Z,e):a.createElement(a.Fragment,null,e.children)}function s(e){let{author:t,className:n}=e;const{name:r,title:c,url:s,email:m,icon:d}=t,u=s||m&&"mailto:"+m||void 0,g=i()({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())}).saturate(.1),p=g.isDark()?"white":"black";return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",n)},d&&a.createElement("div",{className:"avatar__photo dblog-avatar",style:{backgroundColor:g.mix(i()("white")).hex(),color:p,font:d.font}},a.createElement("p",null,d.letters)),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(o,{href:u,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),c&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c)))}},5996:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7294),l=n(6010),r=n(9460),c=n(5289),i=n(169),o=n(9960);const s="preview_OkJ9",m="title_xvU1";function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:c}=(0,r.C)(),{permalink:d,title:u}=n,g=c?"h1":"h2";return a.createElement("div",null,c?a.createElement("img",{src:"/img"+d+"/preview.jpg",alt:"item preview",className:s}):a.createElement(o.Z,{itemProp:"url",to:d},a.createElement("img",{src:"/img"+d+"/preview.jpg",alt:"item preview",className:s})),a.createElement(g,{className:(0,l.Z)(m,t),itemProp:"headline"},c?u:a.createElement(o.Z,{itemProp:"url",to:d},u,a.createElement(i.Z,{className:"dblog-arrow"}))))}var u=n(5999),g=n(8824);const p="container_iJTo";function v(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function E(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function h(){return a.createElement(a.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:n}=(0,r.C)(),{date:c,formattedDate:i,readingTime:s,tags:m}=n,d=null==m?void 0:m[0];return a.createElement("div",{className:(0,l.Z)(p,"margin-vert--md",t)},d?a.createElement(o.Z,{to:d.permalink,className:(0,l.Z)("dblog-item-category","cat-"+d.label)},d.label.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")):a.createElement("p",{className:"dblog-item-category cat-none"},"Uncategorized"),a.createElement(h,null),a.createElement(E,{date:c,formattedDate:i}),void 0!==s&&a.createElement(a.Fragment,null,a.createElement(h,null),a.createElement(v,{readingTime:s})))}var b=n(4489);function N(){return a.createElement("header",null,a.createElement(d,{className:"dblog-item-header-title"}),a.createElement(f,null),a.createElement(b.Z,{className:"dblog-item-header-authors"}))}var Z=n(2174),k=n(2571);function _(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(c.Z,{className:(0,l.Z)(i,n)},a.createElement(N,null),a.createElement(Z.Z,{className:"dblog-item-content"},t),a.createElement(k.Z,null))}},5930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var a=n(7294),l=n(6010),r=n(1944),c=n(5281),i=n(9460),o=n(245),s=n(5996),m=n(7462);const d=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}))}));const u=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"}))}));var g=n(5999),p=n(4280);function v(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,g.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(p.Z,(0,m.Z)({},n,{subLabel:a.createElement("div",{className:"dblog-pagination-sublabel dblog-left"},a.createElement(d,{className:"dblog-arrow"}),"Newer Post")})),t&&a.createElement(p.Z,(0,m.Z)({},t,{subLabel:a.createElement("div",{className:"dblog-pagination-sublabel dblog-right"},"Older Post",a.createElement(u,{className:"dblog-arrow"})),isNext:!0})))}function E(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:l,description:c,date:o,tags:s,authors:m,frontMatter:d}=n,{keywords:u}=d,g=null!=(e=t.image)?e:d.image;return a.createElement(r.d,{title:l,description:c,keywords:u,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var h=n(6668);function f(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function b(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=b({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function N(e){const t=e.getBoundingClientRect();return t.top===t.bottom?N(e.parentNode):t}function Z(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>N(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(N(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function k(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,h.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function _(e){const t=(0,a.useRef)(void 0),n=k();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=Z(i,{anchorTopOffset:n.current}),s=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function L(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(L,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const x=a.memo(L);function C(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:i,...o}=e;const s=(0,h.L)(),d=null!=c?c:s.tableOfContents.minHeadingLevel,u=null!=i?i:s.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>b({toc:f(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return _((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:u}}),[l,r,d,u])),a.createElement(x,(0,m.Z)({toc:g,className:n,linkClassName:l},o))}const y="tableOfContents_jeP5";function w(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(y,"thin-scrollbar",t)},a.createElement(C,(0,m.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight dblog-toc-link",linkActiveClassName:"dblog-toc-link-active"})))}function B(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:c,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:p}=d;return a.createElement(o.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(w,{toc:r,minHeadingLevel:g,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(c||m)&&a.createElement(v,{nextItem:c,prevItem:m}))}function T(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogPostPage)},a.createElement(E,null),a.createElement(B,{sidebar:e.sidebar},a.createElement(t,null))))}},198:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),l=n(6010),r=n(9960),c=n(5999);const i="sidebarItemTitle_r4Q1",o="sidebarItemList_QwSx",s="sidebarItem_lnhn",m="sidebarItemLink_yNGZ",d="sidebarItemLinkActive_oSRm",u="sidebarItemPreview_cjQn",g="sidebarItemText_eH0B";function p(e){let{sidebar:t}=e;return a.createElement("nav",{className:"thin-scrollbar","aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(i)},t.title),a.createElement("ul",{className:(0,l.Z)(o,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s},a.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:d},a.createElement("img",{src:"/img"+e.permalink+"/preview.jpg",alt:"sidebar item preview",className:u}),a.createElement("p",{className:g},e.title)))))))}},7362:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010),r=n(6505),c=n(9500);function i(e){let{children:t,className:n}=e;return a.createElement(r.Z,{as:"pre",tabIndex:0,className:(0,l.Z)(c.Z.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:c.Z.codeBlockLines},t))}},6918:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),r=n(6010),c=n(6668),i=n(6412),o=n(7016),s=n(5448),m=n(3746),d=n(8397),u=n(5291),g=n(2601),p=n(6505),v=n(9500);function E(e){var t;let{children:n,className:E="",metastring:h,title:f,showLineNumbers:b,language:N}=e;const{prism:{defaultLanguage:Z,magicComments:k}}=(0,c.L)(),_=null!=(t=null!=N?N:(0,o.Vo)(E))?t:Z,L=(0,i.p)(),x=(0,s.F)(),C=(0,o.bc)(h)||f,{lineClassNames:y,code:w}=(0,o.nZ)(n,{metastring:h,language:_,magicComments:k}),B=null!=b?b:(0,o.nt)(h);return l.createElement(p.Z,{as:"div",className:(0,r.Z)(E,_&&!E.includes("language-"+_)&&"language-"+_)},C&&l.createElement("div",{className:v.Z.codeBlockTitle},C),l.createElement("div",{className:v.Z.codeBlockContent},l.createElement(m.ZP,(0,a.Z)({},m.lG,{theme:L,code:w,language:null!=_?_:"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:c}=e;return l.createElement("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,r.Z)(t,v.Z.codeBlock,"thin-scrollbar")},l.createElement("code",{className:(0,r.Z)(v.Z.codeBlockLines,B&&v.Z.codeBlockLinesWithNumbering)},n.map(((e,t)=>l.createElement(d.Z,{key:t,line:e,getLineProps:a,getTokenProps:c,classNames:y[t],showLineNumbers:B})))))})),l.createElement("div",{className:v.Z.buttonGroup},(x.isEnabled||x.isCodeScrollable)&&l.createElement(g.Z,{className:v.Z.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),l.createElement(u.Z,{className:v.Z.codeButton,code:w}))))}},7694:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),r=n(5742);var c=n(8141);var i=n(9960);var o=n(4673);var s=n(2503);function m(e){return l.createElement(s.Z,e)}var d=n(7390),u=n(1470),g=n(3612),p=n(5488),v=n(5162);const E={head:function(e){const t=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(r.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return l.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?l.createElement("code",e):l.createElement(c.Z,e)},a:function(e){return l.createElement(i.Z,e)},pre:function(e){var t;return l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=l.Children.toArray(e.children),n=t.find((e=>{var t;return l.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(o.Z,(0,a.Z)({},e,{summary:n}),r)},ul:d.Z,img:u.Z,h1:e=>l.createElement(m,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(m,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(m,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(m,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(m,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(m,(0,a.Z)({as:"h6"},e)),admonition:g.Z,langs:e=>l.createElement(p.Z,(0,a.Z)({groupId:"langs"},e)),lang:v.Z,image:e=>l.createElement(u.Z,{src:"/img/"+e.fm.imageUrl+"/"+e.src,alt:e.src})}},4280:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),r=n(9960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:i}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link","dblog-pagination",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&a.createElement("div",{className:"pagination-nav__sublabel"},c),a.createElement("div",{className:"dblog-pagination-label"},n))}},9567:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),l=n(6010),r=n(9960);const c="tag_d0Lz",i="tagRegular_bmnp",o="tagWithCount_vddX";function s(e){let{permalink:t,label:n,count:s}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(c,s?o:i)},n,s&&a.createElement("span",null,s))}},4678:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(9567);const c="tags_ysAR",i="tag_DyE2";function o(e){let{tags:t}=e;return a.createElement("ul",{className:(0,l.Z)(c,"padding--none")},t.slice(1).map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:i},a.createElement(r.Z,{label:t,permalink:n}))})))}},9500:(e,t,n)=>{n.d(t,{Z:()=>a});const a={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);
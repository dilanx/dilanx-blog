"use strict";(self.webpackChunkdilanx_blog=self.webpackChunkdilanx_blog||[]).push([[610],{9055:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(6900),n=a(9460),s=a(6341);function r(e){let{items:t,component:a=s.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},7654:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(9960),n=a(5999),s=a(8824),r=a(1944),o=a(5281),i=a(6841),g=a(9703),c=a(9055),m=a(197),p=a(8077),u=a(6900);const d={tagsPostsHeader:"tagsPostsHeader_GBQY"};function h(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=h(t);return u.createElement(u.Fragment,null,u.createElement(r.d,{title:a}),u.createElement(m.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:s,listMetadata:r}=e;return u.createElement(i.Z,{sidebar:s},u.createElement("header",{className:(0,p.Z)("margin-bottom--xl",d.tagsPostHeader)},u.createElement("p",null,"Tag"),u.createElement("h1",null,t.label," (",t.count,")"),u.createElement(l.Z,{href:t.allTagsPath},u.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.createElement(c.Z,{items:a}),u.createElement(g.Z,{metadata:r}))}function f(e){return u.createElement(r.FG,{className:(0,p.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},u.createElement(b,e),u.createElement(E,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var l=a(5999),n=a(6850),s=a(5893);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,s.jsx)(n.Z,{permalink:a,title:(0,s.jsx)(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,s.jsx)(n.Z,{permalink:r,title:(0,s.jsx)(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}}}]);
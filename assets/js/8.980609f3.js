(window.webpackJsonp=window.webpackJsonp||[]).push([[8,26],{250:function(t,a){t.exports={capitalize:t=>t.replace(/^\w/,t=>t.toUpperCase())}},252:function(t,a,e){},259:function(t,a,e){"use strict";e(252)},267:function(t,a,e){"use strict";e.r(a);var r={name:"PostMeta",props:["post"],filters:{capitalize:e(250).capitalize}},n=(e(259),e(10)),o=Object(n.a)(r,(function(){var t=this,a=t._self._c;return a("p",{staticClass:"meta"},[t._v("\n  Posted in\n\n  "),Array.isArray(t.post.frontmatter.category)?t._l(t.post.frontmatter.category,(function(e,r){return a("span",{key:e},[a("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+e}},[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),r!=t.post.frontmatter.category.length-1?a("span",[t._v(", ")]):t._e()],1)})):a("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+t.post.frontmatter.category}},[t._v(t._s(t._f("capitalize")(t.post.frontmatter.category)))]),t._v("\n\n  by\n\n  "),Array.isArray(t.post.frontmatter.author)?t._l(t.post.frontmatter.author,(function(e,r){return a("span",{key:e},[a("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+e}},[t._v(t._s(e))]),t._v(" "),r!=t.post.frontmatter.author.length-1?a("span",[t._v(", ")]):t._e()],1)})):a("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+t.post.frontmatter.author}},[t._v(t._s(t.post.frontmatter.author))]),t._v("\n\n  on\n\n  "+t._s(new Intl.DateTimeFormat("en-US").format(new Date(t.post.frontmatter.date)))+"\n")],2)}),[],!1,null,"6f53dc92",null);a.default=o.exports},318:function(t,a,e){},334:function(t,a,e){"use strict";e(318)},348:function(t,a,e){"use strict";e.r(a);var r={name:"Post",components:{PostMeta:e(267).default}},n=(e(334),e(10)),o=Object(n.a)(r,(function(){var t=this,a=t._self._c;return a("div",[a("header",{staticClass:"theme-default-content post-header"},[a("h1",{staticClass:"index-post-title"},[t._v("\n      "+t._s(t.$page.frontmatter.title)+"\n    ")]),t._v(" "),a("PostMeta",{attrs:{post:t.$page}}),t._v(" "),t.$page.frontmatter.coverImage?a("img",{staticClass:"cover-image",attrs:{src:t.$page.frontmatter.coverImage}}):t._e()],1),t._v(" "),a("Layout")],1)}),[],!1,null,"1e3580ba",null);a.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(t,e){t.exports={capitalize:t=>t.replace(/^\w/,t=>t.toUpperCase())}},250:function(t,e,n){},252:function(t,e,n){},253:function(t,e,n){},254:function(t,e,n){},255:function(t,e,n){"use strict";n(250)},256:function(t,e,n){"use strict";var r={name:"PostMeta",props:["post"],filters:{capitalize:n(249).capitalize}},a=(n(255),n(10)),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"meta"},[t._v("\n  Posted in\n\n  "),Array.isArray(t.post.frontmatter.category)?t._l(t.post.frontmatter.category,(function(e,r){return n("span",{key:e},[n("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+e}},[t._v(t._s(t._f("capitalize")(e)))]),t._v(" "),r!=t.post.frontmatter.category.length-1?n("span",[t._v(", ")]):t._e()],1)})):n("router-link",{staticClass:"meta-link",attrs:{to:"/category/"+t.post.frontmatter.category}},[t._v(t._s(t._f("capitalize")(t.post.frontmatter.category)))]),t._v("\n\n  by\n\n  "),Array.isArray(t.post.frontmatter.author)?t._l(t.post.frontmatter.author,(function(e,r){return n("span",{key:e},[n("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+e}},[t._v(t._s(e))]),t._v(" "),r!=t.post.frontmatter.author.length-1?n("span",[t._v(", ")]):t._e()],1)})):n("router-link",{staticClass:"meta-link",attrs:{to:"/author/"+t.post.frontmatter.author}},[t._v(t._s(t.post.frontmatter.author))]),t._v("\n\n  on\n\n  "+t._s(new Date(t.post.frontmatter.date).getMonth()+1)+"/"+t._s(new Date(t.post.frontmatter.date).getDate()+1)+"/"+t._s(new Date(t.post.frontmatter.date).getFullYear())+"\n")],2)}),[],!1,null,"5bdec7e4",null);e.a=i.exports},257:function(t,e,n){"use strict";n(252)},258:function(t,e,n){"use strict";n(253)},259:function(t,e,n){"use strict";n(254)},260:function(t,e,n){var r=n(102),a=n(95),i=n(261),o=n(265);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=a(e),i(t,n,(function(t,n){return e(t,n[0])}))}},261:function(t,e,n){var r=n(52),a=n(262),i=n(47);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],p=r(t,c);n(p,c)&&a(u,i(c,t),p)}return u}},262:function(t,e,n){var r=n(263),a=n(47),i=n(50),o=n(23),s=n(15);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,p=(e=a(e,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=s(e[c]),_=n;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(c!=l){var m=f[v];void 0===(_=u?u(m,v,f):void 0)&&(_=o(m)?m:i(e[c+1])?[]:{})}r(f,v,_),f=f[v]}return t}},263:function(t,e,n){var r=n(264),a=n(49),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];i.call(t,e)&&a(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},264:function(t,e,n){var r=n(103);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},265:function(t,e,n){var r=n(96),a=n(266),i=n(268);t.exports=function(t){return r(t,i,a)}},266:function(t,e,n){var r=n(48),a=n(267),i=n(97),o=n(98),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,i(t)),t=a(t);return e}:o;t.exports=s},267:function(t,e,n){var r=n(101)(Object.getPrototypeOf,Object);t.exports=r},268:function(t,e,n){var r=n(99),a=n(269),i=n(51);t.exports=function(t){return i(t)?r(t,!0):a(t)}},269:function(t,e,n){var r=n(23),a=n(100),i=n(270),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=a(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n}},270:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},271:function(t,e,n){"use strict";n.r(e);var r=n(249),a={filters:{capitalize:r.capitalize}},i=(n(257),n(10)),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"categories-list"},t._l(t.$category.list,(function(e){return n("li",{key:e.path},[t.$page.frontmatter.title.toLowerCase().startsWith(e.name)?n("span",{staticClass:"active-link"},[t._v(t._s(t._f("capitalize")(e.name)))]):n("router-link",{staticClass:"page-link",attrs:{to:e.path}},[t._v("\n        "+t._s(t._f("capitalize")(e.name))+"\n      ")])],1)})),0)])}),[],!1,null,"5526d076",null).exports,s=n(256),u=(n(46),{data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(2).then(n.t.bind(null,324,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}}),c=(n(258),Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports),p=(n(259),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,n(24)),l=n.n(p),f=n(260),v=n.n(f),_={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return v()(this.$props,l.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},m=(Object(i.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,{computed:{posts(){return this.$pagination.pages.sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}},components:{Categories:o,Pagination:c,PostMeta:s.a},props:["items","title"],filters:{capitalize:r.capitalize}}),g=Object(i.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"theme-default-content"},[n("h1",{staticClass:"home-title"},[n("router-link",{staticClass:"home-link",attrs:{to:"/"}},[t._v(t._s(t.title||"BTCPay Server Blog"))])],1),t._v(" "),n("Categories"),t._v(" "),n("hr"),t._v(" "),t._l(t.posts,(function(e){return n("div",{key:e.path},[n("h2",{staticClass:"index-post-title"},[n("router-link",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.frontmatter.title)+"\n        ")])],1),t._v(" "),n("PostMeta",{attrs:{post:e}}),t._v(" "),n("router-link",{attrs:{to:e.path}},[e.frontmatter.coverImage?n("img",{staticClass:"cover-image",attrs:{src:e.frontmatter.coverImage}}):t._e()])],1)})),t._v(" "),t.$pagination.length>1?[n("hr"),t._v(" "),n("Pagination")]:t._e()],2),t._v(" "),n("Layout")],1)}),[],!1,null,null,null);e.default=g.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{250:function(t,e){t.exports={capitalize:t=>t.split("-").map(t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()).join(" ")}},317:function(t,e,a){},333:function(t,e,a){"use strict";a(317)},346:function(t,e,a){"use strict";a.r(e);var s=a(250),i={computed:{items(){return this.$frontmatterKey.list}},methods:{displayName(t){return this.$page.path.startsWith("/category/")?Object(s.capitalize)(t):t}}},r=(a(333),a(10)),n=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"theme-default-content"},[e("h1",[t._v("BTCPay Server Blog")]),t._v(" "),t.$page.path.startsWith("/category/")?e("h2",[t._v("Categories")]):e("h2",[t._v("Authors")]),t._v(" "),e("div",t._l(t.items,(function(a){return e("ul",{key:a.name},[e("li",[e("router-link",{attrs:{to:a.path}},[t._v(t._s(t.displayName(a.name)))])],1)])})),0)]),t._v(" "),e("Layout")],1)}),[],!1,null,"7e9cc446",null);e.default=n.exports}}]);
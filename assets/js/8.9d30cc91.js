(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(t,e,a){},287:function(t,e,a){},288:function(t,e,a){},304:function(t,e,a){"use strict";a(279)},312:function(t,e,a){"use strict";a(287)},313:function(t,e,a){"use strict";a(288)},325:function(t,e,a){"use strict";a.r(e);var s=a(321),r=a(298),h=a(320),l=a(323),c=a(295),o=a(106);function i(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var n={name:"Navbar",components:{SidebarButton:l.a,NavLinks:c.a,SearchBox:h.a,AlgoliaSearchBox:r.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(i(this.$el,"paddingLeft"))+parseInt(i(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},methods:{toggleColorMode(t){t.preventDefault();const e=(document.documentElement.getAttribute(o.THEME_ATTR)||o.COLOR_MODES[0])===o.COLOR_MODES[0]?o.COLOR_MODES[1]:o.COLOR_MODES[0];Object(o.setColorMode)(e)}}},v=(a(304),a(10)),p=Object(v.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n      "+t._s(t.$siteTitle)+"\n    ")]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"}),t._v(" "),a("button",{staticClass:"btcpay-theme-switch",attrs:{type:"button"},on:{click:function(e){return t.toggleColorMode(e)}}},[a("svg",{attrs:{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"btcpay-theme-switch-dark",attrs:{transform:"translate(1 1)",d:"M2.72 0A3.988 3.988 0 000 3.78c0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z"}}),t._v(" "),a("path",{staticClass:"btcpay-theme-switch-light",attrs:{transform:"translate(1 1)",d:"M4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5S4.28 0 4 0zM1.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM4 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM.5 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM1.5 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM4 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5S4.28 7 4 7z"}})])])],1)],1)}),[],!1,null,null,null).exports,d=a(319),f=a(322),m=(a(312),Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-default-content sponsors"},[a("div",{staticClass:"supporters"},[a("svg",{attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg"}},[a("defs",[a("linearGradient",{attrs:{id:"spiral-gradient",x1:"81.36",y1:"311.35",x2:"541.35",y2:"311.35",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{offset:".18","stop-color":"#00f"}}),a("stop",{attrs:{offset:"1","stop-color":"#f0f"}})],1),t._v(" "),a("radialGradient",{attrs:{id:"acinq-a",cx:"47.833",cy:"51.834",r:"56.832"}},[a("stop",{attrs:{offset:"0","stop-color":"#fff"}}),a("stop",{attrs:{offset:"1","stop-color":"#fff","stop-opacity":"0"}})],1)],1),t._v(" "),a("symbol",{attrs:{id:"supporter-spiral",viewBox:"0 0 629 629"}},[a("path",{attrs:{d:"M326.4 572.09C201.2 572.09 141 503 112.48 445c-28.22-57.53-30.59-114.56-30.79-122.69-4.85-77 41-231.78 249.58-271.2a28.05 28.05 0 0 1 10.41 55.13c-213.12 40.28-204.44 206-204 213 0 .53.06 1.06.07 1.6.15 7.9 5.1 195.16 188.65 195.16 68.34 0 116.6-29.4 143.6-87.37 24.48-52.74 19.29-112.45-13.52-155.83-22.89-30.27-52.46-45-90.38-45-34.46 0-63.47 9.88-86.21 29.37A91.5 91.5 0 0 0 248 322.3c-1.41 25.4 7.14 49.36 24.07 67.49C287.27 406 305 413.9 326.4 413.9c27.46 0 45.52-9 53.66-26.81 8.38-18.3 3.61-38.93-.19-43.33-9.11-10-18.69-13.68-22.48-13-2.53.43-5.78 4.61-8.48 10.92a28 28 0 0 1-51.58-22c14.28-33.44 37.94-42 50.76-44.2 24.78-4.18 52.17 7.3 73.34 30.65s25.51 68.55 10.15 103.22C421.54 432 394.52 470 326.4 470c-36.72 0-69.67-14.49-95.29-41.92-27.47-29.4-41.34-68.08-39.11-108.89a149.1 149.1 0 0 1 51.31-104.6c33.19-28.45 74.48-42.87 122.71-42.87 55.12 0 101.85 23.25 135.12 67.23 45.36 60 52.9 141.71 19.66 213.3-25.35 54.67-79.68 119.84-194.4 119.84Z",fill:"url(#spiral-gradient)"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-bailliegifford",viewBox:"0 0 252.875 70.249"}},[a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M366.764 291.907h4.554l-5.046 12.789h-4.553zM377.541 302.546h4.675l-.849 2.15h-9.229l5.046-12.789h4.554zM389.988 302.546h4.676l-.849 2.15h-9.229l5.045-12.789h4.554zM403.079 291.907h4.554l-5.046 12.789h-4.553zM418.795 302.487l-.871 2.209h-9.471l5.046-12.789h9.397l-.871 2.209h-4.844l-1.139 2.887h4.457l-.826 2.093h-4.457l-1.338 3.391zM445.115 294.349a6.207 6.207 0 0 0-2.213-.407c-3.344 0-4.898 3.391-5.35 4.535-.682 1.725-1.15 3.469.277 4.147.49.232 1.135.252 1.402.252l1.186-3.004h-1.648l.795-2.015h5.766l-2.4 6.084c-1.66.523-3.16.95-5.268.95-4.748 0-6.602-2.732-5.109-6.511 1.566-3.973 5.77-6.647 10.566-6.647 1.842 0 2.971.33 3.777.62l-1.781 1.996zM453.309 291.907h4.554l-5.045 12.789h-4.554zM458.684 304.696l5.045-12.789h9.398l-.871 2.209h-4.844l-1.269 3.217h4.457l-.871 2.209h-4.458l-2.033 5.154zM472.639 304.696l5.047-12.789h9.398l-.871 2.209h-4.846l-1.269 3.217h4.459l-.873 2.209h-4.457l-2.034 5.154z",transform:"translate(-293.5 -262.775)"}}),a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1","fill-rule":"evenodd",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M335.139 302.643c.557 0 1.187 0 1.747-.252.576-.232 1.106-.717 1.489-1.686.336-.854.189-1.279-.211-1.492-.376-.213-1.006-.213-1.612-.213h-.63l-1.438 3.643h.655zm2.154-5.523c.46 0 .993 0 1.521-.232.496-.213.986-.659 1.33-1.531.283-.717.162-1.085-.181-1.259-.319-.175-.852-.175-1.409-.175h-.63l-1.262 3.198h.631v-.001zm2.832-5.213c1.187 0 2.578.097 3.531.504.954.407 1.47 1.124.966 2.403-.727 1.841-2.749 2.732-4.501 3.12.502.077 1.378.252 2.05.698.647.445 1.06 1.182.578 2.403-.443 1.124-1.742 2.636-4.352 3.294-.995.252-2.107.368-4.481.368h-4.651l5.045-12.79h5.815zM350.689 300.201h2.833l.017-3.605-2.85 3.605zm6.664-8.294.792 12.79h-4.651l-.017-2.597h-4.288l-2.066 2.597h-3.149l10.714-12.79h2.665zM492.998 302.875c.922 0 2.209-.504 3.793-4.515 1.451-3.682 1.238-4.612-.047-4.612-1.283 0-2.363.775-3.955 4.806-1.07 2.713-1.316 4.321.209 4.321zm4.59-11.143c3.561 0 6.08 1.841 4.299 6.356-1.482 3.759-4.936 6.802-9.707 6.802-4.555 0-5.779-2.791-4.295-6.55 1.65-4.185 5.635-6.608 9.703-6.608zM512.328 293.922l-1.469 3.721h.484c1.502 0 2.234-.445 2.793-1.86.582-1.473.25-1.86-1.324-1.86h-.484v-.001zm1.254-2.015c2.398 0 3.312.078 4.168.426.814.33 1.785 1.124 1.166 2.694-.58 1.473-2.047 2.732-4.277 3.353l1.916 6.317h-4.893l-.965-5.29h-.533l-2.088 5.29h-4.408l5.047-12.79h4.867zM528.418 293.961l-3.424 8.682h.387c1.115 0 2.955.368 4.906-4.573 1.619-4.108.264-4.108-1.385-4.108h-.484v-.001zm.811-2.054c2.254 0 4.336 0 5.549 1.163 1.461 1.396.748 3.818.334 4.864-.727 1.841-2.406 4.748-6.227 6.143-1.24.446-2.498.62-5.09.62h-4.166l5.047-12.79h4.553z","clip-rule":"evenodd",transform:"translate(-293.5 -262.775)"}}),a("path",{staticStyle:{fill:"var(--btcpay-body-text)","fill-opacity":"1",stroke:"var(--btcpay-body-text)","stroke-opacity":"1"},attrs:{d:"M294 297.4c0-19.399 57.138-35.125 127.624-35.125 62.064 0 113.781 12.192 125.251 28.35-13.078-12.792-58.92-22.238-113.465-22.238-64.731 0-117.206 13.303-117.206 29.714 0 16.411 52.474 29.715 117.206 29.715 47.799 0 88.914-7.254 107.154-17.656-18.555 13.09-64.812 22.364-118.941 22.364C351.138 332.524 294 316.799 294 297.4z",transform:"translate(-293.5 -262.775)"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-coincards",viewBox:"0 0 64 32"}},[a("g",{attrs:{fill:"none"}},[a("path",{attrs:{d:"M32.7 5.9c-.2-1-1.3-1.7-2.3-1.4L7.7 9.9c-1 .2-1.7 1.3-1.4 2.3l3.1 12.9c.2 1 1.3 1.7 2.3 1.4l22.7-5.4c1-.2 1.7-1.3 1.4-2.3L32.7 5.9Z",fill:"#EF8022"}}),a("path",{attrs:{d:"M12.6 30.3c-.2.2-.5.3-.7.3l.8.5c.9.6 2.1.4 2.7-.5l3.1-4.4-5.9 4.1ZM2.3 19.5l-1 1.4c-.6.9-.4 2.1.5 2.7L8.1 28l-5.8-8.5ZM12.9 8.1l7.2-5-2.7-1.9c-.9-.6-2.1-.4-2.7.5l-5 7.2 3.2-.8Z",fill:"#F9F185"}}),a("path",{attrs:{d:"M9.7 29.4c.6.9 1.8 1.1 2.7.5l6.7-4.6-7.4 1.8c-1.3.3-2.6-.5-2.9-1.8L6 13.5l-3.3 2.3c-.9.6-1.1 1.8-.5 2.7l7.5 10.9Zm4.5-21.6L25.9 5l-1.3-2c-.6-.9-1.8-1.1-2.7-.5l-7.7 5.3Z",fill:"#FFC214"}}),a("path",{attrs:{d:"M11.9 24.8c-.7 0-1.4-.5-1.7-1.1l-1.5-3.2 1.1 4.6c.2.6.7 1.1 1.4 1.1h.3l17-4.1-16.2 2.7h-.4Z",fill:"#FFC214"}}),a("path",{attrs:{d:"M16 17.5s-1.1 1.2-2.5 1.2c-1.7 0-2.6-1.4-2.6-2.8 0-1.3.9-2.7 2.6-2.7 1.3 0 2.3 1 2.3 1l1.1-1.7s-.6-.7-1.9-1.1v-1.2h-1.1v1h-.6v-1h-1.1v1.1c-2.2.5-3.7 2.4-3.7 4.7 0 2.4 1.5 4.2 3.7 4.7v1.2h1.1v-1h.6V22H15v-1.3c1.4-.4 2.1-1.3 2.1-1.3L16 17.5ZM21 13.7c2.1 0 3.8 1.4 3.8 3.6 0 2.1-1.7 3.5-3.8 3.5-2.1 0-3.8-1.4-3.8-3.5s1.7-3.6 3.8-3.6Zm0 5.2c.8 0 1.5-.6 1.5-1.6s-.7-1.7-1.5-1.7-1.5.6-1.5 1.7c0 1 .7 1.6 1.5 1.6Zm4.3-5h2.3v6.7h-2.3v-6.7Zm0-2.6h2.2v1.8h-2.2v-1.8Zm3.2 2.6h2.2v1c.3-.5 1-1.2 2.1-1.2 1.4 0 2.4.6 2.4 2.5v4.4h-2.3v-4c0-.6-.2-.9-.7-.9-.7 0-1.1.4-1.3 1-.1.3-.1.6-.1.9v3h-2.3v-6.7Z",fill:"#FFF"}}),a("path",{attrs:{d:"M39.3 13.9c1.7 0 2.5 1 2.5 1l-.6.9s-.7-.8-1.8-.8c-1.3 0-2.3 1-2.3 2.4 0 1.3 1 2.4 2.3 2.4 1.2 0 2-.9 2-.9l.5.9s-.9 1.1-2.6 1.1c-2.1 0-3.5-1.5-3.5-3.5-.1-2 1.4-3.5 3.5-3.5Zm6.8 2.6h.3v-.1c0-1.1-.6-1.5-1.5-1.5-1 0-1.8.6-1.8.6l-.5-.9s1-.8 2.5-.8c1.7 0 2.6.9 2.6 2.6v4.2h-1.2v-1.1s-.5 1.3-2.1 1.3c-1.1 0-2.3-.7-2.3-2 0-2.2 2.9-2.3 4-2.3Zm-1.4 3.3c1.1 0 1.8-1.1 1.8-2.1v-.2h-.3c-1 0-2.7.1-2.7 1.3-.1.5.3 1 1.2 1Zm3.8-5.8h1.2v1.7c.3-1 1.1-1.7 2.1-1.7h.3v1.3h-.4c-.8 0-1.6.6-1.9 1.6-.1.4-.2.8-.2 1.2v2.7h-1.3V14h.2Zm6.8-.1c1.5 0 2 1 2 1v-3.5h1.3v9.2h-1.2v-1s-.5 1.2-2.2 1.2c-1.8 0-2.9-1.4-2.9-3.5s1.3-3.4 3-3.4Zm.2 5.8c1 0 1.9-.7 1.9-2.4 0-1.2-.6-2.4-1.9-2.4-1 0-1.9.9-1.9 2.4s.8 2.4 1.9 2.4Zm4.2-.8s.7.8 1.9.8c.5 0 1.1-.3 1.1-.8 0-1.2-3.4-1-3.4-3.1 0-1.2 1.1-1.9 2.4-1.9 1.5 0 2.1.7 2.1.7l-.5 1s-.6-.6-1.6-.6c-.5 0-1.1.2-1.1.8 0 1.2 3.4.9 3.4 3.1 0 1.1-.9 1.9-2.4 1.9-1.6 0-2.5-1-2.5-1l.6-.9Z",fill:"#EF8022"}})])]),t._v(" "),a("symbol",{attrs:{id:"supporter-acinq",viewBox:"0 0 103 107"}},[a("circle",{attrs:{fill:"url(#acinq-a)",cx:"47.833",cy:"51.833",r:"56.832"}}),a("g",[a("g",{attrs:{fill:"none","stroke-width":"6","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"#47BF94",d:"M4.493 79.67c-6.778-11.574 21.882-35.135 41.646-39.636 16.598-3.78 55.176 4.066 53.752 17.433"}}),a("path",{attrs:{stroke:"#359F7E",d:"M10.125 18.133c8.624-9.988 41.797 13.701 51.001 30.018 9.723 17.237 12.87 55.271-1.103 55.351"}}),a("path",{attrs:{stroke:"#49DAAA",d:"M69.826 4.107c12.025 5.964 3.838 38.632-11.184 57.28C47.846 74.79 11.659 91.904 4.493 79.67"}}),a("path",{attrs:{stroke:"#49DAAA",d:"M99.891 57.467C98.471 70.799 62.529 72.9 43.83 64.781c-17.92-7.783-42.47-36.5-33.706-46.648"}}),a("path",{attrs:{stroke:"#AAF0D3",d:"M60.023 103.502c-14.291.08-24.609-29.721-23.918-51.916.758-24.377 20.678-53.948 33.721-47.479"}})])])]),t._v(" "),a("symbol",{attrs:{id:"supporter-lunanode",viewBox:"0 0 194.219 193.977"}},[a("path",{staticStyle:{fill:"#004581","fill-opacity":"1","fill-rule":"evenodd",stroke:"none"},attrs:{d:"M3185.89 2995.8c-1.77 21.49-2.76 43.2-2.76 65.16 0 411.03 319.09 747.36 723.13 774.95l-618.54-641.7c-54.62-56.68-88.55-126.08-101.83-198.41M3960 2284.09c-270.37 0-508.4 138.15-647.57 347.65l23.25-22.42c76.82-74.06 176.93-109.95 276.2-108.13 99 1.77 197.53 41.2 271.5 117.59l-177.95 171.52c-26.66-27.31-62.22-41.38-98.02-42.14-36.12-.65-72.43 12.41-100.16 39.15l-37.98 36.6c-27.69 26.66-42.04 62.45-42.7 98.57-.65 36.07 12.36 72.48 39.11 100.21l745.68 773.56c305.71-104.45 525.52-394.17 525.52-735.29 0-29.89-1.73-59.34-5.04-88.32-19.44 54.57-51.41 105.56-95.79 148.35l-37.93 36.58c-76.86 74.07-176.93 110.05-276.16 108.18-99.32-1.77-198.13-41.38-272.19-118.25l-290.74-301.59 177.95-171.53 290.74 301.61c26.71 27.73 62.64 42.04 98.72 42.74 36.12.69 72.38-12.35 100.16-39.1l37.89-36.59c27.69-26.66 42.09-62.45 42.74-98.58.61-36.03-12.4-72.48-39.1-100.21l-440.73-457.23c-22.23-1.9-44.69-2.93-67.4-2.93",transform:"matrix(.125 0 0 -.125 -397.891 479.489)"}}),a("path",{staticStyle:{fill:"#3384b9","fill-opacity":"1","fill-rule":"evenodd",stroke:"none"},attrs:{d:"M4376.22 2292.8h360.66v433.41c-17.35-55.88-47.59-108.64-90.81-153.48l-269.85-279.93",transform:"matrix(.125 0 0 -.125 -397.891 479.489)"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-walletofsatoshi",viewBox:"0 0 313.1 76.32"}},[a("path",{attrs:{d:"M110.47 44.8H121c.84 0 1.22-.64.9-1.48l-17.6-42A2 2 0 0 0 102.22 0H87.63a2 2 0 0 0-2 1.34L66 48.11c-.32.84.06 1.48.83 1.48h13.7a1.42 1.42 0 0 1 1.32 1.93l-9.7 24.8 30.55-32.63A1 1 0 0 0 102 42H84.73a1.42 1.42 0 0 1-1.32-2l5.06-12.91 6.86-17.47 6.78 17.51h-7.54a1.42 1.42 0 0 0-1.32.9l-2.83 7.22a1.42 1.42 0 0 0 1.32 1.93H105a1.42 1.42 0 0 1 1.33.91l2.08 5.36a1.92 1.92 0 0 0 2.06 1.35Zm62.65 0h37.42a1.3 1.3 0 0 0 1.46-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41A1.35 1.35 0 0 0 183 0h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.51 1.39Zm45.36 0h42a1.3 1.3 0 0 0 1.52-1.41V35.9a1.31 1.31 0 0 0-1.47-1.41h-30.59v-7.36h25.59a1.33 1.33 0 0 0 1.48-1.4v-7a1.33 1.33 0 0 0-1.48-1.41h-25.59v-7h30.59A1.3 1.3 0 0 0 262 8.89V1.41A1.3 1.3 0 0 0 260.53 0h-42A1.3 1.3 0 0 0 217 1.41v42a1.3 1.3 0 0 0 1.48 1.39ZM71.79 0H61.61a1.71 1.71 0 0 0-1.85 1.41L52.08 34.3 44.91 1.41A1.65 1.65 0 0 0 43.12 0H30.38a1.71 1.71 0 0 0-1.85 1.41L21.36 34.3 13.68 1.41A1.65 1.65 0 0 0 11.89 0H1.14C.24 0-.14.51.05 1.41l10.88 42a1.68 1.68 0 0 0 1.79 1.41H28.4a1.65 1.65 0 0 0 1.79-1.41l6.27-28.31 6.34 28.29a1.65 1.65 0 0 0 1.79 1.41H60.2a1.66 1.66 0 0 0 1.8-1.41l10.87-42C73.07.51 72.68 0 71.79 0Zm239.84 0h-43.52a1.3 1.3 0 0 0-1.47 1.41v7.48a1.3 1.3 0 0 0 1.47 1.41h15.29v33.09a1.3 1.3 0 0 0 1.48 1.41h10a1.33 1.33 0 0 0 1.47-1.41V10.3h15.3a1.3 1.3 0 0 0 1.47-1.41V1.41A1.3 1.3 0 0 0 311.63 0ZM127.76 44.8h37.42a1.3 1.3 0 0 0 1.47-1.41V35.9a1.3 1.3 0 0 0-1.47-1.41h-26V1.41a1.35 1.35 0 0 0-1.5-1.41h-9.92a1.3 1.3 0 0 0-1.47 1.41v42a1.3 1.3 0 0 0 1.47 1.39Zm-3.84 9.6h-11.53c-3.13 0-4.53 1.31-4.53 4.36v10.37c0 3.05 1.4 4.36 4.53 4.36h11.53c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.35-4.36-4.51-4.36Zm-1 12.95c0 1.48-.29 1.75-2.07 1.75h-5.51c-1.76 0-2.08-.27-2.08-1.75v-6.81c0-1.47.32-1.75 2.08-1.75h5.51c1.78 0 2.07.28 2.07 1.75Zm51.87-5.59h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.65 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28H164c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.9 0 1.17.28 1.17 1v1.23c0 .68-.27.95-1.17.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.56.56 0 0 0-.62-.6h-4a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.19 0 4.51-1.31 4.51-4.36v-3c-.06-3.1-1.41-4.41-4.57-4.41Zm85.43 0h-8.75c-.89 0-1.16-.27-1.16-.95v-1.06c0-.68.27-1 1.16-1h6.7c.64 0 .89.28.89.85v.16a.55.55 0 0 0 .62.6h4a.55.55 0 0 0 .62-.6v-1.08c0-3.21-1.11-4.28-4.4-4.28h-10.48c-3.19 0-4.51 1.31-4.51 4.36v2.84c0 3.06 1.32 4.36 4.51 4.36h8.74c.89 0 1.16.28 1.16 1v1.23c0 .68-.27.95-1.16.95h-7.34c-.62 0-.86-.27-.86-.85v-.16a.57.57 0 0 0-.62-.6h-4.05a.55.55 0 0 0-.62.6v1.12c0 3.22 1.08 4.28 4.4 4.28h11.2c3.18 0 4.51-1.31 4.51-4.36v-3c0-3.1-1.33-4.41-4.51-4.41Zm26.65-7.36h-4.21a.56.56 0 0 0-.63.6v6.66h-9.2V55a.57.57 0 0 0-.65-.6H268a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6v-6.84h9.2v6.84a.56.56 0 0 0 .63.6h4.21a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.57-.6Zm-137.62 0h-17.07a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.19a.58.58 0 0 0 .65-.6v-6.52h10.15a.57.57 0 0 0 .64-.6v-3.19a.57.57 0 0 0-.64-.6H137v-3.19h12.3a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.62-.6Zm146.47 0h-4.18a.55.55 0 0 0-.62.6v17.89a.55.55 0 0 0 .62.6h4.18a.57.57 0 0 0 .65-.6V55a.57.57 0 0 0-.6-.6Zm-100.28.6a.83.83 0 0 0-.86-.57h-6.16a.83.83 0 0 0-.89.57l-7.42 17.89c-.14.36 0 .63.38.63h4.45a.8.8 0 0 0 .86-.57l1-2.68h9.1l1 2.68a.8.8 0 0 0 .87.57h4.69c.33 0 .49-.27.35-.63Zm-7 11 2.89-7.52 2.92 7.52Zm30.9-11.6H201a.55.55 0 0 0-.62.6v3.19a.55.55 0 0 0 .62.6h6.45v14.1a.55.55 0 0 0 .62.6h4.21a.56.56 0 0 0 .62-.6v-14.1h6.46a.55.55 0 0 0 .62-.6V55a.55.55 0 0 0-.64-.6Zm18.46 0h-11.52c-3.13 0-4.54 1.31-4.54 4.36v10.37c0 3.05 1.41 4.36 4.54 4.36h11.52c3.16 0 4.51-1.31 4.51-4.36V58.76c0-3.05-1.31-4.36-4.51-4.36Zm-.94 12.95c0 1.48-.3 1.75-2.08 1.75h-5.51c-1.75 0-2.07-.27-2.07-1.75v-6.81c0-1.47.32-1.75 2.07-1.75h5.51c1.78 0 2.08.28 2.08 1.75Z",fill:"#fad228",stroke:"#1e2127","stroke-width":"2"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-nomics",viewBox:"0 0 600 600"}},[a("path",{attrs:{d:"M273.56 133A136.81 136.81 0 0 0 0 136.86v326.28a136.8 136.8 0 0 0 233.57 96.75L326.44 467A136.81 136.81 0 0 0 600 463.14V136.86a136.8 136.8 0 0 0-233.57-96.75L273.56 133",fill:"#a0f"}}),a("ellipse",{attrs:{cx:"302.18",cy:"300.04",rx:"136.81",ry:"136.86",fill:"#fff"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-ivpn",viewBox:"0 0 84 29"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.75 0h6.03c.07 0 .15.03.2.1.04.05.06.13.05.2L8.6 27.43a.26.26 0 0 1-.24.22l-6.63.38H1.7a.25.25 0 0 1-.19-.08.26.26 0 0 1-.06-.22L5.2 5.05C5.12 1.67 1 .85.49.73-.06.59 0 0 0 0h6.75Zm32.32.12a.25.25 0 0 0-.22-.12h-6.5c-.1 0-.18.05-.23.14l-8.98 17.4L20.08.2a.25.25 0 0 0-.24-.21h-6.55a.25.25 0 0 0-.2.1.26.26 0 0 0-.05.2l4.85 26.05a.25.25 0 0 0 .26.2l7.57-.43c.08 0 .16-.06.2-.14L39.08.38a.26.26 0 0 0-.01-.26Zm20.27 5.5a6.8 6.8 0 0 0-.53-2.08c-.27-.6-.61-1.1-1.01-1.5-.4-.41-.8-.75-1.23-1A8.23 8.23 0 0 0 52.9 0H40.47a.25.25 0 0 0-.25.2l-4.01 24.6c-.01.07.01.14.06.2.05.05.11.08.18.08h.02l6.25-.36c.11 0 .2-.1.22-.21l.75-4.63h6.08c1.39-.09 2.7-.43 3.89-1.03a9.75 9.75 0 0 0 2.99-2.46 9.9 9.9 0 0 0 2-4.76l.56-3.3c.17-1.02.21-1.93.13-2.71Zm-7.21 5.87a2.53 2.53 0 0 1-1.1 1.66c-.27.18-.64.27-1.1.27H44.7l1.1-7h5.3c.45 0 .78.09.97.27.22.2.38.41.47.65.1.27.13.6.1.95l-.52 3.2ZM83.75 0h-6.32c-.12 0-.23.1-.25.22l-2.25 14.34L70.04.17a.25.25 0 0 0-.23-.17H63.5c-.12 0-.23.1-.25.22l-3.86 24.56c-.01.07.01.16.06.22.05.05.12.08.19.08l6.43-.39c.12 0 .21-.1.23-.22l1.62-10.36 3.4 10.08c.04.1.14.17.25.17l8.58-.52c.11 0 .2-.1.23-.22L84 .3a.27.27 0 0 0-.06-.22.24.24 0 0 0-.19-.09Z",fill:"#F34"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-strike",viewBox:"0 0 140 42"}},[a("path",{staticStyle:{fill:"var(--btcpay-body-text)"},attrs:{d:"M53.015 41.206c4.823 0 8.388-2.866 8.388-6.813 0-1.786-.755-3.406-2.097-4.486-1.048-.79-2.936-1.744-5.242-2.575-1.468-.54-2.055-1.039-2.055-1.62 0-.582.545-.997 1.3-.997.503 0 1.216.166 1.803.415l.545.208 1.09.498c.588.208 1.091.333 1.51.374 1.343.083 2.643-1.288 2.643-2.783 0-2.41-3.104-4.237-7.13-4.237-4.613 0-8.01 2.866-8.01 6.771 0 1.786.587 3.24 1.72 4.237.964.79 2.935 1.703 5.913 2.7 1.3.457 1.803.872 1.803 1.495 0 .79-.587 1.246-1.636 1.246-.67 0-1.51-.207-2.138-.54l-1.007-.498-.545-.29c-.713-.375-1.342-.54-1.93-.54-1.425 0-2.767 1.37-2.767 2.824 0 2.326 3.858 4.61 7.842 4.61zm15.77-.25c1.928 0 3.145-1.329 3.145-3.447V25.712h1.51c2.222 0 3.438-.997 3.438-2.908 0-1.994-1.132-2.95-3.439-2.95h-1.51v-3.862c0-2.119-1.216-3.448-3.145-3.448-1.97 0-3.145 1.33-3.145 3.448v3.863h-.462c-2.264 0-3.397.955-3.397 2.949 0 1.952 1.133 2.908 3.397 2.908h.462v11.797c0 2.118 1.216 3.447 3.145 3.447zm12.33.042c1.886 0 3.103-1.33 3.103-3.448v-8.058c0-.623.125-1.288.377-1.828.294-.706.755-1.08 1.971-1.495 4.194-1.62 3.104-1.205 3.355-1.288 1.133-.499 1.594-1.288 1.594-2.575 0-1.62-1.468-3.033-3.104-3.033-1.467 0-2.81.706-4.403 2.368-.671-1.662-1.426-2.243-2.894-2.243-1.971 0-3.187 1.288-3.187 3.448V37.55c0 2.119 1.216 3.448 3.187 3.448zm14.552-23.054c2.18 0 3.69-1.495 3.69-3.614 0-2.118-1.551-3.655-3.648-3.655-2.14 0-3.69 1.537-3.69 3.614 0 2.118 1.55 3.655 3.648 3.655zm.042 22.97c1.887 0 3.103-1.328 3.103-3.447v-14.58c0-2.118-1.216-3.448-3.103-3.448-1.971 0-3.188 1.288-3.188 3.448v14.58c0 2.16 1.175 3.448 3.188 3.448zm21.175.042c1.72 0 3.061-1.287 3.061-2.949 0-1.08-.251-1.537-2.097-3.78l-.377-.457-4.068-5.109 2.936-2.99c2.013-2.12 1.467-1.538 1.677-1.787.587-.665.713-.997.713-1.62 0-1.578-1.3-3.032-2.768-3.032-1.174 0-2.055.498-3.607 2.16l-.838.914-3.985 4.153V13.998c0-2.119-1.216-3.448-3.145-3.448-1.174 0-2.223.582-2.768 1.495-.293.54-.377.914-.377 1.953v23.51c0 2.16 1.174 3.448 3.145 3.448s3.145-1.329 3.145-3.447v-6.48l4.069 5.234.754.996c2.223 2.95 3.104 3.697 4.53 3.697zm13.47.208c2.39 0 4.697-.581 6.752-1.703 1.678-.955 2.517-2.035 2.517-3.24 0-1.454-1.175-2.742-2.559-2.742-.42 0-1.048.167-1.635.457l-.462.208-.419.208-.461.249-.546.25c-1.174.456-1.845.622-2.893.622-2.307 0-3.817-1.121-4.362-3.198H137.4c1.887 0 2.6-.748 2.6-2.659 0-1.91-.545-3.863-1.51-5.524-1.887-3.157-4.865-4.86-8.597-4.86-6.25 0-10.527 4.652-10.527 11.464 0 6.19 4.53 10.468 10.988 10.468zM18.49.601l17.748 6.46c.071.026.14.055.207.087.159.05.317.104.476.162 5.655 2.058 8.59 8.256 6.557 13.844-2.034 5.587-8.267 8.448-13.922 6.39l-18.43-6.708c-1.131-.412-1.719-1.652-1.312-2.77.407-1.117 1.653-1.689 2.784-1.277l10.24 3.727a10.656 10.656 0 01-.37-4.718L1.443 8.146C.312 7.734-.275 6.494.132 5.376.538 4.26 1.785 3.688 2.916 4.1l21.024 7.65a10.656 10.656 0 013.316-3.376L17.017 4.648c-1.13-.411-1.718-1.651-1.311-2.769C16.113.762 17.359.19 18.49.601zm111.487 23.74c2.097 0 3.397 1.205 3.774 3.614h-7.8c.629-2.368 2.013-3.614 4.026-3.614zm-102.83-9.135c-1.226 3.367.537 7.099 3.936 8.336 3.4 1.237 7.148-.489 8.374-3.856 1.225-3.367-.537-7.099-3.936-8.336-3.4-1.237-7.149.489-8.374 3.856z"}})]),t._v(" "),a("symbol",{attrs:{id:"supporter-hrf",viewBox:"0 0 3000 987.6"}},[a("path",{attrs:{d:"M1137.09 103.9v773.45h-51.44V515.96h-953.6v361.38H80.62V103.9h51.44v361.2h953.6V103.9h51.43zm-102.77 0h-51.44v258.19H234.94V103.9H183.5v309.05h850.82V103.9zm-696.29 0h-50.87v205.84h50.87V103.9zm593.05 0h-51.44v205.84h51.44V103.9zM183.5 877.34h51.44V619.16h747.94v258.19h51.44V567.72H183.5v309.62zm695.72 0h51.44V670.93h-51.44v206.41zm-592.47 0h51.44V670.93h-51.44v206.41z",fill:"#e12991"}}),a("path",{staticStyle:{fill:"var(--btcpay-body-text)"},attrs:{d:"M1422.94 103.88V331.3h-44.51v-94.22h-92.2v94.22h-44.83V103.88h44.83v90.32h92.2v-90.32h44.51zM1605.81 168.85V331.3h-41.91v-18.19c-9.75 14.62-26.64 22.74-48.41 22.74-34.44 0-61.4-24.04-61.4-67.25v-99.74H1496v94.54c0 22.1 13.32 33.47 32.16 33.47 20.47 0 35.74-12.02 35.74-40.29v-87.72h41.91zM1885.19 231.23V331.3h-41.91v-97.14c0-19.17-9.75-30.86-27.29-30.86-18.52 0-30.22 12.35-30.22 36.71v91.29h-41.91v-97.14c0-19.17-9.75-30.86-27.29-30.86-17.87 0-30.54 12.35-30.54 36.71v91.29h-41.91V168.85h41.91v17.22c9.1-13.64 24.37-21.77 45.16-21.77 20.14 0 35.09 8.45 44.18 23.39 10.07-14.62 26.32-23.39 48.41-23.39 37.04.01 61.41 26.32 61.41 66.93zM2086.24 168.85V331.3h-41.91v-19.17c-11.7 14.62-29.24 23.72-52.96 23.72-43.21 0-78.95-37.36-78.95-85.77s35.74-85.77 78.95-85.77c23.72 0 41.26 9.1 52.96 23.72v-19.17h41.91zm-41.91 81.23c0-27.29-19.17-45.81-45.16-45.81-25.66 0-44.83 18.52-44.83 45.81 0 27.29 19.17 45.81 44.83 45.81 25.99 0 45.16-18.52 45.16-45.81zM2275.93 231.56v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V168.85h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44.01 61.4 24.05 61.4 67.26zM1316.47 525.36h-30.25v78.95h-44.83V376.89h94.84c41.91 0 75.7 33.79 75.7 75.37 0 28.59-17.87 54.26-43.86 66.28l50.36 85.77h-48.41l-53.55-78.95zm-30.25-39.31h50c16.89 0 30.86-14.95 30.86-33.79s-13.97-33.46-30.86-33.46h-50v67.25zM1437.88 396.71c0-13.97 15.57-25.99 29.54-25.99 14.29 0 22.12 12.02 22.12 25.99s-11.7 25.67-25.99 25.67c-13.97 0-25.67-11.7-25.67-25.67zm4.88 45.16h41.91v162.45h-41.91V441.87zM1681.86 441.87v154.65c0 53.28-41.91 77.33-84.8 77.33-34.77 0-62.7-13.32-77-39.64l35.74-20.47c6.82 12.67 17.54 22.74 42.56 22.74 26.31 0 42.56-14.29 42.56-39.96v-17.54c-11.37 15.27-28.92 24.69-51.98 24.69-46.14 0-80.9-37.36-80.9-83.17 0-45.48 34.76-83.17 80.9-83.17 23.07 0 40.61 9.42 51.98 24.69v-20.14h40.94zm-40.94 78.62c0-25.67-19.17-44.18-45.49-44.18-26.31 0-45.48 18.52-45.48 44.18 0 25.99 19.17 44.51 45.48 44.51 26.32 0 45.49-18.52 45.49-44.51zM1871.55 504.57v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V376.89h41.91v83.17c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25zM1963.46 482.15v67.58c0 17.54 12.67 17.87 36.71 16.57v38.01c-58.81 6.5-78.62-10.72-78.62-54.58v-67.58h-28.27v-40.29h28.27v-32.81l41.91-12.67v45.48h36.71v40.29h-36.71zM2148.63 556.88c0 35.09-30.54 51.98-65.31 51.98-32.49 0-56.53-13.64-68.22-38.66l36.39-20.47c4.55 13.32 15.6 21.12 31.84 21.12 13.32 0 22.42-4.55 22.42-13.97 0-23.72-83.82-10.72-83.82-67.9 0-33.14 28.27-51.66 61.73-51.66 26.32 0 49.06 12.02 61.73 34.44l-35.74 19.49c-4.88-10.4-13.97-16.57-25.99-16.57-10.4 0-18.84 4.55-18.84 13.32-.01 24.04 83.81 9.1 83.81 68.88zM1286.22 692.79v53.93h96.11v42.89h-96.11v87.72h-44.83V649.9h143.54v42.88h-98.71zM1400.82 796.1c0-48.41 38.01-85.77 85.77-85.77s86.1 37.36 86.1 85.77-38.34 85.77-86.1 85.77c-47.76 0-85.77-37.36-85.77-85.77zm129.96 0c0-26.31-19.17-44.83-44.19-44.83-24.69 0-43.86 18.52-43.86 44.83 0 26.32 19.17 44.83 43.86 44.83 25.02.01 44.19-18.51 44.19-44.83zM1744.84 714.88v162.45h-41.91v-18.19c-9.75 14.62-26.64 22.74-48.41 22.74-34.44 0-61.4-24.04-61.4-67.25v-99.74h41.91v94.54c0 22.1 13.32 33.47 32.16 33.47 20.47 0 35.74-12.02 35.74-40.29v-87.72h41.91zM1934.86 777.58v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V714.88h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25zM2135.61 649.9v227.42h-41.91v-19.17c-11.7 14.95-28.92 23.72-52.63 23.72-43.54 0-79.27-37.36-79.27-85.77s35.74-85.77 79.27-85.77c23.72 0 40.94 8.77 52.63 23.72V649.9h41.91zm-41.91 146.2c0-27.29-19.17-45.81-44.84-45.81-25.99 0-45.16 18.52-45.16 45.81 0 27.29 19.17 45.81 45.16 45.81 25.67.01 44.84-18.51 44.84-45.81zM2337.35 714.88v162.45h-41.91v-19.17c-11.7 14.62-29.24 23.72-52.96 23.72-43.21 0-78.95-37.36-78.95-85.77s35.74-85.77 78.95-85.77c23.72 0 41.26 9.1 52.96 23.72v-19.17h41.91zm-41.91 81.22c0-27.29-19.17-45.81-45.16-45.81-25.66 0-44.83 18.52-44.83 45.81 0 27.29 19.17 45.81 44.83 45.81 25.99.01 45.16-18.51 45.16-45.81zM2433.46 755.17v67.58c0 17.54 12.67 17.87 36.71 16.57v38.01c-58.81 6.5-78.62-10.72-78.62-54.58v-67.58h-28.26v-40.29h28.26v-32.81l41.91-12.67v45.48h36.71v40.29h-36.71zM2494.84 669.72c0-13.97 11.7-25.99 25.67-25.99 14.29 0 25.99 12.02 25.99 25.99s-11.7 25.66-25.99 25.66c-13.97.01-25.67-11.69-25.67-25.66zm4.87 45.16h41.91v162.45h-41.91V714.88zM2565 796.1c0-48.41 38.01-85.77 85.77-85.77s86.1 37.36 86.1 85.77-38.34 85.77-86.1 85.77c-47.76 0-85.77-37.36-85.77-85.77zm129.96 0c0-26.31-19.17-44.83-44.19-44.83-24.69 0-43.86 18.52-43.86 44.83 0 26.32 19.17 44.83 43.86 44.83 25.02.01 44.19-18.51 44.19-44.83zM2911.62 777.58v99.74h-41.91v-94.54c0-22.09-13.32-33.46-32.16-33.46-20.47 0-35.74 12.02-35.74 40.29v87.72h-41.91V714.88h41.91v18.19c9.75-14.62 26.64-22.74 48.41-22.74 34.44 0 61.4 24.04 61.4 67.25z"}})])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"logos"},[a("a",{attrs:{href:"https://spiral.xyz",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{staticStyle:{padding:"5px"},attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#supporter-spiral"}})]),t._v("\n        Spiral\n      ")]),t._v(" "),a("a",{attrs:{href:"https://www.bailliegifford.com",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"140",height:"100"}},[a("use",{attrs:{href:"#supporter-bailliegifford"}})]),t._v("\n        Baillie Gifford\n      ")]),t._v(" "),a("a",{attrs:{href:"https://strike.me",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"120",height:"50"}},[a("use",{attrs:{href:"#supporter-strike"}})]),t._v("\n        Strike\n      ")]),t._v(" "),a("a",{attrs:{href:"https://hrf.org",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"110",height:"50"}},[a("use",{attrs:{href:"#supporter-hrf"}})]),t._v("\n        HRF\n      ")]),t._v(" "),a("a",{attrs:{href:"https://www.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#supporter-lunanode"}})]),t._v("\n        LunaNode\n      ")]),t._v(" "),a("a",{attrs:{href:"https://walletofsatoshi.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#supporter-walletofsatoshi"}})]),t._v("\n        Wallet of Satoshi\n      ")]),t._v(" "),a("a",{attrs:{href:"https://coincards.com/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"130",height:"100"}},[a("use",{attrs:{href:"#supporter-coincards"}})]),t._v("\n        Coincards\n      ")]),t._v(" "),a("a",{attrs:{href:"https://ivpn.net/",target:"_blank",rel:"noopener noreferrer"}},[a("svg",{attrs:{role:"img",width:"100",height:"100"}},[a("use",{attrs:{href:"#supporter-ivpn"}})]),t._v("\n        IVPN\n      ")])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      The BTCPay Server Project is proudly supported by these entities through the\n      "),e("a",{attrs:{href:"https://foundation.btcpayserver.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("BTCPay Server Foundation")]),this._v(".\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you'd like to support the project, please visit the "),e("a",{attrs:{href:"https://btcpayserver.org/donate/"}},[this._v("donation page")]),this._v(".")])}],!1,null,"7a910756",null).exports),u=a(251),g={name:"Layout",components:{Home:s.a,Page:d.a,Sidebar:f.a,Navbar:p,Sponsors:m},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(u.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},b=(a(313),Object(v.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("Sponsors"),t._v(" "),a("footer",{staticClass:"theme-default-content footer"},[a("router-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1)],1)}),[],!1,null,"5af0f5ee",null));e.default=b.exports}}]);
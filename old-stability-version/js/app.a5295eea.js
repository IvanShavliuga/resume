(function(t){function s(s){for(var e,r,n=s[0],o=s[1],p=s[2],_=0,v=[];_<n.length;_++)r=n[_],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);c&&c(s);while(v.length)v.shift()();return l.push.apply(l,p||[]),i()}function i(){for(var t,s=0;s<l.length;s++){for(var i=l[s],e=!0,n=1;n<i.length;n++){var o=i[n];0!==a[o]&&(e=!1)}e&&(l.splice(s--,1),t=r(r.s=i[0]))}return t}var e={},a={app:0},l=[];function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,s,i){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(i,e,function(s){return t[s]}.bind(null,e));return i},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=s,n=n.slice();for(var p=0;p<n.length;p++)s(n[p]);var c=o;l.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),a=i("2f62");e["a"].use(a["a"]);var l=new a["a"].Store({state:{profile:{},creative:[],edu:[],portfolio:[],works:[],links:[],postslist:[],postlink:"",fl:"bn"},actions:{initData:function(t){var s=t.commit;s("INIT_DATA")},langEn:function(t){var s=t.commit;s("LANG_EN")},langRu:function(t){var s=t.commit;s("LANG_RU")},loadPage:function(t){var s=t.commit;s("LOAD_PAGE")},loadPosts:function(t){var s=t.commit;s("LOAD_POSTS")},setLink:function(t,s){var i=t.commit;i("SET_LINK",s)}},mutations:{SET_LINK:function(t,s){t.postlink=s},LOAD_POSTS:function(t){var s=new XMLHttpRequest;s.open("GET","https://ivanshavliuga.github.io/pages/pages.json",!1),s.send(),t.postslist=window.JSON.parse(s.responseText)},LOAD_PAGE:function(t){var s=new XMLHttpRequest;s.open("GET",t.postlink,!1),s.send(),t.fl=s.responseText},LANG_RU:function(t){var s=new XMLHttpRequest;s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/profile.json",!1),s.send(),t.profile=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/creative.json",!1),s.send(),t.creative=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/edu.json",!1),s.send(),t.edu=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/portfolio.json",!1),s.send(),t.portfolio=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/works.json",!1),s.send(),t.works=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/links.json",!1),s.send(),t.links=window.JSON.parse(s.responseText)},LANG_EN:function(t){var s=new XMLHttpRequest;s.open("GET","https://ivanshavliuga.github.io/resume/api/en/profile.json",!1),s.send(),t.profile=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/en/creative.json",!1),s.send(),t.creative=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/en/edu.json",!1),s.send(),t.edu=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/en/portfolio.json",!1),s.send(),t.portfolio=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/en/works.json",!1),s.send(),t.works=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/en/links.json",!1),s.send(),t.links=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/pages/gulp-first.html",!1),s.send(),t.fl=s.responseText},INIT_DATA:function(t){var s=new XMLHttpRequest;s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/profile.json",!1),s.send(),t.profile=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/creative.json",!1),s.send(),t.creative=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/edu.json",!1),s.send(),t.edu=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/portfolio.json",!1),s.send(),t.portfolio=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/works.json",!1),s.send(),t.works=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/resume/api/ru/links.json",!1),s.send(),t.links=window.JSON.parse(s.responseText),s.open("GET","https://ivanshavliuga.github.io/pages/gulp-first.html",!1),s.send(),t.fl=s.responseText}},getters:{profile:function(t){return t.profile},creative:function(t){return t.creative},edu:function(t){return t.edu},portfolio:function(t){return t.portfolio},works:function(t){return t.works},links:function(t){return t.links},postslist:function(t){return t.postslist},fl:function(t){return t.fl}}}),r=i("8c4f"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("span",{staticStyle:{color:"#df45a1","background-color":"#ccc"}},[t._v("Device: w="+t._s(t.w)+" | h="+t._s(t.h))]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",[i("h2",[t._v("Portfolio ")]),i("div",{staticClass:"works"},t._l(t.portfolio,(function(s,e){return i("article",{key:e,attrs:{id:"article-"+e}},[i("h3",[t._v(t._s(s.title))]),i("a",{attrs:{href:s.sitelink,target:"_blank"}},[t._v(t._s(s.sitetitle))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.sitelink)+" ")]),i("p",[t._v(t._s(s.desc))]),i("ul",{staticClass:"skills"},t._l(s.tech,(function(s,a){return i("li",{key:e+"_"+a,attrs:{id:"tech-"+a+"_"+a}},[t._v(t._s(s))])})),0)])})),0),i("h2",[t._v("Creation")]),i("ul",{staticClass:"creative"},t._l(t.creative,(function(s,e){return i("li",{key:"creative_"+e,attrs:{id:"creative_"+e}},[i("h3",[t._v(t._s(s.category))]),t._l(s.linkslist,(function(s,a){return i("p",{key:"creative_"+a+"_"+e,attrs:{id:"creative_"+e+"_"+a}},[i("a",{attrs:{href:s.link,target:"_blank",title:s.name}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link))])])}))],2)})),0)])]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],p={name:"Home",data:function(){return{h:0,w:0,profile:{},education:[],work:[],portfolio:[],creative:[],social:[],fl:"none"}},created:function(){this.$store.dispatch("initData"),this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.portfolio=this.$store.getters.portfolio,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu,this.fl=this.$store.getters.fl,this.h=window.innerHeight,this.w=window.innerWidth}},c=p,_=i("2877"),v=Object(_["a"])(c,n,o,!1,null,null,null),u=v.exports,f=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",{domProps:{innerHTML:t._s(t.fl)}})]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},h=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],d={name:"Post",data:function(){return{profile:{},education:[],work:[],portfolio:[],creative:[],social:[],fl:"none"}},created:function(){this.$store.dispatch("loadPage"),this.fl=this.$store.getters.fl,this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.portfolio=this.$store.getters.portfolio,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu}},k=d,m=Object(_["a"])(k,f,h,!1,null,null,null),C=m.exports,g=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",[i("h2",[t._v("My posts")]),i("div",{staticClass:"works"},t._l(t.posts,(function(s,e){return i("article",{key:e,staticStyle:{width:"80%"},attrs:{id:"article-"+e}},[i("h3",[t._v(t._s(s.title))]),i("a",{attrs:{target:"_blank"},on:{click:function(i){return t.pselect(s.link)}}},[t._v(t._s(s.title))]),i("span",[t._v(t._s(s.category))])])})),0)])]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},b=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],w={name:"Portfolio",data:function(){return{profile:{},education:[],work:[],portfolio:[],creative:[],social:[],posts:[]}},created:function(){this.$store.dispatch("loadPosts"),this.fl=this.$store.getters.fl,this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.portfolio=this.$store.getters.portfolio,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu,this.posts=this.$store.getters.postslist},methods:{pselect:function(t){this.$store.dispatch("setLink",t),this.$router.push("/Post")}}},y=w,T=Object(_["a"])(y,g,b,!1,null,null,null),$=T.exports,E=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",[i("h2",[t._v("Portfolio ")]),i("div",{staticClass:"works"},t._l(t.portfolio,(function(s,e){return i("article",{key:e,attrs:{id:"article-"+e}},[i("h3",[t._v(t._s(s.title))]),i("a",{attrs:{href:s.sitelink,target:"_blank"}},[t._v(t._s(s.sitetitle))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.sitelink)+" ")]),i("p",[t._v(t._s(s.desc))]),i("ul",{staticClass:"skills"},t._l(s.tech,(function(s,a){return i("li",{key:e+"_"+a,attrs:{id:"tech-"+a+"_"+a}},[t._v(t._s(s))])})),0)])})),0),i("h2",[t._v("Creation")]),i("ul",{staticClass:"creative"},t._l(t.creative,(function(s,e){return i("li",{key:"creative_"+e,attrs:{id:"creative_"+e}},[i("h3",[t._v(t._s(s.category))]),t._l(s.linkslist,(function(s,a){return i("p",{key:"creative_"+a+"_"+e,attrs:{id:"creative_"+e+"_"+a}},[i("a",{attrs:{href:s.link,target:"_blank",title:s.name}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link))])])}))],2)})),0)])]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},S=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],P={name:"En",data:function(){return{profile:{},education:[],work:[],portfolio:[],creative:[],social:[],fl:"none"}},created:function(){this.$store.dispatch("langEn"),this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.portfolio=this.$store.getters.portfolio,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu,this.fl=this.$store.getters.fl}},O=P,x=Object(_["a"])(O,E,S,!1,null,null,null),j=x.exports,N=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",[i("h2",[t._v("Portfolio ")]),i("div",{staticClass:"works"},t._l(t.portfolio,(function(s,e){return i("article",{key:e,attrs:{id:"article-"+e}},[i("h3",[t._v(t._s(s.title))]),i("a",{attrs:{href:s.sitelink,target:"_blank"}},[t._v(t._s(s.sitetitle))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.sitelink)+" ")]),i("p",[t._v(t._s(s.desc))]),i("ul",{staticClass:"skills"},t._l(s.tech,(function(s,a){return i("li",{key:e+"_"+a,attrs:{id:"tech-"+a+"_"+a}},[t._v(t._s(s))])})),0)])})),0),i("h2",[t._v("Creation")]),i("ul",{staticClass:"creative"},t._l(t.creative,(function(s,e){return i("li",{key:"creative_"+e,attrs:{id:"creative_"+e}},[i("h3",[t._v(t._s(s.category))]),t._l(s.linkslist,(function(s,a){return i("p",{key:"creative_"+a+"_"+e,attrs:{id:"creative_"+e+"_"+a}},[i("a",{attrs:{href:s.link,target:"_blank",title:s.name}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link))])])}))],2)})),0)])]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},G=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],L={name:"Ru",data:function(){return{profile:{},education:[],work:[],portfolio:[],creative:[],social:[],fl:"none"}},created:function(){this.$store.dispatch("langRu"),this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.portfolio=this.$store.getters.portfolio,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu,this.fl=this.$store.getters.fl}},I=L,M=Object(_["a"])(I,N,G,!1,null,null,null),J=M.exports,D=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("header",[i("div",{staticClass:"contacts"},[i("ol",[i("li",[i("p",[t._v(t._s(t.profile.geo)+" ")])]),i("li",[i("p",[i("a",{attrs:{href:t.profile.github,title:t.profile.github}},[t._v("github.com")]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.github))])]),i("p",[i("a",{attrs:{href:t.profile.email,title:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])])]),i("li",[i("p",{attrs:{title:"The user wanted to hide their phone number"}},[t._v(t._s(t.profile.phone))]),i("p",[t._v("The user wanted to hide their phone number")])])])]),i("div",{staticClass:"name"},[i("div",{staticClass:"userdata"},[i("div",{staticClass:"photouser"}),i("h1",[t._v(t._s(t.profile.name))]),i("p",[t._v(t._s(t.profile.prof))]),i("p",[i("span",[i("router-link",{staticClass:"link",attrs:{to:"/ru"}},[t._v("RU")])],1),i("span",[t._v("|"),i("router-link",{staticClass:"link",attrs:{to:"/en"}},[t._v("EN")])],1)])])])]),i("main",[i("nav",[i("ul",{staticClass:"menulist"},[i("li",{staticClass:"item"},[i("h2",[t._v("Profile ")]),i("div",{staticClass:"desc"},[i("h3",[t._v(t._s(t.profile.name)+" ")]),i("p",[i("b",[t._v(t._s(t.profile.prof))])]),i("p",[t._v("I make site layout to order. ")]),i("p",[i("a",{attrs:{href:t.profile.email}},[t._v(t._s(t.profile.email))]),i("span",{staticClass:"linkprint"},[t._v(t._s(t.profile.email))])]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1),i("p",[i("router-link",{attrs:{to:"/List"}},[t._v("My posts")])],1),i("p",[i("router-link",{attrs:{to:"/Portfolio"}},[t._v("My portfolio")])],1)])]),t._m(0),i("li",{staticClass:"item"},[i("h2",[t._v("Skills ")]),i("div",{staticClass:"desc"},[i("ul",{staticClass:"skills"},t._l(t.profile.skills,(function(s,e){return i("li",{key:s},[t._v(t._s(s))])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Education ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.education,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])]),i("li",{staticClass:"item"},[i("h2",[t._v("Work experience ")]),i("div",{staticClass:"desc"},[i("ul",t._l(t.work,(function(s,e){return i("li",{key:e,staticClass:"line"},[i("div",{staticClass:"lineinfo"},[t._v(t._s(s.years)),i("a",{attrs:{href:s.link,target:"_blank"}},[t._v(t._s(s.caption))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.caption)+" ("+t._s(s.link)+")")]),i("span",[t._v(t._s(s.desc))])])])})),0)])])])]),i("section",[i("h2",[t._v("Portfolio")]),i("div",{staticClass:"works"},t._l(t.portfolio,(function(s,e){return i("article",{key:e,attrs:{id:"article-"+e}},[i("h3",[t._v(t._s(s.title))]),i("a",{attrs:{href:s.sitelink,target:"_blank"}},[t._v(t._s(s.sitetitle))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.sitelink))]),i("p",[t._v(t._s(s.desc))]),i("ul",{staticClass:"skills"},t._l(s.tech,(function(s,a){return i("li",{key:e+"_"+a,attrs:{id:"tech-"+a+"_"+a}},[t._v(t._s(s))])})),0)])})),0)])]),i("footer",[i("ul",{staticClass:"social"},t._l(t.social,(function(s,e){return i("li",{key:t.social+e},[i("a",{attrs:{href:s.link,target:"_blank",id:s.name+"_"+e}},[t._v(t._s(s.name))]),i("span",{staticClass:"linkprint"},[t._v(t._s(s.link)+" ")])])})),0),i("div",{staticClass:"copyright"},[i("p",[t._v("© 2020 "+t._s(t.profile.geo)+", "+t._s(t.profile.name)+", "+t._s(t.profile.prof)),i("span",{staticClass:"mobileflag"},[t._v(" mobile version ")]),i("span",{staticClass:"tabletflag"},[t._v(" tablet version")]),i("span",{staticClass:"desktopflag"},[t._v(" desktop version")]),i("span",{staticClass:"printflag"},[t._v(" print version. I did it myself using CSS ")])])])])])},R=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("li",{staticClass:"item"},[i("h2",[t._v("Interests")]),i("div",{staticClass:"images"},[i("div",{staticClass:"interes"},[i("p",[t._v("Podcast")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Books")])]),i("div",{staticClass:"interes"},[i("p",[t._v("Design ")])])])])}],A={name:"Portfolio",data:function(){return{portfolio:[]}},created:function(){this.$store.dispatch("initData"),this.portfolio=this.$store.getters.portfolio,this.profile=this.$store.getters.profile,this.social=this.$store.getters.links,this.work=this.$store.getters.works,this.creative=this.$store.getters.creative,this.education=this.$store.getters.edu}},H=A,U=Object(_["a"])(H,D,R,!1,null,null,null),W=U.exports;e["a"].use(r["a"]);var B=[{path:"/",name:"Home",component:u},{path:"/en",name:"En",component:j},{path:"/ru",name:"Ru",component:J},{path:"/Post",name:"Post",component:C},{path:"/List",name:"List",component:$},{path:"/Portfolio",name:"Portfolio",component:W}],q=new r["a"]({mode:"history",base:"/",routes:B}),X=q,K=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("router-view")},z=[],F={name:"App"},Q=F,V=Object(_["a"])(Q,K,z,!1,null,null,null),Y=V.exports;i("a7c1"),i("9867"),i("aa46");e["a"].config.productionTip=!0,new e["a"]({store:l,router:X,render:function(t){return t(Y)},mounted:function(){this.$store.dispatch("initData")}}).$mount("#app")},9867:function(t,s,i){},a7c1:function(t,s,i){},aa46:function(t,s,i){}});
//# sourceMappingURL=app.a5295eea.js.map
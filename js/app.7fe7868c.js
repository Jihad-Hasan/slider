(function(t){function e(e){for(var r,i,l=e[0],s=e[1],u=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Slideout",{attrs:{menu:"#menu",panel:"#panel",toggleSelectors:[".toggle-button"]},on:{"on-open":t.open,"on-close":t.close,"on-translatestart":t.open,"on-translate":t.running,"on-translateend":t.close}},[n("nav",{attrs:{id:"menu"}},[n("div",[t._v("Menu")])]),n("main",{style:t.customStyle,attrs:{id:"panel"}},[n("header",[n("div",[n("button",{staticClass:"toggle-button"},[t._v("☰")]),t._v(" Panel ")])])])]),n("div",{staticClass:"asideNav",style:t.navStyle},[t._v("Aside")])],1)},a=[],i=n("9098"),l=n.n(i),s=100,u=300,c={name:"app",components:{Slideout:l.a},methods:{open:function(){this.navStyle.width=this.extendWidth+"px",this.customStyle.transform="translateX(0px) !important",this.customStyle["padding-left"]=this.extendWidth+"px"},running:function(){this.customStyle.transform="translateX(0px) !important"},close:function(){this.customStyle.transform="translateX(0px)",this.customStyle["padding-left"]=this.width+"px",this.navStyle.width=this.width+"px"}},data:function(){return{width:s,extendWidth:u,customStyle:{transform:"translateX(0px)","padding-left":s+"px"},navStyle:{width:s+"px"}}}},p=c,d=(n("034f"),n("2877")),f=Object(d["a"])(p,o,a,!1,null,null,null),h=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.7fe7868c.js.map
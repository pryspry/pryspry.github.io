(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"30bf":function(t,e,s){},e034:function(t,e,s){"use strict";var a=s("30bf"),n=s.n(a);n.a},fded:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"prys_pagecontent row q-pt-lg q-pb-xl q-px-lg"},[s("div",{staticClass:"col-md-8 col-xs-12 q-gutter-sm text-grey"},[s("q-breadcrumbs",{attrs:{gutter:"xs"}},[s("q-breadcrumbs-el",{attrs:{label:"Home",to:"/"}}),s("q-breadcrumbs-el",{attrs:{label:"Others"}})],1)],1),s("div",{staticClass:"col-md-8 col-xs-12 pagetitle"},[s("h1",[s("q-icon",{attrs:{name:"call_split",size:"35px"}}),t._v(" Others")],1)]),t._l(t.listOthers,(function(e){return s("div",{key:e.id,staticClass:"col-md-8 col-xs-12"},[s("router-link",{staticClass:"title",attrs:{to:/others/+e.id}},[s("div",{staticClass:"text-h5 q-pb-md"},[s("i",{staticClass:"fas fa-chevron-right"}),t._v(" "+t._s(e.title))])])],1)}))],2)])},n=[],r=s("967e"),i=s.n(r),c=(s("96cf"),s("fa84")),l=s.n(c),o=s("bc3a"),u=s.n(o),d={meta:{title:"Others",titleTemplate:function(t){return"".concat(t," - Full Stack Developer based in Jakarta")},meta:{description:{name:"description",content:"Pry S full stack developer based in Jakarta, Indonesia"},keywords:{name:"keywords",content:"Full Stack Developer, Jakarta, Indonesia"},equiv:{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}}},data:function(){return{listOthers:{}}},mounted:function(){var t=this;return l()(i.a.mark((function e(){var s;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.pryspry.com/blogs?blogcategory=3");case 2:s=e.sent,t.listOthers=s.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{refresh:function(t){setTimeout((function(){t()}),1e3)}}},p=d,f=(s("e034"),s("2877")),h=Object(f["a"])(p,a,n,!1,null,null,null);e["default"]=h.exports}}]);
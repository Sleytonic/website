(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{528:function(t,e,n){"use strict";var r=n(1),s=n(287).trim;r({target:"String",proto:!0,forced:n(535)("trim")},{trim:function(){return s(this)}})},535:function(t,e,n){var r=n(2),s=n(288);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t}))}},571:function(t,e,n){},649:function(t,e,n){},650:function(t,e,n){"use strict";var r=n(571);n.n(r).a},721:function(t,e,n){"use strict";n.r(e);var r=n(74),s=(n(528),n(68),n(113),n(168),n(170),n(539)),a=n.n(s),i=(n(649),{props:{url:{type:String,required:!0},name:{type:String,required:!0},description:{type:String,required:!0}},data:function(){return{extensions:[]}},beforeMount:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get(t.$props.url+"/versioning.json");case 2:n=e.sent,r=n.data,t.$data.extensions=r.sources;case 5:case"end":return e.stop()}}),e)})))()},methods:{getName:function(t){return t.replace(/[[|(][^(|[]+[\]|)]/g,"").trim()},encodedURL:function(){return"paperback://addRepo?displayName="+encodeURI(this.$props.name)+"&url="+encodeURI(this.$props.url)}}}),o=(n(650),n(38)),u=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[n("b",[t._v(t._s(t.name))])]),t._v(" "),n("th",{staticClass:"hidden-md-and-down"},[t._v(t._s(t.url))]),t._v(" "),n("th",[n("a",{attrs:{href:t.encodedURL()}},[t._v("Add to Paperback")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"hidden-lg-and-up",attrs:{colspan:"3"}},[n("b",[t._v(t._s(t.url))])])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}},[t._v(t._s(t.description))])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"3"}},[n("ul",{staticClass:"extensionList",attrs:{id:"v-for-object"}},t._l(t.extensions,(function(e){return n("li",{key:e.id,attrs:{id:e.name}},[null!=e.tags&&e.tags.length>0?n("ElTooltip",{attrs:{placement:"bottom"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",t._l(e.tags,(function(e){return n("span",{key:e.text},[n("ElTag",{attrs:{type:e.type,size:"mini",effect:"dark"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t\t\t\t")])],1)})),0)]},proxy:!0}],null,!0)},[t._v(" "),n("span",[n("b",[t._v("•")]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.getName(e.name)))])]):n("span",[n("b",[t._v("•")]),t._v(" "+t._s(t.getName(e.name)))])],1)})),0)])])])])}),[],!1,null,"eb702016",null);e.default=u.exports}}]);
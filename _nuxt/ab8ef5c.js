(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{260:function(t,e,d){var content=d(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(38).default)("6f7bf7f0",content,!0,{sourceMap:!1})},282:function(t,e,d){"use strict";d(260)},283:function(t,e,d){var n=d(37)(!1);n.push([t.i,".lastUpdated>p[data-v-146c3ad8],.lastUpdated blockquote[data-v-146c3ad8],.lastUpdated dl[data-v-146c3ad8],.lastUpdated ol[data-v-146c3ad8],.lastUpdated small[data-v-146c3ad8],.lastUpdated span[data-v-146c3ad8],.lastUpdated table[data-v-146c3ad8],.lastUpdated ul[data-v-146c3ad8]{color:#000;font-size:1.1rem;margin:.8em 0}.lastUpdated>small[data-v-146c3ad8]{font-size:1rem}.lastUpdated[data-v-146c3ad8]{text-align:right;color:#666}",""]),t.exports=n},302:function(t,e,d){"use strict";d.r(e);var n=d(6),r=(d(41),d(297)),o={props:{path:{type:String,required:!0}},data:function(){return{date:null}},created:function(){this.getLastUpdated()},watch:{path:function(){this.getLastUpdated()}},methods:{getLastUpdated:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(new r.a).repos.listCommits({owner:"okocraft",repo:"homepage",path:t.path,page:1,per_page:1}).then((function(e){var n=e.data[0],r=d(281),o=n.commit.author.date;t.date=r(o).locale("ja_jp").format("YYYY/MM/DD HH:mm")})).catch((function(e){t.date="Unknown"}));case 2:case"end":return e.stop()}}),e)})))()}}},c=(d(282),d(13)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"lastUpdated"},[d("small",[t._v("\n    最終更新: "+t._s(t.date)+"\n  ")])])}),[],!1,null,"146c3ad8",null);e.default=component.exports}}]);
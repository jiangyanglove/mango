webpackJsonp([0],[,,function(t,i){!function(t,i){var n=t.documentElement,e="orientationchange"in window?"orientationchange":"resize",s=function(){var t=n.clientWidth;t&&(n.style.fontSize=t/320*20+"px")};t.addEventListener&&(i.addEventListener(e,s,!1),t.addEventListener("DOMContentLoaded",s,!1))}(document,window)},function(t,i,n){"use strict";var e=n(1),s=n(23),a=n(19),o=n.n(a),r=n(18),c=n.n(r);e.a.use(s.a),i.a=new s.a({routes:[{path:"/",name:"start",component:o.a},{path:"/confirm",name:"confirm",component:c.a}]})},function(t,i,n){function e(t){n(11)}var s=n(0)(n(7),n(20),e,null,null);t.exports=s.exports},function(t,i,n){"use strict";n.d(i,"a",function(){return f});var e=n(16),s=n.n(e),a=n(17),o=n.n(a),r=n(14),c=n.n(r),u=n(15),l=n.n(u),f=[{names:["迪","玛","希","蔡","依","林"],right:["蔡","依","林"],music:s.a,img:c.a},{names:["黄","家","驹","王","力","宏","赵","雷"],right:["赵","雷"],music:o.a,img:l.a}]},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(1),s=n(4),a=n.n(s),o=n(3),r=n(2);n.n(r);e.a.config.productionTip=!1,new e.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(10);n.n(e);i.default={name:"app",data:function(){return{win_height:window.innerHeight,isLoading:1}},mounted:function(){var t=this;setTimeout(function(){t.isLoading=0},1e3),this.touchMove()},methods:{touchMove:function(){document.addEventListener("touchmove",function(t){t.preventDefault()})}}}},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(5);i.default={name:"confirm",data:function(){return{win_height:window.innerHeight,img:e.a[0].img,anwsers:[],isTrue:0,mp3:e.a[0].music,names:e.a[0].names,right:e.a[0].right,i:0,isClick:0,total:e.a.length,isFinish:0,num:1}},mounted:function(){var t=this;this.addStr(),setTimeout(function(){t.music()},1e3)},methods:{music:function(){this.$refs.music.play()},getAnwser:function(t){var i=this,n=this.right.length;this.i<n&&(this.anwsers.splice(this.i,1,t),this.i+=1,i.anwsers.toString()===i.right.toString()&&(i.isTrue=1),this.i===n&&(i.isFinish=1))},goNext:function(){var t=this,i=this;i.isTrue=0,i.isFinish=0,i.anwsers=[],i.i=0;for(var n=0;n<e.a.length;n+=1)i.img=e.a[n].img,i.mp3=e.a[n].music,i.names=e.a[n].names,i.right=e.a[n].right;this.$refs.music.load(),setTimeout(function(){t.$refs.music.play()},1e3),i.num<e.a.length&&(i.num+=1);for(var s=i.right.length,a=0;a<s;a+=1)i.anwsers.push("")},addStr:function(){var t=this;t.anwsers=[],t.i=0;for(var i=t.right.length,n=0;n<i;n+=1)t.anwsers.push("")}}}},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"start",data:function(){return{win_height:window.innerHeight}},mounted:function(){this.touchMove()},methods:{touchMove:function(){document.addEventListener("touchmove",function(t){t.preventDefault()})}}}},function(t,i){},function(t,i){},function(t,i){},function(t,i){},function(t,i,n){t.exports=n.p+"static/img/img1.b30f020.jpg"},function(t,i,n){t.exports=n.p+"static/img/loading.ca01557.png"},function(t,i,n){t.exports=n.p+"static/media/1caiyilin.8f91cce.mp3"},function(t,i,n){t.exports=n.p+"static/media/2zhaolei.d2baf0e.mp3"},function(t,i,n){function e(t){n(13)}var s=n(0)(n(8),n(22),e,"data-v-7c725954",null);t.exports=s.exports},function(t,i,n){function e(t){n(12)}var s=n(0)(n(9),n(21),e,"data-v-6f7f3614",null);t.exports=s.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t.isLoading?n("div",{staticClass:"loading",style:{minHeight:t.win_height+"px"}},[n("div",{staticClass:"dt"},[n("div",{staticClass:"dtc"},[n("i",{staticClass:"logo"})])])]):t._e()]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"start",style:{minHeight:t.win_height+"px"}},[n("i",{staticClass:"lang"}),t._v(" "),n("i",{staticClass:"info"}),t._v(" "),n("i",{staticClass:"title"}),t._v(" "),n("i",{staticClass:"logo"}),t._v(" "),t._m(0),t._v(" "),n("router-link",{staticClass:"btn-go",attrs:{to:"/confirm"}})],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"link"},[n("a",{attrs:{href:"https://www.baidu.com/"}},[t._v("夏日青春YOUNG")]),t._v(" "),n("a",{attrs:{href:"https://www.youku.com/"}},[t._v("尖叫之夜")])])}]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"confirm",style:{minHeight:t.win_height+"px"}},[n("audio",{ref:"music",attrs:{src:t.mp3,preload:""}}),t._v(" "),n("div",{staticClass:"bg"},[n("span",{staticClass:"img",class:{active:t.isTrue},style:{backgroundImage:"url("+t.img+")"}})]),t._v(" "),n("div",{staticClass:"top"},[n("div",{staticClass:"left",on:{click:function(i){t.music()}}},[n("i",{staticClass:"icon-vioce"}),t._v("听音频猜明星")]),t._v(" "),t._m(0)]),t._v(" "),t.isTrue?n("i",{staticClass:"next active",on:{click:function(i){t.goNext()}}}):n("i",{staticClass:"next"}),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"anwser"},[n("div",{staticClass:"a-t"},t._l(t.anwsers,function(i){return n("span",[t._v(t._s(i))])})),t._v(" "),n("div",{staticClass:"a-b"},[t._v(t._s(t.num)+"/"+t._s(t.total))])]),t._v(" "),n("div",{staticClass:"icon-logo"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isTrue,expression:"!isTrue"}],staticClass:"fly"},t._l(t.names,function(i){return n("span",{class:{active:t.isClick},on:{click:function(n){t.getAnwser(i)}}},[t._v(t._s(i))])}))])},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"right"},[t._v("求助好友"),n("i",{staticClass:"icon-mark"})])}]}}],[6]);
//# sourceMappingURL=app.c42313703d6b7159c881.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a489589"],{2909:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("277d");var r=n("6b75");function a(e){if(Array.isArray(e))return Object(r["a"])(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var u=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return a(e)||i(e)||Object(u["a"])(e)||s()}},"2c50":function(e,t,n){"use strict";var r=n("f4b6"),a=n.n(r);a.a},3835:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("277d");function r(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done);r=!0)if(n.push(u.value),t&&n.length===t)break}catch(o){a=!0,i=o}finally{try{r||null==s["return"]||s["return"]()}finally{if(a)throw i}}return n}}var i=n("06c5");function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){return r(e)||a(e,t)||Object(i["a"])(e,t)||u()}},ebd4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"stat"},[e._v(" Живых: "+e._s(e.alives)+" | Поколений: "+e._s(e.generation)+" | Победы: "+e._s(e.victories)+" ")]),n("div",{ref:"container",staticClass:"container",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.handleJumpTop(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&2!==t.button?null:e.handleJumpRight(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.handleJumpBottom(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.handleJumpLeft(t)}]}},[n("div",{staticClass:"field cells"},e._l(e.field,(function(t,r){return n("div",{key:r,class:["cell",{available:0!==t}]},[1===t?n("div",{staticClass:"starting-checkpoint"},[e._v(" 🥾 ")]):e._e(),t===e.investigatedMaximumCellValue||e.investigatedMaximumCellValue===e.maximumCellValue?n("div",{staticClass:"maximum-cell-value-checkpoint"},[e._v(" 🤘 ")]):e._e(),t===e.maximumCellValue?n("div",{staticClass:"finishing-checkpoint"},[e._v(" 🧠 ")]):e._e()])})),0),e.isDisplayingActors?n("div",{staticClass:"field actors"},e._l(e.actors,(function(t){return n("div",{key:t.id,style:{gridRow:t.y,gridColumn:t.x}},[n("div",{ref:"actors_"+t.id,refInFor:!0,staticClass:"actor"},[n("div",[e._v("👣️")])])])})),0):e._e()])])},a=[],i=(n("4160"),n("d81d"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("3835")),u=n("2909"),s=(n("96cf"),n("1da1")),o=n("ce1a"),c=!0,l=!0,d=500,f=5,m=d/f,h=0,p={name:"Square",data:function(){return{model:o["b"](),training:{inputs:[],labels:[]},learning:{inputs:[],labels:[]},generation:0,victories:0,isDisplayingActors:l,actors:[],alives:d,investigatedMaximumCellValue:1,field:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,45,44,43,0,0,2,0,0,0,0,0,0,0,0,0,42,0,0,3,0,0,8,9,10,11,0,0,0,41,0,0,4,5,6,7,0,0,12,0,0,0,40,0,0,0,0,0,0,0,0,13,0,0,0,39,0,0,0,0,0,0,0,15,14,0,0,0,38,0,0,0,0,0,0,0,16,0,0,0,0,37,0,0,0,21,20,19,18,17,0,0,0,0,36,0,0,0,22,0,0,0,0,0,0,33,34,35,0,0,0,23,0,0,0,0,0,0,32,0,0,0,0,0,24,25,26,27,28,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],fieldSize:-1,maximumCellValue:-1}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setupModel(),e.fieldSetting(),t.next=4,e.actorsSetting();case 4:if(!c){t.next=7;break}return t.next=7,e.modelPredict();case 7:case"end":return t.stop()}}),t)})))()},methods:{setupModel:function(){this.model.add(o["a"].dense({inputShape:[3],activation:"sigmoid",units:256})),this.model.add(o["a"].dropout({rate:.1})),this.model.add(o["a"].dense({activation:"sigmoid",units:128})),this.model.add(o["a"].dense({activation:"sigmoid",units:4})),this.model.compile({optimizer:o["d"].adam(.01),loss:"meanSquaredError",metrics:["accuracy"]})},fieldSetting:function(){this.fieldSize=Math.sqrt(this.field.length),this.maximumCellValue=Math.max.apply(Math,Object(u["a"])(this.field)),this.$refs.container.style.setProperty("--quantity-rows",this.fieldSize),this.$refs.container.style.setProperty("--quantity-columns",this.fieldSize)},actorsSetting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=0;n<d;n++)e.actors.push({id:n,style:void 0,x:2,y:2,cellValue:1});if(!l){t.next=5;break}return t.next=4,e.$nextTick();case 4:e.actors.forEach((function(t){var n=Object(i["a"])(e.$refs["actors_".concat(t.id)],1),r=n[0].style;t.style=r}));case 5:case"end":return t.stop()}}),t)})))()},actorsReset:function(){for(var e=0;e<d;e++)this.actors[e].x=2,this.actors[e].y=2,this.actors[e].cellValue=1;this.alives=d},modelPredict:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.actors.map(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0===n.cellValue){t.next=14;break}if(h+=1,h!==m){t.next=7;break}r=e.getRandomPredict(),h=0,t.next=10;break;case 7:return t.next=9,e.model.predict(o["c"]([[n.x/e.fieldSize,n.y/e.fieldSize,n.cellValue/e.maximumCellValue]])).data();case 9:r=t.sent;case 10:return a=e.getDirectionStep(r),e[a](n),t.next=14,e.availabilityCheck(n);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return t.next=4,e.modelPredict();case 4:case"end":return t.stop()}}),t)})))()},getRandomPredict:function(){return[Math.random(),Math.random(),Math.random(),Math.random()]},getDirectionStep:function(e){var t=Object(i["a"])(e,4),n=t[0],r=t[1],a=t[2],u=t[3],s=n,o="jumpTop";return r>s&&(s=r,o="jumpRight"),a>s&&(s=a,o="jumpBottom"),u>s&&(o="jumpLeft"),o},jumpTop:function(e){e.y-=1},jumpRight:function(e){e.x+=1},jumpBottom:function(e){e.y+=1},jumpLeft:function(e){e.x-=1},availabilityCheck:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.y-1,a=e.x-1,i=t.field[r*t.fieldSize+a],!(i>e.cellValue)){n.next=13;break}if(e.cellValue=i,i>t.investigatedMaximumCellValue&&(t.investigatedMaximumCellValue=i),i!==t.maximumCellValue){n.next=11;break}return t.victories+=1,n.next=10,t.actorsReset();case 10:return n.abrupt("return");case 11:n.next=15;break;case 13:e.cellValue=0,t.alives-=1;case 15:if(t.saveTraining({actor:e,label:t.getAntennaCellValues({normalX:a,normalY:r})}),0!==t.alives){n.next=19;break}return n.next=19,t.modelFit();case 19:case"end":return n.stop()}}),n)})))()},getAntennaCellValues:function(e){var t=e.normalX,n=e.normalY,r=this.field[(n-1)*this.fieldSize+t]||0,a=this.field[n*this.fieldSize+(t+1)]||0,i=this.field[(n+1)*this.fieldSize+t]||0,u=this.field[n*this.fieldSize+(t-1)]||0;return[r/this.maximumCellValue,a/this.maximumCellValue,i/this.maximumCellValue,u/this.maximumCellValue]},saveTraining:function(e){var t=e.actor,n=e.label;this.training.inputs.push([t.x/this.fieldSize,t.y/this.fieldSize,t.cellValue/this.maximumCellValue]),this.training.labels.push(n)},modelFit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,u,s,c,l,d,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getBestMoves(),r=n.firstInput,a=n.firstLabel,i=n.secondInput,u=n.secondLabel,s=n.thirdInput,c=n.thirdLabel,l=n.fourInput,d=n.fourLabel,f=n.fiveInput,m=n.fiveLabel,e.learning.inputs.push(r,i,s,l,f),e.learning.labels.push(a,u,c,d,m),t.next=5,e.model.fit(o["c"](e.learning.inputs),o["c"](e.learning.labels));case 5:return e.generation+=1,t.next=8,e.actorsReset();case 8:case"end":return t.stop()}}),t)})))()},getBestMoves:function(){var e=this.training,t=e.inputs,n=e.labels;this.training={inputs:[],labels:[]};var r=-1,a=-1,u=-1,s=-1,o=-1,c=-1,l=-1,d=-1,f=-1,m=-1;return t.forEach((function(e,t){var n=Object(i["a"])(e,3),h=n[2];switch(!0){case h>o:r=a,a=u,u=s,s=o,o=h,c=l,l=d,d=f,f=m,m=t;break;case h>s:r=a,a=u,u=s,s=h,c=l,l=d,d=f,f=t;break;case h>u:r=a,a=u,u=h,c=l,l=d,d=t;break;case h>a:r=a,a=h,c=l,l=t;break;case h>r:r=h,c=t;break;default:}})),{firstInput:t[m],firstLabel:n[m],secondInput:t[f],secondLabel:n[f],thirdInput:t[d],thirdLabel:n[d],fourInput:t[l],fourLabel:n[l],fiveInput:t[c],fiveLabel:n[c]}},handleJumpTop:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])(e.actors,1),r=n[0],e.jumpTop(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpRight:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])(e.actors,1),r=n[0],e.jumpRight(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpBottom:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])(e.actors,1),r=n[0],e.jumpBottom(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpLeft:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])(e.actors,1),r=n[0],e.jumpLeft(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()}}},b=p,v=(n("2c50"),n("2877")),g=Object(v["a"])(b,r,a,!1,null,"69f9237b",null);t["default"]=g.exports},f4b6:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1a489589.f982b936.js.map
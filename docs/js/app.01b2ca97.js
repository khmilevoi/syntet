(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"31e3":function(e,t,n){"use strict";var r=n("ffca"),a=n.n(r);a.a},4:function(e,t){},"4a40":function(e,t,n){"use strict";var r=n("f1ae"),a=n.n(r);a.a},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"horizontalGroup",(function(){return x})),n.d(r,"verticalGroup",(function(){return y})),n.d(r,"obliquelyGroup",(function(){return _}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App"},[n("div",{staticClass:"routers"},[n("div",{staticClass:"title"},[e._v(" ПРОЕКТЫ ")]),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"route",attrs:{to:{name:"TicTacToe"}}},[e._v(" Крестики нолики "),n("span",[e._v("(В разработке)")])]),n("router-link",{staticClass:"route",attrs:{to:{name:"Square"}}},[e._v(" Квадрат в лабиринте "),n("span",[e._v("(Завершён)")]),n("a",{staticClass:"link",attrs:{href:"https://habr.com/ru/post/452612",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v(" _Статья__ ")])]),n("router-link",{staticClass:"route",attrs:{to:{name:"Bird"}}},[e._v(" Плоская птица "),n("span",[e._v("(Приостановлен)")])])],1)]),n("router-view")],1)},s=[],o=(n("b0c0"),{name:"App",data:function(){return{prevRouteName:localStorage.getItem("prevRouteName")}},watch:{$route:function(e){e.meta.isReload&&e.name!==this.prevRouteName&&(localStorage.setItem("prevRouteName",e.name),window.location.reload())}}}),c=o,u=(n("4a40"),n("2877")),l=Object(u["a"])(c,i,s,!1,null,"2a08b104",null),d=l.exports,m=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TicTacToe"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"title"},[e._v(" Победы в состязаниях: "),n("span",{staticClass:"X"},[e._v(" X ")]),n("span",{staticClass:"victory"},[e._v(" "+e._s(e.victories.X)+" ")]),e._v(" ˑ "),n("span",{staticClass:"O"},[e._v(" O ")]),n("span",{staticClass:"victory"},[e._v(" "+e._s(e.victories.O)+" ")])]),n("div",{staticClass:"description"},[e._v(" Количество тренировок и состязаний: "+e._s(e.trainingGames+e.duelGames)+" ")]),n("div",{staticClass:"timer"},[e._v(" Время обучения: "+e._s(e.timer)+" секунд (~"+e._s(Math.round(e.timer/60))+" минут) ")])]),n("div",{staticClass:"fields-container"},[n("div",{staticClass:"fields"},e._l(e.agents.X.concat(e.agents.O),(function(t,r){return n("div",{key:r,staticClass:"field"},[e._l(t.field,(function(a,i){return n("div",{key:r+":"+i,class:["cell",{sign:a,alive:t.isAlive,victory:t.isVictory}]},[e._v(" "+e._s(a)+" ")])})),n("div",{staticClass:"caption"},[e._v(" Поле игрока: "+e._s(t.sign)+" ")])],2)})),0),n("div",{staticClass:"duel-field"},[e._l(e.duel.field,(function(t,r){return n("div",{key:r,class:["cell",t,{victory:e.victoriesStatus[t]}]},[e._v(" "+e._s(t)+" ")])})),n("div",{staticClass:"caption"},[e._v(" Поле для состязаний ")])],2)]),e._m(0),n("div",{staticClass:"ai-vs-human-container"},[n("div",{staticClass:"result"},[n("span",{staticClass:"X"},[e._v(" X ")]),n("span",{class:[e.AIvsHuman.victories.X>=0?"success":"loss"]},[e._v(" "+e._s(e.AIvsHuman.victories.X)+" ")]),e._v(" ˑ "),n("span",{staticClass:"O"},[e._v(" O ")]),n("span",{class:[e.AIvsHuman.victories.O>=0?"success":"loss"]},[e._v(" "+e._s(e.AIvsHuman.victories.O)+" ")])]),e._m(1),n("div",{staticClass:"field"},e._l(e.AIvsHuman.field,(function(t,r){return n("div",{key:r,class:["cell",t,{victory:e.victoriesStatus[t]}],on:{click:function(t){return e.setHumanSign(r)}}},[e._v(" "+e._s(t)+" ")])})),0),n("button",{class:["resume","button",{"is-duel":e.AIvsHuman.isDuel}],on:{click:e.AIvsHumanReset}},[e._v(" Продолжить обучение ")]),n("div",{staticClass:"models-controller"},[n("div",{staticClass:"button-container"},[n("button",{staticClass:"button",on:{click:e.saveModelsOnPC}},[e._v(" Сохранить модели на компьютер ")])]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"button",on:{click:e.localStorageClear}},[e._v(" Очистить локальное хранилище ")])]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"button",on:{click:e.restoreModelsFromGitHub}},[e._v(" Восстановить модели из GitHub ")])])])])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fields-description"},[n("div",[e._v("Первая игра - игроки на своих полях, вторая игра - состязание.")]),n("div",[e._v("Подсветка золотистым - победа. Цель обучения - сводить игру в ничью.")]),n("br"),n("b",[e._v("Начать игру с AI можно поставив знак на поле ниже - обучение приостановится.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"caption"},[e._v(" Человек против AI "),n("span",[e._v("(beta)")])])}],v=(n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("4795"),n("5530")),g=n("2909"),h=n("3835"),b=(n("96cf"),n("1da1")),w=n("ce1a");function x(e){for(var t=e.field,n=e.sign,r=0,a=0;a<t.length;a++){if(t[a]===n)r+=1;else{r=0;while(a%3+1!==3)a+=1}if(3===r)return!0}return!1}function y(e){for(var t=e.field,n=e.sign,r=e.start,a=e.step,i=0,s=0,o=r;o<t.length;o++){if(t[o]===n)i+=1,1===i&&(s=o),o+=a;else if(0!==i&&(o=s),i=0,2===o)break;if(3===i)return!0}return!1}function _(e){var t=e.field,n=e.sign;return y({field:t,sign:n,start:0,step:3})||y({field:t,sign:n,start:2,step:1})}var O,k=!0,T=!0,S=!1,C=.935,R={name:"TicTacToe",data:function(){return{modelX:w["c"](),modelO:w["c"](),trainingCount:{X:0,O:0},training:{X:{inputs:[],labels:[]},O:{inputs:[],labels:[]}},agents:{X:[],O:[]},victories:{X:0,O:0},victoriesStatus:{X:!1,O:!1},fieldSize:9,step:1,trainingGames:1,timer:0,timeTraining:300,isDuel:!1,duel:{step:1,field:["","","","","","","","",""]},duelGames:1,AIvsHuman:{isDuel:!1,step:1,victories:{X:0,O:0},rewards:[.1,.1,.1,.1,.1,.1,.1,.1,.1],field:["","","","","","","","",""]}}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=JSON.parse(localStorage.getItem("syntet_TicTacToe_timer")),!n){t.next=17;break}return e.timer=n,e.restoreFromLocalStorage(),t.next=6,Promise.all([w["b"]("localstorage://syntet_TicTacToe_model_X"),w["b"]("localstorage://syntet_TicTacToe_model_O")]);case 6:r=t.sent,a=Object(h["a"])(r,2),i=a[0],s=a[1],localStorage.clear(),i.compile({optimizer:"adam",loss:"meanSquaredError"}),s.compile({optimizer:"adam",loss:"meanSquaredError"}),e.modelX=i,e.modelO=s,t.next=19;break;case 17:e.setupModel({model:e.modelX}),e.setupModel({model:e.modelO});case 19:e.agentsSetting({sign:"X"}),e.agentsSetting({sign:"O"}),e.setTimer(),k&&e.gameLoop();case 23:case"end":return t.stop()}}),t)})))()},methods:{restoreFromLocalStorage:function(){this.trainingCount=JSON.parse(localStorage.getItem("syntet_TicTacToe_trainingCount")),this.victories=JSON.parse(localStorage.getItem("syntet_TicTacToe_victories")),this.trainingGames=JSON.parse(localStorage.getItem("syntet_TicTacToe_trainingGames")),this.duelGames=JSON.parse(localStorage.getItem("syntet_TicTacToe_duelGames")),this.AIvsHuman.victories=JSON.parse(localStorage.getItem("syntet_TicTacToe_AIvsHuman_victories"))},setupModel:function(e){var t=e.model;t.add(w["a"].dense({inputShape:[this.fieldSize+1],activation:"sigmoid",units:128})),t.add(w["a"].dense({activation:"sigmoid",units:this.fieldSize})),t.compile({optimizer:"adam",loss:"meanSquaredError"})},agentsSetting:function(e){var t=e.sign;this.agents[t]=[{sign:t,isAlive:!0,isVictory:!1,rewards:[.1,.1,.1,.1,.1,.1,.1,.1,.1],field:["","","","","","","","",""]}]},setTimer:function(){setTimeout(this.setTimer,1e3),this.timer+=1},gameLoop:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.AIvsHuman.isDuel){t.next=7;break}return e.agentsSetting({sign:"X"}),e.agentsSetting({sign:"O"}),t.next=5,new Promise((function(e){return setTimeout(e,300)}));case 5:return e.gameLoop(),t.abrupt("return");case 7:if(!e.isDuel||!T){t.next=13;break}return t.next=10,e.startDuel();case 10:e.duelGames+=1,t.next=17;break;case 13:return e.isDuel=e.trainingGames%e.fieldSize===0,t.next=16,e.startTraining();case 16:e.trainingGames+=1;case 17:if(!S){t.next=20;break}return t.next=20,new Promise((function(e){return setTimeout(e,300)}));case 20:if(e.timer%e.timeTraining!==0){t.next=25;break}return e.saveInLocalStorage(),t.next=24,e.saveModelsLocal();case 24:window.location.reload();case 25:e.gameLoop();case 26:case"end":return t.stop()}}),t)})))()},saveInLocalStorage:function(){localStorage.setItem("syntet_TicTacToe_timer",JSON.stringify(this.timer)),localStorage.setItem("syntet_TicTacToe_trainingCount",JSON.stringify(this.trainingCount)),localStorage.setItem("syntet_TicTacToe_victories",JSON.stringify(this.victories)),localStorage.setItem("syntet_TicTacToe_trainingGames",JSON.stringify(this.trainingGames)),localStorage.setItem("syntet_TicTacToe_duelGames",JSON.stringify(this.duelGames)),localStorage.setItem("syntet_TicTacToe_AIvsHuman_victories",JSON.stringify(this.AIvsHuman.victories))},saveModelsLocal:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.modelX.save("localstorage://syntet_TicTacToe_model_X");case 2:return t.next=4,e.modelO.save("localstorage://syntet_TicTacToe_model_O");case 4:case"end":return t.stop()}}),t)})))()},startDuel:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=2,t.next=3,new Promise((function(t){var r=e.agents.X.filter((function(e){var t=e.isAlive;return t})),a=r.length;a>0?r.forEach(function(){var n=Object(b["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.modelPredict({model:e.modelX,agent:r});case 2:a-=1,0===a&&t();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()):(n-=1,t())}));case 3:return t.next=5,new Promise((function(t){var r=e.agents.O.filter((function(e){var t=e.isAlive;return t})),a=r.length;a>0?r.forEach(function(){var n=Object(b["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.modelPredict({model:e.modelO,agent:r});case 2:a-=1,0===a&&t();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()):(n-=1,t())}));case 5:if(2===n&&(e.duel.step=e.fieldSize),e.duel.step!==e.fieldSize){t.next=13;break}return t.next=9,Promise.all([e.modelFit({model:e.modelX,sign:"X"}),e.modelFit({model:e.modelO,sign:"O"})]);case 9:e.isDuel=!1,e.duel={step:1,field:["","","","","","","","",""]},t.next=14;break;case 13:e.duel.step+=1;case 14:case"end":return t.stop()}}),t)})))()},startTraining:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.agents.X.filter((function(e){var t=e.isAlive;return t})).map((function(t){return e.modelPredict({model:e.modelX,agent:t})})).concat(e.agents.O.filter((function(e){var t=e.isAlive;return t})).map((function(t){return e.modelPredict({model:e.modelO,agent:t})}))),0!==n.length){t.next=5;break}e.step=e.fieldSize,t.next=7;break;case 5:return t.next=7,Promise.all(n);case 7:if(e.step!==e.fieldSize){t.next=13;break}return t.next=10,Promise.all([e.modelFit({model:e.modelX,sign:"X"}),e.modelFit({model:e.modelO,sign:"O"})]);case 10:e.step=1,t.next=14;break;case 13:e.step+=1;case 14:case"end":return t.stop()}}),t)})))()},modelPredict:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s,o,c,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.model,a=e.agent,i=t.isDuel?t.duel.step:t.step,s=t.isDuel?t.duel.field:a.field,o=t.getStepInput(i),n.next=6,r.predict(w["d"]([a.rewards.concat([o])])).data();case 6:c=n.sent,u=c.indexOf(Math.max.apply(Math,Object(g["a"])(c))),0===s[u].length?(l=a.sign,s.splice(u,1,l),a.rewards=t.recalculateRewards({rewards:a.rewards,field:s}),d=t.determineWinner({field:s,sign:l}),d&&(a.isAlive=!1,a.isVictory=!0,a.rewards[u]="X"===l?C:1,t.saveTraining({type:"winner",field:s,agent:a,stepInput:o}),t.isDuel&&(t.victories[l]+=1,t.victoriesStatus[l]=!0))):(a.isAlive=!1,a.rewards=t.recalculateRewards({rewards:a.rewards,field:s}),t.saveTraining({type:"loss",field:s,agent:a,stepInput:o}));case 9:case"end":return n.stop()}}),n)})))()},recalculateRewards:function(e){var t=e.rewards,n=e.field;return t.map((function(e,t){var r=e;return 0===n[t].length?r+=.1:r=-1,r}))},getStepInput:function(e){return 1-e/this.fieldSize},determineWinner:function(e){var t=e.field,n=e.sign;return r.horizontalGroup({field:t,sign:n})||r.verticalGroup({field:t,sign:n,start:0,step:2})||r.obliquelyGroup({field:t,sign:n})},saveTraining:function(e){var t=this,n=e.type,r=e.field,a=e.agent,i=e.stepInput,s=a.sign,o=a.rewards,c=r.map((function(e){return t.trafficLights({type:n,sign:s,cell:e})})).concat([i]);this.training[s].inputs.push(c),this.training[s].labels.push(o),this.trainingCount[s]+=1},trafficLights:function(e){var t=e.type,n=e.sign,r=e.cell,a=.1;return"winner"===t?a=n===r?"X"===n?C:1:0===r.length?0:-1:"step"===t||"loss"===t&&(a=n===r?-1:0===r.length?.5:-1),a},modelFit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.model,a=e.sign,!(t.trainingCount[a]>0)){n.next=11;break}if(0!==t.training[a].inputs.length&&0!==t.training[a].labels.length){n.next=4;break}return n.abrupt("return");case 4:return t.trainingCount[a]=0,t.victoriesStatus[a]=!1,n.next=8,r.fit(w["d"](t.training[a].inputs),w["d"](t.training[a].labels));case 8:t.trainingReset(a),t.agentsSetting({sign:"X"}),t.agentsSetting({sign:"O"});case 11:case"end":return n.stop()}}),n)})))()},trainingReset:function(e){this.training[e].inputs=[],this.training[e].labels=[]},setHumanSign:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.AIvsHuman.isDuel||(t.AIvsHuman.isDuel=!0,t.trainingReset("X"),t.trainingReset("O")),n.next=3,t.humanSignXO({sign:"X",cIndex:e});case 3:if(r=n.sent,a=r.isPass,!a){n.next=8;break}return n.next=8,t.humanSignXO({sign:"O",cIndex:-1});case 8:case"end":return n.stop()}}),n)})))()},humanSignXO:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s,o,c,u,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.sign,a=e.cIndex,i=t.AIvsHuman.field,t.AIvsHuman.step+=1,s=t.getStepInput(t.AIvsHuman.step),o=a,"O"!==r){n.next=10;break}return n.next=8,t.modelO.predict(w["d"]([t.AIvsHuman.rewards.concat([s])])).data();case 8:c=n.sent,o=c.indexOf(Math.max.apply(Math,Object(g["a"])(c)));case 10:if(0!==i[o].length){n.next=23;break}if(i.splice(o,1,r),t.AIvsHuman.rewards=t.recalculateRewards({rewards:t.AIvsHuman.rewards,field:i}),u=t.determineWinner({field:i,sign:r}),!u){n.next=21;break}return l={sign:r,rewards:t.AIvsHuman.rewards},t.saveTraining({type:"winner",field:i,agent:l,stepInput:s}),t.AIvsHuman.victories[r]+=1,n.next=20,t.AIvsHumanFit();case 20:return n.abrupt("return",{isPass:!1});case 21:n.next=30;break;case 23:return t.AIvsHuman.rewards=t.recalculateRewards({rewards:t.AIvsHuman.rewards,field:i}),d={sign:r,rewards:t.AIvsHuman.rewards},t.saveTraining({type:"loss",field:i,agent:d,stepInput:s}),t.AIvsHuman.victories[r]-=1,n.next=29,t.AIvsHumanFit();case 29:return n.abrupt("return",{isPass:!1});case 30:return n.abrupt("return",{isPass:!0});case 31:case"end":return n.stop()}}),n)})))()},AIvsHumanFit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.modelFit({model:e.modelX,sign:"X"}),e.modelFit({model:e.modelO,sign:"O"})]);case 2:e.AIvsHumanReset();case 3:case"end":return t.stop()}}),t)})))()},AIvsHumanReset:function(){this.AIvsHuman=Object(v["a"])(Object(v["a"])({},this.AIvsHuman),{},{isDuel:!1,step:1,rewards:[.1,.1,.1,.1,.1,.1,.1,.1,.1],field:["","","","","","","","",""]})},saveModelsOnPC:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([e.modelX.save("downloads://syntet_TicTacToe_model_X"),e.modelO.save("downloads://syntet_TicTacToe_model_O")]);case 3:alert("Не забудь изменить путь в models.json:paths при выгрузке на GitHub"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error("saveModels",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},localStorageClear:function(){localStorage.clear()},restoreModelsFromGitHub:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="./models/syntet_TicTacToe_model_X.json",r="./models/syntet_TicTacToe_model_O.json",t.next=4,Promise.all([w["b"](n),w["b"](r)]);case 4:a=t.sent,i=Object(h["a"])(a,2),s=i[0],o=i[1],s.compile({optimizer:"adam",loss:"meanSquaredError"}),o.compile({optimizer:"adam",loss:"meanSquaredError"}),e.modelX=s,e.modelO=o;case 12:case"end":return t.stop()}}),t)})))()}}},I=R,j=(n("573b"),Object(u["a"])(I,f,p,!1,null,"2efda70c",null)),A=j.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"stat"},[e._v(" Живых: "+e._s(e.alives)+" | Поколений: "+e._s(e.generation)+" | Победы: "+e._s(e.victories)+" ")]),n("div",{ref:"container",staticClass:"container",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.handleJumpTop(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&2!==t.button?null:e.handleJumpRight(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.handleJumpBottom(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.handleJumpLeft(t)}]}},[n("div",{staticClass:"field cells"},e._l(e.field,(function(t,r){return n("div",{key:r,class:["cell",{available:0!==t}]},[1===t?n("div",{staticClass:"starting-checkpoint"},[e._v(" 🥾 ")]):e._e(),t===e.investigatedMaximumCellValue||e.investigatedMaximumCellValue===e.maximumCellValue?n("div",{staticClass:"maximum-cell-value-checkpoint"},[e._v(" 🤘 ")]):e._e(),t===e.maximumCellValue?n("div",{staticClass:"finishing-checkpoint"},[e._v(" 🧠 ")]):e._e()])})),0),e.isDisplayingActors?n("div",{staticClass:"field actors"},e._l(e.actors,(function(t){return n("div",{key:t.id,style:{gridRow:t.y,gridColumn:t.x}},[n("div",{ref:"actors_"+t.id,refInFor:!0,staticClass:"actor"},[n("div",[e._v("👣️")])])])})),0):e._e()])])},X=[],M=!0,H=!0,L=500,z=5,V=L/z,D=0,F={name:"Square",data:function(){return{model:w["c"](),training:{inputs:[],labels:[]},learning:{inputs:[],labels:[]},generation:0,victories:0,isDisplayingActors:H,actors:[],alives:L,investigatedMaximumCellValue:1,field:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,45,44,43,0,0,2,0,0,0,0,0,0,0,0,0,42,0,0,3,0,0,8,9,10,11,0,0,0,41,0,0,4,5,6,7,0,0,12,0,0,0,40,0,0,0,0,0,0,0,0,13,0,0,0,39,0,0,0,0,0,0,0,15,14,0,0,0,38,0,0,0,0,0,0,0,16,0,0,0,0,37,0,0,0,21,20,19,18,17,0,0,0,0,36,0,0,0,22,0,0,0,0,0,0,33,34,35,0,0,0,23,0,0,0,0,0,0,32,0,0,0,0,0,24,25,26,27,28,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],fieldSize:-1,maximumCellValue:-1}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setupModel(),e.fieldSetting(),t.next=4,e.actorsSetting();case 4:if(!M){t.next=7;break}return t.next=7,e.modelPredict();case 7:case"end":return t.stop()}}),t)})))()},methods:{setupModel:function(){this.model.add(w["a"].dense({inputShape:[3],activation:"sigmoid",units:256})),this.model.add(w["a"].dropout({rate:.1})),this.model.add(w["a"].dense({activation:"sigmoid",units:128})),this.model.add(w["a"].dense({activation:"sigmoid",units:4})),this.model.compile({optimizer:w["e"].adam(.01),loss:"meanSquaredError",metrics:["accuracy"]})},fieldSetting:function(){this.fieldSize=Math.sqrt(this.field.length),this.maximumCellValue=Math.max.apply(Math,Object(g["a"])(this.field)),this.$refs.container.style.setProperty("--quantity-rows",this.fieldSize),this.$refs.container.style.setProperty("--quantity-columns",this.fieldSize)},actorsSetting:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=0;n<L;n++)e.actors.push({id:n,style:void 0,x:2,y:2,cellValue:1});if(!H){t.next=5;break}return t.next=4,e.$nextTick();case 4:e.actors.forEach((function(t){var n=Object(h["a"])(e.$refs["actors_".concat(t.id)],1),r=n[0].style;t.style=r}));case 5:case"end":return t.stop()}}),t)})))()},actorsReset:function(){for(var e=0;e<L;e++)this.actors[e].x=2,this.actors[e].y=2,this.actors[e].cellValue=1;this.alives=L},modelPredict:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.actors.map(function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0===n.cellValue){t.next=14;break}if(D+=1,D!==V){t.next=7;break}r=e.getRandomPredict(),D=0,t.next=10;break;case 7:return t.next=9,e.model.predict(w["d"]([[n.x/e.fieldSize,n.y/e.fieldSize,n.cellValue/e.maximumCellValue]])).data();case 9:r=t.sent;case 10:return a=e.getDirectionStep(r),e[a](n),t.next=14,e.availabilityCheck(n);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:return t.next=4,e.modelPredict();case 4:case"end":return t.stop()}}),t)})))()},getRandomPredict:function(){return[Math.random(),Math.random(),Math.random(),Math.random()]},getDirectionStep:function(e){var t=Object(h["a"])(e,4),n=t[0],r=t[1],a=t[2],i=t[3],s=n,o="jumpTop";return r>s&&(s=r,o="jumpRight"),a>s&&(s=a,o="jumpBottom"),i>s&&(o="jumpLeft"),o},jumpTop:function(e){e.y-=1},jumpRight:function(e){e.x+=1},jumpBottom:function(e){e.y+=1},jumpLeft:function(e){e.x-=1},availabilityCheck:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.y-1,a=e.x-1,i=t.field[r*t.fieldSize+a],!(i>e.cellValue)){n.next=13;break}if(e.cellValue=i,i>t.investigatedMaximumCellValue&&(t.investigatedMaximumCellValue=i),i!==t.maximumCellValue){n.next=11;break}return t.victories+=1,n.next=10,t.actorsReset();case 10:return n.abrupt("return");case 11:n.next=15;break;case 13:e.cellValue=0,t.alives-=1;case 15:if(t.saveTraining({actor:e,label:t.getAntennaCellValues({normalX:a,normalY:r})}),0!==t.alives){n.next=19;break}return n.next=19,t.modelFit();case 19:case"end":return n.stop()}}),n)})))()},getAntennaCellValues:function(e){var t=e.normalX,n=e.normalY,r=this.field[(n-1)*this.fieldSize+t]||0,a=this.field[n*this.fieldSize+(t+1)]||0,i=this.field[(n+1)*this.fieldSize+t]||0,s=this.field[n*this.fieldSize+(t-1)]||0;return[r/this.maximumCellValue,a/this.maximumCellValue,i/this.maximumCellValue,s/this.maximumCellValue]},saveTraining:function(e){var t=e.actor,n=e.label;this.training.inputs.push([t.x/this.fieldSize,t.y/this.fieldSize,t.cellValue/this.maximumCellValue]),this.training.labels.push(n)},modelFit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s,o,c,u,l,d,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getBestMoves(),r=n.firstInput,a=n.firstLabel,i=n.secondInput,s=n.secondLabel,o=n.thirdInput,c=n.thirdLabel,u=n.fourInput,l=n.fourLabel,d=n.fiveInput,m=n.fiveLabel,e.learning.inputs.push(r,i,o,u,d),e.learning.labels.push(a,s,c,l,m),t.next=5,e.model.fit(w["d"](e.learning.inputs),w["d"](e.learning.labels));case 5:return e.generation+=1,t.next=8,e.actorsReset();case 8:case"end":return t.stop()}}),t)})))()},getBestMoves:function(){var e=this.training,t=e.inputs,n=e.labels;this.training={inputs:[],labels:[]};var r=-1,a=-1,i=-1,s=-1,o=-1,c=-1,u=-1,l=-1,d=-1,m=-1;return t.forEach((function(e,t){var n=Object(h["a"])(e,3),f=n[2];switch(!0){case f>o:r=a,a=i,i=s,s=o,o=f,c=u,u=l,l=d,d=m,m=t;break;case f>s:r=a,a=i,i=s,s=f,c=u,u=l,l=d,d=t;break;case f>i:r=a,a=i,i=f,c=u,u=l,l=t;break;case f>a:r=a,a=f,c=u,u=t;break;case f>r:r=f,c=t;break;default:}})),{firstInput:t[m],firstLabel:n[m],secondInput:t[d],secondLabel:n[d],thirdInput:t[l],thirdLabel:n[l],fourInput:t[u],fourLabel:n[u],fiveInput:t[c],fiveLabel:n[c]}},handleJumpTop:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(e.actors,1),r=n[0],e.jumpTop(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpRight:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(e.actors,1),r=n[0],e.jumpRight(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpBottom:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(e.actors,1),r=n[0],e.jumpBottom(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()},handleJumpLeft:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(h["a"])(e.actors,1),r=n[0],e.jumpLeft(r),t.next=4,e.availabilityCheck(r);case 4:case"end":return t.stop()}}),t)})))()}}},G=F,J=(n("60e0"),Object(u["a"])(G,P,X,!1,null,"d443a224",null)),E=J.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"root",staticClass:"Bird",attrs:{tabindex:"0"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.agentUp(e.agents[0])}}},[n("div",{staticClass:"field"},[e._l(e.agents,(function(e){return n("div",{key:e.id,class:["agent",{intersected:e.isIntersected}],style:{transform:"translate("+e.x+"rem, "+-e.y+"rem)"}})})),e._l(e.walls,(function(e){return n("div",{key:e.id,staticClass:"wall",style:{transform:"translate("+e.x+"rem, "+-e.y+"rem)"}})}))],2)])},N=[],$=n("22b5"),W=18,B=W-2,U={name:"Bird",data:function(){return{model:w["c"](),training:{inputs:[],labels:[]},learning:{inputs:[],labels:[]},agents:[{id:"agents_".concat(1),x:0,y:0,width:2,height:2,distance:B,isIntersected:!1,heightUp:{y:18},heightDown:{y:0},flightTime:300,tween:{stop:function(){}}}],walls:[{id:"walls_".concat(1),x:20,y:0,width:2,height:4,movementTime:2e3,from:{x:20},to:{x:-2},tween:{stop:function(){}}},{id:"walls_".concat(2),x:30,y:16,width:2,height:4,movementTime:3e3,from:{x:30},to:{x:-2}}]}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.setupModel(),e.agentSetting(),O=requestAnimationFrame(e.gameLoop),t.next=5,e.modelPredict();case 5:e.restartWallsMovement();case 6:case"end":return t.stop()}}),t)})))()},destroyed:function(){cancelAnimationFrame(O)},methods:{setupModel:function(){this.model.add(w["a"].dense({inputShape:[2],activation:"sigmoid",units:64})),this.model.add(w["a"].dense({activation:"sigmoid",units:1})),this.model.compile({optimizer:w["e"].adamax(.01),loss:"meanSquaredError",metrics:["accuracy"]})},agentSetting:function(){var e=Object(h["a"])(this.agents,1),t=e[0],n=Object(h["a"])(this.walls,1),r=n[0];this.$refs.root.style.setProperty("--agent-width","".concat(t.width,"rem")),this.$refs.root.style.setProperty("--agent-height","".concat(t.height,"rem")),this.$refs.root.style.setProperty("--wall-width","".concat(r.width,"rem")),this.$refs.root.style.setProperty("--wall-height","".concat(r.height,"rem"))},gameLoop:function(e){O=requestAnimationFrame(this.gameLoop),$["a"].update(e)},modelPredict:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.agents.map(e.predict));case 2:if(n=e.agents.filter((function(e){return!e.isIntersected})).length,0!==n){t.next=9;break}return e.agentsReset(),e.stopWallsMovement(),t.next=8,e.modelFit();case 8:e.restartWallsMovement();case 9:return t.next=11,new Promise((function(e){return setTimeout(e,500)}));case 11:e.modelPredict();case 12:case"end":return t.stop()}}),t)})))()},predict:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isIntersected){n.next=8;break}return n.next=3,t.model.predict(w["d"]([[e.y/W,e.distance/W]])).data();case 3:r=n.sent,a=Object(h["a"])(r,1),i=a[0],console.log("prediction",i),i>.5&&t.agentUp(e);case 8:case"end":return n.stop()}}),n)})))()},agentUp:function(e){var t=this;e.tween.stop(),e.tween=new $["a"].Tween(e).to(e.heightUp,e.flightTime).easing($["a"].Easing.Quadratic.Out).onComplete((function(){return t.agentDown(e)})).start()},agentDown:function(e){var t=this;e.tween=new $["a"].Tween(e).to(e.heightDown,e.flightTime).easing($["a"].Easing.Quadratic.In).onComplete((function(){return t.agentFell(e)})).start()},agentFell:function(e){console.log("agentFell",e)},agentsReset:function(){var e=Object(h["a"])(this.agents,1),t=e[0];t.tween.stop(),t.y=0,t.distance=B,t.isIntersected=!1},stopWallsMovement:function(){this.walls.forEach((function(e){return e.tween.stop()}))},restartWallsMovement:function(){this.walls.forEach(this.rerunWallMovement)},rerunWallMovement:function(e){var t=this;e.x=e.from.x,e.tween=new $["a"].Tween(e).to(e.to,e.movementTime).onUpdate((function(){return t.hasWallIntersectionWithAgent(e)})).onComplete((function(){return t.rerunWallMovement(e)})).start()},hasWallIntersectionWithAgent:function(e){var t=Object(h["a"])(this.agents,1),n=t[0];if(!n.isIntersected){var r=n.y+n.height>e.y,a=n.x+n.width>e.x,i=n.y<e.y+e.height;if(e.x-n.width>=0){var s=e.x-n.width;s<n.distance&&(n.distance=s)}r&&a&&i?(n.isIntersected=!0,this.saveLearning({input:[n.y/W,n.distance/W],label:[0]})):this.saveLearning({input:[n.y/W,n.distance/W],label:[1]})}},saveLearning:function(e){var t=e.input,n=e.label;this.learning.inputs.push(t),this.learning.labels.push(n)},modelFit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.model.fit(w["d"](e.learning.inputs),w["d"](e.learning.labels));case 2:case"end":return t.stop()}}),t)})))()}}},Q=U,Y=(n("31e3"),Object(u["a"])(Q,q,N,!1,null,"c5ebb58e",null)),K=Y.exports;a["a"].use(m["a"]);var Z=[{path:"/",name:"App",meta:{isReload:!1},component:d,redirect:{name:"TicTacToe"}},{path:"/TicTacToe",name:"TicTacToe",meta:{isReload:!0},component:A},{path:"/Square",name:"Square",meta:{isReload:!0},component:E},{path:"/Bird",name:"Bird",meta:{isReload:!0},component:K}],ee=new m["a"]({routes:Z}),te=ee;a["a"].config.productionTip=!1,a["a"].config.silent=!0,new a["a"]({name:"App",router:te,render:function(e){return e(d)}}).$mount("#app")},"573b":function(e,t,n){"use strict";var r=n("b5c2"),a=n.n(r);a.a},"60e0":function(e,t,n){"use strict";var r=n("db6f"),a=n.n(r);a.a},b5c2:function(e,t,n){},db6f:function(e,t,n){},f1ae:function(e,t,n){},ffca:function(e,t,n){}});
//# sourceMappingURL=app.01b2ca97.js.map
(function(t){function e(e){for(var c,o,s=e[0],r=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(c=!1)}c&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},a={app:0},i=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1bac":function(t,e,n){"use strict";n("ae0d")},"1e20":function(t,e,n){"use strict";n("5f8d")},"49d2":function(t,e,n){"use strict";n("fb59")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e){var n=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(n)}n("9a15");const i={};i.render=a;var o=i,s=n("6c02"),r=Object(c["G"])("data-v-b2630506");Object(c["s"])("data-v-b2630506");var l={class:"container"},u={class:"row"},d={class:"col-12 col-md-10 col-lg-5 task-container"};Object(c["q"])();var f=r((function(t,e,n,a,i,o){var s=Object(c["w"])("SideBar"),r=Object(c["w"])("TaskList");return Object(c["p"])(),Object(c["d"])("div",l,[Object(c["g"])("div",null,[Object(c["g"])(s,{onFilterSelected:o.applyFilter},null,8,["onFilterSelected"])]),Object(c["g"])("div",u,[Object(c["g"])("div",d,[Object(c["g"])(r,{filterValue:i.filterName},null,8,["filterValue"])])])])})),b=(n("b0c0"),n("f08b")),p=n.n(b),h=Object(c["G"])("data-v-1785b6d2");Object(c["s"])("data-v-1785b6d2");var j={class:"task-header"},O={class:"task-input"},g={class:"task-options"},v={class:"task-catagory"},m={class:"task-duedate"},y={class:"task-list"},k={class:"task-item-left"},w={class:"task-item-right"},D=Object(c["g"])("img",{src:p.a},null,-1);Object(c["q"])();var C=h((function(t,e,n,a,i,o){var s=Object(c["w"])("ColorPicker"),r=Object(c["w"])("DateInput");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",j,[Object(c["g"])("div",O,[Object(c["E"])(Object(c["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.taskName=t}),placeholder:"Write Something",onKeypress:e[2]||(e[2]=Object(c["F"])((function(t){return o.addTask()}),["enter"]))},null,544),[[c["C"],i.taskName]]),Object(c["g"])("div",{class:"task-add-btn",onClick:e[3]||(e[3]=function(t){return o.addTask()})},"+")]),Object(c["g"])("div",g,[Object(c["g"])("div",v,[Object(c["g"])(s,{radioValue:i.selected,"onUpdate:radioValue":e[4]||(e[4]=function(t){return i.selected=t})},null,8,["radioValue"])]),Object(c["g"])("div",m,[Object(c["g"])(r,{modelValue:i.dateValue,"onUpdate:modelValue":e[5]||(e[5]=function(t){return i.dateValue=t})},null,8,["modelValue"])])])]),Object(c["g"])("div",y,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.filterList,(function(t){return Object(c["p"])(),Object(c["d"])("div",{class:"task-item",key:t.id},[Object(c["g"])("div",k,[Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.isDone=e},id:t.id,onClick:function(e){return o.markDone(t)}},null,8,["onUpdate:modelValue","id","onClick"]),[[c["A"],t.isDone]]),Object(c["g"])("label",{for:t.id,class:["task-item-name text-wrap",{isDone:t.isDone}]},[Object(c["g"])("span",{for:t.category,style:{borderColor:"".concat(o.indexColor(t.category))}},null,12,["for"]),Object(c["f"])(Object(c["y"])(t.name),1)],10,["for"])]),Object(c["g"])("div",w,[Object(c["g"])("div",{class:["remove",{showRemove:t.isDone}],onClick:function(e){return o.removeTask(t.id)}},[D],10,["onClick"])])])})),128))])],64)})),S=(n("498a"),n("a434"),n("7db0"),n("4de4"),n("caad"),n("2532"),n("bc3a")),V=n.n(S),M={key:0,class:"dp-container"},L={key:0,class:"dp-instant-container"},N={class:"dp-month-header"},T={class:"dp-month-display"},_={class:"dp-weeks-container"},F={class:"dp-footer"};function P(t,e,n,a,i,o){return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["E"])(Object(c["g"])("input",{class:"dp-input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.dateValue=t}),onClick:e[2]||(e[2]=function(t){i.showModal=!i.showModal}),placeholder:"Due Date",readonly:""},null,512),[[c["C"],o.dateValue]]),i.showModal?(Object(c["p"])(),Object(c["d"])("div",M,[n.instantSelector?(Object(c["p"])(),Object(c["d"])("div",L,[Object(c["g"])("div",{class:"dp-instant-btn",onClick:e[3]||(e[3]=function(t){return o.instantSelect(0)})},"Today"),Object(c["g"])("div",{class:"dp-instant-btn",onClick:e[4]||(e[4]=function(t){return o.instantSelect(1)})},"Tomorrow"),Object(c["g"])("div",{class:"dp-instant-btn",onClick:e[5]||(e[5]=function(t){return o.instantSelect(2)})},"+2 Days")])):Object(c["e"])("",!0),Object(c["g"])("div",N,[Object(c["g"])("div",{class:"dp-change-month",onClick:e[6]||(e[6]=function(t){return o.changeMonth(-1)})},"❮"),Object(c["g"])("div",T,Object(c["y"])(i.monthName[i.selected.getMonth()])+" "+Object(c["y"])(i.selected.getFullYear()),1),Object(c["g"])("div",{class:"dp-change-month",onClick:e[7]||(e[7]=function(t){return o.changeMonth(1)})},"❯")]),Object(c["g"])("div",_,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.weekName,(function(t){return Object(c["p"])(),Object(c["d"])("div",{class:"dp-weekday",key:t},Object(c["y"])(t),1)})),128)),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.prevDays,(function(t){return Object(c["p"])(),Object(c["d"])("div",{key:t},Object(c["y"])(t),1)})),128)),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.calender,(function(t,e){return Object(c["p"])(),Object(c["d"])("div",{class:["dp-day",{active:t.isActive}],key:e,onClick:function(t){return o.selectDate(e)}},Object(c["y"])(t.num),11,["onClick"])})),128))]),Object(c["g"])("div",F,[Object(c["g"])("div",{class:"dp-done_button",onClick:e[8]||(e[8]=function(t){return i.showModal=!1})},"Done")])])):Object(c["e"])("",!0)])}n("159b");var x={props:{modelValue:String,instantSelector:Boolean},emits:["update:modelValue"],data:function(){return{today:new Date,selected:"",weekName:["Su","Mo","Tu","We","Th","Fr","Sa"],monthName:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],calender:[],prevDays:[],showModal:!1}},created:function(){this.instantSelect(0)},methods:{renderCalender:function(){this.prevDays=[],this.calender=[];for(var t=new Date(this.selected.getFullYear(),this.selected.getMonth(),1).getDay(),e=new Date(this.selected.getFullYear(),this.selected.getMonth()+1,0).getDate(),n=1;n<=t;n++)this.prevDays.push(null);for(var c=1;c<=e;c++)this.calender.push({num:c})},selectDate:function(t){this.calender.forEach((function(t){return t.isActive=!1})),this.dateValue=new Date(this.selected.getFullYear(),this.selected.getMonth(),t+1).toLocaleDateString(),this.calender[t].isActive=!0},changeMonth:function(t){this.selected=new Date(this.selected.getFullYear(),this.selected.getMonth()+t),this.renderCalender()},instantSelect:function(t){this.selected=this.today,this.renderCalender(),this.selectDate(this.today.getDate()-1+t)}},computed:{dateValue:{get:function(){return this.modelValue},set:function(t){this.$emit("update:modelValue",t)}}}};n("49d2");x.render=P;var J=x,E=Object(c["g"])("option",{value:"",disabled:""},"Category",-1);function W(t,e,n,a,i,o){return Object(c["E"])((Object(c["p"])(),Object(c["d"])("select",{class:"cp-container","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.selected=t})},[E,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.types,(function(t){return Object(c["p"])(),Object(c["d"])("option",{key:t.typeName,value:t.typeName},Object(c["y"])(t.typeName),9,["value"])})),128))],512)),[[c["B"],o.selected]])}var U=V.a.create({baseURL:"http://localhost:3000/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),A={getTasks:function(){return U.get("/taskList")},getCategory:function(){return U.get("/types")}},I={props:{radioValue:{type:String}},created:function(){var t=this;A.getCategory().then((function(e){t.types=e.data})).catch((function(t){console.log(t)}))},data:function(){return{types:[]}},methods:{setCat:function(){}},computed:{selected:{get:function(){return this.radioValue},set:function(t){this.$emit("update:radioValue",t)}}}};n("9beb");I.render=W;var B=I,Y={components:{DateInput:J,ColorPicker:B},props:{filterValue:String},data:function(){return{taskName:"",taskList:null,dateValue:"",selected:"",filterList:[],types:[{typeName:"Business",color:"#6FCF97"},{typeName:"Personal",color:"#524EEE"},{typeName:"Important",color:"#D06969"}],isFiltered:!1}},created:function(){this.getTask()},watch:{filterValue:{deep:!0,handler:function(t){this.filterCat(t)}}},methods:{getTask:function(){var t=this;V.a.get("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/taskList/").then((function(e){alert("my-json-server僅支援唯讀無法寫入或更改資料庫"),t.taskList=e.data,t.filterList=t.taskList})).catch((function(t){return console.log(t)}))},addTask:function(){var t=this;if(0!==this.taskName.trim().length){var e=Math.floor(Date.now()),n={id:e,name:this.taskName,category:this.selected,duedate:this.dateValue,isDone:!1};V.a.post("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/taskList",n).then((function(e){t.taskList.push(e.data)})).catch((function(t){console.log(t)})),this.taskName=""}},removeTask:function(t){var e=this;V.a.delete("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/taskList/".concat(t)).then((function(){e.taskList.splice(t,1)})).then(this.getTask()).catch((function(t){console.log(t)}))},markDone:function(t){!1===t.isDone?V.a.patch("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/taskList/"+t.id,{isDone:!0}).then((function(){})).catch((function(t){console.log(t)})):V.a.patch("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/taskList/"+t.id,{isDone:!1}).then((function(){})).catch((function(t){console.log(t)}))},indexColor:function(t){if(!t)return"#4E2ECF";var e=this.types.find((function(e){return e.typeName===t})).color;return e},filterCat:function(t){this.filterList=this.taskList;var e=[];e=t?this.filterList.filter((function(e){return e.category.includes(t)})):this.filterList,this.filterList=e}}};n("1bac");Y.render=C,Y.__scopeId="data-v-1785b6d2";var q=Y,G=n("c8fa"),$=n.n(G),R=n("884a"),K=n.n(R),z=Object(c["G"])("data-v-bf579e40");Object(c["s"])("data-v-bf579e40");var H=Object(c["g"])("img",{src:$.a},null,-1),Q={key:0,class:"sidebar"},X={class:"sb_catlist"},Z=Object(c["g"])("li",{class:"sb_span"},[Object(c["g"])("img",{src:K.a}),Object(c["f"])(" Category")],-1),tt=Object(c["g"])("li",{class:"sb_addCat"},"+ add category",-1);Object(c["q"])();var et=z((function(t,e,n,a,i,o){return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])("div",{class:"menu_toggle",onClick:e[1]||(e[1]=function(t){return i.showMenu=!i.showMenu})},[H]),i.showMenu?(Object(c["p"])(),Object(c["d"])("div",Q,[Object(c["g"])("ul",X,[Object(c["g"])("li",{class:"sb_main",onClick:e[2]||(e[2]=function(t){return o.filterSelected()})},"Overview"),Z,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(i.types,(function(t){return Object(c["p"])(),Object(c["d"])("li",{class:"sb_catlink",key:t.typename,onClick:function(e){return o.filterSelected(t.typeName)}},[Object(c["g"])("span",{class:"sb_colortag",style:{backgroundColor:"".concat(t.color)}},null,4),Object(c["f"])(Object(c["y"])(t.typeName),1)],8,["onClick"])})),128)),tt])])):Object(c["e"])("",!0)])})),nt={emits:["filterSelected"],data:function(){return{types:[],showMenu:!1,winWidth:window.innerWidth}},methods:{getTask:function(){var t=this;V.a.get("https://my-json-server.typicode.com/titantsai/JS-Daily-Project/types/").then((function(e){t.types=e.data})).catch((function(t){return console.log(t)}))},filterSelected:function(t){this.$emit("filterSelected",t)},getWidth:function(){this.winWidth<=768?this.showMenu=!1:this.showMenu=!0}},created:function(){this.getTask(),this.getWidth()},watch:{winWidth:function(t){this.winWidth=t,this.getWidth()}}};n("e7d1");nt.render=et,nt.__scopeId="data-v-bf579e40";var ct=nt,at={data:function(){return{filterName:""}},components:{SideBar:ct,TaskList:q},methods:{applyFilter:function(t){this.filterName=t}}};n("1e20");at.render=f,at.__scopeId="data-v-b2630506";var it=at,ot=[{path:"/",name:"Task Manager",component:it}],st=Object(s["a"])({history:Object(s["b"])(),routes:ot}),rt=st,lt=n("5502"),ut=Object(lt["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(o).use(ut).use(rt).mount("#app")},"5f8d":function(t,e,n){},"6cd6":function(t,e,n){},"884a":function(t,e,n){t.exports=n.p+"img/sort.fa0ff07a.svg"},"9a15":function(t,e,n){"use strict";n("6cd6")},"9beb":function(t,e,n){"use strict";n("f665")},ae0d:function(t,e,n){},c8fa:function(t,e,n){t.exports=n.p+"img/menu.9287cbfe.svg"},e7d1:function(t,e,n){"use strict";n("f117")},f08b:function(t,e,n){t.exports=n.p+"img/remove.ff44a3c7.svg"},f117:function(t,e,n){},f665:function(t,e,n){},fb59:function(t,e,n){}});
//# sourceMappingURL=app.97a5fd88.js.map
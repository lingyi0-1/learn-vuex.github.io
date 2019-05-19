(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,c=1;c<o.length;c++){var s=o[c];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/learn-vuex.github.io/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),i=o.n(n);i.a},"266b":function(t,e,o){"use strict";var n=o("c0e5"),i=o.n(n);i.a},"36db":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("toolbar"),o("notes-list"),o("editor")],1)},a=[],r=(o("ac6a"),o("456d"),o("cebc")),c=o("2f62"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"toolbar"}},[t._m(0),o("span",{staticClass:"glyphicon glyphicon-plus",on:{click:function(e){return t.newNote()}}}),o("span",{staticClass:"glyphicon glyphicon-star",class:{starred:t.activeNote.favorite},on:{click:function(e){return t.toggleFavorite()}}}),o("span",{staticClass:"glyphicon glyphicon-remove",on:{click:function(e){return t.deleteNoteAndUpdateActiveNote()}}})])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"glyphicon logo"},[n("img",{attrs:{src:o("cf05"),width:"30",height:"30"}})])}],u={name:"Toolbar",computed:Object(r["a"])({},Object(c["e"])(["activeNote"]),Object(c["c"])(["filteredNotes"])),methods:Object(r["a"])({},Object(c["d"])(["newNote","toggleFavorite","deleteNote","updateActiveNote"]),{deleteNoteAndUpdateActiveNote:function(){this.deleteNote(),this.updateActiveNote(this.filteredNotes)}})},f=u,d=(o("c46f"),o("2877")),v=Object(d["a"])(f,s,l,!1,null,"5a3fe2f1",null),p=v.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"notes-list"}},[o("div",{attrs:{id:"list-header"}},[o("h2",[t._v("Notes|heavenru.com")]),o("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"all"===t.show},attrs:{type:"button"},on:{click:function(e){return t.updateShow("all")}}},[t._v("全部笔记")])]),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"favorite"===t.show},attrs:{type:"button"},on:{click:function(e){return t.updateShow("favorite")}}},[t._v("收藏的笔记")])])])]),o("div",{staticClass:"container"},[o("div",{staticClass:"list-group"},t._l(t.filteredNotes,function(e){return o("a",{staticClass:"list-group-item",class:{active:t.activeNote===e},attrs:{href:"#"},on:{click:function(o){return t.updateActiveNote(e)}}},[o("h4",{staticClass:"list-group-item-heading"},[t._v("\n                    "+t._s(e.title.trim().substring(0,30))+"\n                ")])])}),0)])])},b=[],N={name:"NoteList",computed:Object(r["a"])({},Object(c["e"])(["show","activeNote"]),Object(c["c"])(["filteredNotes"])),methods:Object(r["a"])({},Object(c["d"])(["updateShow","updateActiveNote"]))},g=N,m=(o("266b"),Object(d["a"])(g,h,b,!1,null,"0d2803b6",null)),w=m.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"note-editor"}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.activeNote.title,expression:"activeNote.title"}],staticClass:"title form-control",attrs:{type:"text",name:"title",placeholder:"请输入标题",disabled:!t.filteredNotes.length},domProps:{value:t.activeNote.title},on:{input:[function(e){e.target.composing||t.$set(t.activeNote,"title",e.target.value)},function(e){return t.updateNote()}]}}),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeNote.content,expression:"activeNote.content"}],staticClass:"form-control",attrs:{placeholder:"请输入正文",name:"content",disabled:!t.filteredNotes.length},domProps:{value:t.activeNote.content},on:{input:[function(e){e.target.composing||t.$set(t.activeNote,"content",e.target.value)},function(e){return t.updateNote()}]}})])])},O=[],y={name:"Editor",computed:Object(r["a"])({},Object(c["e"])(["activeNote"]),Object(c["c"])(["filteredNotes"])),methods:Object(r["a"])({},Object(c["d"])(["editNote"]),{updateNote:function(){this.editNote(this.activeNote)}})},_=y,C=(o("d8e2"),Object(d["a"])(_,j,O,!1,null,"54ac4c04",null)),x=C.exports,S={name:"home",components:{Toolbar:p,NotesList:w,Editor:x},computed:Object(r["a"])({},Object(c["e"])(["activeNote","notes"])),watch:{activeNote:function(t,e){if(0!==Object.keys(e).length&&0===e.title.trim().substring(0,30).length)for(var o=0;o<this.notes.length;o++)if(this.notes[o].id===e.id){this.notes.splice(o,1);break}}},methods:Object(r["a"])({},Object(c["b"])(["initStore"])),mounted:function(){this.initStore()}},k=S,A=(o("034f"),Object(d["a"])(k,i,a,!1,null,null,null)),P=A.exports;n["a"].use(c["a"]);var $=new c["a"].Store({state:{notes:[],activeNote:{},show:""},getters:{filteredNotes:function(t){return"all"===t.show?t.notes||{}:t.notes.filter(function(t){return t.favorite})||{}}},mutations:{initStore:function(t,e){t.notes=e.notes,t.show=e.show,t.activeNote=e.activeNote},newNote:function(t){t.show="all";var e={id:+new Date,title:"",content:"",favorite:!1};t.notes.push(e),t.activeNote=e},editNote:function(t,e){t.activeNote=e;for(var o=0;o<t.notes.length;o++)if(t.notes[o].id===e.id){t.notes[o]=e;break}},deleteNote:function(t){for(var e=0;e<t.notes.length;e++)if(t.notes[e].id===t.activeNote.id){t.notes.splice(e,1);break}},toggleFavorite:function(t){t.activeNote.favorite=!t.activeNote.favorite},updateShow:function(t,e){t.show=e,t.activeNote="favorite"===e?t.notes.filter(function(t){return t.favorite})[0]||{}:t.notes[0]||{}},updateActiveNote:function(t,e){e instanceof Array?t.activeNote=e[0]||{}:t.activeNote=e}},actions:{initStore:function(t){var e={id:+new Date,title:"我的笔记",content:"第一篇笔记内容",favorite:!1},o={show:"all",notes:[e],activeNote:e};t.commit("initStore",o)}}});n["a"].config.productionTip=!1,new n["a"]({store:$,render:function(t){return t(P)}}).$mount("#app")},"64a9":function(t,e,o){},c0e5:function(t,e,o){},c46f:function(t,e,o){"use strict";var n=o("36db"),i=o.n(n);i.a},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d8e2:function(t,e,o){"use strict";var n=o("e5aa"),i=o.n(n);i.a},e5aa:function(t,e,o){}});
//# sourceMappingURL=app.0603c5b4.js.map
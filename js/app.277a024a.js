(function(){"use strict";var t={883:function(t,e,n){var i=n(5130),o=n(6768),l=n(144),r=n(4232),s={lastName:"Александр",firstName:"Банных",age:40,city:"Екатеринбург",graph:"работа удаленно",work:"Frontend developer",titles:[{title:"Александр Банных",icon:"mdi-account",link:""},{title:"г.Екатеринбург",icon:"mdi-home",link:""},{title:"+79690229280",icon:"mdi-phone",link:"tel:+79690229280"},{title:"whatsApp",icon:"mdi-whatsapp",link:"whatsapp://send?phone=+79690229280"},{title:"telegram",icon:"mdi-send-circle-outline",link:"https://t.me/interind66"},{title:"interind@yandex.ru",icon:"mdi-at",link:"mailto:interind@yandex.ru"}],technologies:{["react16^"]:[{link:"https://ru.react.dev/learn/writing-markup-with-jsx",icon:"xml",text:"Jsx"},{link:"https://ru.react.dev/reference/rules/rules-of-hooks",icon:"hook",text:"Hook"},{link:"https://react-hook-form.com/",icon:"hook",text:"React Hook Form"},{link:"https://reactrouter.com/en/main",icon:"router",text:"React Router"},{link:"https://eslint.org/",icon:"eslint",text:"Eslint"},{link:"https://www.typescriptlang.org/",icon:"eslint",text:"TypeScript"},{link:"https://mui.com/",icon:"codepen",text:"Mui"},{link:"https://ant.design/",icon:"codepen",text:"Antd"},{link:"https://mobx.js.org/README.html",icon:"state-machine",text:"MobX"},{link:"http://redux.js.org/",icon:"state-machine",text:"Redux"}],vue3:[{link:"https://vuejs.org/api/options-state.html",icon:"api",text:"Option API"},{link:"https://vuejs.org/api/composition-api-setup.html#composition-api-setup",icon:"api",text:"Composition API"},{link:"https://v3.router.vuejs.org/ru/",icon:"router",text:"Vue Router"},{link:"https://eslint.org/",icon:"eslint",text:"Eslint"},{link:"https://www.typescriptlang.org/",icon:"eslint",text:"TypeScript"},{link:"https://vuetifyjs.com/en/",icon:"codepen",text:"Vuetify"},{link:"https://vuex.vuejs.org/",icon:"state-machine",text:"VueX"}],javaScript:[{link:"https://www.ecma-international.org/publications-and-standards/standards/",icon:"nodejs",text:"ES6"},{link:"https://jquery.com/",icon:"nodejs",text:"JQuery"},{link:"https://nodejs.org/en",icon:"npm",text:"NodeJS"},{link:"https://json.org/",icon:"code-json",text:"Json"},{link:"https://eslint.org/",icon:"eslint",text:"Eslint"},{link:"https://www.typescriptlang.org/",icon:"eslint",text:"TypeScript"},{link:"http://redux.js.org/",icon:"state-machine",text:"Redux"}],style:[{link:"https://w3.org/TR/CSS/#css",icon:"palette",text:"Css3"},{link:"https://sass-lang.com/",icon:"sass",text:"Sass"}],git:[{link:"https://github.com/interind",icon:"git",text:"GitHub"},{link:"https://about.gitlab.com/",icon:"git",text:"GitLab"}]}},a=n.p+"img/profile.bf7b346f.jpg",c=n(8353);const u=t=>((0,o.Qi)("data-v-12105c9f"),t=t(),(0,o.jt)(),t),p={class:"d-flex flex-column ga-5"},d={class:"item"},f={class:"align-self-stretch",style:{maxWidth:"790px"}},h=u((()=>(0,o.Lk)("h2",null,"Технологии",-1))),v={class:"d-flex flex-wrap ga-5"};var k={__name:"GridHomePage",setup(t){const{width:e}=(0,c._F)(),n=(0,o.EW)((()=>e.value<=720));return(t,e)=>{const i=(0,o.g2)("v-img"),c=(0,o.g2)("v-avatar"),u=(0,o.g2)("v-card"),k=(0,o.g2)("v-list-item"),m=(0,o.g2)("v-list"),g=(0,o.g2)("v-divider"),x=(0,o.g2)("v-list-subheader"),b=(0,o.g2)("v-icon"),y=(0,o.g2)("v-list-item-title");return(0,o.uX)(),(0,o.CE)("section",p,[(0,o.Lk)("div",d,[(0,o.Lk)("h1",{class:(0,r.C4)(["item__title",{"text-h3":n.value,"text-h1":!n.value}])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,l.R1)(s).work.split(" "),((t,e)=>((0,o.uX)(),(0,o.CE)("span",{key:e,class:(0,r.C4)({"text-left":!e,"text-right":e})},(0,r.v_)(t),3)))),128))],2),(0,o.Lk)("div",{class:(0,r.C4)(["d-flex",{"flex-column align-self-stretch":n.value}])},[(0,o.bF)(u,{class:(0,r.C4)(["flex-1-1-100",[{"mr-m-20":n.value}]]),"max-width":n.value?"100%":300,rounded:"0",variant:"text"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{color:"grey",rounded:"0",size:n.value?"100%":300},{default:(0,o.k6)((()=>[(0,o.bF)(i,{src:(0,l.R1)(a),cover:""},null,8,["src"])])),_:1},8,["size"])])),_:1},8,["class","max-width"]),(0,o.bF)(m,{bgColor:"transparent"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,l.R1)(s).titles,(n=>((0,o.uX)(),(0,o.Wv)(k,{key:n.title,prependIcon:n.icon,title:n.title,href:n.link,disabled:!n.link,onClick:e[0]||(e[0]=e=>t.sheet=!1)},null,8,["prependIcon","title","href","disabled"])))),128))])),_:1})],2)]),(0,o.Lk)("div",f,[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[h])),_:1})]),(0,o.Lk)("div",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(Object.entries((0,l.R1)(s).technologies),(([t,e],n)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,r.C4)(`card item${n+1}`)},[(0,o.bF)(m,{density:"comfortable",variant:"text",bgColor:"transparent"},{default:(0,o.k6)((()=>[(0,o.bF)(x,{style:{textTransform:"capitalize"}},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(t),1)])),_:2},1024),(0,o.bF)(g,{inset:""}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e,((t,e)=>((0,o.uX)(),(0,o.Wv)(k,{key:e,value:t,color:"primary",href:t.link,disabled:!t.link,target:"__blank"},{prepend:(0,o.k6)((()=>[(0,o.bF)(b,{icon:`mdi-${t.icon}`},null,8,["icon"])])),default:(0,o.k6)((()=>[(0,o.bF)(y,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(t.text),1)])),_:2},1024)])),_:2},1032,["value","href","disabled"])))),128))])),_:2},1024)],2)))),128))])])}}},m=n(1241);const g=(0,m.A)(k,[["__scopeId","data-v-12105c9f"]]);var x=g,b=n(7308),y={__name:"ToBackButton",props:{isShow:Boolean},setup(t){const e=t,n=(0,b.pP)(),l={duration:400,easing:"easeInQuint",offset:0},r=()=>n(0,l),s=(0,o.EW)((()=>!!e?.isShow));return(t,e)=>{const n=(0,o.g2)("v-btn");return(0,o.bo)(((0,o.uX)(),(0,o.Wv)(n,{position:"fixed",location:"bottom right",icon:"mdi-arrow-up",onClick:r,style:{right:"20px",bottom:"20px",opacity:.5}},null,512)),[[i.aG,s.value]])}}};const w=y;var _=w;const j=(0,o.Lk)("div",{id:"goto-container-example"},null,-1);var C={__name:"App",setup(t){const e=(0,l.KR)(0);function n(t){e.value=t.target?.scrollingElement?.scrollTop>=100}return(t,i)=>{const l=(0,o.g2)("v-main"),r=(0,o.g2)("v-layout"),s=(0,o.gN)("scroll");return(0,o.bo)(((0,o.uX)(),(0,o.Wv)(r,null,{default:(0,o.k6)((()=>[j,(0,o.bF)(l,null,{default:(0,o.k6)((()=>[(0,o.bF)(x),(0,o.bF)(_,{"is-show":e.value},null,8,["is-show"])])),_:1})])),_:1})),[[s,n]])}}};const F=C;var E=F,S=n(7768),O=n(1920),R=n(5741),X=n(8221);const T=(0,S.$N)({components:O,directives:R,icons:{defaultSet:"mdi",aliases:X.z,sets:{mdi:X.r}}});var I=T;n(5524);(0,i.Ef)(E).use(I).mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var l=e[i]={exports:{}};return t[i].call(l.exports,l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,l){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],l=t[u][2];for(var s=!0,a=0;a<i.length;a++)(!1&l||r>=l)&&Object.keys(n.O).every((function(t){return n.O[t](i[a])}))?i.splice(a--,1):(s=!1,l<r&&(r=l));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}l=l||0;for(var u=t.length;u>0&&t[u-1][2]>l;u--)t[u]=t[u-1];t[u]=[i,o,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/profile_vue/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,l,r=i[0],s=i[1],a=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var u=a(n)}for(e&&e(i);c<r.length;c++)l=r[c],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(u)},i=self["webpackChunkprofile_vue"]=self["webpackChunkprofile_vue"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(883)}));i=n.O(i)})();
//# sourceMappingURL=app.277a024a.js.map
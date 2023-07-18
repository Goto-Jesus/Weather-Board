(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{312:function(e,t,c){},561:function(e,t,c){},562:function(e,t,c){},563:function(e,t,c){},564:function(e,t,c){},565:function(e,t,c){},566:function(e,t,c){},567:function(e,t,c){},568:function(e,t,c){},569:function(e,t,c){},570:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(51),i=c.n(r),s=c(299),o=c(44),l=c(111),u=c(72),d=Object(l.b)({name:"cards",initialState:[],reducers:{add:function(e,t){e.push(t.payload)},delete:function(e,t){var c=e.filter((function(e){return e.id!==t.payload}));e.length=0,e.push.apply(e,Object(u.a)(c))},clear:function(){return[]}}}),j=d.reducer,b=d.actions;var f=function(){try{var e=localStorage.getItem("reduxState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),h=Object(l.a)({reducer:{cards:j},preloadedState:f});h.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("reduxState",t)}catch(c){console.error("Error saving state to localStorage:",c)}}(h.getState())}));var p=h,O=c(165),_=c(281),m=c(300),x=c(38);O.a.use(_.a).use(m.a).use(x.a).init({fallbackLng:"ua",debug:!0,detection:{order:["localStorage","cookie"]},interpolation:{escapeValue:!1}});O.a;var v=c(58),y=c.n(v),g=c(164),w=c(15),N=function(e,t){var c=Object(n.useState)((function(){if("undefined"===typeof window)return t;try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return t}})),a=Object(w.a)(c,2),r=a[0],i=a[1];return[r,function(t){try{var c=t instanceof Function?t(r):t;i(c),"undefined"!==typeof window&&window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]},S=c(573),k=c(57),C=function(e){return Number(e.toFixed(1))},F=function(e){return C(1.8*e+32)};function E(e){var t=e.list[0],c=t.main,n=c.feels_like,a=c.temp,r=c.humidity,i=c.pressure,s=t.wind.speed,o=t.dt_txt,l=Object(w.a)(t.weather,1)[0],u=l.icon,d=l.main,j=e.city,b=j.name,f=j.country,h=new Date(o).toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"long",hour:"numeric",minute:"numeric"}),p=function(e){var t=e.list.slice(0,8).map((function(e){var t,c=e.main.temp,n=e.dt_txt;return t={date:new Date(n).toString().split(" ")[4].slice(0,5)},Object(k.a)(t,"\xb0C",C(c)),Object(k.a)(t,"\xb0F",F(c)),t})),c={date:"","\xb0C":"","\xb0F":""};return t.push(c),t.unshift(c),t}(e);return{id:Object(S.a)(),name:b,country:f,date:h,temp_C:C(a),temp_F:F(a),feels_like_C:C(n),feels_like_F:F(n),icon:u,type_weather:d,wind_speed:s,humidity:r,pressure:i,list:p}}var L="https://api.openweathermap.org/data/2.5/";function A(e){return new Promise((function(t){setTimeout(t,e)}))}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),A(0).then((function(){return fetch(L+e,n)})).then((function(e){if(!e.ok)throw new Error;return e.text()})).then((function(e){return e?JSON.parse(e):null}))}var Z,P=function(e){return I(e)},J="413051a7e53bae5c44f27e6b8fcce7a2",M=o.c,H=(o.b,c(8)),T=c.n(H),D=c(574),G=c(575),K=c(298),R=c(88),q=c(297),B=c(116),Q=(c(312),c(2)),U=function(e){var t=e.isCold,c=e.list,n=e.isFahrenheit;return Object(Q.jsx)(D.a,{width:"100%",height:71,children:Object(Q.jsxs)(G.a,{data:c,margin:{top:10,right:-10,left:-10,bottom:-10},className:"chart",children:[Object(Q.jsxs)("defs",{children:[Object(Q.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(Q.jsx)("stop",{offset:"0%",stopColor:"#ffa25b",stopOpacity:1}),Object(Q.jsx)("stop",{offset:"100%",stopColor:"#fff4f4",stopOpacity:1})]}),Object(Q.jsxs)("linearGradient",{id:"color--cold",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(Q.jsx)("stop",{offset:"0%",stopColor:"#459de9",stopOpacity:1}),Object(Q.jsx)("stop",{offset:"100%",stopColor:"#fff4f4",stopOpacity:1})]})]}),Object(Q.jsx)(K.a,{dataKey:"date",axisLine:!1,tickLine:!1,tickSize:0,height:20,className:"chart__XAsix"}),Object(Q.jsx)(R.a,{contentStyle:{borderRadius:5,padding:5,opacity:.8}}),Object(Q.jsx)(q.a,{type:"monotone",dataKey:T()({"\xb0C":!n,"\xb0F":n}),stroke:T()({"#459de9":t,"#ffa25b":!t}),fillOpacity:.3,fill:T()({"url(#color--cold)":t,"url(#color)":!t}),children:Object(Q.jsx)(B.a,{dataKey:T()({"\xb0C":!n,"\xb0F":n}),position:"top",className:"chart__LabelList"})})]})})},W=(c(561),function(e){var t=e.card,c=Object(x.b)().t,a=t.id,r=t.name,i=t.country,s=t.date,l=t.temp_C,u=t.temp_F,d=t.feels_like_C,j=t.feels_like_F,f=t.icon,h=t.type_weather,p=t.wind_speed,O=t.humidity,_=t.pressure,m=t.list,v=Object(n.useState)(!1),y=Object(w.a)(v,2),g=y[0],N=y[1],S=l<=0,k=g?u:l,C=g?j:d,F=Object(o.b)();return Object(Q.jsxs)("div",{className:T()("card",{"card--cold":S}),children:[Object(Q.jsxs)("div",{className:"card__header",children:[Object(Q.jsxs)("div",{className:"card__title",children:[Object(Q.jsx)("div",{className:"card__title__city",children:"".concat(r,", ").concat(i)}),Object(Q.jsx)("div",{className:"card__title__date",children:s})]}),Object(Q.jsxs)("div",{className:"card__display",children:[Object(Q.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(f,".png"),alt:"weather icon",className:"card__display__weather-icon"}),Object(Q.jsx)("div",{className:"card__display__typeOfWeather",children:h})]})]}),Object(Q.jsxs)("div",{className:"card__chart",children:[Object(Q.jsx)(U,{list:m,isCold:S,isFahrenheit:g}),Object(Q.jsx)("div",{className:"card__chart__wrapper"})]}),Object(Q.jsxs)("div",{className:"card__footer",children:[Object(Q.jsxs)("div",{className:"wrapper",children:[Object(Q.jsxs)("div",{className:"card__footer__temperature",children:[Object(Q.jsx)("div",{className:"card__footer__temperature__amount",children:"".concat(S?"":"+").concat(k)}),Object(Q.jsxs)("div",{className:"card__footer__temperature__switch",children:[Object(Q.jsx)("button",{type:"button",className:T()("card__footer__temperature__switch__option",{"card__footer__temperature__switch__option--active":!g}),onClick:function(){N(!1)},children:"\xb0C"}),Object(Q.jsx)("div",{className:"line"}),Object(Q.jsx)("button",{type:"button",className:T()("card__footer__temperature__switch__option",{"card__footer__temperature__switch__option--active":g}),onClick:function(){N(!0)},children:"\xb0F"})]})]}),Object(Q.jsxs)("div",{className:"card__footer__temperature-feelsLike",children:[Object(Q.jsx)("span",{children:"".concat(c("Feels like"),":")}),Object(Q.jsx)("b",{children:" ".concat(S?"":"+").concat(C," ").concat(g?"\xb0F":"\xb0C")})]})]}),Object(Q.jsxs)("div",{className:"card__statictics",children:[Object(Q.jsx)("span",{children:"".concat(c("Wind"),":")}),Object(Q.jsx)("b",{className:"card__statictics__amount",children:" ".concat(p," m/s")}),Object(Q.jsx)("br",{}),Object(Q.jsx)("span",{children:"".concat(c("Humidity"),":")}),Object(Q.jsx)("b",{className:"card__statictics__amount",children:" ".concat(O,"%")}),Object(Q.jsx)("br",{}),Object(Q.jsx)("span",{children:"".concat(c("Pressure"),":")}),Object(Q.jsx)("b",{className:"card__statictics__amount",children:" ".concat(_,"Pa")})]})]}),Object(Q.jsx)("button",{type:"button",className:"card__close",onClick:function(){var e;e=a,F(b.delete(e))},children:Object(Q.jsx)("div",{className:"card__close__icon",children:"\u2715"})})]})}),z=(c(562),function(){var e=M((function(e){return e.cards}));return Object(Q.jsx)("div",{className:"listOfCard",children:e.map((function(e){return Object(Q.jsx)(W,{card:e},e.id)}))})});function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}function Y(e,t){var c=e.title,a=e.titleId,r=X(e,["title","titleId"]);return n.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:12.17,height:12.17,viewBox:"0 0 12.17 12.17",ref:t,"aria-labelledby":a},r),c?n.createElement("title",{id:a},c):null,Z||(Z=n.createElement("path",{id:"Icon_material-language","data-name":"Icon material-language",d:"M9.079,3A6.085,6.085,0,1,0,15.17,9.085,6.082,6.082,0,0,0,9.079,3ZM13.3,6.651H11.5a9.522,9.522,0,0,0-.84-2.166A4.886,4.886,0,0,1,13.3,6.651ZM9.085,4.241a8.572,8.572,0,0,1,1.162,2.41H7.923A8.572,8.572,0,0,1,9.085,4.241ZM4.375,10.3a4.76,4.76,0,0,1,0-2.434H6.432a10.049,10.049,0,0,0-.085,1.217A10.049,10.049,0,0,0,6.432,10.3Zm.5,1.217h1.8a9.522,9.522,0,0,0,.84,2.166A4.86,4.86,0,0,1,4.874,11.519Zm1.8-4.868h-1.8A4.86,4.86,0,0,1,7.509,4.485,9.522,9.522,0,0,0,6.669,6.651Zm2.416,7.277a8.572,8.572,0,0,1-1.162-2.41h2.324A8.572,8.572,0,0,1,9.085,13.928ZM10.509,10.3H7.661a8.953,8.953,0,0,1-.1-1.217,8.875,8.875,0,0,1,.1-1.217h2.848a8.875,8.875,0,0,1,.1,1.217A8.953,8.953,0,0,1,10.509,10.3Zm.152,3.383a9.522,9.522,0,0,0,.84-2.166h1.8a4.886,4.886,0,0,1-2.635,2.166ZM11.738,10.3a10.049,10.049,0,0,0,.085-1.217,10.049,10.049,0,0,0-.085-1.217h2.057a4.76,4.76,0,0,1,0,2.434Z",transform:"translate(-3 -3)",fill:"#afafaf"})))}var $=n.forwardRef(Y),ee=(c.p,c(563),function(){var e=Object(x.b)().i18n,t=Object(n.useState)("en"),c=Object(w.a)(t,2),a=c[0],r=c[1];return Object(Q.jsxs)("div",{className:"locales",children:[Object(Q.jsx)($,{className:"locales__icon"}),Object(Q.jsxs)("select",{value:a,onChange:function(t){var c=t.target.value;r(c),e.changeLanguage(c)},children:[Object(Q.jsx)("option",{value:"en",children:"EN"}),Object(Q.jsx)("option",{value:"ua",children:"UA"}),Object(Q.jsx)("option",{value:"he",children:"HE"})]})]})}),te=(c(564),function(e){var t=e.isOpened,c=e.onSetSearch,a=e.dropdownList,r=Object(n.useState)(""),i=Object(w.a)(r,2),s=i[0],o=i[1];return Object(Q.jsx)("ul",{className:T()("list",{"list--open":t,"list--close":!t}),children:a.map((function(e){return Object(Q.jsx)("li",{className:T()("list__item",{"list__item--active":s===e}),onClick:function(){o(e),c(e)},children:e},e)}))})}),ce=(c(565),function(e){var t=e.onPressed,c=e.searchQuery,n=Object(x.b)().t;return Object(Q.jsx)("button",{type:"button",className:"button",onClick:function(){return t(c)},children:n("Add")})}),ne=(c(566),function(e){var t=e.loadCard,c=M((function(e){return e.cards})),a=Object(x.b)().t,r=Object(n.useState)(""),i=Object(w.a)(r,2),s=i[0],o=i[1],l=N("searchList",[]),d=Object(w.a)(l,2),j=d[0],b=d[1],f=Object(n.useState)(!1),h=Object(w.a)(f,2),p=h[0],O=h[1],_=Object(n.useRef)(null),m=function(e){_.current&&!_.current.contains(e.target)&&O(!1)};return Object(n.useEffect)((function(){document.addEventListener("mousedown",m)}),[]),Object(n.useEffect)((function(){c.forEach((function(e){return function(e){var t="".concat(e.name,", ").concat(e.country);j.includes(t)||b([].concat(Object(u.a)(j),[t]))}(e)})),o("")}),[c]),Object(Q.jsxs)("div",{className:"search",children:[Object(Q.jsx)("input",{type:"text",className:"search__box",placeholder:a("placeholder"),value:s,onClick:function(){O(!0)},onChange:function(e){return o(e.target.value)}}),Object(Q.jsx)("div",{className:"search__list",ref:_,children:Object(Q.jsx)(te,{isOpened:p,dropdownList:j,onSetSearch:function(e){o(e)}})}),Object(Q.jsx)("div",{className:"search__button",children:Object(Q.jsx)(ce,{onPressed:t,searchQuery:s})})]})}),ae=(c(567),function(){var e=Object(n.useState)(!0),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){a(!0),setTimeout((function(){a(!1)}),3e3)}),[]),Object(Q.jsx)(Q.Fragment,{children:c&&Object(Q.jsx)("div",{className:"error",children:"\u274c No correct query ..."})})}),re=(c(568),function(){var e=Object(n.useState)(!1),t=Object(w.a)(e,2),c=t[0],a=t[1],r=N("location",{}),i=Object(w.a)(r,2),s=i[0],l=i[1],u=Object(o.b)(),d=function(e){return u(b.add(e))},j=function(){var e=Object(g.a)(y.a.mark((function e(t){var c,n,r,i,o,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=9;break}return e.next=4,P("forecast?q=".concat(t,"&units=metric&&appid=").concat(J));case 4:c=e.sent,n=E(c),d(n),e.next=15;break;case 9:return r=s.latitude,i=s.longitude,e.next=12,u=i,P("forecast?lat=".concat(r,"&lon=").concat(u,"&units=metric&&appid=").concat(J));case 12:o=e.sent,l=E(o),d(l);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),a(!0),setTimeout((function(){a(!1)}),3e3);case 21:case"end":return e.stop()}var u}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(g.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){l(e.coords)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("header",{className:"header",children:[Object(Q.jsx)(ne,{loadCard:j}),c&&Object(Q.jsx)(ae,{}),Object(Q.jsx)(ee,{})]}),Object(Q.jsx)("main",{children:Object(Q.jsx)(z,{})})]})});c(569);i.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(n.Suspense,{fallback:Object(Q.jsx)("div",{className:"loader",children:Object(Q.jsx)(s.a,{width:"200",color:"#ffa25b"})}),children:Object(Q.jsx)(o.a,{store:p,children:Object(Q.jsx)(re,{})})})}),document.getElementById("root"))}},[[570,1,2]]]);
//# sourceMappingURL=main.41a8cb54.chunk.js.map
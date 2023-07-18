(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{307:function(e,t,c){},556:function(e,t,c){},557:function(e,t,c){},558:function(e,t,c){},559:function(e,t,c){},560:function(e,t,c){},561:function(e,t,c){},562:function(e,t,c){},563:function(e,t,c){},564:function(e,t,c){},565:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(51),i=c.n(a),s=c(295),o=c(44),l=c(110),u=c(71),d=Object(l.b)({name:"cards",initialState:[],reducers:{add:function(e,t){e.find((function(e){return e.name===t.payload.name}))||e.push(t.payload)},delete:function(e,t){var c=e.filter((function(e){return e.id!==t.payload}));e.length=0,e.push.apply(e,Object(u.a)(c))},clear:function(){return[]}}}),j=d.reducer,f=d.actions;var b=function(){try{var e=localStorage.getItem("reduxState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),h=Object(l.a)({reducer:{cards:j},preloadedState:b});h.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("reduxState",t)}catch(c){console.error("Error saving state to localStorage:",c)}}(h.getState())}));var p=h,_=c(163),O=c(29);_.a.use(O.a).init({resources:{en:{translation:{placeholder:"Enter the city...",Add:"Add",Feels_like:"Feels like",Wind:"Wind",Humidity:"Humidity",Pressure:"Pressure",No_correct_query:"\u274c No correct query ..."}},ua:{translation:{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043c\u0456\u0441\u0442\u043e...",Add:"\u0414\u043e\u0434\u0430\u0442\u0438",Feels_like:"\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f, \u044f\u043a",Wind:"\u0412\u0456\u0442\u0435\u0440",Humidity:"\u0412\u043e\u043b\u043e\u0433\u0456\u0441\u0442\u044c",Pressure:"\u0422\u0438\u0441\u043a",No_correct_query:"\u274c \u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442 ..."}},he:{translation:{placeholder:"\u05d4\u05d9\u05db\u05e0\u05e1\u05d5 \u05dc\u05e2\u05d9\u05e8...",Add:"\u05dc\u05b0\u05d4\u05d5\u05b9\u05e1\u05b4\u05d9\u05e3",Feels_like:"\u05de\u05e8\u05d2\u05d9\u05e9 \u05db\u05de\u05d5",Wind:"\u05e8\u05d5\u05bc\u05d7\u05b7",Humidity:"\u05dc\u05d7\u05d5\u05ea",Pressure:"\u05dc\u05b7\u05d7\u05b7\u05e5",No_correct_query:"\u274c \u05d0\u05d9\u05df \u05e9\u05d0\u05d9\u05dc\u05ea\u05d4 \u05e0\u05db\u05d5\u05e0\u05d4..."}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1},detection:{order:["localStorage","cookie"]}});_.a;var m=c(57),x=c.n(m),v=c(162),y=c(15),g=function(e,t){var c=Object(n.useState)((function(){if("undefined"===typeof window)return t;try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return t}})),r=Object(y.a)(c,2),a=r[0],i=r[1];return[a,function(t){try{var c=t instanceof Function?t(a):t;i(c),"undefined"!==typeof window&&window.localStorage.setItem(e,JSON.stringify(c))}catch(n){console.log(n)}}]},w=c(568),N=c(56),S=function(e){return Number(e.toFixed(1))},k=function(e){return S(1.8*e+32)};function C(e){var t=e.list[0],c=t.main,n=c.feels_like,r=c.temp,a=c.humidity,i=c.pressure,s=t.wind.speed,o=t.dt_txt,l=Object(y.a)(t.weather,1)[0],u=l.icon,d=l.main,j=e.city,f=j.name,b=j.country,h=new Date(o).toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"long",hour:"numeric",minute:"numeric"}),p=function(e){var t=e.list.slice(0,8).map((function(e){var t,c=e.main.temp,n=e.dt_txt;return t={date:new Date(n).toString().split(" ")[4].slice(0,5)},Object(N.a)(t,"\xb0C",S(c)),Object(N.a)(t,"\xb0F",k(c)),t})),c={date:"","\xb0C":"","\xb0F":""};return t.push(c),t.unshift(c),t}(e);return{id:Object(w.a)(),name:f,country:b,date:h,temp_C:S(r),temp_F:k(r),feels_like_C:S(n),feels_like_F:k(n),icon:u,type_weather:d,wind_speed:s,humidity:a,pressure:i,list:p}}var F="https://api.openweathermap.org/data/2.5/";function E(e){return new Promise((function(t){setTimeout(t,e)}))}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return c&&(n.body=JSON.stringify(c),n.headers={"Content-Type":"application/json; charset=UTF-8"}),E(0).then((function(){return fetch(F+e,n)})).then((function(e){if(!e.ok)throw new Error;return e.text()})).then((function(e){return e?JSON.parse(e):null}))}var L,P=function(e){return A(e)},H="413051a7e53bae5c44f27e6b8fcce7a2",I=o.c,Z=(o.b,c(8)),J=c.n(Z),M=c(569),q=c(570),T=c(294),W=c(86),D=c(293),G=c(115),K=(c(307),c(2)),R=function(e){var t=e.isCold,c=e.list,n=e.isFahrenheit;return Object(K.jsx)(M.a,{width:"100%",height:71,children:Object(K.jsxs)(q.a,{data:c,margin:{top:10,right:-10,left:-10,bottom:-10},className:"chart",children:[Object(K.jsxs)("defs",{children:[Object(K.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(K.jsx)("stop",{offset:"0%",stopColor:"#ffa25b",stopOpacity:1}),Object(K.jsx)("stop",{offset:"100%",stopColor:"#fff4f4",stopOpacity:1})]}),Object(K.jsxs)("linearGradient",{id:"color--cold",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(K.jsx)("stop",{offset:"0%",stopColor:"#459de9",stopOpacity:1}),Object(K.jsx)("stop",{offset:"100%",stopColor:"#fff4f4",stopOpacity:1})]})]}),Object(K.jsx)(T.a,{dataKey:"date",axisLine:!1,tickLine:!1,tickSize:0,height:20,className:"chart__XAsix"}),Object(K.jsx)(W.a,{contentStyle:{borderRadius:5,padding:5,opacity:.8}}),Object(K.jsx)(D.a,{type:"monotone",dataKey:J()({"\xb0C":!n,"\xb0F":n}),stroke:J()({"#459de9":t,"#ffa25b":!t}),fillOpacity:.3,fill:J()({"url(#color--cold)":t,"url(#color)":!t}),children:Object(K.jsx)(G.a,{dataKey:J()({"\xb0C":!n,"\xb0F":n}),position:"top",className:"chart__LabelList"})})]})})},B=(c(556),function(e){var t=e.card,c=t.name,n=t.country,r=t.date,a=t.icon,i=t.type_weather;return Object(K.jsxs)("div",{className:"card__header",children:[Object(K.jsxs)("div",{className:"card__title",children:[Object(K.jsx)("div",{className:"card__title__city",children:"".concat(c,", ").concat(n)}),Object(K.jsx)("div",{className:"card__title__date",children:r})]}),Object(K.jsxs)("div",{className:"card__display",children:[Object(K.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(a,".png"),alt:"weather icon",className:"card__display__weather-icon"}),Object(K.jsx)("div",{className:"card__display__typeOfWeather",children:i})]})]})}),U=function(e){var t=e.card,c=e.isFahrenheit,n=e.isCold,r=e.onFahrenheit,a=e.onCelsius,i=Object(O.b)().t,s=t.temp_C,o=t.temp_F,l=t.feels_like_C,u=t.feels_like_F,d=t.wind_speed,j=t.humidity,f=t.pressure,b=c?o:s,h=c?u:l;return Object(K.jsxs)("div",{className:"card__footer",children:[Object(K.jsxs)("div",{className:"wrapper",children:[Object(K.jsxs)("div",{className:"card__footer__temperature",children:[Object(K.jsx)("div",{className:"card__footer__temperature__amount",children:"".concat(n?"":"+").concat(b)}),Object(K.jsxs)("div",{className:"card__footer__temperature__switch",children:[Object(K.jsx)("button",{type:"button",className:J()("card__footer__temperature__switch__option",{"card__footer__temperature__switch__option--active":!c}),onClick:function(){return a()},children:"\xb0C"}),Object(K.jsx)("div",{className:"line"}),Object(K.jsx)("button",{type:"button",className:J()("card__footer__temperature__switch__option",{"card__footer__temperature__switch__option--active":c}),onClick:function(){return r()},children:"\xb0F"})]})]}),Object(K.jsxs)("div",{className:"card__footer__temperature-feelsLike",children:[Object(K.jsx)("span",{children:"".concat(i("Feels_like"),":")}),Object(K.jsx)("b",{children:" ".concat(n?"":"+").concat(h," ").concat(c?"\xb0F":"\xb0C")})]})]}),Object(K.jsxs)("div",{className:"card__statictics",children:[Object(K.jsx)("span",{children:"".concat(i("Wind"),":")}),Object(K.jsx)("b",{className:"card__statictics__amount",children:" ".concat(d," m/s")}),Object(K.jsx)("br",{}),Object(K.jsx)("span",{children:"".concat(i("Humidity"),":")}),Object(K.jsx)("b",{className:"card__statictics__amount",children:" ".concat(j,"%")}),Object(K.jsx)("br",{}),Object(K.jsx)("span",{children:"".concat(i("Pressure"),":")}),Object(K.jsx)("b",{className:"card__statictics__amount",children:" ".concat(f,"Pa")})]})]})},z=function(e){var t=e.card,c=t.id,r=t.temp_C,a=t.list,i=Object(n.useState)(!1),s=Object(y.a)(i,2),l=s[0],u=s[1],d=r<=0,j=Object(o.b)();return Object(K.jsxs)("div",{className:J()("card",{"card--cold":d}),children:[Object(K.jsx)(B,{card:t}),Object(K.jsxs)("div",{className:"card__chart",children:[Object(K.jsx)(R,{list:a,isCold:d,isFahrenheit:l}),Object(K.jsx)("div",{className:"card__chart__wrapper"})]}),Object(K.jsx)(U,{card:t,isFahrenheit:l,isCold:d,onFahrenheit:function(){u(!0)},onCelsius:function(){u(!1)}}),Object(K.jsx)("button",{type:"button",className:"card__close",onClick:function(){var e;e=c,j(f.delete(e))},children:Object(K.jsx)("div",{className:"card__close__icon",children:"\u2715"})})]})},V=(c(557),function(){var e=I((function(e){return e.cards}));return Object(K.jsx)("div",{className:"listOfCard",children:e.map((function(e){return Object(K.jsx)(z,{card:e},e.id)}))})});function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function Y(e,t){var c=e.title,r=e.titleId,a=Q(e,["title","titleId"]);return n.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:12.17,height:12.17,viewBox:"0 0 12.17 12.17",ref:t,"aria-labelledby":r},a),c?n.createElement("title",{id:r},c):null,L||(L=n.createElement("path",{id:"Icon_material-language","data-name":"Icon material-language",d:"M9.079,3A6.085,6.085,0,1,0,15.17,9.085,6.082,6.082,0,0,0,9.079,3ZM13.3,6.651H11.5a9.522,9.522,0,0,0-.84-2.166A4.886,4.886,0,0,1,13.3,6.651ZM9.085,4.241a8.572,8.572,0,0,1,1.162,2.41H7.923A8.572,8.572,0,0,1,9.085,4.241ZM4.375,10.3a4.76,4.76,0,0,1,0-2.434H6.432a10.049,10.049,0,0,0-.085,1.217A10.049,10.049,0,0,0,6.432,10.3Zm.5,1.217h1.8a9.522,9.522,0,0,0,.84,2.166A4.86,4.86,0,0,1,4.874,11.519Zm1.8-4.868h-1.8A4.86,4.86,0,0,1,7.509,4.485,9.522,9.522,0,0,0,6.669,6.651Zm2.416,7.277a8.572,8.572,0,0,1-1.162-2.41h2.324A8.572,8.572,0,0,1,9.085,13.928ZM10.509,10.3H7.661a8.953,8.953,0,0,1-.1-1.217,8.875,8.875,0,0,1,.1-1.217h2.848a8.875,8.875,0,0,1,.1,1.217A8.953,8.953,0,0,1,10.509,10.3Zm.152,3.383a9.522,9.522,0,0,0,.84-2.166h1.8a4.886,4.886,0,0,1-2.635,2.166ZM11.738,10.3a10.049,10.049,0,0,0,.085-1.217,10.049,10.049,0,0,0-.085-1.217h2.057a4.76,4.76,0,0,1,0,2.434Z",transform:"translate(-3 -3)",fill:"#afafaf"})))}var $=n.forwardRef(Y),ee=(c.p,c(558),function(){var e=Object(O.b)().i18n,t=Object(n.useState)("en"),c=Object(y.a)(t,2),r=c[0],a=c[1];return Object(K.jsxs)("div",{className:"locales",children:[Object(K.jsx)($,{className:"locales__icon"}),Object(K.jsxs)("select",{value:r,onChange:function(t){var c=t.target.value;a(c),e.changeLanguage(c)},children:[Object(K.jsx)("option",{value:"en",children:"EN"}),Object(K.jsx)("option",{value:"ua",children:"UA"}),Object(K.jsx)("option",{value:"he",children:"HE"})]})]})}),te=(c(559),function(e){var t=e.isOpened,c=e.onSetSearch,r=e.dropdownList,a=Object(n.useState)(""),i=Object(y.a)(a,2),s=i[0],o=i[1];return Object(K.jsx)("ul",{className:J()("list",{"list--open":t,"list--close":!t}),children:r.map((function(e){return Object(K.jsx)("li",{className:J()("list__item",{"list__item--active":s===e}),onClick:function(){o(e),c(e)},children:e},e)}))})}),ce=(c(560),function(e){var t=e.onPressed,c=Object(O.b)().t;return Object(K.jsx)("button",{type:"button",className:"button",onClick:function(){return t()},children:c("Add")})}),ne=(c(561),function(e){var t=e.onLoad,c=I((function(e){return e.cards})),r=Object(O.b)().t,a=Object(n.useState)(""),i=Object(y.a)(a,2),s=i[0],o=i[1],l=g("searchList",[]),d=Object(y.a)(l,2),j=d[0],f=d[1],b=Object(n.useState)(!1),h=Object(y.a)(b,2),p=h[0],_=h[1],m=Object(n.useRef)(null),x=function(e){m.current&&!m.current.contains(e.target)&&_(!1)};return Object(n.useEffect)((function(){document.addEventListener("mousedown",x)}),[]),Object(n.useEffect)((function(){c.forEach((function(e){return function(e){var t="".concat(e.name,", ").concat(e.country);j.includes(t)||f((function(e){return[].concat(Object(u.a)(e),[t])}))}(e)})),o("")}),[c]),Object(K.jsxs)("div",{className:"search",children:[Object(K.jsx)("input",{type:"text",className:"search__box",placeholder:r("placeholder"),value:s,onClick:function(){_(!0)},onChange:function(e){return o(e.target.value)}}),Object(K.jsx)("div",{className:"search__list",ref:m,children:Object(K.jsx)(te,{isOpened:p,dropdownList:j,onSetSearch:function(e){o(e)}})}),Object(K.jsx)("div",{className:"search__button",children:Object(K.jsx)(ce,{onPressed:function(){return t(s)}})})]})}),re=(c(562),function(e){var t=e.onClose,c=Object(O.b)().t;return Object(n.useEffect)((function(){var e=setTimeout((function(){t()}),3e3);return function(){clearTimeout(e)}}),[]),Object(K.jsx)("div",{className:"error",children:"".concat(c("No_correct_query"))})}),ae=(c(563),function(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),c=t[0],r=t[1],a=g("location",{}),i=Object(y.a)(a,2),s=i[0],l=i[1],u=Object(o.b)(),d=function(e){return u(f.add(e))},j=function(){var e=Object(v.a)(x.a.mark((function e(t){var c,n,a,i,o,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=9;break}return e.next=4,P("forecast?q=".concat(t,"&units=metric&&appid=").concat(H));case 4:c=e.sent,n=C(c),d(n),e.next=15;break;case 9:return a=s.latitude,i=s.longitude,e.next=12,u=i,P("forecast?lat=".concat(a,"&lon=").concat(u,"&units=metric&&appid=").concat(H));case 12:o=e.sent,l=C(o),d(l);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),r(!0);case 20:case"end":return e.stop()}var u}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition((function(e){l(e.coords)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("header",{className:"header",children:[Object(K.jsx)(ne,{onLoad:j}),c&&Object(K.jsx)(re,{onClose:function(){return r(!1)}}),Object(K.jsx)(ee,{})]}),Object(K.jsx)("main",{children:Object(K.jsx)(V,{})})]})});c(564);i.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(n.Suspense,{fallback:Object(K.jsx)("div",{className:"loader",children:Object(K.jsx)(s.a,{width:"200",color:"#ffa25b"})}),children:Object(K.jsx)(o.a,{store:p,children:Object(K.jsx)(ae,{})})})}),document.getElementById("root"))}},[[565,1,2]]]);
//# sourceMappingURL=main.17157960.chunk.js.map
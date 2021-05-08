(this.webpackJsonplappa=this.webpackJsonplappa||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_img_Light_png__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),_img_Dark_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),_Home_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),_Home_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_3__),react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44),react_router__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1);const Home=({theme})=>{const history=Object(react_router__WEBPACK_IMPORTED_MODULE_5__.f)(),Light=_img_Light_png__WEBPACK_IMPORTED_MODULE_1__.a,Dark=_img_Dark_png__WEBPACK_IMPORTED_MODULE_2__.a;return console.log(eval(theme)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"homeContainer"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"LappaLogo",src:eval(theme),alt:"LAPPA, buscador de transportes, logo"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"btn"+theme+" btnTransportista "+theme,onMouseEnter:()=>{document.querySelectorAll(".btnSecundario").forEach(o=>{o.style.display="initial"})},onMouseLeave:()=>{document.querySelectorAll(".btnSecundario").forEach(o=>{o.style.display="none"})}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"btnSecundario",size:"5vh"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:()=>{const o=document.querySelector(".LappaLogo");o.style.animation="quieroIngresarAnimation 0.5s 1",setTimeout(()=>history.push("/register"),400)}},"Quiero Registrarme")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"btnSecundario",size:"5vh"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:()=>{const o=document.querySelector(".LappaLogo");o.style.animation="quieroIngresarAnimation 0.5s 1",setTimeout(()=>history.push("/login"),400)}},"Quiero Ingresar")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__.a,{size:"3vh"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{size:"5vh"},"Soy Transportista")))};__webpack_exports__.a=Home},18:function(o,n,a){"use strict";n.a=a.p+"static/media/Light.3d9890ff.png"},19:function(o,n,a){"use strict";n.a=a.p+"static/media/Dark.42aede08.png"},29:function(o,n,a){},30:function(o,n,a){},41:function(o,n,a){},42:function(o,n,a){},43:function(o,n,a){"use strict";a.r(n);var s=a(0),t=a.n(s),d=a(16),g=a.n(d),h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then(({getCLS:r,getFID:_,getFCP:c,getLCP:l,getTTFB:R})=>{r(e),_(e),c(e),l(e),R(e)})},y=a(29),O=a(23),i=a(1),v=a(17),m=a(9);const D={body:"#fff",fontColor:"#000"},f={body:"#53575a",fontColor:"#fff"},M=m.b`

body {
    background-color: ${e=>e.theme.body};
}
`;var U=a(41),P=a(45),L=a(46),B=a(42),A=Object.defineProperty,C=Object.prototype.hasOwnProperty,E=Object.getOwnPropertySymbols,b=Object.prototype.propertyIsEnumerable,p=(e,r,_)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:_}):e[r]=_,u=(e,r)=>{for(var _ in r||(r={}))C.call(r,_)&&p(e,_,r[_]);if(E)for(var _ of E(r))b.call(r,_)&&p(e,_,r[_]);return e},T=({theme:e})=>{const[r,_]=Object(s.useState)({empresa:"",cuit:"",telefono:"",ubicacion:""}),c=l=>{_(u(u({},r),{[l.target.name]:l.target.value}))};return t.a.createElement("div",{className:"registerContainer"},t.a.createElement("form",null,t.a.createElement("div",{className:"col"},t.a.createElement("input",{type:"text",placeholder:"Nombre de la Empresa.",className:"form-control",onChange:c,name:"empresa"})),t.a.createElement("div",{className:"col"},t.a.createElement("input",{type:"text",placeholder:"CUIT (ej: 11-11111111-1)",className:"form-control",onChange:c,name:"cuit"})),t.a.createElement("div",{className:"col"},t.a.createElement("input",{type:"text",placeholder:"Telefono (con whatsapp)",className:"form-control",onChange:c,name:"telefono"})),t.a.createElement("div",{className:"col"},t.a.createElement("input",{type:"text",placeholder:"Ubicacion (ej: Rosario, Santa Fe, Argentina)",className:"form-control",onChange:c,name:"ubicacion"}))))},I=()=>{const[e,r]=Object(s.useState)("Light"),_=()=>{r(e==="Light"?"Dark":"Light")},c=m.c.div`
    color: ${l=>l.theme.fontColor};
`;return t.a.createElement(m.a,{theme:e==="Light"?D:f},t.a.createElement(M,null),t.a.createElement(c,null,t.a.createElement(O.a,null,t.a.createElement("div",{className:"btn"+e+" "+e+" btn btn"+e+"Mode",onClick:_},e==="Light"?t.a.createElement(P.a,{color:"white"}):t.a.createElement(L.a,null)),t.a.createElement(i.c,null,t.a.createElement(i.a,{path:"/lappa/register",component:()=>t.a.createElement(T,{theme:e})}),t.a.createElement(i.a,{path:"/lappa/",component:()=>t.a.createElement(v.a,{theme:e})})))))};g.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement("div",{className:"AppContainer"},t.a.createElement(I,null))),document.getElementById("root")),h(),navigator.serviceWorker.register("../sw.js")}},[[43,1,2]]]);

//# sourceMappingURL=main.01fda40a.chunk.js.map
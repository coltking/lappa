(this.webpackJsonplappa=this.webpackJsonplappa||[]).push([[0],{100:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/9.593f74b5.jpg"},101:function(m,o,t){"use strict";t.r(o);var g=t(0),e=t.n(g),C=t(36),N=t.n(C),M=a=>{a&&a instanceof Function&&t.e(3).then(t.bind(null,110)).then(({getCLS:n,getFID:r,getFCP:d,getLCP:c,getTTFB:u})=>{n(a),r(a),d(a),c(a),u(a)})},Ne=t(46),G=t(19),v=t(2),je=t(47),U=t(10),A=t.n(U),x=t(20),W=Object.defineProperty,V=Object.prototype.hasOwnProperty,T=Object.getOwnPropertySymbols,J=Object.prototype.propertyIsEnumerable,I=(a,n,r)=>n in a?W(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,h=(a,n)=>{for(var r in n||(n={}))V.call(n,r)&&I(a,r,n[r]);if(T)for(var r of T(n))J.call(n,r)&&I(a,r,n[r]);return a},Q=(a,n,r)=>new Promise((d,c)=>{var u=l=>{try{i(r.next(l))}catch(E){c(E)}},s=l=>{try{i(r.throw(l))}catch(E){c(E)}},i=l=>l.done?d(l.value):Promise.resolve(l.value).then(u,s);i((r=r.apply(a,n)).next())});const P="https://validacion.hgtsa.com.ar/lappa/localidades/sugerenciaget?localidad=",z={withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}};var $=({theme:a})=>{const n=Object(v.f)(),[r,d]=Object(g.useState)([]),[c,u]=Object(g.useState)([]),[s,i]=Object(g.useState)({idOrigen:null,idDestino:null,origen:"",destino:""}),l=(p,O)=>{O[0]?i(h(h({},s),{origen:p,idOrigen:O[0].id})):(i(h(h({},s),{origen:p,idOrigen:null})),D())},E=(p,O)=>{O[0]?i(h(h({},s),{destino:p,idDestino:O[0].id})):(i(h(h({},s),{destino:p,idDestino:null})),D())},j=p=>{},f=p=>{},y=p=>{i(h(h({},s),{origen:p.name,idOrigen:p.id})),console.log("seleccioneOrigen")},fe=p=>{i(h(h({},s),{destino:p.name,idDestino:p.id})),console.log("seleccioneDestino",s)},he=()=>{},Ee=()=>{},Oe=()=>{s.idOrigen&&s.idDestino?n.push("/buscar?origen="+s.idOrigen+"&destino="+s.idDestino+"&pagina=1"):alert("No hay coincidencias con esa busqueda.")};function D(){return Q(this,null,function*(){yield A.a.get(P+s.origen,{options:z}).then(p=>{let O=[];p.data.map((b,ye)=>(O.push({id:b.id,name:b.name}),b)),d(O)}),yield A.a.get(P+s.destino,{options:z}).then(p=>{let O=[];p.data.map((b,ye)=>(O.push({id:b.id,name:b.name}),b)),u(O)})})}return Object(g.useEffect)(()=>{D()},[s.origen,s.destino]),e.a.createElement("div",{className:"homeContainer"},e.a.createElement("div",{className:"rsac1",style:{width:"40vw"}},e.a.createElement(x.ReactSearchAutocomplete,{placeholder:"Origen",items:r,onSearch:l,onHover:j,onSelect:y,onFocus:he,autoFocus:!0})),e.a.createElement("div",{className:"rsac2",style:{width:"40vw"}},e.a.createElement(x.ReactSearchAutocomplete,{placeholder:"Destino",items:c,onSearch:E,onHover:f,onSelect:fe,onFocus:Ee,autoFocus:!0})),e.a.createElement("div",{className:"buscar btn"+a+" btnTransportista "+a,onClick:Oe},e.a.createElement("div",null,"Buscar")))},R=t(12);const K={body:"#fff",fontColor:"#000"},X={body:"#53575a",fontColor:"#fff"},Y=R.b`

body {
    background-color: ${a=>a.theme.body};
}
`;var Se=t(82),Ce=t(83),Z=Object.defineProperty,w=Object.prototype.hasOwnProperty,L=Object.getOwnPropertySymbols,k=Object.prototype.propertyIsEnumerable,B=(a,n,r)=>n in a?Z(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,H=(a,n)=>{for(var r in n||(n={}))w.call(n,r)&&B(a,r,n[r]);if(L)for(var r of L(n))k.call(n,r)&&B(a,r,n[r]);return a},q=({theme:a,animation:n,setAnimation:r})=>{const d=Object(v.f)(),[c,u]=Object(g.useState)({empresa:"",cuit:"",telefono:"",ubicacion:""});Object(g.useEffect)(()=>{const l=document.querySelector(".formulario");switch(n){case!0:l.style.animation="haciaAbajo 1s 1",l.style.height="70vh",r(null);break;case!1:l.style.animation="haciaArriba 1s 1",r(null);break;default:break}},[n]);const s=l=>{u(H(H({},c),{[l.target.name]:l.target.value}))},i=l=>{c.empresa===""||c.cuit===""||c.telefono===""||c.ubicacion===""?alert("Hay campos sin rellenar, revise el formulario."):d.push("/registered")};return e.a.createElement("div",{className:"registerContainer"},e.a.createElement("div",{className:"col"},e.a.createElement("p",{className:"titulo"},"REGISTRO DE UNA NUEVA EMPRESA")),e.a.createElement("div",{className:"formulario"},e.a.createElement("div",null,e.a.createElement("div",{className:"col"},e.a.createElement("p",{className:"titulo"},"EMPRESA"),e.a.createElement("input",{type:"text",placeholder:"ej: CMPCP S.A.",className:"form-input "+a,onChange:s,name:"empresa"})),e.a.createElement("div",{className:"col"},e.a.createElement("p",{className:"titulo"},"CUIT"),e.a.createElement("input",{type:"text",placeholder:"ej: 11-11111111-1",className:"form-input "+a,onChange:s,name:"cuit"})),e.a.createElement("div",{className:"col"},e.a.createElement("p",{className:"titulo"},"TELEFONO"),e.a.createElement("input",{type:"tel",placeholder:"Whatsapp",className:"form-input "+a,onChange:s,name:"telefono"})),e.a.createElement("div",{className:"col"},e.a.createElement("p",{className:"titulo"},"LOCALIDAD"),e.a.createElement("input",{type:"text",placeholder:"ej: Rosario, Santa Fe, Argentina",className:"form-input "+a,onChange:s,name:"ubicacion"})),e.a.createElement("div",{className:"col",style:{marginTop:"20vh"}},e.a.createElement("button",{style:{padding:"20px 10px",fontSize:"2vh"},className:"btn"+a+" "+a,onClick:i},"COMPLETAR REGISTRO")))))},_=t(102),Re=t(84),ee=({theme:a})=>{const n=Object(v.f)();return e.a.createElement("div",{className:"registerContainer"},e.a.createElement("p",{className:"texta"},"REGISTRO INICIADO"),e.a.createElement("p",{className:"textb"},"en breve recibira un mensaje"),e.a.createElement("p",{className:"textob"},"para continuar con el proceso."),e.a.createElement("div",{className:"btn btn"+a+" "+a+" regresar",onClick:()=>{n.push("/")}},e.a.createElement(_.a,null),e.a.createElement("div",null,"inicio")))},xe=t(85),te=t(103),F=t.p+"static/media/Light.3d9890ff.png",ae=t.p+"static/media/Dark.42aede08.png",ne=({theme:a})=>{const n=Object(v.f)(),r=F,d=ae;return e.a.createElement("div",{className:"navBar"},e.a.createElement("img",{className:"LappaLogo",src:F,alt:"LAPPA, buscador de transportes, logo",onClick:()=>{n.push("/")}}),e.a.createElement("div",{className:"btn"+a+" btnTransportista "+a,onClick:()=>{n.push("/transportista")}},e.a.createElement(te.a,{size:"3vh"}),e.a.createElement("div",{size:"5vh"},"Soy Transportista")))},re=t(104),oe=t(105),Ie=t(86),se=({theme:a})=>{const n=Object(v.f)();return e.a.createElement("div",{className:"transpContainer"},e.a.createElement("div",{className:"btn"+a+" btnTransportista "+a,onClick:()=>{n.push("/register")}},e.a.createElement(re.a,{size:"3vh"}),e.a.createElement("div",{size:"5vh"},"Quiero registrarme")),e.a.createElement("div",{className:"btn"+a+" btnTransportista "+a,onClick:()=>{n.push("/login")}},e.a.createElement(oe.a,{size:"3vh"}),e.a.createElement("div",{size:"5vh"},"Quiero ingresar")))},le=t(40),ie=t.n(le),ze=t(88),ce=t(106),me=t(107),de=t(108),ue=t(109),pe=(a,n,r)=>new Promise((d,c)=>{var u=l=>{try{i(r.next(l))}catch(E){c(E)}},s=l=>{try{i(r.throw(l))}catch(E){c(E)}},i=l=>l.done?d(l.value):Promise.resolve(l.value).then(u,s);i((r=r.apply(a,n)).next())});function ge(){const a={withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}},n="https://validacion.hgtsa.com.ar/lappa/transportista/buscadorget",[r,d]=Object(g.useState)({origen:"",destino:"",total:0,pagina:0,paginas:0,transportistas:[{id:0,web:"",razon:"",nombre:"",telefono:"",email:"",categoria:null}]}),{search:c}=Object(v.g)(),u=Object(v.f)(),s=ie.a.parse(c);Object(g.useEffect)(()=>{function j(){return pe(this,null,function*(){yield A.a.get(n+"?loc1="+s.origen+"&loc2="+s.destino+"&pagina="+s.pagina,{options:a}).then(f=>{console.log(f.data),d(f.data)})})}j()},[r]);const i=()=>e.a.createElement("div",{className:"pagina"},e.a.createElement("div",null,e.a.createElement("p",null,r.origen),e.a.createElement("p",null,e.a.createElement(ce.a,null)),e.a.createElement("p",null,r.destino)),r.total>0?e.a.createElement(E,{lista:r.transportistas}):e.a.createElement("p",null,"No se encontraron resultados.")),l=({paginas:j})=>{var f=[];for(let y=0;y<j;y++)f.push(y);return console.log(f),e.a.createElement("div",{className:"paginas"},e.a.createElement("a",{onClick:()=>{s.pagina>1&&(d({origen:"",destino:"",total:0,pagina:0,paginas:0,transportistas:[{id:0,web:"",razon:"",nombre:"",telefono:"",email:"",categoria:null}]}),u.push("?origen="+ +s.origen+"&destino="+s.destino+"&pagina="+(parseInt(s.pagina)-1)),u.go(0))}},e.a.createElement(me.a,null)),f.map(y=>e.a.createElement("a",{onClick:()=>{d({origen:"",destino:"",total:0,pagina:0,paginas:0,transportistas:[{id:0,web:"",razon:"",nombre:"",telefono:"",email:"",categoria:null}]}),u.push("?origen="+ +s.origen+"&destino="+s.destino+"&pagina="+(y+1)),u.go(0)}},y+1)),e.a.createElement("a",{onClick:()=>{s.pagina<r.paginas&&(d({origen:"",destino:"",total:0,pagina:0,paginas:0,transportistas:[{id:0,web:"",razon:"",nombre:"",telefono:"",email:"",categoria:null}]}),u.push("?origen="+ +s.origen+"&destino="+s.destino+"&pagina="+(parseInt(s.pagina)+1)),u.go(0))}},e.a.createElement(de.a,null)))},E=({lista:j})=>e.a.createElement("div",{className:"transportistasList"},j.map((f,y)=>e.a.createElement("div",{className:"card"},e.a.createElement("p",{className:"razon"},f.razon),e.a.createElement("div",{className:"nombre"},f.nombre),e.a.createElement("div",{className:"telefono"},f.telefono),e.a.createElement("div",{className:"email"},f.email),y<=1?e.a.createElement(ue.a,{size:"3vh",style:{alignSelf:"flex-end",color:"lime"}}):void 0)));return e.a.createElement("div",{className:"container"},r.origen===""?e.a.createElement("p",null,"CARGANDO RESULTADOS..."):e.a.createElement("div",null,e.a.createElement(i,null),e.a.createElement(l,{paginas:r.paginas})))}var ve=()=>{const a=t(89)("./"+s(1,12)+".jpg").default,[n,r]=Object(g.useState)("Light"),[d,c]=Object(g.useState)(!0);Object(g.useEffect)(()=>{r("Dark")},[]);const u=R.c.div`
    color: ${i=>i.theme.fontColor};
    display: flex;
    flex-direction: column;
    width: 100vw
    `;function s(i,l){return Math.floor(Math.random()*(l-i))+i}return e.a.createElement(R.a,{theme:n==="Light"?K:X},e.a.createElement(Y,null),e.a.createElement("div",{style:{display:"flex",position:"absolute",zIndex:-1,opacity:.3,backgroundImage:"url("+a+")",backgroundSize:"cover",width:"100vw",height:"100vh",transition:"opacity 1s",opacity:1}}),e.a.createElement("div",{style:{zIndex:1,display:"flex"}},e.a.createElement(u,null,e.a.createElement(G.a,null,e.a.createElement(ne,{theme:n,setAnimation:c}),e.a.createElement(v.c,null,e.a.createElement(v.a,{exact:!0,path:"/registered",component:()=>e.a.createElement(ee,{theme:n,animation:d,setAnimation:c})}),e.a.createElement(v.a,{exact:!0,path:"/register",component:()=>e.a.createElement(q,{theme:n,animation:d,setAnimation:c})}),e.a.createElement(v.a,{exact:!0,path:"/transportista",component:()=>e.a.createElement(se,{theme:n})}),e.a.createElement(v.a,{path:"/buscar",component:()=>e.a.createElement(ge,{theme:n})}),e.a.createElement(v.a,{path:"/",component:()=>e.a.createElement($,{theme:n,globalAnimationState:d,setAnimation:c})}))))))};N.a.render(e.a.createElement(e.a.StrictMode,null,e.a.createElement("div",{className:"AppContainer"},e.a.createElement(ve,null))),document.getElementById("root")),M(),navigator.serviceWorker.register("../sw.js")},46:function(m,o,t){},47:function(m,o,t){},82:function(m,o,t){},83:function(m,o,t){},84:function(m,o,t){},85:function(m,o,t){},86:function(m,o,t){},88:function(m,o,t){},89:function(m,o,t){var g={"./1.jpg":90,"./10.jpg":91,"./11.jpg":92,"./2.jpg":93,"./3.jpg":94,"./4.jpg":95,"./5.jpg":96,"./6.jpg":97,"./7.jpg":98,"./8.jpg":99,"./9.jpg":100};function e(N){var S=C(N);return t(S)}function C(N){if(!t.o(g,N)){var S=new Error("Cannot find module '"+N+"'");throw S.code="MODULE_NOT_FOUND",S}return g[N]}e.keys=function(){return Object.keys(g)},e.resolve=C,m.exports=e,e.id=89},90:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/1.8ddd3631.jpg"},91:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/10.48811f71.jpg"},92:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/11.23f1d4eb.jpg"},93:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/2.4f7321b8.jpg"},94:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/3.29fe9081.jpg"},95:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/4.08f56620.jpg"},96:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/5.e7cfdb61.jpg"},97:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/6.68c5e0a2.jpg"},98:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/7.1b842fc8.jpg"},99:function(m,o,t){"use strict";t.r(o),o.default=t.p+"static/media/8.505d9ff6.jpg"}},[[101,1,2]]]);

//# sourceMappingURL=main.6b53e2ea.chunk.js.map
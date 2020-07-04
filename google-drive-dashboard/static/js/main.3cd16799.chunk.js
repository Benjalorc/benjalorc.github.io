(this["webpackJsonpgoogle-drive-dashboard-react"]=this["webpackJsonpgoogle-drive-dashboard-react"]||[]).push([[0],{38:function(e,a,t){e.exports=t(63)},49:function(e,a,t){},51:function(e,a,t){},60:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),s=t(9),i=t(35),o=t(20);var m={user:{gUser:null,gAuth:null,username:null,imgUrl:null,isLogged:null},storage:{usage:{storageLimit:0,storageUsage:0,storageUsageDrive:0,storageUsageTrash:0},uploads:{maxUploadSize:0},imports:{document:0,draw:0,spreadsheet:0,presentation:0}},changes:{token:"",list:[]},files:{token:"",list:{docs:[],sheets:[],presentations:[],drawings:[]}},status:null};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object.assign({},e,{user:a.payload});case"LOAD_STORAGE":return Object.assign({},e,{storage:a.payload});case"UPDATE_CHANGES_TOKEN":return Object.assign({},e,{changes:a.payload});case"UPDATE_FILES_TOKEN":var t={token:a.payload.token,list:{docs:e.files.list.docs.concat(a.payload.list.docs),sheets:e.files.list.sheets.concat(a.payload.list.sheets),presentations:e.files.list.presentations.concat(a.payload.list.presentations),drawings:e.files.list.drawings.concat(a.payload.list.drawings)}};return Object.assign({},e,{files:t});case"CLEAR_STORE":return Object.assign({},e,{user:{gUser:null,gAuth:null,username:null,imgUrl:null,isLogged:null},storage:{usage:{storageLimit:0,storageUsage:0,storageUsageDrive:0,storageUsageTrash:0},uploads:{maxUploadSize:0},imports:{document:0,draw:0,spreadsheet:0,presentation:0}},changes:{token:"",list:[]},files:{token:"",list:{docs:[],sheets:[],presentations:[],drawings:[]}},status:null},{user:a.payload});default:return e}},u=Object(o.c)(d,Object(o.a)(i.a)),g=t(18),p=t(8),E=(t(47),t(48),t(49),t(14)),f=t(12),v=t.n(f),h=t(17);function b(e){return{type:"SET_USER",payload:e}}function N(e,a){return{type:e,payload:a}}function w(){return new Promise((function(e,a){var t=setInterval((function(){window.gapi.client&&window.gapi.client.drive&&(setTimeout((function(){e(!0)})),clearInterval(t))}),1e3)}))}function k(e){return function(){var a=Object(h.a)(v.a.mark((function a(t){var n,r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=window.gapi,r={pageSize:5,pageToken:e,fields:"nextPageToken, files, files/webViewLink, files/name, files/modifiedTime, files/mimeType",q:"mimeType='application/vnd.google-apps.document' or mimeType='application/vnd.google-apps.spreadsheet' or mimeType='application/vnd.google-apps.presentation' or mimeType='application/vnd.google-apps.drawing'",orderBy:"modifiedTime desc"},a.next=4,w();case 4:return a.abrupt("return",n.client.drive.files.list(r).then((function(e){if(200===e.status){var a=[],n=[],r=[],c=[];e.result.files.forEach((function(e){switch(e.time=new Date(e.modifiedTime),e.mimeType){case"application/vnd.google-apps.document":a.push(e);break;case"application/vnd.google-apps.spreadsheet":n.push(e);break;case"application/vnd.google-apps.presentation":r.push(e);break;case"application/vnd.google-apps.drawing":c.push(e)}}));var l={token:e.result.nextPageToken||!1,list:{docs:a,sheets:n,presentations:r,drawings:c}};t(N("UPDATE_FILES_TOKEN",l))}})));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}t(51);var x=t(36),y=t(64),O=t(65),j=t(66),T=t(67),U=[{src:"images/slide-1-transparent.png",altText:"Slide 1",caption:"Acceso f\xe1cil a documentos"},{src:"images/slide-2-transparent.png",altText:"Slide 2",caption:"Pr\xe1cticas estad\xedsticas"},{src:"images/slide-3-transparent.png",altText:"Slide 3",caption:"Haga click para comenzar!"}];function C(){var e=Object(n.useState)(0),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(E.a)(l,2),i=s[0],o=s[1],m=function(){if(!i){var e=t===U.length-1?0:t+1;c(e)}},d=function(){if(!i){var e=0===t?U.length-1:t-1;c(e)}},u=U.map((function(e){return r.a.createElement(x.a,{onExiting:function(){return o(!0)},onExited:function(){return o(!1)},key:e.src},r.a.createElement("img",{src:e.src,alt:e.altText}),r.a.createElement(y.a,{captionHeader:e.caption,captionText:""}))}));return r.a.createElement(O.a,{activeIndex:t,next:m,previous:d},r.a.createElement(j.a,{items:U,activeIndex:t,onClickHandler:function(e){i||c(e)}}),u,r.a.createElement(T.a,{direction:"prev",directionText:"Previous",onClickHandler:d}),r.a.createElement(T.a,{direction:"next",directionText:"Next",onClickHandler:m}))}function L(e){var a=e.user,t=e.cambiarUsuario;return a&&a.isLogged?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 col-md-4"}),r.a.createElement("div",{className:"col-6 col-md-4 profilePic"},r.a.createElement("img",{className:"card-img-top profilePic",alt:"user",src:a.imgUrl,onClick:t}),r.a.createElement("span",{className:"overlay-switch",onClick:t},r.a.createElement("i",{className:"fa fa-exchange","aria-hidden":"true"}))),r.a.createElement("div",{className:"col-3 col-md-4"}),r.a.createElement("div",{className:"col-12"},r.a.createElement("h5",{className:"card-title"},"Bienvenido(a) ",a.username,"!"),r.a.createElement("p",{className:"card-text"},"Ya puede ingresar a su dashboard haciendo click en el bot\xf3n a continuaci\xf3n."),r.a.createElement(g.b,{to:"/dashboard",className:"btn btn-outline-success"},"Continuar"))):null}function S(e){var a=e.user,t=e.cambiarUsuario;return a&&a.isLogged?r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("span",{className:"wrongUserLink",onClick:t}," \xbfNo eres ",a.username,"? ")):null}var F=function(){var e=Object(n.useState)(!0),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(E.a)(l,2),o=i[0],m=i[1],d=Object(n.createRef)(window.gapi),u=Object(s.b)(),g=Object(s.c)((function(e){return e.user}));function p(){if(o)return!1;d.current.signin2.render("my-signin2",{scope:"profile email",width:220,height:50,longtitle:!0,theme:"light",onsuccess:function(e){var a=e.getBasicProfile(),t={gUser:e,username:a.getName(),imgUrl:a.getImageUrl(),isLogged:!0};u(b(t)),c(!1)},onfailure:function(e){console.log(e),c(!1)}});!function e(){setTimeout((function(){var a=document.querySelector("#my-signin2 > div");a?a.addEventListener("click",(function(){c(!0)})):e()}),1e3)}(),m(!0),c(!1)}function f(){document.querySelector("#my-signin2 > div").click()}return d.current?p():new Promise((function(e,a){var t=setInterval((function(){window.gapi&&(d.current=window.gapi,clearInterval(t),e(!0))}),1e3)})).then((function(){return p()})),r.a.createElement("div",{className:"row login"},r.a.createElement("div",{className:"col-12 col-md-3"}),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("div",{className:"card bg-white text-center box-shadow-1"},r.a.createElement("div",{className:"card-header"},r.a.createElement(C,null),g.isLogged?r.a.createElement("span",null,r.a.createElement("span",{className:"golden"}," ",r.a.createElement("i",{className:"fa fa-key","aria-hidden":"true"})," "),"Acceso Autorizado"):null),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"my-signin2"}))),r.a.createElement(L,{user:g,cambiarUsuario:f})),r.a.createElement(S,{user:g,cambiarUsuario:f}),t?r.a.createElement("div",{className:"backdropLogin"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})):null)),r.a.createElement("div",{className:"col-12 col-md-3"}))},D=(t(60),t(37)),A=t(71),P=t(72),I=t(73),_=t(74),R=t(75),B=t(76),z=t(68),G=t(69),H=t(70);function M(){var e=Object(s.c)((function(e){return e.files.list}));return r.a.createElement("div",{className:"row spacing-1"},r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"card text-center border-info bg-light"},r.a.createElement("a",{href:"https://docs.google.com/documents/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"card-img-top link",src:"images/docs.png",alt:"Google Docs"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Documentos")),r.a.createElement("div",{className:"card-footer border-info text-muted"},r.a.createElement("h2",null,e.docs.length)))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"card text-center border-success bg-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"card-img-top link",src:"images/spreadsheets.png",alt:"Google Sheets"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Hojas de C\xe1lculo")),r.a.createElement("div",{className:"card-footer border-success text-muted"},r.a.createElement("h2",null,e.sheets.length)))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"card text-center border-warning bg-light"},r.a.createElement("a",{href:"https://docs.google.com/presentation/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"card-img-top link",src:"images/slides.png",alt:"Google Presentations"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Presentaciones")),r.a.createElement("div",{className:"card-footer border-warning text-muted"},r.a.createElement("h2",null,e.presentations.length)))),r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3"},r.a.createElement("div",{className:"card text-center border-danger bg-light"},r.a.createElement("a",{href:"https://drive.google.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"card-img-top link",src:"images/drawings.png",alt:"Google Drawings"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Drawings")),r.a.createElement("div",{className:"card-footer border-danger text-muted"},r.a.createElement("h2",null,e.drawings.length)))))}function V(e){var a=e.files,t=e.short,n=e.titulo;if(t){return[0,1,2,3,4].map((function(e){var t=a[e];return t?r.a.createElement("tr",{key:"".concat(n,"-").concat(e+1)},r.a.createElement("th",{scope:"row"},e+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null," ",r.a.createElement("a",{href:t.webViewLink,target:"_blank",rel:"noopener noreferrer"},"Ver")," "),r.a.createElement("td",null,t.time.getDate(),"-",t.time.getMonth()+1,"-",t.time.getFullYear())):null}))}return a.map((function(e,a){return r.a.createElement("tr",{key:"".concat(n,"-").concat(a+1)},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null," ",r.a.createElement("a",{href:e.webViewLink,target:"_blank",rel:"noopener noreferrer"},"Ver")," "),r.a.createElement("td",null,e.time.getDate(),"-",e.time.getMonth()+1,"-",e.time.getFullYear()))}))}function K(e){var a=e.files,t=e.titulo,n=e.tableClass,c=void 0===n?"table-responsive":n,l=e.short,s=void 0===l||l;return a&&a.length?r.a.createElement("div",{className:c},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Ubicacion"),r.a.createElement("th",{scope:"col"},"Modificado"))),r.a.createElement("tbody",null,r.a.createElement(V,{files:a,short:s,titulo:t})))):r.a.createElement("p",{className:"card-text"},"No hay documentos que mostrar")}function q(e){var a=e.listado,t=e.titulo,c=Object(n.useState)(!1),l=Object(E.a)(c,2),s=l[0],i=l[1],o=function(){return i(!s)};return a.length<=5?r.a.createElement("button",{type:"button",className:"btn btn-outline-light",disabled:!0},r.a.createElement("i",{className:"fa fa-folder-o"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-light",onClick:o},r.a.createElement("i",{className:"fa fa-folder-open-o"})),r.a.createElement(B.a,{isOpen:s,size:"lg",toggle:o},r.a.createElement(z.a,{toggle:o},t),r.a.createElement(G.a,null,r.a.createElement(K,{files:a,titulo:t,tableClass:"table-responsive modal-table",short:!1})),r.a.createElement(H.a,null,r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:o},"Cerrar"))))}function Y(e){var a=e.files,t=e.cardClass,n=e.headerClass,c=e.titulo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t},r.a.createElement("div",{className:n},r.a.createElement(q,{listado:a,titulo:c}),c),r.a.createElement("div",{className:"card-body"},r.a.createElement(K,{files:a,titulo:c}))))}function J(e){var a=e.doneLoading,t=Object(s.b)(),c=Object(s.c)((function(e){return e.files}));return Object(n.useEffect)((function(){c.token&&""!==c.token?t(k(c.token)):!1===c.token&&a(!0)}),[c,t,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row spacing-1"},r.a.createElement("div",{className:"col-12 col-lg-6 spacing-2"},r.a.createElement(Y,{files:c.list.docs,cardClass:"card border-primary bg-light mb-3",headerClass:"card-header bg-primary text-white",titulo:"Documentos"})),r.a.createElement("div",{className:"col-12 col-lg-6 spacing-2"},r.a.createElement(Y,{files:c.list.presentations,cardClass:"card border-warning bg-light mb-3",headerClass:"card-header bg-warning text-white",titulo:"Presentaciones"}))),r.a.createElement("div",{className:"row spacing-1"},r.a.createElement("div",{className:"col-12 col-lg-6 spacing-2"},r.a.createElement(Y,{files:c.list.sheets,cardClass:"card border-success bg-light mb-3",headerClass:"card-header bg-success text-white",titulo:"Hojas de C\xe1lculo"})),r.a.createElement("div",{className:"col-12 col-lg-6 spacing-2"},r.a.createElement(Y,{files:c.list.drawings,cardClass:"card border-danger bg-light mb-3",headerClass:"card-header bg-danger text-white",titulo:"Drawings"}))))}function Q(){var e=Object(s.c)((function(e){return e.storage})),a=Object(n.useRef)(null),t=Object(n.useRef)(null),c=Object(n.useRef)(null),l=Object(n.createRef)(null),i=Object(n.createRef)(null),o=Object(n.createRef)(null);if(!e||!e.usage)return null;var m=e.usage;function d(e,a,t){return new D.Chart(e,{type:a,data:t,options:{legend:{display:!1},scales:{xAxes:[{display:!0}],yAxes:[{display:!0}]}}})}return setTimeout((function(){!function(){if(!l.current&&a.current){var e={labels:["En uso","Disponible"],datasets:[{data:[m.storageUsage,m.storageLimit-m.storageUsage],backgroundColor:["red","#0000FF"]}]};l.current=d(a.current,"pie",e)}}(),function(){if(!i.current&&a.current){var e={labels:["En Drive","Otros"],datasets:[{data:[m.storageUsageDrive,m.storageLimit-m.storageUsageDrive],backgroundColor:["black","#00FF99"]}]};i.current=d(t.current,"pie",e)}}(),function(){if(!o.current&&a.current){var e={labels:["Papelera","Otros"],datasets:[{data:[m.storageUsageTrash,m.storageLimit-m.storageUsageTrash],backgroundColor:["black","#3333FF"]}]};o.current=d(c.current,"pie",e)}}()}),1e3),r.a.createElement("div",{className:"row spacing-1"},r.a.createElement("div",{className:"col-12 col-md-4 spacing-2"},r.a.createElement("div",{className:"card text-center border-success bg-transparent"},r.a.createElement("div",{className:"card-header"},"Almacenamiento total"),r.a.createElement("div",{className:"card-body"},r.a.createElement("canvas",{id:"driveChartCanvas",ref:a,width:"200",height:"200"})),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("p",null," ",m.storageUsage," / ",m.storageLimit," GB ")))),r.a.createElement("div",{className:"col-12 col-md-4 spacing-2"},r.a.createElement("div",{className:"card text-center border-info bg-light"},r.a.createElement("div",{className:"card-header"},"Almacenamiento en Drive"),r.a.createElement("div",{className:"card-body"},r.a.createElement("canvas",{id:"driveChartCanvas",ref:t,width:"200",height:"200"})),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("p",null," ",m.storageUsageDrive," / ",m.storageLimit," GB ")))),r.a.createElement("div",{className:"col-12 col-md-4 spacing-2"},r.a.createElement("div",{className:"card text-center border-info bg-light"},r.a.createElement("div",{className:"card-header"},"Almacenamiento en Papelera"),r.a.createElement("div",{className:"card-body"},r.a.createElement("canvas",{id:"trashChartCanvas",ref:c,width:"200",height:"200"})),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("p",null," ",m.storageUsageTrash," / ",m.storageLimit," GB ")))))}function W(){var e=Object(s.c)((function(e){return e.storage}));return r.a.createElement("div",{className:"card text-white bg-info mb-3"},r.a.createElement("div",{className:"card-header"},"L\xedmites de tama\xf1o de archivos"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null," ",r.a.createElement("strong",null,"Subidas: ")," ",e.uploads.maxUploadSize," TB"),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Documentos importados: ")," ",e.imports.document," MB"),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Presentaciones importadas: ")," ",e.imports.presentation," MB"),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Hojas de C\xe1lculo importadas: ")," ",e.imports.spreadsheet," MB"),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Drawings importados: ")," ",e.imports.draw," MB")))}function $(e){var a=e.changes;return a&&a.length?r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Nombre"),r.a.createElement("th",{scope:"col"},"Ubicacion"),r.a.createElement("th",{scope:"col"},"Modificado"))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:"changes-".concat(a+1)},r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null," ",r.a.createElement("a",{href:e.webViewLink,target:"_blank",rel:"noopener noreferrer"},"Ver")," "),r.a.createElement("td",null,e.time.getDate(),"-",e.time.getMonth()+1,"-",e.time.getFullYear()))}))))):r.a.createElement("p",{className:"card-text"},"No hay cambios en archivos que mostrar")}function X(){var e=Object(s.c)((function(e){return e.changes})),a=Object(n.useState)("1"),t=Object(E.a)(a,2),c=t[0],l=t[1];return r.a.createElement("div",{className:"card border-warning bg-transparent"},r.a.createElement("div",{className:"card-body"},r.a.createElement(A.a,{tabs:!0},r.a.createElement(P.a,null,r.a.createElement(I.a,{className:"".concat("1"===c?"active":""),onClick:function(){var e;c!==(e="1")&&l(e)}},"Cambios recientes en archivos"))),r.a.createElement(_.a,{activeTab:c},r.a.createElement(R.a,{tabId:"1"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement($,{changes:e.list})))))))}function Z(e){var a=e.logginOut,t=Object(s.c)((function(e){return e.user})),c=Object(n.useRef)(),l=Object(s.b)();if(!t||!t.gUser)return null;var i=t.gUser.getBasicProfile(),o=i.getEmail(),m=i.getName(),d=i.getImageUrl();function u(){a(),g(),l(function(){var e=window.gapi.auth2.getAuthInstance();return function(a){return e.signOut().then((function(){setTimeout((function(){a({type:"CLEAR_STORE",payload:{isLogged:!1}})}),1500)}))}}())}function g(){c.current.classList.contains("open")?c.current.classList.remove("open"):c.current.classList.add("open")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidenav",ref:c,id:"mySidenav"},r.a.createElement("div",{className:"card bg-light"},r.a.createElement("div",{className:"card-header"},r.a.createElement("i",{className:"fa fa-user-circle-o"})," Usuario"),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement("i",{className:"fa fa-address-card-o"})," Nombre:"),r.a.createElement("p",null,m),r.a.createElement("p",{className:"card-text"},r.a.createElement("i",{className:"fa fa-envelope-open-o"})," E-mail:"),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:function(){return u()}},r.a.createElement("i",{className:"fa fa-sign-out"}),"Salir")))),r.a.createElement("div",{className:"dash-backdrop",onClick:function(){return g()}}),r.a.createElement("div",{className:"floating-special",onClick:function(){return g()}},r.a.createElement("img",{src:d,className:"profilePic",alt:"profile_pic"})))}var ee=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],c=a[1],l=Object(n.useRef)(null),i=Object(n.useRef)(null),o=Object(p.f)(),m=Object(s.b)(),d=Object(s.c)((function(e){return e.user}));return Object(n.useEffect)((function(){m(function(){var e=Object(h.a)(v.a.mark((function e(a){var t,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){var t=setInterval((function(){window.gapi&&(setTimeout((function(){e(!0)})),clearInterval(t))}),1e3)}));case 2:return t=window.gapi,n=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],c=function(){var e=Object(h.a)(v.a.mark((function e(){var n,c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.auth2.getAuthInstance()).isSignedIn.get()){e.next=11;break}return n=r.currentUser.get(),c=n.getBasicProfile(),l={gUser:n,gAuth:r,username:c.getName(),imgUrl:c.getImageUrl(),isLogged:!0},e.next=8,w();case 8:return e.abrupt("return",t.client.drive.changes.getStartPageToken().then((function(e){var t=e.result.startPageToken;a(N("UPDATE_CHANGES_TOKEN",{token:t,list:[]})),a(b(l))})));case 11:a(b({isLogged:!1}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.abrupt("return",t.client.init({apiKey:"AIzaSyAEdrFiBDNK-HVnj5qxU7gMNcN58zpkR_c",clientId:"774012725108-tnnusra4io75rsiih2jsp8ukch4j1auu.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/drive",discoveryDocs:n}).then(c));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[m]),Object(n.useEffect)((function(){!0!==d.isLogged||t?!1===d.isLogged&&o.push("/"):(l.current.classList.remove("loading"),i.current.classList.add("loading"),m(function(){var e=Object(h.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t={fields:"storageQuota, maxUploadSize, maxImportSizes"},n=window.gapi,e.abrupt("return",n.client.drive.about.get(t).then((function(e){if(200===e.status){var t=e.result.storageQuota,n=e.result.maxImportSizes,r={storageLimit:t.limit?parseFloat((t.limit/1073741824).toFixed(2)):0,storageUsage:t.usage?parseFloat((t.usage/1073741824).toFixed(2)):0,storageUsageDrive:t.usageInDrive?parseFloat((t.usageInDrive/1073741824).toFixed(2)):0,storageUsageTrash:t.usageInTrash?parseFloat((t.usageInTrash/1073741824).toFixed(2)):0},c={maxUploadSize:e.result.maxUploadSize?parseFloat((e.result.maxUploadSize/1024/1024/1024/1024).toFixed(2)):0},l=n["application/vnd.google-apps.document"],s=n["application/vnd.google-apps.drawing"],i=n["application/vnd.google-apps.spreadsheet"],o=n["application/vnd.google-apps.presentation"],m={document:parseFloat(l)?(parseFloat(l)/1048576).toFixed(2):0,draw:parseFloat(s)?(parseFloat(s)/1048576).toFixed(2):0,spreadsheet:parseFloat(i)?(parseFloat(i)/1048576).toFixed(2):0,presentation:parseFloat(o)?(parseFloat(o)/1048576).toFixed(2):0};a({type:"LOAD_STORAGE",payload:{usage:r,uploads:c,imports:m}})}})));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),m(function(){var e=Object(h.a)(v.a.mark((function e(a){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.gapi,n={fields:"nextPageToken, files, files/webViewLink, files/name, files/modifiedTime",orderBy:"modifiedTime desc",pageSize:5},e.next=4,w();case 4:return e.abrupt("return",t.client.drive.files.list(n).then((function(e){if(200===e.status){var t=[];e.result.files.forEach((function(e){e.time=new Date(e.modifiedTime),t.push(e)})),a(N("UPDATE_CHANGES_TOKEN",{token:e.result.nextPageToken,list:t}))}})));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),m(k("")),c(!0))}),[d.isLogged,t,m,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement(Q,null),r.a.createElement("div",{className:"row spacing-1"},r.a.createElement("div",{className:"col-12 col-md-4 spacing-2"},r.a.createElement(W,null)),r.a.createElement("div",{className:"col-12 col-md-8 spacing-2"},r.a.createElement(X,null))),r.a.createElement(J,{doneLoading:function(){return l.current.classList.remove("loading"),void i.current.classList.remove("loading")}}),r.a.createElement(Z,{logginOut:function(){l.current.classList.add("loading")}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:i,className:"loadingCorner"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"})),r.a.createElement("div",{ref:l,className:"dash-backdrop bd-2 loading"}),r.a.createElement("i",{className:"fa fa-spinner fa-spin"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,{store:u},r.a.createElement("div",{className:"container"},r.a.createElement(g.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/dashboard"},r.a.createElement(ee,null)),r.a.createElement(p.a,{path:"/"},r.a.createElement(F,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3cd16799.chunk.js.map
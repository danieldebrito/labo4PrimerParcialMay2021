(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{JJDU:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("lJxs"),i=n("fXoL"),o=n("I/3d");let a=(()=>{class e{constructor(e){this.db=e,this.ItemsCollection=this.db.collection("actores"),this.Items=this.ItemsCollection.snapshotChanges().pipe(Object(r.a)(e=>e.map(e=>{const t=e.payload.doc.data();return t.id=e.payload.doc.id,t})))}getItems(){return this.Items}deleteItem(e){this.ItemDoc=this.db.doc(`actores/${e.id}`),this.ItemDoc.delete()}addItem(e){this.ItemsCollection.add(e)}updateItem(e){this.ItemDoc=this.db.doc(`actores/${e.id}`),this.ItemDoc.update(e)}getfecha(){const e=new Date;return e.getDate().toString()+"/"+(e.getMonth()+1).toString()+"/"+e.getFullYear().toString()+" "+e.getHours().toString()+":"+e.getMinutes().toString()}}return e.\u0275fac=function(t){return new(t||e)(i.lc(o.a))},e.\u0275prov=i.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},SOcg:function(e,t,n){"use strict";n.r(t),n.d(t,"ActorModule",function(){return R});var r=n("ofXK"),i=n("3Pt+"),o=n("tyNb"),a=n("fXoL"),c=n("tk/3");let s=(()=>{class e{constructor(e){this.http=e,this.urlBase="https://restcountries.eu/rest/v2/region"}httpGetP(e){return this.http.get(this.urlBase+e).toPromise().then(this.extractData).catch(this.handleError)}httpDeleteP(e){return this.http.delete(this.urlBase+e).toPromise().then(this.extractData).catch(this.handleError)}httpPostP(e,t){return this.http.post(this.urlBase+e,t).toPromise()}httpGetO(e){return this.http.get(this.urlBase+e)}extractData(e){return e.json()||{}}handleError(e){return e}}return e.\u0275fac=function(t){return new(t||e)(a.lc(c.a))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),l=(()=>{class e{constructor(e){this.miHttp=e}ListarO(){return this.miHttp.httpGetO("/americas")}}return e.\u0275fac=function(t){return new(t||e)(a.lc(s))},e.\u0275prov=a.Ub({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n("oOf3");function p(e,t){if(1&e){const e=a.fc();a.ec(0,"tr"),a.ec(1,"td"),a.Qc(2),a.dc(),a.ec(3,"td"),a.Zb(4,"img",5),a.dc(),a.ec(5,"td"),a.ec(6,"button",6),a.oc("click",function(){a.Ic(e);const n=t.$implicit;return a.sc().enviarPais(n)}),a.Zb(7,"i",7),a.dc(),a.dc(),a.dc()}if(2&e){const e=t.$implicit;a.Lb(2),a.Sc(" ",e.name," "),a.Lb(2),a.Ac("src","",e.flag," ",a.Jc)}}const d=function(e){return{itemsPerPage:6,currentPage:e}};let g=(()=>{class e{constructor(e){this.paisesService=e,this.pasaPais=new a.r,this.p=1}enviarPais(e){this.pasaPais.emit({paisEnviado:e})}getPaises(){this.paisesService.ListarO().subscribe(e=>{this.paises=e})}ngOnInit(){this.getPaises()}}return e.\u0275fac=function(t){return new(t||e)(a.Yb(l))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-paises-tabla"]],outputs:{pasaPais:"pasaPais"},decls:14,vars:6,consts:[[1,"container-fluid"],[1,"table","table-bordered","table-sm"],["scope","col"],[4,"ngFor","ngForOf"],["previousLabel","Previo","nextLabel","Siguiente",3,"pageChange"],[3,"src"],["type","button",1,"btn","btn-success",3,"click"],[1,"fa","fa-eye"]],template:function(e,t){1&e&&(a.ec(0,"div",0),a.ec(1,"table",1),a.ec(2,"thead"),a.ec(3,"tr"),a.ec(4,"th",2),a.Qc(5,"Nombre"),a.dc(),a.ec(6,"th",2),a.Qc(7,"Bandera"),a.dc(),a.ec(8,"th",2),a.Qc(9,"Detalle"),a.dc(),a.dc(),a.dc(),a.ec(10,"tbody"),a.Oc(11,p,8,2,"tr",3),a.tc(12,"paginate"),a.dc(),a.dc(),a.ec(13,"pagination-controls",4),a.oc("pageChange",function(e){return t.p=e}),a.dc(),a.dc()),2&e&&(a.Lb(11),a.yc("ngForOf",a.vc(12,1,t.paises,a.Cc(4,d,t.p))))},directives:[r.l,u.c],pipes:[u.b],styles:["img[_ngcontent-%COMP%]{height:50px}"]}),e})();var f=n("JJDU");let m=(()=>{class e{constructor(){this.pais={}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Sb({type:e,selectors:[["app-pais-detalle"]],inputs:{pais:"pais"},decls:6,vars:2,consts:[[1,"card","text-dark","bg-light","mb-3",2,"max-width","18rem"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["alt","","srcset","",3,"src"]],template:function(e,t){1&e&&(a.ec(0,"div",0),a.ec(1,"div",1),a.ec(2,"h5",2),a.Qc(3),a.dc(),a.dc(),a.ec(4,"div",3),a.Zb(5,"img",4),a.dc(),a.dc()),2&e&&(a.Lb(3),a.Rc(t.pais.name),a.Lb(2),a.zc("src",t.pais.flag,a.Jc))},styles:["img[_ngcontent-%COMP%]{height:50px}"]}),e})();function h(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El nombre es requerido. "),a.dc())}function b(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El nombre debe tener al menos dos caracteres. "),a.dc())}function v(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El nombre puede tener cuarenta caracteres maxino. "),a.dc())}function y(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El nombre no puede contener espacios. "),a.dc())}function P(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El apellido es requerido "),a.dc())}function L(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El apellido puede tener cuarenta caracteres maxino. "),a.dc())}function x(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El sexo es requerido "),a.dc())}function I(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," La fecha de nacimiento es requerida "),a.dc())}function C(e,t){1&e&&(a.ec(0,"small",30),a.Qc(1," El pais es requerido "),a.dc())}let O=(()=>{class e{constructor(e){this.actoresSv=e,this.errorPais=!1,this.formulario=new i.h({nombre:new i.e("",[i.u.required,i.u.minLength(2),i.u.maxLength(40),i.u.pattern("[a-zA-Z ]{2,41}"),this.spacesValidator]),apellido:new i.e("",[i.u.required,i.u.maxLength(40),i.u.pattern("[a-zA-Z ]{1,41}")]),sexo:new i.e("",[i.u.required]),fechaNacimiento:new i.e("",[i.u.required]),foto:new i.e("/assets/actores/ted.jpg",[i.u.required]),terminos:new i.e("",[i.u.required])})}spacesValidator(e){return e.value.includes(" ")?{containsSpaces:!0}:null}resetFrom(){this.formulario.reset({nombre:"",apellido:"",sexo:"",fechaNacimiento:"",foto:"",terminos:""}),this.pais={}}cargarActor(){if(void 0===this.pais.name)this.errorPais=!0;else{this.errorPais=!1;let e=this.formulario.getRawValue();e.paisOrigen=this.pais,this.actoresSv.addItem(e),this.resetFrom()}}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Yb(f.a))},e.\u0275cmp=a.Sb({type:e,selectors:[["app-actor-alta"]],inputs:{pais:"pais"},decls:52,vars:12,consts:[[1,"mb-3"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-sm-3"],["src","/assets/actores/ted.jpg","alt","","srcset",""],[1,"col-sm-9"],[1,"col-sm-6"],["for","nombre",1,"form-label"],["type","text","id","nombre","placeholder","Ingrese nombre","formControlName","nombre",1,"form-control"],["class","invalid",4,"ngIf"],["for","apellido",1,"form-label"],["type","text","id","apellido","placeholder","Ingrese apellido","formControlName","apellido",1,"form-control"],[1,"col-md-2"],["for","sexo",1,"form-label"],["id","sexo","formControlName","sexo",1,"form-control"],["value",""],["value","F"],["value","M"],[1,"col-md-5"],["for","fechaNacimiento",1,"form-label"],["type","text","id","fechaNacimiento","placeholder","Ingrese fecha nacimiento","formControlName","fechaNacimiento",1,"form-control"],[1,"col-md-5","p-3"],[3,"pais"],[1,"my-4"],[1,"col-md-12","mb-5"],[1,"form-check"],["type","checkbox","id","terminos","formControlName","terminos",1,"form-check-input"],["for","terminos",1,"form-check-label"],[1,"col-md-12","d-grid","gap-2"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"invalid"]],template:function(e,t){1&e&&(a.ec(0,"h4",0),a.Qc(1,"Nuevo Actor"),a.dc(),a.ec(2,"form",1),a.oc("ngSubmit",function(){return t.cargarActor()}),a.ec(3,"div",2),a.ec(4,"div",3),a.Zb(5,"img",4),a.dc(),a.ec(6,"div",5),a.ec(7,"div",2),a.ec(8,"div",6),a.ec(9,"label",7),a.Qc(10,"Nombre"),a.dc(),a.Zb(11,"input",8),a.Oc(12,h,2,0,"small",9),a.Oc(13,b,2,0,"small",9),a.Oc(14,v,2,0,"small",9),a.Oc(15,y,2,0,"small",9),a.dc(),a.ec(16,"div",6),a.ec(17,"label",10),a.Qc(18,"Apellido"),a.dc(),a.Zb(19,"input",11),a.Oc(20,P,2,0,"small",9),a.Oc(21,L,2,0,"small",9),a.dc(),a.dc(),a.ec(22,"div",2),a.ec(23,"div",12),a.ec(24,"label",13),a.Qc(25,"Sexo"),a.dc(),a.ec(26,"select",14),a.ec(27,"option",15),a.Qc(28,"Seleccione uno"),a.dc(),a.ec(29,"option",16),a.Qc(30,"Femenino"),a.dc(),a.ec(31,"option",17),a.Qc(32,"Masculino"),a.dc(),a.dc(),a.Oc(33,x,2,0,"small",9),a.dc(),a.ec(34,"div",18),a.ec(35,"label",19),a.Qc(36,"Fecha Nacimiento"),a.dc(),a.Zb(37,"input",20),a.Oc(38,I,2,0,"small",9),a.dc(),a.ec(39,"div",21),a.Zb(40,"app-pais-detalle",22),a.dc(),a.Oc(41,C,2,0,"small",9),a.dc(),a.dc(),a.dc(),a.Zb(42,"hr",23),a.ec(43,"div",2),a.ec(44,"div",24),a.ec(45,"div",25),a.Zb(46,"input",26),a.ec(47,"label",27),a.Qc(48," Aceptar t\xe9rminos y condiciones "),a.dc(),a.dc(),a.dc(),a.ec(49,"div",28),a.ec(50,"button",29),a.Qc(51," Crear Actor "),a.dc(),a.dc(),a.dc(),a.dc()),2&e&&(a.Lb(2),a.yc("formGroup",t.formulario),a.Lb(10),a.yc("ngIf",(null==t.formulario.controls.nombre.errors?null:t.formulario.controls.nombre.errors.required)&&t.formulario.controls.nombre.touched),a.Lb(1),a.yc("ngIf",(null==t.formulario.controls.nombre.errors?null:t.formulario.controls.nombre.errors.minlength)&&t.formulario.controls.nombre.touched),a.Lb(1),a.yc("ngIf",(null==t.formulario.controls.nombre.errors?null:t.formulario.controls.nombre.errors.maxlength)&&t.formulario.controls.nombre.touched),a.Lb(1),a.yc("ngIf",(null==t.formulario.controls.nombre.errors?null:t.formulario.controls.nombre.errors.containsSpaces)&&t.formulario.controls.nombre.touched),a.Lb(5),a.yc("ngIf",(null==t.formulario.controls.apellido.errors?null:t.formulario.controls.apellido.errors.required)&&t.formulario.controls.apellido.touched),a.Lb(1),a.yc("ngIf",(null==t.formulario.controls.apellido.errors?null:t.formulario.controls.apellido.errors.maxlength)&&t.formulario.controls.apellido.touched),a.Lb(12),a.yc("ngIf",(null==t.formulario.controls.sexo.errors?null:t.formulario.controls.sexo.errors.required)&&t.formulario.controls.sexo.touched),a.Lb(5),a.yc("ngIf",(null==t.formulario.controls.fechaNacimiento.errors?null:t.formulario.controls.fechaNacimiento.errors.required)&&t.formulario.controls.fechaNacimiento.touched),a.Lb(2),a.yc("pais",t.pais),a.Lb(1),a.yc("ngIf",t.errorPais),a.Lb(9),a.yc("disabled",t.formulario.invalid||!t.formulario.controls.terminos.value))},directives:[i.v,i.o,i.i,i.d,i.n,i.g,r.m,i.t,i.q,i.w,m,i.a],styles:["img[_ngcontent-%COMP%]{display:block;height:auto;margin:auto;width:100%}.invalid[_ngcontent-%COMP%]{color:red}"]}),e})();const w=[{path:"alta",component:(()=>{class e{constructor(){this.paisActor={}}AsignaPaisActor(e){this.paisActor=e.paisEnviado}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Sb({type:e,selectors:[["app-actores-alta"]],decls:12,vars:1,consts:[[1,"container"],[1,"py-5","text-center"],["src","/assets/logo.png","alt","","width","72","height","57",1,"d-block","mx-auto","mb-4"],[1,"lead"],[1,"row","g-5"],[1,"col-md-5","col-lg-4","order-md-last"],[3,"pasaPais"],[1,"col-md-7","col-lg-8"],[3,"pais"]],template:function(e,t){1&e&&(a.ec(0,"div",0),a.ec(1,"div",1),a.Zb(2,"img",2),a.ec(3,"h2"),a.Qc(4,"Checkout form"),a.dc(),a.ec(5,"p",3),a.Qc(6,"Below is an example form built entirely with Bootstrap\u2019s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."),a.dc(),a.dc(),a.ec(7,"div",4),a.ec(8,"div",5),a.ec(9,"app-paises-tabla",6),a.oc("pasaPais",function(e){return t.AsignaPaisActor(e)}),a.dc(),a.dc(),a.ec(10,"div",7),a.Zb(11,"app-actor-alta",8),a.dc(),a.dc(),a.dc()),2&e&&(a.Lb(11),a.yc("pais",t.paisActor))},directives:[g,O],styles:[""]}),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({imports:[[o.d.forChild(w)],o.d]}),e})();var S=n("nC/S");let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({imports:[[r.c,k,S.a,i.j,i.r,u.a]]}),e})()},"nC/S":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("ofXK"),i=n("oOf3"),o=n("tyNb"),a=n("fXoL");const c=[];let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({imports:[[o.d.forChild(c)],o.d]}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Wb({type:e}),e.\u0275inj=a.Vb({imports:[[r.c,s,i.a]]}),e})()},oOf3:function(e,t,n){"use strict";n.d(t,"a",function(){return w}),n.d(t,"c",function(){return x}),n.d(t,"b",function(){return v});var r=n("fXoL"),i=n("ofXK");function o(e,t){if(1&e){var n=r.fc();r.ec(0,"a",11),r.oc("keyup.enter",function(){return r.Ic(n),r.sc(3),r.Gc(1).previous()})("click",function(){return r.Ic(n),r.sc(3),r.Gc(1).previous()}),r.Qc(1),r.ec(2,"span",12),r.Qc(3),r.dc(),r.dc()}if(2&e){var i=r.sc(3);r.Mb("aria-label",i.previousLabel+" "+i.screenReaderPageLabel),r.Lb(1),r.Sc(" ",i.previousLabel," "),r.Lb(2),r.Rc(i.screenReaderPageLabel)}}function a(e,t){if(1&e&&(r.ec(0,"span"),r.Qc(1),r.ec(2,"span",12),r.Qc(3),r.dc(),r.dc()),2&e){var n=r.sc(3);r.Lb(1),r.Sc(" ",n.previousLabel," "),r.Lb(2),r.Rc(n.screenReaderPageLabel)}}function c(e,t){if(1&e&&(r.ec(0,"li",8),r.Oc(1,o,4,3,"a",9),r.Oc(2,a,4,2,"span",10),r.dc()),2&e){r.sc(2);var n=r.Gc(1);r.Qb("disabled",n.isFirstPage()),r.Lb(1),r.yc("ngIf",1<n.getCurrent()),r.Lb(1),r.yc("ngIf",n.isFirstPage())}}function s(e,t){if(1&e){var n=r.fc();r.ec(0,"a",11),r.oc("keyup.enter",function(){r.Ic(n);var e=r.sc().$implicit;return r.sc(2),r.Gc(1).setCurrent(e.value)})("click",function(){r.Ic(n);var e=r.sc().$implicit;return r.sc(2),r.Gc(1).setCurrent(e.value)}),r.ec(1,"span",12),r.Qc(2),r.dc(),r.ec(3,"span"),r.Qc(4),r.tc(5,"number"),r.dc(),r.dc()}if(2&e){var i=r.sc().$implicit,o=r.sc(2);r.Lb(2),r.Sc("",o.screenReaderPageLabel," "),r.Lb(2),r.Rc("..."===i.label?i.label:r.vc(5,2,i.label,""))}}function l(e,t){if(1&e&&(r.cc(0),r.ec(1,"span",12),r.Qc(2),r.dc(),r.ec(3,"span"),r.Qc(4),r.tc(5,"number"),r.dc(),r.bc()),2&e){var n=r.sc().$implicit,i=r.sc(2);r.Lb(2),r.Sc("",i.screenReaderCurrentLabel," "),r.Lb(2),r.Rc("..."===n.label?n.label:r.vc(5,2,n.label,""))}}function u(e,t){if(1&e&&(r.ec(0,"li"),r.Oc(1,s,6,5,"a",9),r.Oc(2,l,6,5,"ng-container",10),r.dc()),2&e){var n=t.$implicit;r.sc(2);var i=r.Gc(1);r.Qb("current",i.getCurrent()===n.value)("ellipsis","..."===n.label),r.Lb(1),r.yc("ngIf",i.getCurrent()!==n.value),r.Lb(1),r.yc("ngIf",i.getCurrent()===n.value)}}function p(e,t){if(1&e){var n=r.fc();r.ec(0,"a",11),r.oc("keyup.enter",function(){return r.Ic(n),r.sc(3),r.Gc(1).next()})("click",function(){return r.Ic(n),r.sc(3),r.Gc(1).next()}),r.Qc(1),r.ec(2,"span",12),r.Qc(3),r.dc(),r.dc()}if(2&e){var i=r.sc(3);r.Mb("aria-label",i.nextLabel+" "+i.screenReaderPageLabel),r.Lb(1),r.Sc(" ",i.nextLabel," "),r.Lb(2),r.Rc(i.screenReaderPageLabel)}}function d(e,t){if(1&e&&(r.ec(0,"span"),r.Qc(1),r.ec(2,"span",12),r.Qc(3),r.dc(),r.dc()),2&e){var n=r.sc(3);r.Lb(1),r.Sc(" ",n.nextLabel," "),r.Lb(2),r.Rc(n.screenReaderPageLabel)}}function g(e,t){if(1&e&&(r.ec(0,"li",13),r.Oc(1,p,4,3,"a",9),r.Oc(2,d,4,2,"span",10),r.dc()),2&e){r.sc(2);var n=r.Gc(1);r.Qb("disabled",n.isLastPage()),r.Lb(1),r.yc("ngIf",!n.isLastPage()),r.Lb(1),r.yc("ngIf",n.isLastPage())}}function f(e,t){if(1&e&&(r.ec(0,"ul",3),r.Oc(1,c,3,4,"li",4),r.ec(2,"li",5),r.Qc(3),r.dc(),r.Oc(4,u,3,6,"li",6),r.Oc(5,g,3,4,"li",7),r.dc()),2&e){var n=r.sc(),i=r.Gc(1);r.Qb("responsive",n.responsive),r.Mb("aria-label",n.screenReaderPaginationLabel),r.Lb(1),r.yc("ngIf",n.directionLinks),r.Lb(2),r.Tc(" ",i.getCurrent()," / ",i.getLastPage()," "),r.Lb(1),r.yc("ngForOf",i.pages),r.Lb(1),r.yc("ngIf",n.directionLinks)}}var m=function(){function e(){this.change=new r.r,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return e.prototype.defaultId=function(){return this.DEFAULT_ID},e.prototype.register=function(e){return null==e.id&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)},e.prototype.updateInstance=function(e){var t=!1;for(var n in this.instances[e.id])e[n]!==this.instances[e.id][n]&&(this.instances[e.id][n]=e[n],t=!0);return t},e.prototype.getCurrentPage=function(e){if(this.instances[e])return this.instances[e].currentPage},e.prototype.setCurrentPage=function(e,t){if(this.instances[e]){var n=this.instances[e];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}},e.prototype.setTotalItems=function(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))},e.prototype.setItemsPerPage=function(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))},e.prototype.getInstance=function(e){return void 0===e&&(e=this.DEFAULT_ID),this.instances[e]?this.clone(this.instances[e]):{}},e.prototype.clone=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Ub({token:e,factory:function(t){return e.\u0275fac(t)}}),e}(),h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=Number.MAX_SAFE_INTEGER,v=function(){function e(e){this.service=e,this.state={}}return e.prototype.transform=function(e,t){if(!(e instanceof Array)){var n=t.id||this.service.defaultId();return this.state[n]?this.state[n].slice:e}var r,i,o=t.totalItems&&t.totalItems!==e.length,a=this.createInstance(e,t),c=a.id,s=a.itemsPerPage,l=this.service.register(a);if(!o&&e instanceof Array){if(this.stateIsIdentical(c,e,r=(a.currentPage-1)*(s=+s||b),i=r+s))return this.state[c].slice;var u=e.slice(r,i);return this.saveState(c,e,u,r,i),this.service.change.emit(c),u}return l&&this.service.change.emit(c),this.saveState(c,e,e,r,i),e},e.prototype.createInstance=function(e,t){return this.checkConfig(t),{id:null!=t.id?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}},e.prototype.checkConfig=function(e){var t=["itemsPerPage","currentPage"].filter(function(t){return!(t in e)});if(0<t.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+t.join(", "))},e.prototype.saveState=function(e,t,n,r,i){this.state[e]={collection:t,size:t.length,slice:n,start:r,end:i}},e.prototype.stateIsIdentical=function(e,t,n,r){var i=this.state[e];return!!i&&!(i.size!==t.length||i.start!==n||i.end!==r)&&i.slice.every(function(e,r){return e===t[n+r]})},(e=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([h("design:paramtypes",[m])],e)).\u0275fac=function(t){return new(t||e)(r.Yb(m))},e.\u0275pipe=r.Xb({name:"paginate",type:e,pure:!1}),e}(),y=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function L(e){return!!e&&"false"!==e}var x=function(){function e(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new r.r,this.pageBoundsCorrection=new r.r,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(e.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(e){this._directionLinks=L(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoHide",{get:function(){return this._autoHide},set:function(e){this._autoHide=L(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"responsive",{get:function(){return this._responsive},set:function(e){this._responsive=L(e)},enumerable:!0,configurable:!0}),y([Object(r.x)(),P("design:type",String)],e.prototype,"id",void 0),y([Object(r.x)(),P("design:type",Number)],e.prototype,"maxSize",void 0),y([Object(r.x)(),P("design:type",Boolean),P("design:paramtypes",[Boolean])],e.prototype,"directionLinks",null),y([Object(r.x)(),P("design:type",Boolean),P("design:paramtypes",[Boolean])],e.prototype,"autoHide",null),y([Object(r.x)(),P("design:type",Boolean),P("design:paramtypes",[Boolean])],e.prototype,"responsive",null),y([Object(r.x)(),P("design:type",String)],e.prototype,"previousLabel",void 0),y([Object(r.x)(),P("design:type",String)],e.prototype,"nextLabel",void 0),y([Object(r.x)(),P("design:type",String)],e.prototype,"screenReaderPaginationLabel",void 0),y([Object(r.x)(),P("design:type",String)],e.prototype,"screenReaderPageLabel",void 0),y([Object(r.x)(),P("design:type",String)],e.prototype,"screenReaderCurrentLabel",void 0),y([Object(r.I)(),P("design:type",r.r)],e.prototype,"pageChange",void 0),y([Object(r.I)(),P("design:type",r.r)],e.prototype,"pageBoundsCorrection",void 0),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Sb({type:e,selectors:[["pagination-controls"]],inputs:{maxSize:"maxSize",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:3,vars:3,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["class","ngx-pagination","role","navigation",3,"responsive",4,"ngIf"],["role","navigation",1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],[4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],[1,"pagination-next"]],template:function(e,t){if(1&e&&(r.ec(0,"pagination-template",0,1),r.oc("pageChange",function(e){return t.pageChange.emit(e)})("pageBoundsCorrection",function(e){return t.pageBoundsCorrection.emit(e)}),r.Oc(2,f,6,8,"ul",2),r.dc()),2&e){var n=r.Gc(1);r.yc("id",t.id)("maxSize",t.maxSize),r.Lb(2),r.yc("ngIf",!(t.autoHide&&n.pages.length<=1))}},directives:function(){return[O,i.m,i.l]},pipes:function(){return[i.e]},styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],encapsulation:2,changeDetection:0}),e}(),I=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},O=function(){function e(e,t){var n=this;this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new r.r,this.pageBoundsCorrection=new r.r,this.pages=[],this.changeSub=this.service.change.subscribe(function(e){n.id===e&&(n.updatePageLinks(),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges())})}return e.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},e.prototype.ngOnChanges=function(e){this.updatePageLinks()},e.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},e.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},e.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},e.prototype.isFirstPage=function(){return 1===this.getCurrent()},e.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},e.prototype.setCurrent=function(e){this.pageChange.emit(e)},e.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},e.prototype.getLastPage=function(){var e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)},e.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},e.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},e.prototype.updatePageLinks=function(){var e=this,t=this.service.getInstance(this.id),n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(function(){e.pageBoundsCorrection.emit(n),e.pages=e.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,e.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)},e.prototype.outOfBoundCorrection=function(e){var t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage},e.prototype.createPageArray=function(e,t,n,r){r=+r;for(var i=[],o=Math.ceil(n/t),a=Math.ceil(r/2),c=e<=a,s=o-a<e,l=!c&&!s,u=r<o,p=1;p<=o&&p<=r;){var d=this.calculatePageNumber(p,e,r,o);i.push({label:u&&(2===p&&(l||s)||p===r-1&&(l||c))?"...":d,value:d}),p++}return i},e.prototype.calculatePageNumber=function(e,t,n,r){var i=Math.ceil(n/2);return e===n?r:1===e?e:n<r?r-i<t?r-n+e:i<t?t-i+e:e:e},I([Object(r.x)(),C("design:type",String)],e.prototype,"id",void 0),I([Object(r.x)(),C("design:type",Number)],e.prototype,"maxSize",void 0),I([Object(r.I)(),C("design:type",r.r)],e.prototype,"pageChange",void 0),I([Object(r.I)(),C("design:type",r.r)],e.prototype,"pageBoundsCorrection",void 0),(e=I([C("design:paramtypes",[m,r.i])],e)).\u0275fac=function(t){return new(t||e)(r.Yb(m),r.Yb(r.i))},e.\u0275dir=r.Tb({type:e,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{maxSize:"maxSize",id:"id"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[r.Jb]}),e}(),w=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Wb({type:e}),e.\u0275inj=r.Vb({providers:[m],imports:[[i.c]]}),e}()}}]);
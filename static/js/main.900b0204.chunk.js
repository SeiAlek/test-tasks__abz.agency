(this["webpackJsonptest-tasks__abz.agency"]=this["webpackJsonptest-tasks__abz.agency"]||[]).push([[0],{33:function(e,t,a){},47:function(e,t,a){e.exports=a(82)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addUsers",(function(){return ne})),a.d(n,"increaseVisible",(function(){return re})),a.d(n,"default",(function(){return ce}));var r=a(0),c=a.n(r),o=a(17),s=a.n(o),i=a(9),l=a(19),u=a(4),m=a(6),p=a(12),d=a.n(p),f=a(18),h="https://frontend-test-assignment-api.abz.agency/api/v1",E="".concat(h,"/users?page=1&count=12"),b="".concat(h,"/positions"),v="".concat(h,"/token"),_="".concat(h,"/users");function g(e){return O.apply(this,arguments)}function O(){return(O=Object(f.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(f.a)(d.a.mark((function e(t,a,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",body:n,headers:{Token:a}});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y,N={about:{id:"about-me",name:"About me",title:"Let's get acquainted"},users:{id:"users",name:"Users",title:"Our cheerful users",descr:"Attention! Sorting users by registration date"},signUp:{id:"sign-up",name:"Sign Up",title:"Register to get a work",descr:"Attention! After successful registration and alert, update the list of users in the block from the top"}},j={name:"",email:"",phone:"",position:"",photo:null},x=function(e,t){return t?"":"The ".concat(e," is required.")},k=function(e){return function(t,a){return!a||a.length>=e?"":"The ".concat(t," should have at least ").concat(e," characters.")}},C=function(e){return function(t,a){return!a||a.length<=e?"":"The ".concat(t," should have maximum ").concat(e," characters.")}},I={name:{id:"name",name:"name",type:"text",label:"Name",placeholder:"Your Name",autoComplete:"name",validators:[x,k(2),C(60)]},email:{id:"email",name:"email",type:"email",label:"Email",placeholder:"Your Email",autoComplete:"email",validators:[x,function(e,t){return/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(t)?"":"The ".concat(e," should be a valid Email (Example: jhon@example.com).")},k(2),C(100)]},phone:{id:"phone",name:"phone",type:"tel",label:"Phone number",placeholder:"+380 XX XXX XX XX",autoComplete:"email",validators:[x,function(e,t){return/^[+]{0,1}380([0-9]{9})$/.test(t)?"":"The ".concat(e," should be a valid Phone number (Example: +380955388485).")}]},position:{id:"position",name:"position",type:"radio",label:"Select your position",validators:[x]},photo:{id:"photo",name:"photo",type:"file",label:"Photo",placeholder:"Upload your photo",validators:[x,(y=5,function(e,t){var a;return!t||(null===(a=t)||void 0===a?void 0:a.size)<y*Math.pow(1024,2)?"":"The ".concat(e," should have maximum ").concat(y," Mb.")}),function(e,t){var a=["jpeg","jpg"],n="The ".concat(e," format must be ").concat(a.join("/")," type.");return a.some((function(e){var a;return(null===(a=t)||void 0===a?void 0:a.type)==="image/".concat(e)}))?"":n}]}},T=(a(33),function(e){var t=e.href,a=e.text,n=e.className,r=e.handleClick;return c.a.createElement(m.Link,{className:"".concat(n," Button"),to:t,spy:!0,smooth:!0,offset:-60,duration:500,isDynamic:!0,onClick:r},a)}),w=(a(64),function(e){var t=e.title,a=e.text,n=e.link,r=e.textLink;return c.a.createElement("section",{className:"Banner container"},c.a.createElement("div",{className:"Banner__Content"},c.a.createElement("h1",{className:"Banner__Header"},t),c.a.createElement("p",{className:"Banner__Text"},a),n&&r&&c.a.createElement(T,{href:n,text:r,className:"Banner__Button"})))}),L=(a(65),function(e){var t=e.text,a=e.disabled,n=e.className,r=e.handleClick;return c.a.createElement("button",{type:"button",disabled:a,className:"".concat(n," Button"),onClick:r},t)}),R=function(e){var t=e.href,a=e.text,n=e.className,r=e.handleClick;return c.a.createElement(m.Link,{className:"".concat(n," ButtonFlat"),to:t,spy:!0,smooth:!0,offset:-60,duration:500,isDynamic:!0,onClick:r},a)},F=function(e){var t=e.children,a=e.image,n=e.title,r=e.link,o=e.textLink;return c.a.createElement("div",{className:"IllustratedSection"},c.a.createElement("img",{src:a,alt:n,className:"IllustratedSection__Image"}),c.a.createElement("div",{className:"IllustratedSection__Content"},c.a.createElement("h2",{className:"IllustratedSection__Title"},n),t,r&&o&&c.a.createElement(R,{href:r,text:o,className:"IllustratedSection__Button"})))},U=a(42),B=(a(66),function(){return c.a.createElement("footer",{className:"Footer"},"\xa9 abz.agency specially for the test task")}),D=a(11),A=a(14),M=a.n(A),P=(a(67),function(){var e=Object(u.f)(),t=Object(r.useState)(!1),a=Object(D.a)(t,2),n=a[0],o=a[1],s=Object(u.g)();Object(r.useEffect)((function(){return m.Events.scrollEvent.register("end",(function(t){e.push(t)})),m.scrollSpy.update(),function(){m.Events.scrollEvent.remove("end")}}),[e]),Object(r.useEffect)((function(){o(!1)}),[s]);var i=function(){o(!n)};return c.a.createElement("nav",{className:"Nav"},c.a.createElement("button",{type:"button",className:"Nav__Sandwich",onClick:i}),c.a.createElement("div",{className:M()("Nav__Container",{"Nav__Container--open":n}),onClick:i},c.a.createElement("ul",{className:M()("Nav__List",{"Nav__List--open":n})},Object.values(N).map((function(e){var t=e.id,a=e.name;return c.a.createElement("li",{className:"Nav__Item",key:t},c.a.createElement(m.Link,{className:"Nav__Link",activeClass:"Nav__Link--active",to:"#".concat(t),spy:!0,smooth:!0,offset:-60,duration:500,isDynamic:!0},a))})))))}),W=(a(69),function(){var e=Object(u.f)();return c.a.createElement("header",{className:"Header"},c.a.createElement("div",{className:"Header__Container container"},c.a.createElement("a",{href:"/",className:"Header__LogoLink",onClick:function(t){t.preventDefault(),m.animateScroll.scrollToTop(),e.push("/")}},c.a.createElement("img",{src:"./images/logo.svg",alt:"TestTask",className:"Header__LogoImage"})),c.a.createElement(P,null)))}),z=(a(70),function(e){var t=e.children,a=e.title,n=void 0===a?"TestTask":a;return c.a.createElement(c.a.Fragment,null,c.a.createElement(U.a,null,c.a.createElement("title",null,n),c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",rel:"stylesheet"})),c.a.createElement(W,null),c.a.createElement("main",{className:"Layout"},t),c.a.createElement(B,null))}),H=a(13),G=a(3),X=a(16),V=a(15),J=a(45),Y=a(46),$=a(37),q=function(e){return{type:"SET_ERROR_MESSAGE",errorMessage:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR_MESSAGE":return t.errorMessage;default:return e}},Q={isLoading:!1,isLoaded:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0});case"FINISH_LOADING":return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1});case"SET_LOADED":return Object(G.a)(Object(G.a)({},e),{},{isLoaded:!0});default:return e}},ee=[],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSITIONS":return Object(X.a)(t.positions);default:return e}},ae={list:[],visible:6},ne=function(e){return{type:"ADD_USERS",users:e}},re=function(){return{type:"INCREASE_VISIBLE"}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USERS":return Object(G.a)(Object(G.a)({},e),{},{list:[].concat(Object(X.a)(t.users),Object(X.a)(e.list))});case"INCREASE_VISIBLE":return Object(G.a)(Object(G.a)({},e),{},{visible:e.visible+6});default:return e}},oe={isShow:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCROLL_HIDE":return{isShow:!1};case"SET_SCROLL_SHOW":return{isShow:!0};default:return e}},ie=Object(V.combineReducers)({scrollStatus:se,loading:Z,errorMessage:K,positions:te,users:ce}),le=function(e){return e.scrollStatus.isShow},ue=function(e){return e.positions},me=function(e){return e.users.list.length},pe=Object($.a)((function(e){return e.users.list}),(function(e){return Object(X.a)(e).sort((function(e,t){return t.registration_timestamp-e.registration_timestamp}))})),de=Object($.a)(pe,(function(e){return e.users.visible}),(function(e,t){return e.slice(0,t)})),fe=Object(V.createStore)(ie,Object(J.composeWithDevTools)(Object(V.applyMiddleware)(Y.a))),he={name:"",email:"",phone:"",position:"",photo:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERROR_MESSAGE":return Object(G.a)(Object(G.a)({},e),{},Object(H.a)({},t.name,t.message));case"REMOVE_ERROR_MESSAGE":return Object(G.a)(Object(G.a)({},e),{},Object(H.a)({},t.name,""));default:return e}},be=(a(71),function(e){var t=e.id,a=e.label,n=e.error,r=e.children;return c.a.createElement("div",{className:"FieldWrapper"},c.a.createElement("label",{htmlFor:t,className:"FieldWrapper__Label"},c.a.createElement("span",{className:"FieldWrapper__Title"},a),r,n&&n.length>0&&c.a.createElement("div",{className:"FieldWrapper__Error"},n)))}),ve=(a(72),function(e){var t=e.fieldSettings,a=e.value,n=e.error,r=e.handleChange,o=e.handleFocus,s=t.id,i=t.name,l=t.label,u=t.placeholder;return c.a.createElement(be,{id:s,label:l,error:n},c.a.createElement("div",{className:"InputFile__Wrapper"},c.a.createElement("input",{type:"file",name:i,id:s,className:M()("InputFile",{"InputFile--error":n}),accept:"image/jpg, image/jpeg",onChange:r,onFocus:o}),c.a.createElement("span",{className:M()("InputFile__Custom",{"InputFile__Custom--error":n}),"data-title":(null===a||void 0===a?void 0:a.name)||u})))}),_e=(a(73),function(e){var t=e.fieldSettings,a=e.professionList,n=e.positionId,r=e.error,o=e.handleChange,s=e.handleFocus,i=t.label,l=t.name;return c.a.createElement("div",{className:"InputRadio"},c.a.createElement("span",{className:"InputRadio__Title"},i),c.a.createElement("ul",{className:"InputRadio__List"},a&&a.map((function(e){return c.a.createElement("li",{className:"InputRadio__Item",key:e.id},c.a.createElement("input",{type:"radio",checked:"".concat(e.id)===n,name:l,id:e.id,className:"InputRadio__Field",onChange:o,onFocus:s}),c.a.createElement("label",{htmlFor:e.id,className:"InputRadio__Label"},e.name))}))),r&&r.length>0&&c.a.createElement("div",{className:"InputRadio__Error"},r))}),ge=(a(74),function(e){var t=e.fieldSettings,a=e.value,n=e.error,r=e.handleChange,o=e.handleBlur,s=e.handleFocus,i=t.id,l=t.name,u=t.type,m=t.label,p=t.placeholder,d=t.autoComplete;return c.a.createElement(be,{id:i,label:m,error:n},c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:u,name:l,id:i,value:a,placeholder:p,autoComplete:d,className:M()("InputText",{"InputText--error":n}),onChange:r,onBlur:o,onFocus:s})))}),Oe=(a(75),function(e){var t=e.title,a=e.message,n=e.buttonText,o=e.handleClick;return Object(r.useEffect)((function(){return document.body.classList.add("no-scroll"),function(){document.body.classList.remove("no-scroll")}}),[]),c.a.createElement("div",{className:"PopUp"},c.a.createElement("div",{className:"PopUp__Container"},c.a.createElement("button",{type:"button",className:"PopUp__Close",onClick:o}),c.a.createElement("h2",{className:"PopUp__Title"},t),c.a.createElement("p",{className:"PopUp__Message"},a),c.a.createElement(L,{text:n,className:"PopUp__Button PopUp__Button--primary",handleClick:o})))}),Se=(a(76),function(){var e=Object(i.b)(),t=Object(i.c)(le),a=Object(i.c)(ue),o=Object(r.useState)(Object(G.a)({},j)),s=Object(D.a)(o,2),l=s[0],u=s[1],m=Object(r.useState)(""),p=Object(D.a)(m,2),d=p[0],f=p[1],E=Object(r.useReducer)(Ee,he),b=Object(D.a)(E,2),O=b[0],y=b[1],N=Object(r.useState)(""),x=Object(D.a)(N,2),k=x[0],C=x[1],T=Object(r.useCallback)((function(){g(v).then((function(e){localStorage.setItem("TT-token",e.token)})).catch((function(e){return q(e)}))}),[]);Object(r.useEffect)((function(){return T()}),[T]);var w=function(e,t){var a,n=(null===(a=I[e].validators)||void 0===a?void 0:a.map((function(a){return a(e,t)})).filter(Boolean))||[""];return y(function(e,t){return{type:"SET_ERROR_MESSAGE",name:e,message:t}}(e,n[0])),Boolean(n[0])},R=function(t){f(t),C("failure"),e({type:"SET_SCROLL_HIDE"})},F=function(t){t.preventDefault();var a=localStorage.getItem("TT-token"),r=new FormData;a||T();var c=!1;Object.entries(l).forEach((function(e){var t=Object(D.a)(e,2),a=t[0],n=t[1];w(a,n)&&(c=!0)})),c||(r.set("position_id",l.position),r.set("name",l.name),r.set("email",l.email),r.set("phone",l.phone),r.set("photo",l.photo),function(e,t,a){return S.apply(this,arguments)}(_,a,r).then((function(e){return e.success?g("".concat(h,"/users/").concat(e.user_id)):(R((null===e||void 0===e?void 0:e.message)||"Something went wrong..."),e)})).then((function(t){return t.success?(e(n.addUsers([t.user])),C("success"),e({type:"SET_SCROLL_HIDE"}),u(Object(G.a)({},j)),t):(R((null===t||void 0===t?void 0:t.message)||"Something went wrong..."),t)})))},U=function(e){var t=e.target,a=t.value,n=t.name;w(n,a)},B=function(e){var t=e.target,a=t.type,n=t.name,r=t.id,c=t.value,o=t.files;switch(a){case"text":case"tel":case"email":u(Object(G.a)(Object(G.a)({},l),{},Object(H.a)({},n,c)));break;case"radio":u(Object(G.a)(Object(G.a)({},l),{},Object(H.a)({},n,r)));break;case"file":o&&o[0]&&u(Object(G.a)(Object(G.a)({},l),{},Object(H.a)({},n,o[0])))}},A=function(e){var t=e.target.name;y(function(e){return{type:"REMOVE_ERROR_MESSAGE",name:e}}(t))},M=function(){C(""),f(""),e({type:"SET_SCROLL_SHOW"})};return c.a.createElement("div",{className:"SignUp"},c.a.createElement("form",{onSubmit:F,noValidate:!0},c.a.createElement(ge,{fieldSettings:I.name,value:l.name,error:O.name,handleChange:B,handleBlur:U,handleFocus:A}),c.a.createElement(ge,{fieldSettings:I.email,value:l.email,error:O.email,handleChange:B,handleBlur:U,handleFocus:A}),c.a.createElement(ge,{fieldSettings:I.phone,value:l.phone,error:O.phone,handleChange:B,handleBlur:U,handleFocus:A}),c.a.createElement(_e,{fieldSettings:I.position,positionId:l.position,professionList:a,error:O.position,handleChange:B,handleFocus:A}),c.a.createElement(ve,{fieldSettings:I.photo,value:l.photo,error:O.photo,handleChange:B,handleFocus:A}),c.a.createElement(L,{text:"Sign up now",className:"SignUp__Button",handleClick:F})),"success"===k&&!t&&c.a.createElement(Oe,{title:"Congratulation!",message:"You have successfully passed the registration",buttonText:"Great",handleClick:M}),"failure"===k&&!t&&c.a.createElement(Oe,{title:"Oops!",message:d,buttonText:"Close",handleClick:M}))}),ye=(a(77),function(e){var t=e.user,a=t.name,n=t.photo,o=t.position,s=t.email,i=t.phone,l=Object(r.useState)(n),u=Object(D.a)(l,2),m=u[0],p=u[1],d=Object(r.useState)(a),f=Object(D.a)(d,1)[0];return c.a.createElement("div",{className:"UserCard"},c.a.createElement("img",{src:m,alt:"".concat(o," ").concat(a),className:"UserCard__Photo",onError:function(){p("./images/photo-cover.svg")}}),c.a.createElement("h3",{className:"UserCard__Name","data-title":f},a),c.a.createElement("p",{className:"UserCard__Position"},o),c.a.createElement("a",{href:"mailto:".concat(s,"?subject=Mail from TestTask Site"),className:"UserCard__Link","data-title":s},s),c.a.createElement("a",{href:"tel:".concat(i),className:"UserCard__Link","data-title":i},i))}),Ne=(a(78),function(){var e=Object(i.b)(),t=Object(i.c)(de),a=Object(i.c)(me),r=t.length;return c.a.createElement("div",{className:"Users"},c.a.createElement("ul",{className:"Users__List"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"Users__Item"},c.a.createElement(ye,{user:e}))}))),a>r&&c.a.createElement(T,{href:"users-end",text:"Show more",className:"Users__Button",handleClick:function(){e(n.increaseVisible())}}))}),je=(a(79),function(e){var t=e.children,a=e.type,n=e.section,r=n.id,o=n.title,s=n.descr;return c.a.createElement(m.Element,{name:"#".concat(r),className:"Wrapper Wrapper--".concat(a)},c.a.createElement("section",{className:"container",id:r},c.a.createElement("h2",{className:"Wrapper__Title"},o),s&&c.a.createElement("p",{className:"Wrapper__Descr"},s),c.a.createElement("div",{className:"Wrapper__Content"},t)))}),xe=(a(80),function(e){var t=e.children;return c.a.createElement("div",{className:"ImageWrapper"},t)}),ke=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(function e(t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"START_LOADING"}),a.next=3,g(t);case 3:if(!(r=a.sent).success){a.next=8;break}n(ne(r.users)),a.next=10;break;case 8:return n(q("".concat(r.message))),a.abrupt("return");case 10:if(r.links.next_url){a.next=13;break}return n({type:"FINISH_LOADING"}),a.abrupt("return");case 13:n(e(r.links.next_url));case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(E))}),[e]),Object(r.useEffect)((function(){e(function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(b);case 2:(a=e.sent).success?t({type:"SET_POSITIONS",positions:a.positions}):t(q("".concat(a.message)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),c.a.createElement(z,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null,c.a.createElement(w,{title:"Test assignment for Frontend Developer position",text:"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens",link:N.signUp.id,textLink:"Sign up now"})),c.a.createElement(je,{type:"primary",section:N.about},c.a.createElement(F,{image:"./images/man-laptop-v1.svg",title:"I am cool frontend developer",link:N.signUp.id,textLink:"Sign up now"},c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),c.a.createElement("p",null,"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3.")))),c.a.createElement(je,{type:"secondary",section:N.users},c.a.createElement(Ne,null)),c.a.createElement(je,{type:"primary",section:N.signUp},c.a.createElement(Se,null))))},Ce=function(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{to:"/",exact:!0,component:ke}))},Ie=(a(81),function(){return c.a.createElement(i.a,{store:fe},c.a.createElement(l.a,null,c.a.createElement(Ce,null)))});s.a.render(c.a.createElement(Ie,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.900b0204.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{CX2u:function(e,t,a){"use strict";var n=a("XKFU"),r=a("g3g5"),l=a("dyZX"),c=a("69bn"),o=a("vKrd");n(n.P+n.R,"Promise",{finally:function(e){var t=c(this,r.Promise||l.Promise),a="function"==typeof e;return this.then(a?function(a){return o(t,e()).then((function(){return a}))}:e,a?function(a){return o(t,e()).then((function(){throw a}))}:e)}})},djYC:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));a("rGqo"),a("yt8O"),a("XfO3"),a("VRzm"),a("Btvt"),a("CX2u");var n=a("q1tI"),r=a.n(n),l=a("7vrA"),c=a("6xyR"),o=a("TUci"),u=a("QojX"),i=a("cWnB"),s=a("1g23"),m=a("Wbzz"),d=a("Kvkj"),f=a("7Qib");function p(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),p=Object(s.b)(),b=Object(n.useState)(""),E=b[0],v=b[1],h=Object(n.useState)(!1),w=h[0],y=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{title:"Sign Up"}),r.a.createElement(l.a,{className:"d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},r.a.createElement(c.a,{style:{borderColor:"grey",borderWidth:"3px"}},r.a.createElement(c.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),E&&r.a.createElement(o.a,{variant:"danger"},E),r.a.createElement(u.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return v("Passwords do not match");var r=[];y(!0),v(""),e.current.value!==p.email&&r.push(Object(s.g)(e.current.value)),t.current.value&&r.push(Object(s.h)(t.current.value)),Promise.all(r).then((function(){Object(m.navigate)("/Dashboard")})).catch((function(e){v("Failed to update account "+(e&&e.message))})).finally((function(){y(!1)}))}},r.a.createElement(u.a.Group,{id:"email"},r.a.createElement(u.a.Label,null,"Email"),r.a.createElement(u.a.Control,{type:"email",ref:e,required:!0,defaultValue:p.email})),r.a.createElement(u.a.Group,{id:"password"},r.a.createElement(u.a.Label,null,"Password"),r.a.createElement(u.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})),r.a.createElement(u.a.Group,{id:"password-confirm"},r.a.createElement(u.a.Label,null,"Password Confirmation"),r.a.createElement(u.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),r.a.createElement(i.a,{disabled:w,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(m.Link,{to:"/"},"Cancel"))))))}}}]);
//# sourceMappingURL=component---src-pages-update-profile-js-c679fb296c64e2aced52.js.map
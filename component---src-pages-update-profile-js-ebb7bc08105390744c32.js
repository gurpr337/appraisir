(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CX2u:function(e,t,a){"use strict";var n=a("XKFU"),r=a("g3g5"),l=a("dyZX"),c=a("69bn"),o=a("vKrd");n(n.P+n.R,"Promise",{finally:function(e){var t=c(this,r.Promise||l.Promise),a="function"==typeof e;return this.then(a?function(a){return o(t,e()).then((function(){return a}))}:e,a?function(a){return o(t,e()).then((function(){throw a}))}:e)}})},djYC:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("rGqo"),a("yt8O"),a("XfO3"),a("VRzm"),a("Btvt"),a("CX2u"),a("q1tI")),c=a.n(l),o=a("7vrA"),i=a("6xyR"),u=a("TUci"),s=a("QojX"),m=a("cWnB"),d=a("1g23"),f=a("Wbzz"),p=a("Kvkj"),b=a("7Qib"),v=a("lay5");function h(e,t,a,n,r,l,c){try{var o=e[l](c),i=o.value}catch(u){return void a(u)}o.done?t(i):Promise.resolve(i).then(n,r)}function E(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){h(l,n,r,c,o,"next",e)}function o(e){h(l,n,r,c,o,"throw",e)}c(void 0)}))}}function y(){var e=Object(l.useRef)(),t=Object(l.useRef)(),a=Object(l.useRef)(),n=Object(l.useRef)(),h=Object(d.b)(),y=Object(l.useState)(""),g=y[0],w=y[1],j=Object(l.useState)(!1),O=j[0],x=j[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,null,c.a.createElement(b.a,{title:"Sign Up"}),c.a.createElement(o.a,{className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},c.a.createElement(i.a,{style:{borderColor:"grey",borderWidth:"3px"}},c.a.createElement(i.a.Body,null,c.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),g&&c.a.createElement(u.a,{variant:"danger"},g),c.a.createElement(s.a,{onSubmit:function(l){if(l.preventDefault(),a.current.value!==n.current.value)return w("Passwords do not match");var c=[];x(!0),w(""),h&&(e.current.value&&c.push(Object(d.j)(e.current.value)),t.current.value!==h.email&&c.push(Object(d.h)(t.current.value)),a.current.value&&c.push(Object(d.i)(a.current.value)),Promise.all(c).then(E(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.b)(),e.next=3,v.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?a=e.data():console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 3:a.displayName=[0,String(t.displayName),String(t.email)],v.b.firestore().collection("Users").doc(String(t.uid)).set(a),n={email:t.email,displayName:t.displayName,uid:t.uid},localStorage.setItem("profileData",JSON.stringify(n)),Object(f.navigate)("/Profile");case 8:case"end":return e.stop()}}),e)})))).catch((function(e){w("Failed to update account "+(e&&e.message))})).finally((function(){x(!1)})))}},c.a.createElement(s.a.Group,{id:"name"},c.a.createElement(s.a.Label,null,"Display Name"),c.a.createElement(s.a.Control,{type:"text",ref:e,required:!0,defaultValue:h?h.displayName:""})),c.a.createElement(s.a.Group,{id:"email"},c.a.createElement(s.a.Label,null,"Email"),c.a.createElement(s.a.Control,{type:"email",ref:t,required:!0,defaultValue:h?h.email:""})),c.a.createElement(s.a.Group,{id:"password"},c.a.createElement(s.a.Label,null,"Password"),c.a.createElement(s.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),c.a.createElement(s.a.Group,{id:"password-confirm"},c.a.createElement(s.a.Label,null,"Password Confirmation"),c.a.createElement(s.a.Control,{type:"password",ref:n,placeholder:"Leave blank to keep the same"})),c.a.createElement(m.a,{disabled:O,className:"w-100",type:"submit"},"Update")))),c.a.createElement("div",{className:"w-100 text-center mt-2"},c.a.createElement(f.Link,{to:"/Profile"},"Cancel"))))))}}}]);
//# sourceMappingURL=component---src-pages-update-profile-js-ebb7bc08105390744c32.js.map
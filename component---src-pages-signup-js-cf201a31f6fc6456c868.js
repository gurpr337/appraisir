(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Xajb:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));a("VRzm"),a("Btvt");var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("q1tI")),c=a.n(l),o=a("7vrA"),i=a("6xyR"),u=a("TUci"),s=a("QojX"),m=a("cWnB"),d=a("Wbzz"),f=a("1g23"),p=a("Kvkj"),b=a("7Qib"),E=a("BYIe");function v(e,t,a,n,r,l,c){try{var o=e[l](c),i=o.value}catch(u){return void a(u)}o.done?t(i):Promise.resolve(i).then(n,r)}function w(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){v(l,n,r,c,o,"next",e)}function o(e){v(l,n,r,c,o,"throw",e)}c(void 0)}))}}function y(){var e=Object(l.useRef)(),t=Object(l.useRef)(),a=Object(l.useRef)(),n=Object(l.useState)(""),v=n[0],y=n[1],h=Object(l.useState)(!1),g=h[0],j=h[1],x=Object(l.useContext)(E.b).dark;function O(){return(O=w(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(f.g)(e.current.value,t.current.value).then((function(){var e=Object(f.b)(),t={email:e.email,displayName:e.displayName,uid:e.uid};localStorage.setItem("profileData",JSON.stringify(t)),Object(d.navigate)("/")})).catch((function(e){y("Failed to create an account. "+(e&&e.message))}));case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,null,c.a.createElement(b.a,{title:"Sign Up"}),c.a.createElement(o.a,{className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},c.a.createElement(i.a,{style:{borderColor:x?"#333":"#ddd",borderWidth:"3px"}},c.a.createElement(i.a.Body,null,c.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),v&&c.a.createElement(u.a,{style:{fontWeight:"900",backgroundColor:"#d9534f",color:"white",borderColor:"#d9534f"}},v),c.a.createElement(s.a,{onSubmit:function(e){if(e.preventDefault(),t.current.value!==a.current.value)return y("Passwords do not match");try{y(""),j(!0),function(){O.apply(this,arguments)}()}catch(n){y("Failed to create an account ")}j(!1)}},c.a.createElement(s.a.Group,{id:"email"},c.a.createElement(s.a.Label,null,"Email"),c.a.createElement(s.a.Control,{type:"email",ref:e,required:!0})),c.a.createElement("br",null),c.a.createElement(s.a.Group,{id:"password"},c.a.createElement(s.a.Label,null,"Password"),c.a.createElement(s.a.Control,{type:"password",ref:t,required:!0})),c.a.createElement("br",null),c.a.createElement(s.a.Group,{id:"password-confirm"},c.a.createElement(s.a.Label,null,"Password Confirmation"),c.a.createElement(s.a.Control,{type:"password",ref:a,required:!0})),c.a.createElement("br",null),c.a.createElement(m.a,{disabled:g,type:"submit"},"Sign Up")))),c.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",c.a.createElement(d.Link,{to:"/Login"},"Login")),c.a.createElement("br",null),c.a.createElement("br",null)))))}}}]);
//# sourceMappingURL=component---src-pages-signup-js-cf201a31f6fc6456c868.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Wo8Z:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));a("VRzm"),a("Btvt");var r=a("kD0k"),n=a.n(r),o=(a("OG14"),a("ls82"),a("q1tI")),c=a.n(o),l=a("7vrA"),s=a("6xyR"),i=a("TUci"),u=a("QojX"),d=a("cWnB"),m=a("1g23"),f=a("Wbzz"),w=a("Kvkj"),p=a("7Qib");function b(e,t,a,r,n,o,c){try{var l=e[o](c),s=l.value}catch(i){return void a(i)}l.done?t(s):Promise.resolve(s).then(r,n)}function h(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function c(e){b(o,r,n,c,l,"next",e)}function l(e){b(o,r,n,c,l,"throw",e)}c(void 0)}))}}function v(){var e=Object(o.useRef)(),t=Object(o.useState)(""),a=t[0],r=t[1],b=Object(o.useState)(""),v=b[0],E=b[1],y=Object(o.useState)(!1),g=y[0],x=y[1],k=Object(o.useState)(""),S=k[0],j=k[1],L=Object(o.useState)(!1),P=L[0],R=L[1];function O(){return(O=h(n.a.mark((function t(){var a,o,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(o=a.get("oobCode")),t.next=4,Object(m.a)(o,S,e.current.value);case 4:(c=t.sent)?null==c.error?E("You have successfully reset your password and have been logged in!"):null!=c.error&&r(String(c.error)):r("Password reset failed.");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){function e(){return(e=h(n.a.mark((function e(){var t,a,o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window&&(t=new URLSearchParams(window.location.search)),t&&(a=t.get("oobCode"),o=t.get("mode")),"resetPassword"!=o){e.next=9;break}return e.next=5,Object(m.k)(a);case 5:(c=e.sent)?null==c.error?(R(!0),j(String(c)),r("")):null!=c.error&&r(String(c.error)):r("Invalid URL. That URL may have expired."),e.next=10;break;case 9:r("Invalid URL. Please refresh with a valid URL.");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,null,c.a.createElement(p.a,{title:"Forget Password"}),c.a.createElement(l.a,{className:"d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},c.a.createElement(s.a,{style:{borderColor:"grey",borderWidth:"3px"}},c.a.createElement(s.a.Body,null,c.a.createElement("h2",{className:"text-center mb-4"},"Password Reset"),a&&c.a.createElement(i.a,{style:{fontWeight:"900",backgroundColor:"#d9534f",color:"white",borderColor:"#d9534f"}},a),v&&c.a.createElement(i.a,{style:{fontWeight:"900",backgroundColor:"#5cb85c",color:"white",borderColor:"#5cb85c"}},v),P&&c.a.createElement(u.a,{onSubmit:function(e){e.preventDefault();try{E(""),r(""),x(!0),function(){O.apply(this,arguments)}()}catch(t){r("Failed to reset password")}x(!1)}},S&&c.a.createElement("div",null," Welcome ",S," ",c.a.createElement("br",null),c.a.createElement("br",null)," "),c.a.createElement(u.a.Group,{id:"password"},c.a.createElement(u.a.Label,null,"New Password"),c.a.createElement(u.a.Control,{type:"password",ref:e,required:!0})),c.a.createElement(d.a,{disabled:g,className:"w-100",type:"submit"},"Reset Password")),c.a.createElement("div",{className:"w-100 text-center mt-3"},c.a.createElement(f.Link,{to:"/Login"},"Login")))),c.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",c.a.createElement(f.Link,{to:"/Signup"},"Sign Up"))))))}}}]);
//# sourceMappingURL=component---src-pages-reset-password-js-ca8d218fb36e5b829261.js.map
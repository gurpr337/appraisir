(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{CX2u:function(e,t,a){"use strict";var r=a("XKFU"),n=a("g3g5"),c=a("dyZX"),l=a("69bn"),i=a("vKrd");r(r.P+r.R,"Promise",{finally:function(e){var t=l(this,n.Promise||c.Promise),a="function"==typeof e;return this.then(a?function(a){return i(t,e()).then((function(){return a}))}:e,a?function(a){return i(t,e()).then((function(){throw a}))}:e)}})},TUci:function(e,t,a){"use strict";a("HAE/"),a("WLL4"),a("jm62"),a("8+KV"),a("0l/t"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var r=a("tB/L"),n=a("XpCt"),c=a("TSYQ"),l=a.n(c),i=a("q1tI"),o=a("y8DL"),s=a("ZCiN"),u=a("8lGn"),m=a("vUet"),d=a("7xGa"),f=a("XQC9"),b=a("U1MP"),p=a("YdCC"),v=a("nKUr");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=Object(b.a)("h4");h.displayName="DivStyledAsH4";var y=Object(p.a)("alert-heading",{Component:h}),w=Object(p.a)("alert-link",{Component:u.a}),g={variant:"primary",show:!0,transition:d.a,closeLabel:"Close alert"},E=i.forwardRef((function(e,t){var a=Object(o.a)(e,{show:"onClose"}),r=a.bsPrefix,c=a.show,i=a.closeLabel,u=a.closeVariant,b=a.className,p=a.children,O=a.variant,h=a.onClose,y=a.dismissible,w=a.transition,g=Object(n.a)(a,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),E=Object(m.a)(r,"alert"),P=Object(s.a)((function(e){h&&h(!1,e)})),C=!0===w?d.a:w,x=Object(v.jsxs)("div",j(j({role:"alert"},C?void 0:g),{},{ref:t,className:l()(b,E,O&&"".concat(E,"-").concat(O),y&&"".concat(E,"-dismissible")),children:[y&&Object(v.jsx)(f.a,{onClick:P,"aria-label":i,variant:u}),p]}));return C?Object(v.jsx)(C,j(j({unmountOnExit:!0},g),{},{ref:void 0,in:c,children:x})):c?x:null}));E.displayName="Alert",E.defaultProps=g,t.a=Object.assign(E,{Link:w,Heading:y})},djYC:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var r=a("kD0k"),n=a.n(r),c=(a("ls82"),a("rGqo"),a("yt8O"),a("XfO3"),a("VRzm"),a("Btvt"),a("CX2u"),a("q1tI")),l=a.n(c),i=a("7vrA"),o=a("6xyR"),s=a("TUci"),u=a("QojX"),m=a("cWnB"),d=a("1g23"),f=a("Wbzz"),b=a("Kvkj"),p=a("7Qib"),v=a("lay5");function O(e,t,a,r,n,c,l){try{var i=e[c](l),o=i.value}catch(s){return void a(s)}i.done?t(o):Promise.resolve(o).then(r,n)}function j(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function l(e){O(c,r,n,l,i,"next",e)}function i(e){O(c,r,n,l,i,"throw",e)}l(void 0)}))}}function h(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useRef)(),O=Object(d.b)(),h=Object(c.useState)(""),y=h[0],w=h[1],g=Object(c.useState)(!1),E=g[0],P=g[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,l.a.createElement(p.a,{title:"Sign Up"}),l.a.createElement(i.a,{className:"d-flex align-items-center justify-content-center"},l.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},l.a.createElement(o.a,{style:{borderColor:"grey",borderWidth:"3px"}},l.a.createElement(o.a.Body,null,l.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),y&&l.a.createElement(s.a,{variant:"danger"},y),l.a.createElement(u.a,{onSubmit:function(c){if(c.preventDefault(),a.current.value!==r.current.value)return w("Passwords do not match");var l=[];P(!0),w(""),O&&(e.current.value&&l.push(Object(d.j)(e.current.value)),t.current.value!==O.email&&l.push(Object(d.h)(t.current.value)),a.current.value&&l.push(Object(d.i)(a.current.value)),Promise.all(l).then(j(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.b)(),e.next=3,v.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?a=e.data():console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 3:a.displayName=[0,String(t.displayName),String(t.email)],v.b.firestore().collection("Users").doc(String(t.uid)).set(a),r={email:t.email,displayName:t.displayName,uid:t.uid},localStorage.setItem("profileData",JSON.stringify(r)),Object(f.navigate)("/Profile");case 8:case"end":return e.stop()}}),e)})))).catch((function(e){w("Failed to update account "+(e&&e.message))})).finally((function(){P(!1)})))}},l.a.createElement(u.a.Group,{id:"name"},l.a.createElement(u.a.Label,null,"Display Name"),l.a.createElement(u.a.Control,{type:"text",ref:e,required:!0,defaultValue:O?O.displayName:""})),l.a.createElement(u.a.Group,{id:"email"},l.a.createElement(u.a.Label,null,"Email"),l.a.createElement(u.a.Control,{type:"email",ref:t,required:!0,defaultValue:O?O.email:""})),l.a.createElement(u.a.Group,{id:"password"},l.a.createElement(u.a.Label,null,"Password"),l.a.createElement(u.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})),l.a.createElement(u.a.Group,{id:"password-confirm"},l.a.createElement(u.a.Label,null,"Password Confirmation"),l.a.createElement(u.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})),l.a.createElement(m.a,{disabled:E,className:"w-100",type:"submit"},"Update")))),l.a.createElement("div",{className:"w-100 text-center mt-2"},l.a.createElement(f.Link,{to:"/Profile"},"Cancel"))))))}}}]);
//# sourceMappingURL=component---src-pages-update-profile-js-fb58a116fdb25cf424b7.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{NQsN:function(e,t,a){},TUci:function(e,t,a){"use strict";a("HAE/"),a("WLL4"),a("jm62"),a("8+KV"),a("0l/t"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var r=a("tB/L"),n=a("XpCt"),c=a("TSYQ"),s=a.n(c),i=a("q1tI"),l=a("y8DL"),o=a("ZCiN"),m=a("8lGn"),u=a("vUet"),d=a("7xGa"),p=a("XQC9"),f=a("U1MP"),b=a("YdCC"),g=a("nKUr");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=Object(f.a)("h4");y.displayName="DivStyledAsH4";var x=Object(b.a)("alert-heading",{Component:y}),O=Object(b.a)("alert-link",{Component:m.a}),E={variant:"primary",show:!0,transition:d.a,closeLabel:"Close alert"},j=i.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),r=a.bsPrefix,c=a.show,i=a.closeLabel,m=a.closeVariant,f=a.className,b=a.children,v=a.variant,y=a.onClose,x=a.dismissible,O=a.transition,E=Object(n.a)(a,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),j=Object(u.a)(r,"alert"),N=Object(o.a)((function(e){y&&y(!1,e)})),w=!0===O?d.a:O,C=Object(g.jsxs)("div",h(h({role:"alert"},w?void 0:E),{},{ref:t,className:s()(f,j,v&&"".concat(j,"-").concat(v),x&&"".concat(j,"-dismissible")),children:[x&&Object(g.jsx)(p.a,{onClick:N,"aria-label":i,variant:m}),b]}));return w?Object(g.jsx)(w,h(h({unmountOnExit:!0},E),{},{ref:void 0,in:c,children:C})):c?C:null}));j.displayName="Alert",j.defaultProps=E,t.a=Object.assign(j,{Link:O,Heading:x})},WHqd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("q1tI"),n=a.n(r),c=a("lay5");function s(){var e=Object(r.useState)({}),t=e[0],a=e[1];return Object(r.useEffect)((function(){return c.a.onAuthStateChanged((function(e){var t=JSON.parse(localStorage.getItem("userData"));null==t?c.b.firestore().collection("Users").doc(e.uid).get().then((function(e){e.exists?(a(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)})):a(t)}))}),[]),t}var i={userData:{},getUserData:function(){}},l=n.a.createContext(i);r.Component},WKOT:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));a("VRzm");var r=a("kD0k"),n=a.n(r),c=(a("ls82"),a("OG14"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("q1tI")),s=a.n(c),i=a("7vrA"),l=a("6xyR"),o=a("TUci"),m=a("cWnB"),u=a("1g23"),d=a("Wbzz"),p=a("Kvkj"),f=a("7Qib"),b=a("lay5"),g=a("WHqd"),v=a("BYIe");a("NQsN");function h(e,t,a,r,n,c,s){try{var i=e[c](s),l=i.value}catch(o){return void a(o)}i.done?t(l):Promise.resolve(l).then(r,n)}function y(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function s(e){h(c,r,n,s,i,"next",e)}function i(e){h(c,r,n,s,i,"throw",e)}s(void 0)}))}}function x(){var e=Object(c.useState)(0),t=(e[0],e[1],Object(c.useState)("")),a=t[0],r=t[1],h=Object(c.useState)([]),x=h[0],O=h[1],E=Object(c.useContext)(v.b).dark,j=Object(u.b)();function N(){return(N=y(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,Object(u.d)();case 4:Object(d.navigate)("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}Object(c.useEffect)((function(){b.b.firestore().collection("Categories").get().then((function(e){var t=[];e.docs.map((function(e){if(e.exists){var a=e.data();a.idHash=e.id,t.push(a)}else console.log("No categories!")})),O(t)})).catch((function(e){console.log("Error getting categories:",e)}))}),[]);var w=Object(g.a)(),C=0;return Object.entries(w).map((function(e,t){C+=e[1][0]})),s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,null,s.a.createElement(f.a,{title:"Profile"}),s.a.createElement(i.a,{className:"d-flex align-items-center justify-content-center"},s.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"400px"}},s.a.createElement(l.a,{style:{borderColor:"grey",borderWidth:"3px"}},s.a.createElement(l.a.Body,null,s.a.createElement("h2",{className:"text-center mb-4"},"Email: ",j&&j.email),s.a.createElement("h3",null,"Total Score: ",C),a&&s.a.createElement(o.a,{variant:"danger"},a),s.a.createElement("ul",null),s.a.createElement(d.Link,{to:"/UpdateProfile",className:"btn btn-primary w-100 mt-3"},"Update Profile"))),s.a.createElement("div",{className:"w-100 text-center mt-2"},s.a.createElement(m.a,{variant:"link",onClick:function(){return N.apply(this,arguments)}},"Log Out")))),s.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"90%",margin:"auto"}},s.a.createElement("div",{className:"boxes text-left features-grid thicc "},s.a.createElement("hr",{style:{borderTop:"1px solid "+(E?"white":"black")}}),s.a.createElement("u",null,"Categories:"),s.a.createElement("br",null),s.a.createElement("div",{className:"thin feat-grid"},s.a.createElement("div",{key:"playedHomes",className:"featBoxes"},s.a.createElement("div",{className:"mid"},"Played Homes"),Object.entries(w).map((function(e,t){var a=String(e[0]),r=a.search("_"),n=a.substring(0,r),c=a.substring(r+1),i=e[1][1],l=e[1][0];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{key:"playedList-"+t,className:"playedHouses"},s.a.createElement("div",{className:"imgContainer"},s.a.createElement("a",{href:"/play?state="+c+"&mls="+n+"&listID="+e.idHash,style:{color:"#00DD00"}},s.a.createElement("img",{src:i,className:"imgGray",alt:"house",width:220,style:{border:"5px solid #00DD00",borderRadius:"10px",margin:"5px"}}),s.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored ",l)))))}))),x.map((function(e,t){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{key:"catBoxes-"+t,className:"featBoxes"},s.a.createElement("div",{className:"mid"},e.Name," - ",e.Rating,"/5"),e.List&&Object.entries(e.List).map((function(t,a){var r,n,c=!1,i=0,l=t[1],o=String(t[0]);if(o.length>0){var m=o.search("_");r=o.substring(0,m),n=o.substring(m+1)}Object.entries(w).map((function(e,a){e[0]==t[0]&&(c=!0,i=e[1][0])}));return c?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{key:"catList-"+a,className:"playedHouses"},s.a.createElement("div",{className:"imgContainer"},s.a.createElement("a",{href:"/play?state="+n+"&mls="+r+"&listID="+e.idHash,style:{color:"#00DD00"}},s.a.createElement("img",{src:l,className:"imgGray",alt:"house",width:220,style:{border:"5px solid #00DD00",borderRadius:"10px",margin:"5px"}}),s.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored ",i))))):""!=r&&""!=n?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{key:"catsList-"+a,style:{listStyleType:"circle"},className:"imgContainer"},s.a.createElement("a",{href:"/play?state="+n+"&mls="+r+"&listID="+e.idHash},s.a.createElement("img",{src:l,alt:"house",width:220,style:{border:"5px solid #007bff",borderRadius:"10px",margin:"5px"}})))):void 0}))))})))))))}}}]);
//# sourceMappingURL=component---src-pages-dashboard-js-c18109082e53626d00c7.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RXBc:function(e,t,a){"use strict";a.r(t);a("VRzm"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("OG14");var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("q1tI")),o=a.n(l),c=(a("Wbzz"),a("YwZP"),a("BYIe")),i=a("Kvkj"),s=a("7Qib"),m=a("cWnB"),u=(a("IP2g"),a("+eM2"),a("lay5")),p=a("1g23"),d=a("Abnl"),E=(a("WHqd"),a("NQsN"),a("LUGt"));a("5uP9");function x(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(s){return void a(s)}c.done?t(i):Promise.resolve(i).then(n,r)}function v(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){x(l,n,r,o,c,"next",e)}function c(e){x(l,n,r,o,c,"throw",e)}o(void 0)}))}}t.default=function(e){e.data;var t=Object(p.b)();console.log("current user is",t);var a=Object(l.useState)(null),n=a[0],x=a[1],f=Object(l.useState)([]),g=f[0],h=f[1];Object(l.useEffect)((function(){if(t&&0!=t.email){var e=function(){var e=v(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("RUNNING USERS AGAIN FIREBASE CALL"),e.next=3,u.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(x(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=JSON.parse(localStorage.getItem("userData"));null==a?setTimeout((function(){e()}),800):x(a)}console.log("RUNNING CATEGORIES FIREBASE CALL"),u.b.firestore().collection("Categories").get().then((function(e){var t=[];e.docs.map((function(e){if(e.exists){var a=e.data();a.idHash=e.id,t.push(a)}else console.log("No categories!")})),h(t)})).catch((function(e){console.log("Error getting categories:",e)}))}),[]);var b=Object(l.useState)(""),y=b[0],N=(b[1],function(){var e=v(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(d.b)(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=function(){var e=v(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Object(d.a)(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=[{key:"M6594039110_MD",pic:"https://ap.rdcpix.com/5dc138f032752cbae69cb1fcefe5afcfl-m1954928286od-w1024_h768_x2.webp"},{key:"M6243265216_VA",pic:"https://ap.rdcpix.com/d36c33fde545e850d443c9763748af12l-m790958679od-w1024_h768_x2.webp"},{key:"M6994333417_MD",pic:"https://ap.rdcpix.com/85d648fdbbc8ac7bc5c799fadd37e3c5l-m1904560105od-w1024_h768_x2.webp"},{key:"M5952646750_MD",pic:"https://ap.rdcpix.com/3095d7ad40bee6f66a5ad84e2a9f1e57l-m2804454579od-w1024_h768_x2.webp"},{key:"M6866287639_MD",pic:"https://ap.rdcpix.com/20abce3af92c6bff9049ad97c818fc1al-m1172070228od-w1024_h768_x2.webp"},{key:"M5920526288_VA",pic:"https://ap.rdcpix.com/57a04357bcceabe0f91e6a1433acd132l-m4230270205od-w1024_h768_x2.webp"}];function S(e){return o.a.createElement(E.a,{style:{maxWidth:"700px",margin:"auto",background:"transparent"},hasMediaButton:!1,hasIndexBoard:!1,hasSizeButton:!1},k.map((function(e,a){var r,l,c=!1,i=0,s=e.pic,m=String(e.key);if(m.length>0){var u=m.search("_");r=m.substring(0,u),l=m.substring(u+1)}if(t&&n){var p=n;Object.entries(p).map((function(t,a){t[0]==e.key&&(c=!0,i=t[1][0])}))}return c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"topList-"+a,className:"playedHouses"},o.a.createElement("div",{className:"imgContainer indexCarousel"},o.a.createElement("a",{href:"/play?state="+l+"&mls="+r,style:{color:"#00DD00"}},o.a.createElement("img",{src:s,alt:"house",width:"95%",className:"indexCarousel imgGray",style:{border:"5px solid #00DD00",backgroundSize:"cover",borderRadius:"10px",margin:"5px"}}),o.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored $",i))))):""!=r&&""!=l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"topList-"+a,style:{listStyleType:"circle"},className:"imgContainer indexCarousel"},o.a.createElement("a",{href:"/play?state="+l+"&mls="+r},o.a.createElement("img",{src:s,alt:"house",className:"indexCarousel",width:"95%",style:{border:"5px solid #007bff",backgroundSize:"cover",borderRadius:"10px",margin:"5px"}})))):void 0})))}Object(l.useContext)(c.b).dark;return o.a.createElement(i.a,null,o.a.createElement(s.a,{title:"Home"}),o.a.createElement("h2",null,"Test your home valuation skills!"),o.a.createElement("div",{className:"text-color",style:{fontSize:"1.5rem"}}," Click to play a home:"),o.a.createElement(S,null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"w-100",style:{maxWidth:"80%",margin:"auto"}},o.a.createElement("div",{className:"thin indexTop-grid"},o.a.createElement("div",{className:"indexTopBoxes",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px",backgroundImage:"url(../../icons/Dice.png)",backgroundSize:"cover"}},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalAlign:"bottom",zIndex:"4",color:"white"}},o.a.createElement("td",null,"Random Home?   ",o.a.createElement(m.a,{onClick:w,value:"Random",style:{fontWeight:"900",textShadow:"#000 0px 0 3px,#000 0px 0 2px",fontSize:"1.2rem"}},"Play")))))),o.a.createElement("form",{onSubmit:N},o.a.createElement("div",{className:"indexTopBoxes",style:{backgroundImage:"url(../../icons/Map.png)",backgroundSize:"cover"}},o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalAlign:"bottom",zIndex:"4"}},o.a.createElement("td",null,o.a.createElement("label",{htmlFor:"states",style:{color:"white",fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px"}},"State: "),o.a.createElement("select",{name:"states",id:"states",style:{borderRadius:"8px"}},o.a.createElement("option",{value:"AL"},"Alabama"),o.a.createElement("option",{value:"AK"},"Alaska"),o.a.createElement("option",{value:"AZ"},"Arizona"),o.a.createElement("option",{value:"AR"},"Arkansas"),o.a.createElement("option",{value:"CA"},"California"),o.a.createElement("option",{value:"CO"},"Colorado"),o.a.createElement("option",{value:"CT"},"Connecticut"),o.a.createElement("option",{value:"DE"},"Delaware"),o.a.createElement("option",{value:"FL"},"Florida"),o.a.createElement("option",{value:"GA"},"Georgia"),o.a.createElement("option",{value:"HI"},"Hawaii"),o.a.createElement("option",{value:"ID"},"Idaho"),o.a.createElement("option",{value:"IL"},"Illinois"),o.a.createElement("option",{value:"IN"},"Indiana"),o.a.createElement("option",{value:"IA"},"Iowa"),o.a.createElement("option",{value:"KS"},"Kansas"),o.a.createElement("option",{value:"KY"},"Kentucky"),o.a.createElement("option",{value:"LA"},"Louisiana"),o.a.createElement("option",{value:"ME"},"Maine"),o.a.createElement("option",{value:"MD"},"Maryland"),o.a.createElement("option",{value:"MA"},"Massachusetts"),o.a.createElement("option",{value:"MI"},"Michigan"),o.a.createElement("option",{value:"MN"},"Minnesota"),o.a.createElement("option",{value:"MS"},"Mississippi"),o.a.createElement("option",{value:"MO"},"Missouri"),o.a.createElement("option",{value:"MT"},"Montana"),o.a.createElement("option",{value:"NE"},"Nebraska"),o.a.createElement("option",{value:"NV"},"Nevada"),o.a.createElement("option",{value:"NH"},"New Hampshire"),o.a.createElement("option",{value:"NJ"},"New Jersey"),o.a.createElement("option",{value:"NM"},"New Mexico"),o.a.createElement("option",{value:"NY"},"New York"),o.a.createElement("option",{value:"NC"},"North Carolina"),o.a.createElement("option",{value:"ND"},"North Dakota"),o.a.createElement("option",{value:"PA"},"Pennsylvania"),o.a.createElement("option",{value:"VA"},"Virginia"))," ",o.a.createElement(m.a,{className:"btn",type:"submit",value:"Play",style:{fontWeight:"900",textShadow:"#000 0px 0 3px,#000 0px 0 2px",fontSize:"1.2rem"}},"Play"))),y&&o.a.createElement("tr",null,o.a.createElement("td",{style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px",color:"#dd3344"}},y)))))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"w-100 text-color thicc",style:{maxWidth:"90%",margin:"auto",textAlign:"left"}},o.a.createElement("u",null,"Popular Categories:"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"90%",margin:"auto"}},o.a.createElement("div",{className:"boxes text-left features-grid thicc "},o.a.createElement("div",{className:"thin feat-grid"},g&&g.map((function(e,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catBoxes-"+a,className:"featBoxes"},o.a.createElement("div",{key:"catBoxesTitle-"+a,className:"mid"},e.Name," - ",e.Rating,"/5"),e.List&&Object.entries(e.List).map((function(a,r){var l,c,i=!1,s=0,m=a[1],u=String(a[0]);if(u.length>0){var p=u.search("_");l=u.substring(0,p),c=u.substring(p+1)}t&&n&&Object.entries(n).map((function(e,t){e[0]==a[0]&&(i=!0,s=e[1][0])}));return i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catList-"+r,className:"playedHouses imgContainer"},o.a.createElement("a",{href:"/play?state="+c+"&mls="+l+"&listID="+e.idHash,style:{color:"#00DD00"}},o.a.createElement("img",{src:m,className:"imgGray",alt:"house",width:220,style:{border:"5px solid #00DD00",borderRadius:"10px",margin:"5px"}}),o.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored $",s)))):""!=l&&""!=c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catList-"+r,style:{listStyleType:"circle"},className:"imgContainer"},o.a.createElement("a",{href:"/play?state="+c+"&mls="+l+"&listID="+e.idHash},o.a.createElement("img",{src:m,alt:"house",width:220,style:{border:"5px solid #007bff",borderRadius:"10px",margin:"5px"}})))):void 0}))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cb684091779a716bd8d2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{RXBc:function(e,t,a){"use strict";a.r(t);a("VRzm"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("OG14");var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("q1tI")),o=a.n(l),i=(a("Wbzz"),a("YwZP")),c=a("BYIe"),s=a("Kvkj"),p=a("7Qib"),m=a("cWnB"),u=(a("IP2g"),a("+eM2"),a("lay5")),d=a("1g23"),x=a("Abnl"),h=(a("WHqd"),a("NQsN"),a("LUGt"));a("5uP9");function E(e,t,a,n,r,l,o){try{var i=e[l](o),c=i.value}catch(s){return void a(s)}i.done?t(c):Promise.resolve(c).then(n,r)}function f(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){E(l,n,r,o,i,"next",e)}function i(e){E(l,n,r,o,i,"throw",e)}o(void 0)}))}}t.default=function(e){e.data;var t=Object(d.b)(),a=Object(l.useState)(null),n=a[0],E=a[1],g=Object(l.useState)([]),v=g[0],b=g[1],y=Object(l.useContext)(c.b),w=y.dark;y.setModeDark,y.toggleDark,y.firstTime,y.setFirst;Object(l.useEffect)((function(){if(t&&0!=t.email){var e=function(){var e=f(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(E(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=JSON.parse(localStorage.getItem("userData"));null==a?e():E(a)}u.c.logEvent("Visted home page"),u.b.firestore().collection("Categories").get().then((function(e){var t=[];e.docs.map((function(e){if(e.exists){var a=e.data();a.idHash=e.id,t.push(a)}else console.log("No categories!")})),b(t)})).catch((function(e){console.log("Error getting categories:",e)}))}),[t]);var k=Object(l.useState)(""),N=k[0],S=(k[1],function(){var e=f(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(x.b)(t,n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=function(){var e=f(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Object(x.a)(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=f(r.a.mark((function e(t){var a,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"return",e.next=3,Object(x.a)(n,"return");case 3:a=e.sent,l=a[0],o=a[1],Object(i.navigate)("/compare?home1="+l+"&home2="+o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=[{key:"M6594039110_MD",pic:"https://ap.rdcpix.com/5dc138f032752cbae69cb1fcefe5afcfl-m1954928286od-w1024_h768_x2.webp"},{key:"M9443339587_AR",pic:"https://ap.rdcpix.com/030d6621ff9d88028d33d10fa03e90fbl-m2729099049od-w1024_h768_x2.webp"},{key:"M2429798166_AZ",pic:"https://ap.rdcpix.com/c2ba8905be7555d5517ca8cb2b19897fl-m440963967od-w1024_h768_x2.webp"},{key:"M2962802303_CA",pic:"https://ap.rdcpix.com/05ddb13d1a5c4caf08478544eca37a9fl-m1836488897od-w1024_h768_x2.webp"},{key:"M6243265216_VA",pic:"https://ap.rdcpix.com/d36c33fde545e850d443c9763748af12l-m790958679od-w1024_h768_x2.webp"},{key:"M1566290820_NV",pic:"https://ap.rdcpix.com/0babd23fca5a440bf718bcffbaf2cfefl-m2056316412od-w1024_h768_x2.webp"},{key:"M8205952869_MO",pic:"https://ap.rdcpix.com/be077f7d3f237392214aef19b2021f98l-m1745291971od-w1024_h768_x2.webp"},{key:"M7223227801_IL",pic:"https://ap.rdcpix.com/8f9e55e8d67834f5a7caf5273b3cc384l-m933649921od-w1024_h768_x2.webp"},{key:"M6444862166_FL",pic:"https://ap.rdcpix.com/d79cdfda73e1ebba649e5b59713fa696l-m404715354od-w1024_h768_x2.webp"}];function D(e){return o.a.createElement(h.a,{style:{maxWidth:"700px",margin:"auto",background:"transparent"},hasMediaButton:!1,hasIndexBoard:!1,hasSizeButton:!1},_.map((function(e,a){var r,l,i=!1,c=0,s=e.pic,p=String(e.key);if(p.length>0){var m=p.search("_");r=p.substring(0,m),l=p.substring(m+1)}if(t&&n){var u=n;Object.entries(u).map((function(t,a){t[0]==e.key&&(i=!0,c=t[1][0])}))}return i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"topList-"+a,className:"playedHouses"},o.a.createElement("div",{className:"imgContainer indexCarousel"},o.a.createElement("a",{href:"/play?state="+l+"&mls="+r,style:{color:"#00DD00"}},o.a.createElement("img",{src:s,alt:"house",width:"95%",className:"indexCarousel imgGray",style:{border:"5px solid #00DD00",backgroundSize:"cover",borderRadius:"10px",margin:"5px"}}),o.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored ",c))))):""!=r&&""!=l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"topList-"+a,style:{listStyleType:"circle"},className:"imgContainer indexCarousel"},o.a.createElement("a",{href:"/play?state="+l+"&mls="+r},o.a.createElement("img",{src:s,alt:"house",className:"indexCarousel",width:"95%",style:{border:"5px solid #007bff",backgroundSize:"cover",borderRadius:"10px",margin:"5px"}})))):void 0})))}return o.a.createElement(s.a,null,o.a.createElement(p.a,{title:"Home"}),o.a.createElement("h2",null,"Test your home valuation skills!"),o.a.createElement("div",{className:"text-color",style:{fontSize:"1.5rem"}}," Click to play a home:"),o.a.createElement(D,null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"w-100",style:{maxWidth:"80%",margin:"auto"}},o.a.createElement("div",{className:"thin indexTop-grid"},o.a.createElement("div",{className:"indexTopBoxes",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px",padding:"0px",justifyContent:"start",background:w?"#292c2f":"#e9ecef"}},o.a.createElement("img",{src:"../../icons/UpDownDark.png",style:{objectFit:"cover",width:"100%",height:"180px"}}),o.a.createElement("table",{style:{height:"100px"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalAlign:"middle",zIndex:"4",color:"white"}},o.a.createElement("td",null,"Higher or Lower",o.a.createElement("br",null),o.a.createElement(m.a,{onClick:C,value:"Random",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px",fontSize:"1.1rem",borderRadius:"20px",paddingLeft:"30px",paddingRight:"30px",letterSpacing:"2px"}},"Play")))))),o.a.createElement("div",{className:"indexTopBoxes",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px",padding:"0px",justifyContent:"start",background:w?"#292c2f":"#e9ecef"}},o.a.createElement("img",{src:"../../icons/Dice.png",style:{objectFit:"cover",width:"100%",height:"180px"}}),o.a.createElement("table",{style:{height:"100px"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalAlign:"middle",zIndex:"4",color:"white"}},o.a.createElement("td",null,"Random Home",o.a.createElement("br",null),o.a.createElement(m.a,{onClick:M,value:"Random",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px",fontSize:"1.1rem",borderRadius:"20px",paddingLeft:"30px",paddingRight:"30px",letterSpacing:"2px"}},"Play")))))),o.a.createElement("form",{onSubmit:S},o.a.createElement("div",{className:"indexTopBoxes",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px",padding:"0px",justifyContent:"start",background:w?"#292c2f":"#e9ecef"}},o.a.createElement("img",{src:"../../icons/Map.png",style:{objectFit:"cover",width:"100%",height:"180px"}}),o.a.createElement("table",{style:{height:"100px",margin:"5px"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalAlign:"middle",zIndex:"4"}},o.a.createElement("td",null,o.a.createElement("label",{htmlFor:"states",style:{color:"white",fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px"}},"State: "),o.a.createElement("select",{name:"states",id:"states",style:{borderRadius:"8px",fontSize:"20px"}},o.a.createElement("option",{value:"AL"},"Alabama"),o.a.createElement("option",{value:"AK"},"Alaska"),o.a.createElement("option",{value:"AZ"},"Arizona"),o.a.createElement("option",{value:"AR"},"Arkansas"),o.a.createElement("option",{value:"CA"},"California"),o.a.createElement("option",{value:"CO"},"Colorado"),o.a.createElement("option",{value:"CT"},"Connecticut"),o.a.createElement("option",{value:"DE"},"Delaware"),o.a.createElement("option",{value:"FL"},"Florida"),o.a.createElement("option",{value:"GA"},"Georgia"),o.a.createElement("option",{value:"HI"},"Hawaii"),o.a.createElement("option",{value:"ID"},"Idaho"),o.a.createElement("option",{value:"IL"},"Illinois"),o.a.createElement("option",{value:"IN"},"Indiana"),o.a.createElement("option",{value:"IA"},"Iowa"),o.a.createElement("option",{value:"KS"},"Kansas"),o.a.createElement("option",{value:"KY"},"Kentucky"),o.a.createElement("option",{value:"LA"},"Louisiana"),o.a.createElement("option",{value:"ME"},"Maine"),o.a.createElement("option",{value:"MD"},"Maryland"),o.a.createElement("option",{value:"MA"},"Massachusetts"),o.a.createElement("option",{value:"MI"},"Michigan"),o.a.createElement("option",{value:"MN"},"Minnesota"),o.a.createElement("option",{value:"MS"},"Mississippi"),o.a.createElement("option",{value:"MO"},"Missouri"),o.a.createElement("option",{value:"MT"},"Montana"),o.a.createElement("option",{value:"NE"},"Nebraska"),o.a.createElement("option",{value:"NV"},"Nevada"),o.a.createElement("option",{value:"NH"},"New Hampshire"),o.a.createElement("option",{value:"NJ"},"New Jersey"),o.a.createElement("option",{value:"NM"},"New Mexico"),o.a.createElement("option",{value:"NY"},"New York"),o.a.createElement("option",{value:"NC"},"North Carolina"),o.a.createElement("option",{value:"ND"},"North Dakota"),o.a.createElement("option",{value:"OH"},"Ohio"),o.a.createElement("option",{value:"OK"},"Oklahoma"),o.a.createElement("option",{value:"OR"},"Oregon"),o.a.createElement("option",{value:"PA"},"Pennsylvania"),o.a.createElement("option",{value:"RI"},"Rhode Island"),o.a.createElement("option",{value:"SC"},"South Carolina"),o.a.createElement("option",{value:"SD"},"South Dakota"),o.a.createElement("option",{value:"TN"},"Tennessee"),o.a.createElement("option",{value:"TX"},"Texas"),o.a.createElement("option",{value:"UT"},"Utah"),o.a.createElement("option",{value:"VT"},"Vermont"),o.a.createElement("option",{value:"VA"},"Virginia"),o.a.createElement("option",{value:"WA"},"Washington"),o.a.createElement("option",{value:"WV"},"West Virginia"),o.a.createElement("option",{value:"WI"},"Wisconsin"),o.a.createElement("option",{value:"WY"},"Wyoming")),o.a.createElement("br",null),o.a.createElement(m.a,{className:"btn",type:"submit",value:"Play",style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px",fontSize:"1.1rem",borderRadius:"20px",margin:"4px",paddingLeft:"30px",paddingRight:"30px",letterSpacing:"2px"}},"Play"))),N&&o.a.createElement("tr",null,o.a.createElement("td",{style:{fontWeight:"900",textShadow:"#000 0px 0 5px,#000 0px 0 5px",color:"#dd3344"}},N)))))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"w-100 text-color thicc",style:{maxWidth:"90%",margin:"auto",textAlign:"left"}},o.a.createElement("u",null,"Popular Categories:"),o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement("div",{className:"w-100 text-color",style:{maxWidth:"90%",margin:"auto"}},o.a.createElement("div",{className:"boxes text-left features-grid thicc "},o.a.createElement("div",{className:"thin feat-grid"},v&&v.map((function(e,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catBoxes-"+a,className:"featBoxes"},o.a.createElement("div",{key:"catBoxesTitle-"+a,className:"mid"},e.Name," "),e.List&&Object.entries(e.List).map((function(a,r){var l,i,c=!1,s=0,p=a[1],m=String(a[0]);if(m.length>0){var u=m.search("_");l=m.substring(0,u),i=m.substring(u+1)}t&&n&&Object.entries(n).map((function(e,t){e[0]==a[0]&&(c=!0,s=e[1][0])}));return c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catList-"+r,className:"playedHouses imgContainer"},o.a.createElement("a",{href:"/play?state="+i+"&mls="+l+"&listID="+e.idHash,style:{color:"#00DD00"}},o.a.createElement("img",{src:p,className:"imgGray",alt:"house",width:220,style:{border:"5px solid #00DD00",borderRadius:"10px",margin:"5px"}}),o.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored ",s)))):""!=l&&""!=i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"catList-"+r,style:{listStyleType:"circle"},className:"imgContainer"},o.a.createElement("a",{href:"/play?state="+i+"&mls="+l+"&listID="+e.idHash},o.a.createElement("img",{src:p,alt:"house",width:220,style:{border:"5px solid #007bff",borderRadius:"10px",margin:"5px"}})))):void 0}))))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3a9e312d107a85ad0779.js.map
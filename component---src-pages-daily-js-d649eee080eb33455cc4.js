(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{s3Ir:function(e,t,a){"use strict";a.r(t);a("VRzm"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("KKXr"),a("pIFo"),a("91GP");var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("OG14"),a("hLT2"),a("q1tI")),o=a.n(l),c=a("BYIe"),i=a("Kvkj"),s=a("7Qib"),u=a("9vsu"),m=a("zM5D"),d=a("dDCJ"),h=a("cWnB"),p=a("XQC9"),g=a("MBJH"),f=a("JUMO"),E=a("zUrK"),b=a("jDKy"),v=a("DZHF"),x=(a("IP2g"),a("lay5")),y=a("RoY4"),w=a("N5wt"),S=a("87Q3"),k=(a("WHqd"),a("q4sD"),a("+eM2"),a("3ZOQ"),a("9U/z"),a("LUGt")),C=(a("5uP9"),a("NQsN"),a("1g23")),M=a("Abnl"),O=a("YwZP");function D(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(s){return void a(s)}c.done?t(i):Promise.resolve(i).then(n,r)}function N(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){D(l,n,r,o,c,"next",e)}function c(e){D(l,n,r,o,c,"throw",e)}o(void 0)}))}}t.default=function(e){e.location;var t=Object(C.b)(),a=Object(l.useState)({}),n=a[0],D=a[1],j=Object(l.useState)(""),B=j[0],T=(j[1],Object(l.useState)()),_=T[0],F=T[1],z=Object(l.useState)(0),I=z[0],H=z[1],W=Object(l.useState)({}),A=W[0],P=W[1],R=Object(l.useState)([]),L=R[0],U=R[1],J=Object(l.useState)([{category:"filler",text:["filler","filler"]}]),q=J[0],Y=J[1],$=Object(l.useState)([{assessment:{total:"filler"},year:"filler"}]),Z=$[0],K=$[1],V=Object(l.useState)(!1),G=V[0],Q=V[1],X=Object(l.useState)(!1),ee=X[0],te=X[1],ae=Object(l.useState)(!1),ne=ae[0],re=ae[1],le=Object(l.useState)({median:"filler"}),oe=le[0],ce=le[1],ie=Object(l.useState)(!1),se=ie[0],ue=ie[1],me=Object(l.useState)(null),de=me[0],he=(me[1],Object(l.useState)(0)),pe=he[0],ge=he[1],fe=Object(l.useState)(),Ee=fe[0],be=fe[1],ve=Object(l.useState)(!1),xe=ve[0],ye=ve[1],we=Object(l.useState)(0),Se=we[0],ke=we[1],Ce=Object(l.useState)(0),Me=Ce[0],Oe=Ce[1],De=Object(l.useState)(0),Ne=De[0],je=De[1],Be=Object(l.useState)(!1),Te=Be[0],_e=Be[1],Fe=Object(l.useContext)(c.b).dark,ze=Object(l.useState)(0),Ie=ze[0],He=ze[1],We=Object(l.useState)(!1),Ae=We[0],Pe=We[1],Re=0,Le="",Ue=0,Je="",qe="",Ye="",$e="",Ze=Object(l.useState)(""),Ke=Ze[0],Ve=Ze[1],Ge=Object(l.useState)({}),Qe=Ge[0],Xe=Ge[1];function et(){var e,t,a=["M9170056565_RI","M8686638647_LA","M7830179733_LA","M9564664712_ID","M9077088995_ID","M5991137119_NJ","M1966510292_ID","M9239855212_TX","M4195415168_MI","M7575594712_MS","M7748332780_MS","M9138171415_MT","M7397671359_MT","M7012230511_IA","M8520035029_IA","M5154480603_SC","M5084680822_SC","M6488382672_SC","M9644614968_NJ","M8665237938_AR","M7875890587_AR","M8104221646_AR"],n=new Date,r=new Date("01/01/2022"),l=n.getTime()-r.getTime(),o=Math.trunc(l/864e5),c=String(a[o%a.length]);if(c.length>0){var i=c.search("_");e=c.substring(0,i),t=c.substring(i+1)}var s={mlsID:e,stateID:t};return Xe(s),s}var tt=function(){var e=N(r.a.mark((function e(t){var a,n,l,o,c,i,s,u,m,d,h,p,g,f,E,b,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},n=et(),l=n.mlsID,o=n.stateID,"undefined"!=typeof window&&(c=JSON.parse(localStorage.getItem("daily"))),null!=c)if(i=new Date(parseInt(c.time)).getTime(),s=new Date,u=s.getTime()-i,Math.trunc(u/864e5),!1,null!=c){if(m=l+"_"+o,0==String(c.key).localeCompare(String(m))){for(d={played:!0,points:c.points},a=d,h=[],null==c.percent?g=parseInt(c.points)/500:(p=parseInt(c.percent),g=1-p),f=c.points,8,E=Math.floor(8*g),h.push("📈"+Math.floor(100*g)+"% ✨"+f+"\n"),b=0;b<8;b++)b<E?h.push("🟩"):h.push("🟥");h.push("\n"),h.push("https://Appraisir.com/Daily \n"),v=String(h.join("")),Ve(v)}}else console.log("user DATA is null");return e.abrupt("return",x.b.firestore().collection("States").doc(String(o)).collection("buffer").doc(l).get().then((function(e){if(e.exists)return a.house=e.data(),a;console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(e){F(!1),P(e);var t=[];if(e.photos.forEach((function(e){var a=e.href,n=a.substring(0,a.length-5).concat("od-w1024_h768_x2.webp");t.push({src:n})})),Y(e.features),K(e.tax_history),U(t),e.trend&&e.trend.median){var a=e.trend.median.by_prop_type;ce(a)}};Object(l.useEffect)((function(){N(r.a.mark((function e(){var a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0,0,null!=(a=JSON.parse(localStorage.getItem("userData")))){e.next=9;break}if(!t||!t.uid){e.next=7;break}return e.next=7,x.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(D(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 7:e.next=10;break;case 9:D(a);case 10:if("undefined"!=typeof window&&new URLSearchParams(window.location.search),null==a){e.next=17;break}return e.next=14,tt(a);case 14:l=e.sent,e.next=20;break;case 17:return e.next=19,tt(n);case 19:l=e.sent;case 20:null==l.played?at(l.house):(at(l.house),H(l.points),F(!0));case 21:case"end":return e.stop()}}),e)})))()}),[B,Ie]),A&&(Ue=A.price,A.building_size&&(Re=A.building_size.size,Le=A.building_size.units),A.address&&(Je=A.address.city,qe=A.address.state,Ye=A.address.line,$e=A.address.postal_code,A.address.lat,A.address.lon));var nt=function(){var e=N(r.a.mark((function e(a){var n,l,o,c,i,s,u,m,d,h,p,g,f,E,b,v,y,w,S,k,C,M,O,D,N,j,B,T,_;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.preventDefault(),l=Object.assign({},Qe),o=l.mlsID,c=l.stateID,i=Math.abs(pe-Ue)/Ue,s=Math.round(500*(1-2*Math.pow(i,2))),ke(s<0?0:s),1==G&&(s-=50),1==se&&(s-=100),je(i),s<0&&(s=0),Oe(s+1),u=new Date,m=String(u.getTime()),d={time:""+m,key:o+"_"+c,points:""+s,percent:""+i},localStorage.setItem("daily",JSON.stringify(d)),(n={})[h="daily:"+m+"."+o+"."+c]=""+s,n,!t||!t.uid){e.next=42;break}if(p=""+t.uid,g={},null!=(f=JSON.parse(localStorage.getItem("userData")))){e.next=28;break}return e.next=26,x.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(g=e.data(),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 26:e.next=29;break;case 28:g=f;case 29:g&&(h=g[o+"_"+c]?"daily:"+m+"."+o+"."+c:o+"_"+c),Ye+", "+Je+", "+qe+", "+$e,E=A.photos[0].href,b=E.substring(0,E.length-5),v=b.concat("od-w1024_h768_x2.webp"),g[h]=[s,v],(y=(100*(1-i)).toFixed(2))<0&&(y=0),A.price>1e6&&y>90&&(0,g[w="badge:Millionaire.Club"]&&(S=parseInt(g[w][2])),S?S+=1:S=1,10,"Score over 90% on houses greater than $1,000,000","MillionairClub.svg",g[w]=[0,"Score over 90% on houses greater than $1,000,000",S,10,"MillionairClub.svg"]),Re>3e3&&y>80&&(0,g[k="badge:Mansion.Master"]&&(C=parseInt(g[k][2])),C?C+=1:C=1,20,"Score over 80% on houses larger than 3000 sqft","Mansion.svg",g[k]=[0,"Score over 80% on houses larger than 3000 sqft",C,20,"Mansion.svg"]),A.baths>A.beds&&("badge:Oval.Office",0,g["badge:Oval.Office"]&&(M=parseInt(g["badge:Oval.Office"][2])),M?M+=1:M=1,50,"Complete 50 houses that have more bathrooms than bedrooms","OvalOffice.svg",g["badge:Oval.Office"]=[0,"Complete 50 houses that have more bathrooms than bedrooms",M,50,"OvalOffice.svg"]),x.b.firestore().collection("Users").doc(String(p)).set(g),localStorage.setItem("userData",JSON.stringify(g));case 42:for(O=[],D=1-i,N=s,8,j=Math.floor(8*D),O.push("📈"+Math.floor(100*D)+"% ✨"+N+"\n"),B=0;B<8;B++)B<j?O.push("🟩"):O.push("🟥");O.push("\n"),O.push("Appraisir.com/Daily \n"),T=String(O.join("")),Ve(T),console.log(T),be(""),_=Math.random()+Math.random()+Math.random(),He(_),setTimeout((function(){_e(!0),t||(ye(!0),ce({median:"filler"}))}),600);case 58:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rt=function(){var e=N(r.a.mark((function e(t){var a,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(l=String(a.get("state"))),o=Object.assign({},Qe),l=o.stateID,Object(M.b)(l,n),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();ye(!1),He(e),Q(!1),ue(!1),ce({})}),600);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),lt=function(){var e=N(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),Object(M.a)(n),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();ye(!1),He(e),Q(!1),ue(!1),ce({})}),600);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ot(e){null==e&&(e="");for(var t=(e=(e=(e=(e=(e=(e=(e+="").replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).split("."),a=t[0],n=t.length>1?"."+t[1]:"",r=/(\d+)(\d{3})/;r.test(a);)a=a.replace(r,"$1,$2");return a+n}var ct=o.a.createElement(u.a,{id:"popover-basic"},o.a.createElement(u.a.Body,null,"Copied to Clipboard!"));function it(e){var a;"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(a.get("state"),a.get("mls"));var n=(100*(1-Ne)).toFixed(2);return n<0&&(n=0),o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"You scored ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},Me-1)," points (Max score 500).   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ke)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!"))),o.a.createElement(p.a,{onClick:e.onHide,variant:Fe?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement("p",null,function(){o.a.Fragment,ot(String(Ue).replace(/\D/g,""));var e,a,r,l,c,i=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:Fe?"dark":"",style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Your Guess"),o.a.createElement("th",null,"List Price"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(pe).replace(/\D/g,"")))),o.a.createElement("td",null,o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(Ue).replace(/\D/g,""))))))),"You were ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},n,"%")," accurate.",o.a.createElement(f.a,{style:{backgroundColor:"#00dd00 !important",width:"100%",fontSize:"15px",height:"20px"},now:n}));Se<=0?e=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null)," You need to be within ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"700"}},"30%")," accuracy to score points. ",o.a.createElement("br",null)):(G&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Se)),a=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-50")," for using Tax Assessed Value.")),se&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Se)),r=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-100")," for using Average Home Price."))),t||(c=o.a.createElement(o.a.Fragment,null,"◦ ",o.a.createElement(O.Link,{to:"/Signup",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Make an account")," to track your score!"));var s=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(O.Link,{to:"/About",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Learn more")," about how the score is calculated ");return o.a.createElement(o.a.Fragment,null,i," ",e," ",l,a," ",r," ",o.a.createElement("br",null),o.a.createElement("div",{style:{textAlign:"left"}},s," ",c))}())),o.a.createElement(m.a.Footer,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement("div",{className:"scoreBottomButton-grid"},o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){lt(),e.onHide()}},"New Random Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){rt(),e.onHide()}},"New ",qe," Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{height:"inherit"},variant:"danger",onClick:e.onHide},"Close")))))}function st(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Tax Assessed Value"),o.a.createElement(p.a,{onClick:e.onHide,variant:Fe?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement("p",null,"The tax assessed value takes into account the property condition, square footage, and sales of similar homes. The actual sale price can be much greater or lower than the tax assesed value."),o.a.createElement("p",{className:"thicc"},"Unlocking the tax assessed value will lower your score by 50."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){Q(!0),te(!1)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Taxes?")),o.a.createElement(m.a.Footer,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}function ut(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Average House Price"),o.a.createElement(p.a,{onClick:e.onHide,variant:Fe?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},se?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:Fe?"dark":"",style:{width:"100%",margin:"auto"}},o.a.createElement("tbody",null,Object.entries(oe).map((function(e,t){if(e[1]&&e[1].listing_price)return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(e[1].listing_price).replace(/\D/g,""))),o.a.createElement("td",{key:"trend-"+t},("home"==(a=e[0])&&(a="Average Property"),function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}(a=a.replace(/_/g," "))))));var a}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"thicc"},"This will show the average house price in the area by house type.  ",o.a.createElement("br",null)),o.a.createElement("p",{className:"thicc"},"Unlocking this will lower your Final Score by 100."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){ue(!0)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Average Price"))),o.a.createElement(m.a.Footer,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}var mt,dt=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return r&&r.flyTo(t),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{style:{width:"100%",height:"350px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(S.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[A]),ht=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return Object(l.useEffect)((function(){r&&r.flyTo(t)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{style:{width:"100%",height:"150px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(S.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[A]);function pt(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Full Map"),o.a.createElement(p.a,{onClick:e.onHide,variant:Fe?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(dt,{center:[parseFloat(A.address.lat),parseFloat(A.address.lon)],zoom:13})),o.a.createElement(m.a.Footer,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}return o.a.createElement(i.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}),o.a.createElement(s.a,{title:"Daily Home"}),function(){if(null==de)return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{style:{margin:"auto"}},o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:lt},"New Random Home")),o.a.createElement("td",null," "),o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:rt},"New ",qe," Home")))),o.a.createElement("br",null),o.a.createElement("br",null))}(),o.a.createElement("div",null,0==_&&"filler"!=oe.median?o.a.createElement("h3",null,"Guess the price!  ",o.a.createElement(h.a,{onClick:function(){re(!0)},style:{fontWeight:"700",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Hint?")):0==_&&"filler"==oe.median?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"      You Scored ",Me-1,"!!!   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ke)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!")))):o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"      You Scored ",I,"!!!   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ke)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!"))))),o.a.createElement("br",null),(mt=Object(l.useCallback)((function(e){var t=e.target.value,a=ot(t=String(t).replace(/\D/g,""));be(a);var n=String(t).replace(",","");ge(n)}),[be]),0==_&&0==xe?o.a.createElement("div",{className:"inputPrice"},o.a.createElement(E.a,null,o.a.createElement(E.a.Text,{style:{backgroundColor:"#00BB00",borderColor:"#00BB00",color:"white",fontSize:"1.5rem",fontWeight:"900"}},"$"),o.a.createElement(b.a,{size:"lg",variant:"success",type:"text",value:Ee,onChange:function(e){mt(e)},onKeyPress:function(e){"Enter"===e.key&&nt()},placeholder:"Input a price"}),o.a.createElement(h.a,{onClick:nt,style:{fontSize:"1.5rem",fontWeight:"500",backgroundColor:"#00BB00",borderColor:"#00BB00"},variant:"success",value:"Submit"},"Submit"))):0==_&&1==xe?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," The house price is $",ot(String(Ue).replace(/\D/g,""))),o.a.createElement("h4",null,o.a.createElement(O.Link,{to:"/Signup",style:{color:"#00DD00",fontWeight:"800"}},"Make an account")," to track your score!")):o.a.createElement("h3",null," The house price is $",ot(String(Ue).replace(/\D/g,"")))),o.a.createElement("br",null),o.a.createElement("div",{className:"pageMargin pt-6 mt-6 text-color"},o.a.createElement("div",{className:"basic-grid"},o.a.createElement("div",{className:"boxes pics-grid "},Me?o.a.createElement(it,{show:Te,onHide:function(){return _e(!1)}}):" ",ee?o.a.createElement(st,{show:ee,onHide:function(){return te(!1)}}):" ",ne?o.a.createElement(ut,{show:ne,onHide:function(){return re(!1)}}):" ",Ae?o.a.createElement(pt,{show:Ae,onHide:function(){return Pe(!1)}}):" ",o.a.createElement("div",{className:"picSize"},o.a.createElement(k.a,{images:L,transitionDurationMax:40,style:{height:400,backgroundColor:"transparent"},hasMediaButton:!1,hasIndexBoard:!1}))),o.a.createElement("div",{className:"boxes text-left thicc "},o.a.createElement("hr",{style:{borderTop:"1px solid "+(Fe?"white":"black")}}),o.a.createElement("div",{className:"addrMap-grid"},o.a.createElement("div",{className:"addrMapBoxes"},0==_&&0==xe?o.a.createElement(o.a.Fragment,null,Je,", ",qe,", ",$e," ",o.a.createElement("br",null)):o.a.createElement(o.a.Fragment,null,Ye,", ",Je,", ",qe,", ",$e," ",o.a.createElement("br",null)),A.beds," ",o.a.createElement("div",{className:"thin"},"Beds")," ",A.baths," ",o.a.createElement("div",{className:"thin"},"Baths")," ",Re," ",o.a.createElement("div",{className:"thin"},Le)," ",A.style," ",o.a.createElement("br",null),A.year_built?function(){return o.a.createElement(o.a.Fragment,null," ",A.year_built," ",o.a.createElement("div",{className:"thin"},"Year Built")," ",o.a.createElement("br",null)," ")}:""),o.a.createElement("div",{className:"addrMapBoxes"},function(){if(A&&A.address)return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(ht,{center:[parseFloat(A.address.lat),parseFloat(A.address.lon)],zoom:12}),o.a.createElement("button",{onClick:function(){Pe(!0)},style:{opacity:"0.75",backgroundColor:"transparent",border:"none",position:"absolute",bottom:"5px",zIndex:"900"}},o.a.createElement("svg",{style:{stroke:"#555",fill:"#fff"},height:"30",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 30 30",width:"30",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",null,"Full Map"),o.a.createElement("path",{d:"m1 1v10h5v-5h5v-5zm18 0v5h5v5h5v-10zm-18 18v10h10v-5h-5v-5zm18 5v5h10v-10h-5v5z"}))))}())),o.a.createElement("hr",{style:{borderTop:"1px solid "+(Fe?"white":"black")}})),o.a.createElement("div",{className:"boxes text-left thicc scrolling"},o.a.createElement("u",null,"Description:"),o.a.createElement("br",null),o.a.createElement("div",{className:"thin"},A.description)),o.a.createElement("div",{className:"boxes text-left features-grid thicc "},o.a.createElement(v.a,null,o.a.createElement(v.a.Item,{eventKey:"0",style:{borderColor:"#bbb",borderWidth:"1px"}},o.a.createElement(v.a.Button,{style:{backgroundColor:Fe?"#222":"white",color:Fe?"white":"black",fontWeight:"900",fontSize:"1.2rem"}},o.a.createElement("u",null,"Details:")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"thin feat-grid"},Z.length>0?G?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("ul",null,Z&&Z.map((function(e,t){if(e.assessment)return o.a.createElement("div",{key:"tax-"+t},o.a.createElement("li",null,e.year," - $",e.assessment.total))}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement(h.a,{onClick:function(){te(!0)},style:{fontWeight:"700",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Unlock Tax Hint?"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("div",{style:{fontWeight:"600",color:"red"}},"There is no Tax data available for this house. "))),q.map((function(e,t){return o.a.createElement("div",{key:"featCat-"+t,className:"featBoxes"},o.a.createElement("div",{className:"mid"},e.category," "),o.a.createElement("ul",null,e.text.map((function(e,t){return o.a.createElement("li",{key:"featList-"+t},e)}))))}))))))))))}}}]);
//# sourceMappingURL=component---src-pages-daily-js-d649eee080eb33455cc4.js.map
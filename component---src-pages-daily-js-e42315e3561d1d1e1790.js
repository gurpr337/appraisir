(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{s3Ir:function(e,t,a){"use strict";a.r(t);a("VRzm"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("KKXr"),a("pIFo"),a("91GP");var n=a("kD0k"),r=a.n(n),l=(a("ls82"),a("OG14"),a("hLT2"),a("q1tI")),o=a.n(l),c=a("BYIe"),i=a("Kvkj"),s=a("7Qib"),u=a("9vsu"),m=a("zM5D"),d=a("dDCJ"),h=a("cWnB"),p=a("XQC9"),g=a("MBJH"),E=a("JUMO"),f=a("zUrK"),b=a("jDKy"),v=a("DZHF"),x=(a("IP2g"),a("lay5")),y=a("RoY4"),w=a("N5wt"),S=a("87Q3"),k=(a("WHqd"),a("q4sD"),a("+eM2"),a("3ZOQ"),a("9U/z"),a("LUGt")),C=(a("5uP9"),a("NQsN"),a("1g23")),O=a("Abnl"),D=a("YwZP");function N(e,t,a,n,r,l,o){try{var c=e[l](o),i=c.value}catch(s){return void a(s)}c.done?t(i):Promise.resolve(i).then(n,r)}function M(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){N(l,n,r,o,c,"next",e)}function c(e){N(l,n,r,o,c,"throw",e)}o(void 0)}))}}t.default=function(e){e.location;var t=Object(C.b)(),a=Object(l.useState)({}),n=a[0],N=a[1],j=Object(l.useState)(""),B=j[0],F=(j[1],Object(l.useState)()),T=F[0],z=F[1],W=Object(l.useState)(0),H=W[0],_=W[1],I=Object(l.useState)({}),A=I[0],P=I[1],U=Object(l.useState)([]),Y=U[0],L=U[1],R=Object(l.useState)([{category:"filler",text:["filler","filler"]}]),J=R[0],K=R[1],q=Object(l.useState)([{assessment:{total:"filler"},year:"filler"}]),$=q[0],Z=q[1],V=Object(l.useState)(!1),G=V[0],Q=V[1],X=Object(l.useState)(!1),ee=X[0],te=X[1],ae=Object(l.useState)(!1),ne=ae[0],re=ae[1],le=Object(l.useState)({median:"filler"}),oe=le[0],ce=le[1],ie=Object(l.useState)(!1),se=ie[0],ue=ie[1],me=Object(l.useState)(null),de=me[0],he=(me[1],Object(l.useState)(0)),pe=he[0],ge=he[1],Ee=Object(l.useState)(),fe=Ee[0],be=Ee[1],ve=Object(l.useState)(!1),xe=ve[0],ye=ve[1],we=Object(l.useState)(0),Se=we[0],ke=we[1],Ce=Object(l.useState)(0),Oe=Ce[0],De=Ce[1],Ne=Object(l.useState)(0),Me=Ne[0],je=Ne[1],Be=Object(l.useState)(!1),Fe=Be[0],Te=Be[1],ze=Object(l.useContext)(c.b).dark,We=Object(l.useState)(0),He=We[0],_e=We[1],Ie=Object(l.useState)(!1),Ae=Ie[0],Pe=Ie[1],Ue=0,Ye="",Le=0,Re="",Je="",Ke="",qe="",$e=Object(l.useState)(""),Ze=$e[0],Ve=$e[1],Ge=Object(l.useState)({}),Qe=Ge[0],Xe=Ge[1];function et(){var e,t,a=["M7148437011_AK","M7258580616_AK","M8312616891_AK","M9015391111_AK","M3471459698_NY","M3946297019_NY","M4721900943_NY","M4965882994_NY"],n=new Date,r=new Date("01/01/2022"),l=n.getTime()-r.getTime(),o=Math.trunc(l/864e5),c=String(a[o%a.length]);if(c.length>0){var i=c.search("_");e=c.substring(0,i),t=c.substring(i+1)}var s={mlsID:e,stateID:t};return Xe(s),s}var tt=function(){var e=M(r.a.mark((function e(t){var a,n,l,o,c,i,s,u,m,d,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},n=et(),l=n.mlsID,o=n.stateID,"undefined"!=typeof window&&(c=JSON.parse(localStorage.getItem("daily"))),null!=c&&(i=new Date(parseInt(c.time)).getTime(),s=new Date,u=s.getTime()-i,m=Math.trunc(u/864e5),!1,null!=c?0==m&&(d=l+"_"+o,String(c.key).localeCompare(String(d))&&(h={played:!0,points:c.points},a=h)):console.log("user DATA is null")),e.abrupt("return",x.b.firestore().collection("States").doc(String(o)).collection("buffer").doc(l).get().then((function(e){if(e.exists)return a.house=e.data(),a;console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(e){z(!1),P(e);var t=[];if(e.photos.forEach((function(e){var a=e.href,n=a.substring(0,a.length-5).concat("od-w1024_h768_x2.webp");t.push({src:n})})),K(e.features),Z(e.tax_history),L(t),e.trend&&e.trend.median){var a=e.trend.median.by_prop_type;ce(a)}};Object(l.useEffect)((function(){M(r.a.mark((function e(){var a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0,0,null!=(a=JSON.parse(localStorage.getItem("userData")))){e.next=9;break}if(!t||!t.uid){e.next=7;break}return e.next=7,x.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(N(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 7:e.next=10;break;case 9:N(a);case 10:if("undefined"!=typeof window&&new URLSearchParams(window.location.search),null==a){e.next=17;break}return e.next=14,tt(a);case 14:l=e.sent,e.next=20;break;case 17:return e.next=19,tt(n);case 19:l=e.sent;case 20:null==l.played?at(l.house):(at(l.house),_(l.points),z(!0));case 21:case"end":return e.stop()}}),e)})))()}),[B,He]),A&&(Le=A.price,A.building_size&&(Ue=A.building_size.size,Ye=A.building_size.units),A.address&&(Re=A.address.city,Je=A.address.state,Ke=A.address.line,qe=A.address.postal_code,A.address.lat,A.address.lon));var nt=function(){var e=M(r.a.mark((function e(a){var n,l,o,c,i,s,u,m,d,h,p,g,E,f,b,v,y,w,S,k,C,O,D,N,M,j,B,F,T;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&a.preventDefault(),l=Object.assign({},Qe),o=l.mlsID,c=l.stateID,i=Math.abs(pe-Le)/Le,s=Math.round(500*(1-2*Math.pow(i,2))),ke(s<0?0:s),1==G&&(s-=50),1==se&&(s-=100),je(i),s<0&&(s=0),De(s+1),u=new Date,m=String(u.getTime()),d={time:""+m,key:o+"."+c,points:""+s},localStorage.setItem("daily",JSON.stringify(d)),(n={})[h="daily:"+m+"."+o+"."+c]=""+s,n,!t||!t.uid){e.next=42;break}if(p=""+t.uid,g={},null!=(E=JSON.parse(localStorage.getItem("userData")))){e.next=28;break}return e.next=26,x.b.firestore().collection("Users").doc(String(t.uid)).get().then((function(e){e.exists?(g=e.data(),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 26:e.next=29;break;case 28:g=E;case 29:g&&(h=g[o+"_"+c]?"daily:"+m+"."+o+"."+c:o+"_"+c),Ke+", "+Re+", "+Je+", "+qe,f=A.photos[0].href,b=f.substring(0,f.length-5),v=b.concat("od-w1024_h768_x2.webp"),g[h]=[s,v],(y=(100*(1-i)).toFixed(2))<0&&(y=0),A.price>1e6&&y>90&&(0,g[w="badge:Millionaire.Club"]&&(S=parseInt(g[w][2])),S?S+=1:S=1,10,"Score over 90% on houses greater than $1,000,000","MillionairClub.svg",g[w]=[0,"Score over 90% on houses greater than $1,000,000",S,10,"MillionairClub.svg"]),Ue>3e3&&y>80&&(0,g[k="badge:Mansion.Master"]&&(C=parseInt(g[k][2])),C?C+=1:C=1,20,"Score over 80% on houses larger than 3000 sqft","Mansion.svg",g[k]=[0,"Score over 80% on houses larger than 3000 sqft",C,20,"Mansion.svg"]),A.baths>A.beds&&("badge:Oval.Office",0,g["badge:Oval.Office"]&&(O=parseInt(g["badge:Oval.Office"][2])),O?O+=1:O=1,50,"Complete 50 houses that have more bathrooms than bedrooms","OvalOffice.svg",g["badge:Oval.Office"]=[0,"Complete 50 houses that have more bathrooms than bedrooms",O,50,"OvalOffice.svg"]),x.b.firestore().collection("Users").doc(String(p)).set(g),localStorage.setItem("userData",JSON.stringify(g));case 42:for(D=[],N=1-i,M=s,8,j=Math.floor(8*N),D.push("📈"+Math.floor(100*N)+"% ✨"+M+"\n"),B=0;B<8;B++)B<j?D.push("🟩"):D.push("🟥");D.push("\n"),D.push("Appraisir.com/Daily \n"),F=String(D.join("")),Ve(F),console.log(F),be(""),T=Math.random()+Math.random()+Math.random(),_e(T),setTimeout((function(){Te(!0),t||(ye(!0),ce({median:"filler"}))}),600);case 58:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rt=function(){var e=M(r.a.mark((function e(t){var a,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(l=String(a.get("state"))),o=Object.assign({},Qe),l=o.stateID,Object(O.b)(l,n),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();ye(!1),_e(e),Q(!1),ue(!1),ce({})}),600);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),lt=function(){var e=M(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),Object(O.a)(n),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();ye(!1),_e(e),Q(!1),ue(!1),ce({})}),600);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ot(e){null==e&&(e="");for(var t=(e=(e=(e=(e=(e=(e=(e+="").replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).split("."),a=t[0],n=t.length>1?"."+t[1]:"",r=/(\d+)(\d{3})/;r.test(a);)a=a.replace(r,"$1,$2");return a+n}var ct=o.a.createElement(u.a,{id:"popover-basic"},o.a.createElement(u.a.Body,null,"Copied to Clipboard!"));function it(e){var a;"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(a.get("state"),a.get("mls"));var n=(100*(1-Me)).toFixed(2);return n<0&&(n=0),o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"You scored ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},Oe-1)," points (Max score 500).   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ze)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!"))),o.a.createElement(p.a,{onClick:e.onHide,variant:ze?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement("p",null,function(){o.a.Fragment,ot(String(Le).replace(/\D/g,""));var e,a,r,l,c,i=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:ze?"dark":"",style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Your Guess"),o.a.createElement("th",null,"List Price"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(pe).replace(/\D/g,"")))),o.a.createElement("td",null,o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(Le).replace(/\D/g,""))))))),"You were ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},n,"%")," accurate.",o.a.createElement(E.a,{style:{backgroundColor:"#00dd00 !important",width:"100%",fontSize:"15px",height:"20px"},now:n}));Se<=0?e=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null)," You need to be within ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"700"}},"30%")," accuracy to score points. ",o.a.createElement("br",null)):(G&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Se)),a=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-50")," for using Tax Assessed Value.")),se&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Se)),r=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-100")," for using Average Home Price."))),t||(c=o.a.createElement(o.a.Fragment,null,"◦ ",o.a.createElement(D.Link,{to:"/Signup",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Make an account")," to track your score!"));var s=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(D.Link,{to:"/About",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Learn more")," about how the score is calculated ");return o.a.createElement(o.a.Fragment,null,i," ",e," ",l,a," ",r," ",o.a.createElement("br",null),o.a.createElement("div",{style:{textAlign:"left"}},s," ",c))}())),o.a.createElement(m.a.Footer,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement("div",{className:"scoreBottomButton-grid"},o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){lt(),e.onHide()}},"New Random Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){rt(),e.onHide()}},"New ",Je," Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{height:"inherit"},variant:"danger",onClick:e.onHide},"Close")))))}function st(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Tax Assessed Value"),o.a.createElement(p.a,{onClick:e.onHide,variant:ze?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement("p",null,"The tax assessed value takes into account the property condition, square footage, and sales of similar homes. The actual sale price can be much greater or lower than the tax assesed value."),o.a.createElement("p",{className:"thicc"},"Unlocking the tax assessed value will lower your score by 50."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){Q(!0),te(!1)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Taxes?")),o.a.createElement(m.a.Footer,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}function ut(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Average House Price"),o.a.createElement(p.a,{onClick:e.onHide,variant:ze?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},se?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:ze?"dark":"",style:{width:"100%",margin:"auto"}},o.a.createElement("tbody",null,Object.entries(oe).map((function(e,t){if(e[1]&&e[1].listing_price)return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{style:{color:"#00DD00",fontWeight:"800"}},"$",ot(String(e[1].listing_price).replace(/\D/g,""))),o.a.createElement("td",{key:"trend-"+t},("home"==(a=e[0])&&(a="Average Property"),function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}(a=a.replace(/_/g," "))))));var a}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"thicc"},"This will show the average house price in the area by house type.  ",o.a.createElement("br",null)),o.a.createElement("p",{className:"thicc"},"Unlocking this will lower your Final Score by 100."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){ue(!0)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Average Price"))),o.a.createElement(m.a.Footer,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}var mt,dt=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return r&&r.flyTo(t),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{style:{width:"100%",height:"350px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(S.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[A]),ht=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return Object(l.useEffect)((function(){r&&r.flyTo(t)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{style:{width:"100%",height:"150px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(w.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(S.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[A]);function pt(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Full Map"),o.a.createElement(p.a,{onClick:e.onHide,variant:ze?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(dt,{center:[parseFloat(A.address.lat),parseFloat(A.address.lon)],zoom:13})),o.a.createElement(m.a.Footer,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}return o.a.createElement(i.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}),o.a.createElement(s.a,{title:"Play Page"}),function(){if(null==de)return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{style:{margin:"auto"}},o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:lt},"New Random Home")),o.a.createElement("td",null," "),o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:rt},"New ",Je," Home")))),o.a.createElement("br",null),o.a.createElement("br",null))}(),o.a.createElement("div",null,0==T&&"filler"!=oe.median?o.a.createElement("h3",null,"Guess the price!  ",o.a.createElement(h.a,{onClick:function(){re(!0)},style:{fontWeight:"700",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Hint?")):0==T&&"filler"==oe.median?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"      You Scored ",Oe-1,"!!!   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ze)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!")))):o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"      You Scored ",H,"!!!   ",o.a.createElement(d.a,{trigger:"click",placement:"bottom",overlay:ct},o.a.createElement(h.a,{onClick:function(){navigator.clipboard.writeText(Ze)},style:{color:"white",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},title:"Share Results",className:"alignText"},"Share!"))))),o.a.createElement("br",null),(mt=Object(l.useCallback)((function(e){var t=e.target.value,a=ot(t=String(t).replace(/\D/g,""));be(a);var n=String(t).replace(",","");ge(n)}),[be]),0==T&&0==xe?o.a.createElement("div",{className:"inputPrice"},o.a.createElement(f.a,null,o.a.createElement(f.a.Text,{style:{backgroundColor:"#00BB00",borderColor:"#00BB00",color:"white",fontSize:"1.5rem",fontWeight:"900"}},"$"),o.a.createElement(b.a,{size:"lg",variant:"success",type:"text",value:fe,onChange:function(e){mt(e)},onKeyPress:function(e){"Enter"===e.key&&nt()},placeholder:"Input a price"}),o.a.createElement(h.a,{onClick:nt,style:{fontSize:"1.5rem",fontWeight:"500",backgroundColor:"#00BB00",borderColor:"#00BB00"},variant:"success",value:"Submit"},"Submit"))):0==T&&1==xe?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," The house price is $",ot(String(Le).replace(/\D/g,""))),o.a.createElement("h4",null,o.a.createElement(D.Link,{to:"/Signup",style:{color:"#00DD00",fontWeight:"800"}},"Make an account")," to track your score!")):o.a.createElement("h3",null," The house price is $",ot(String(Le).replace(/\D/g,"")))),o.a.createElement("br",null),o.a.createElement("div",{className:"pageMargin pt-6 mt-6 text-color"},o.a.createElement("div",{className:"basic-grid"},o.a.createElement("div",{className:"boxes pics-grid "},Oe?o.a.createElement(it,{show:Fe,onHide:function(){return Te(!1)}}):" ",ee?o.a.createElement(st,{show:ee,onHide:function(){return te(!1)}}):" ",ne?o.a.createElement(ut,{show:ne,onHide:function(){return re(!1)}}):" ",Ae?o.a.createElement(pt,{show:Ae,onHide:function(){return Pe(!1)}}):" ",o.a.createElement("div",{className:"picSize"},o.a.createElement(k.a,{images:Y,transitionDurationMax:40,style:{height:400,backgroundColor:"transparent"},hasMediaButton:!1,hasIndexBoard:!1}))),o.a.createElement("div",{className:"boxes text-left thicc "},o.a.createElement("hr",{style:{borderTop:"1px solid "+(ze?"white":"black")}}),o.a.createElement("div",{className:"addrMap-grid"},o.a.createElement("div",{className:"addrMapBoxes"},0==T&&0==xe?o.a.createElement(o.a.Fragment,null,Re,", ",Je,", ",qe," ",o.a.createElement("br",null)):o.a.createElement(o.a.Fragment,null,Ke,", ",Re,", ",Je,", ",qe," ",o.a.createElement("br",null)),A.beds," ",o.a.createElement("div",{className:"thin"},"Beds")," ",A.baths," ",o.a.createElement("div",{className:"thin"},"Baths")," ",Ue," ",o.a.createElement("div",{className:"thin"},Ye)," ",A.style," ",o.a.createElement("br",null),A.year_built?function(){return o.a.createElement(o.a.Fragment,null," ",A.year_built," ",o.a.createElement("div",{className:"thin"},"Year Built")," ",o.a.createElement("br",null)," ")}:""),o.a.createElement("div",{className:"addrMapBoxes"},function(){if(A&&A.address)return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(ht,{center:[parseFloat(A.address.lat),parseFloat(A.address.lon)],zoom:12}),o.a.createElement("button",{onClick:function(){Pe(!0)},style:{opacity:"0.75",backgroundColor:"transparent",border:"none",position:"absolute",bottom:"5px",zIndex:"900"}},o.a.createElement("svg",{style:{stroke:"#555",fill:"#fff"},height:"30",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 30 30",width:"30",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",null,"Full Map"),o.a.createElement("path",{d:"m1 1v10h5v-5h5v-5zm18 0v5h5v5h5v-10zm-18 18v10h10v-5h-5v-5zm18 5v5h10v-10h-5v5z"}))))}())),o.a.createElement("hr",{style:{borderTop:"1px solid "+(ze?"white":"black")}})),o.a.createElement("div",{className:"boxes text-left thicc scrolling"},o.a.createElement("u",null,"Description:"),o.a.createElement("br",null),o.a.createElement("div",{className:"thin"},A.description)),o.a.createElement("div",{className:"boxes text-left features-grid thicc "},o.a.createElement(v.a,null,o.a.createElement(v.a.Item,{eventKey:"0",style:{borderColor:"#bbb",borderWidth:"1px"}},o.a.createElement(v.a.Button,{style:{backgroundColor:ze?"#222":"white",color:ze?"white":"black",fontWeight:"900",fontSize:"1.2rem"}},o.a.createElement("u",null,"Details:")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"thin feat-grid"},$.length>0?G?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("ul",null,$&&$.map((function(e,t){if(e.assessment)return o.a.createElement("div",{key:"tax-"+t},o.a.createElement("li",null,e.year," - $",e.assessment.total))}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement(h.a,{onClick:function(){te(!0)},style:{fontWeight:"700",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Unlock Tax Hint?"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("div",{style:{fontWeight:"600",color:"red"}},"There is no Tax data available for this house. "))),J.map((function(e,t){return o.a.createElement("div",{key:"featCat-"+t,className:"featBoxes"},o.a.createElement("div",{className:"mid"},e.category," "),o.a.createElement("ul",null,e.text.map((function(e,t){return o.a.createElement("li",{key:"featList-"+t},e)}))))}))))))))))}}}]);
//# sourceMappingURL=component---src-pages-daily-js-e42315e3561d1d1e1790.js.map
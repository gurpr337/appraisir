(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2W6z":function(e,t,a){"use strict";a("pIFo");var n=function(){};e.exports=n},hhGf:function(e,t,a){"use strict";a.r(t);a("VRzm"),a("rGqo"),a("yt8O"),a("Btvt"),a("/8Fb"),a("91GP"),a("KKXr"),a("pIFo");var n=a("kD0k"),r=a.n(n),l=(a("OG14"),a("ls82"),a("q1tI")),o=a.n(l),c=a("BYIe"),s=a("Kvkj"),i=a("7Qib"),m=a("zM5D"),u=a("XQC9"),d=a("JUMO"),h=a("cWnB"),g=a("MBJH"),p=a("zUrK"),f=a("jDKy"),E=a("DZHF"),b=(a("IP2g"),a("lay5")),v=a("RoY4"),x=a("N5wt"),y=a("87Q3"),w=(a("WHqd"),a("q4sD"),a("+eM2"),a("3ZOQ"),a("9U/z"),a("LUGt")),k=(a("5uP9"),a("NQsN"),a("1g23")),S=a("Abnl"),C=a("YwZP");function O(e,t,a,n,r,l,o){try{var c=e[l](o),s=c.value}catch(i){return void a(i)}c.done?t(s):Promise.resolve(s).then(n,r)}function N(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){O(l,n,r,o,c,"next",e)}function c(e){O(l,n,r,o,c,"throw",e)}o(void 0)}))}}var D=function(){var e=N(r.a.mark((function e(t){var a,n,l,o,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(k.b)(),"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(n=a.get("state"),l=a.get("mls")),!1,o={},null!=t?(c=t)[s=l+"_"+n]&&(i={played:!0,points:c[s][0]},o=i):console.log("user DATA is null"),e.abrupt("return",b.b.firestore().collection("States").doc(String(n)).collection("buffer").doc(l).get().then((function(e){if(e.exists)return o.house=e.data(),o;console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(e){var t=e.location,a=Object(k.b)(),n=Object(l.useState)({}),O=n[0],j=n[1],B=Object(l.useState)(""),M=B[0],F=B[1],z=Object(l.useState)(),W=z[0],H=z[1],T=Object(l.useState)(0),I=(T[0],T[1],Object(l.useState)(0)),P=I[0],A=I[1],U=Object(l.useState)({}),_=U[0],L=U[1],R=Object(l.useState)([]),q=R[0],Y=R[1],$=Object(l.useState)([{category:"filler",text:["filler","filler"]}]),G=$[0],J=$[1],Z=Object(l.useState)([{assessment:{total:"filler"},year:"filler"}]),K=Z[0],V=Z[1],Q=Object(l.useState)(!1),X=Q[0],ee=Q[1],te=Object(l.useState)(!1),ae=te[0],ne=te[1],re=Object(l.useState)(!1),le=re[0],oe=re[1],ce=Object(l.useState)({median:"filler"}),se=ce[0],ie=ce[1],me=Object(l.useState)(!1),ue=me[0],de=me[1],he=Object(l.useState)(null),ge=he[0],pe=he[1],fe=Object(l.useState)(""),Ee=fe[0],be=fe[1],ve=Object(l.useState)(0),xe=(ve[0],ve[1],Object(l.useState)(0)),ye=xe[0],we=xe[1],ke=Object(l.useState)(),Se=ke[0],Ce=ke[1],Oe=Object(l.useState)(!1),Ne=Oe[0],De=Oe[1],je=Object(l.useState)(0),Be=je[0],Me=je[1],Fe=Object(l.useState)(0),ze=Fe[0],We=Fe[1],He=Object(l.useState)(0),Te=He[0],Ie=He[1],Pe=Object(l.useState)(!1),Ae=Pe[0],Ue=Pe[1],_e=Object(l.useContext)(c.b).dark,Le=Object(l.useState)(0),Re=Le[0],qe=Le[1],Ye=Object(l.useState)([0,0]),$e=(Ye[0],Ye[1],Object(l.useState)(!1)),Ge=$e[0],Je=$e[1],Ze=0,Ke="",Ve=0,Qe="",Xe="",et="",tt="",at=0,nt=0,rt=0,lt=function(e){H(!1),L(e);var t=[];if(e.photos.forEach((function(e){var a=e.href,n=a.substring(0,a.length-5).concat("od-w1024_h768_x2.webp");t.push({src:n})})),J(e.features),V(e.tax_history),Y(t),e.trend&&e.trend.median){var a=e.trend.median.by_prop_type;ie(a)}else{ie({median:"none"})}};Object(l.useEffect)((function(){N(r.a.mark((function e(){var n,l,o,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(at=0,nt=0,null!=(n=JSON.parse(localStorage.getItem("userData")))){e.next=9;break}if(!a||!a.uid){e.next=7;break}return e.next=7,b.b.firestore().collection("Users").doc(String(a.uid)).get().then((function(e){e.exists?(j(e.data()),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 7:e.next=10;break;case 9:j(n);case 10:if("undefined"!=typeof window&&(l=new URLSearchParams(window.location.search)),l&&(o=l.get("listID")),!o){e.next=17;break}return e.next=15,b.b.firestore().collection("Categories").doc(String(o)).get().then((function(e){if(e.exists){var t=e.data().List;pe(t),be(e.data().Name)}else console.log("No such item!")})).catch((function(e){console.log("Error getting items:",e)}));case 15:e.next=18;break;case 17:pe(null);case 18:if(!(t&&t.state&&t.state.pageInfo)){e.next=32;break}if(lt(t.state.pageInfo),null==n){e.next=26;break}return e.next=23,D(n);case 23:c=e.sent,e.next=29;break;case 26:return e.next=28,D(O);case 28:c=e.sent;case 29:c&&null!=c.played&&(A(c.points),H(!0)),e.next=42;break;case 32:if(null==n){e.next=38;break}return e.next=35,D(n);case 35:s=e.sent,e.next=41;break;case 38:return e.next=40,D(O);case 40:s=e.sent;case 41:null==s.played?lt(s.house):(lt(s.house),A(s.points),H(!0));case 42:case"end":return e.stop()}}),e)})))()}),[M,Re]);if(_&&(Ve=_.price,_.building_size&&(Ze=_.building_size.size,Ke=_.building_size.units),_.address)){Qe=_.address.city,Xe=_.address.state,et=_.address.line,tt=_.address.postal_code,at=_.address.lat,nt=_.address.lon,rt=_.year_built;var ot=6378137,ct=.00669437999014,st=1609.344,it=Math.PI/180,mt=it*ot*(1-ct)/(1-ct*Math.sin(at*it)^2)^1.5/st,ut=it*ot*Math.cos(at*it)/Math.sqrt(1-ct*Math.sin(at*it)^2)/st;at-7/mt,at+7/mt,nt-7/ut,nt+7/ut}var dt=function(){var e=N(r.a.mark((function e(t){var n,l,o,c,s,i,m,u,d,h,g,p,f,E,v,x,y,w,k,S;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.preventDefault(),"undefined"!=typeof window&&(l=new URLSearchParams(window.location.search)),l&&(o=l.get("state"),c=l.get("mls")),s=Math.abs(ye-Ve)/Ve,i=Math.round(500*(1-2*Math.pow(s,2))),Me(i<0?0:i),1==X&&(i-=50),1==ue&&(i-=100),Ie(s),i<0&&(i=0),We(i+1),(n={})[m=c+"_"+o]=""+i,n,!a||!a.uid){e.next=36;break}if(u=""+a.uid,d={},null!=(h=JSON.parse(localStorage.getItem("userData")))){e.next=23;break}return e.next=21,b.b.firestore().collection("Users").doc(String(a.uid)).get().then((function(e){e.exists?(d=e.data(),localStorage.setItem("userData",JSON.stringify(e.data()))):console.log("No such user!")})).catch((function(e){console.log("Error getting user:",e)}));case 21:e.next=24;break;case 23:d=h;case 24:et+", "+Qe+", "+Xe+", "+tt,g=_.photos[0].href,p=g.substring(0,g.length-5),f=p.concat("od-w1024_h768_x2.webp"),d[m]=[i,f],(E=(100*(1-s)).toFixed(2))<0&&(E=0),_.price>1e6&&E>90&&(0,d[v="badge:Millionaire.Club"]&&(x=parseInt(d[v][2])),x?x+=1:x=1,10,"Score over 90% on houses greater than $1,000,000","MillionairClub.svg",d[v]=[0,"Score over 90% on houses greater than $1,000,000",x,10,"MillionairClub.svg"]),Ze>3e3&&E>80&&(0,d[y="badge:Mansion.Master"]&&(w=parseInt(d[y][2])),w?w+=1:w=1,20,"Score over 80% on houses larger than 3000 sqft","Mansion.svg",d[y]=[0,"Score over 80% on houses larger than 3000 sqft",w,20,"Mansion.svg"]),_.baths>_.beds&&("badge:Oval.Office",0,d["badge:Oval.Office"]&&(k=parseInt(d["badge:Oval.Office"][2])),k?k+=1:k=1,50,"Complete 50 houses that have more bathrooms than bedrooms","OvalOffice.svg",d["badge:Oval.Office"]=[0,"Complete 50 houses that have more bathrooms than bedrooms",k,50,"OvalOffice.svg"]),b.b.firestore().collection("Users").doc(String(u)).set(d),localStorage.setItem("userData",JSON.stringify(d));case 36:Ce(""),S=Math.random()+Math.random()+Math.random(),qe(S),setTimeout((function(){Ue(!0),a||(De(!0),ie({median:"filler"}))}),600);case 40:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ht=function(){var e=N(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!=typeof window&&(a=new URLSearchParams(window.location.search)),a&&(n=String(a.get("state"))),Object(S.b)(n,O),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();De(!1),qe(e),ee(!1),de(!1),ie({})}),600);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),gt=function(){var e=N(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.preventDefault(),Object(S.a)(O),setTimeout((function(){var e=Math.random()+Math.random()+Math.random();De(!1),qe(e),ee(!1),de(!1),ie({})}),600);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function pt(e){null==e&&(e="");for(var t=(e=(e=(e=(e=(e=(e=(e+="").replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).replace(",","")).split("."),a=t[0],n=t.length>1?"."+t[1]:"",r=/(\d+)(\d{3})/;r.test(a);)a=a.replace(r,"$1,$2");return a+n}function ft(e){var t;"undefined"!=typeof window&&(t=new URLSearchParams(window.location.search)),t&&(t.get("state"),t.get("mls"));var n=(100*(1-Te)).toFixed(2);return n<0&&(n=0),o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"You scored ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},ze-1)," points (Max score 500)."),o.a.createElement(u.a,{onClick:e.onHide,variant:_e?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement("p",null,function(){o.a.Fragment,pt(String(Ve).replace(/\D/g,""));var e,t,r,l,c,s=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:_e?"dark":"",style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Your Guess"),o.a.createElement("th",null,"List Price"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",pt(String(ye).replace(/\D/g,"")))),o.a.createElement("td",{className:"blurPrice"},o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},"$",pt(String(Ve).replace(/\D/g,""))))))),"You were ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"800"}},n,"%")," accurate.",o.a.createElement(d.a,{style:{backgroundColor:"#00dd00 !important",width:"100%",fontSize:"15px",height:"20px"},now:n}));Be<=0?e=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null)," You need to be within ",o.a.createElement("span",{style:{color:"#00DD00",fontWeight:"700"}},"30%")," accuracy to score points. ",o.a.createElement("br",null)):(X&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Be)),t=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-50")," for using Tax Assessed Value.")),ue&&(l=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"Base score: ",o.a.createElement("span",{style:{fontWeight:"900"}},Be)),r=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#DD2222",fontWeight:"900"}},"-100")," for using Average Home Price."))),a||(c=o.a.createElement(o.a.Fragment,null,"◦ ",o.a.createElement(C.Link,{to:"/Signup",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Make an account")," to track your score!"));var i=o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(C.Link,{to:"/About",style:{color:"#00DD00",fontSize:"1.1rem",fontWeight:"800"}},"Learn more")," about how the score is calculated ");return o.a.createElement(o.a.Fragment,null,s," ",e," ",l,t," ",r," ",o.a.createElement("br",null),o.a.createElement("div",{style:{textAlign:"left"}},i," ",c))}())),o.a.createElement(m.a.Footer,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement("div",{className:"scoreBottomButton-grid"},o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){gt(),e.onHide()}},"New Random Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{fontWeight:"800",height:"inherit",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:function(){ht(),e.onHide()}},"New ",Xe," Home")),o.a.createElement("div",{className:"scoreBottomButtonBoxes"},o.a.createElement(h.a,{style:{height:"inherit"},variant:"danger",onClick:e.onHide},"Close")))))}function Et(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Tax Assessed Value"),o.a.createElement(u.a,{onClick:e.onHide,variant:_e?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement("p",null,"The tax assessed value takes into account the property condition, square footage, and sales of similar homes. The actual sale price can be much greater or lower than the tax assesed value."),o.a.createElement("p",{className:"thicc"},"Unlocking the tax assessed value will lower your score by 50."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){ee(!0),ne(!1)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Taxes?")),o.a.createElement(m.a.Footer,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}function bt(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Average House Price"),o.a.createElement(u.a,{onClick:e.onHide,variant:_e?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},ue?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0,variant:_e?"dark":"",style:{width:"100%",margin:"auto"}},o.a.createElement("tbody",null,Object.entries(se).map((function(e,t){if(e[1]&&e[1].listing_price)return o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{style:{color:"#00DD00",fontWeight:"800"}},"$",pt(String(e[1].listing_price).replace(/\D/g,""))),o.a.createElement("td",{key:"trend-"+t},("home"==(a=e[0])&&(a="Average Property"),function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}(a=a.replace(/_/g," "))))));var a}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"thicc"},"This will show the average house price in the area by house type.  ",o.a.createElement("br",null)),o.a.createElement("p",{className:"thicc"},"Unlocking this will lower your Final Score by 100."),o.a.createElement("br",null),o.a.createElement(h.a,{onClick:function(){de(!0)},style:{fontSize:"1.5rem",fontWeight:"500",color:"white"},variant:"primary"},"Show Average Price"))),o.a.createElement(m.a.Footer,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}var vt,xt=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return r&&r.flyTo(t),o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{style:{width:"100%",height:"350px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(y.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[_]),yt=Object(l.useCallback)((function(e){var t=e.center,a=e.zoom,n=Object(l.useState)(null),r=n[0],c=n[1];return Object(l.useEffect)((function(){r&&r.flyTo(t)}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{style:{width:"100%",height:"150px"},center:t,zoom:a,attributionControl:!1,zoomControl:!1,whenCreated:c,scrollWheelZoom:!0},o.a.createElement(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.a.createElement(y.a,{center:t,pathOptions:{color:"#00DD00"},radius:400})))}),[_]);function wt(e){return o.a.createElement(m.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"my-modal"}),o.a.createElement(m.a.Header,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(m.a.Title,{id:"contained-modal-title-vcenter"},"Full Map"),o.a.createElement(u.a,{onClick:e.onHide,variant:_e?"white":""})),o.a.createElement(m.a.Body,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(xt,{center:[parseFloat(_.address.lat),parseFloat(_.address.lon)],zoom:13})),o.a.createElement(m.a.Footer,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black"}},o.a.createElement(h.a,{variant:"danger",onClick:e.onHide},"Close")))}return o.a.createElement(s.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}),o.a.createElement(i.a,{title:"Play Page"}),function(){if(ge)return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"pageMargin pt-6 mt-6 text-color"},o.a.createElement("div",{className:"text-left"},"Continue ",Ee,": "),o.a.createElement("div",{className:"text-left thicc play-grid scrolling"},Object.entries(ge).map((function(e,t){var a,n,r,l,c=!1,s=0,i=e[1],m=String(e[0]);if(m.length>0){var u=m.search("_");a=m.substring(0,u),n=m.substring(u+1)}Object.entries(O).map((function(t,a){t[0]==e[0]&&(c=!0,s=t[1][0])})),"undefined"!=typeof window&&(r=new URLSearchParams(window.location.search)),r&&(l=r.get("listID"));return c?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{key:"listedItems-"+t,className:"playBox"},o.a.createElement("div",{className:"imgContainer"},o.a.createElement("a",{href:"/play?state="+n+"&mls="+a+"&listID="+l,style:{color:"#00DD00"},onClick:function(){F(a),ee(!1),de(!1),ie({median:"filler"}),De(!1)}},o.a.createElement("img",{src:i,className:"imgGray",alt:"house",style:{maxWidth:"150px",maxHeight:"100px",border:"5px solid #00DD00",borderRadius:"10px",margin:"5px"}}),o.a.createElement("div",{className:"imgCentered",style:{backgroundColor:"transparent",fontWeight:"900",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"}},"Scored ",s))))):""!=a&&""!=n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"playBox"},o.a.createElement("div",{key:"listedItems-"+t,className:"imgContainer "},o.a.createElement("a",{href:"/play?state="+n+"&mls="+a+"&listID="+l,onClick:function(){F(a),ee(!1),de(!1),ie({median:"filler"}),De(!1)}},o.a.createElement("img",{src:i,alt:"house",style:{maxWidth:"150px",maxHeight:"100px",border:"5px solid #007bff",borderRadius:"10px",margin:"5px"}}))))):void 0})))),o.a.createElement("br",null))}(),function(){if(null==ge)return o.a.createElement(o.a.Fragment,null,o.a.createElement("table",{style:{margin:"auto"}},o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:gt},"New Random Home")),o.a.createElement("td",null," "),o.a.createElement("td",null,o.a.createElement(h.a,{style:{fontWeight:"900",width:"100%",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},onClick:ht},"New ",Xe," Home")))),o.a.createElement("br",null),o.a.createElement("br",null))}(),o.a.createElement("div",null,0==W&&"filler"!=se.median?"none"==se.median?o.a.createElement("h3",null,"Guess the price!"):o.a.createElement("h3",null,"Guess the price!  ",o.a.createElement(h.a,{onClick:function(){oe(!0)},style:{fontWeight:"700",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Hint?")):0==W&&"filler"==se.median?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," You Scored ",ze-1,"!!!")):o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," You Scored ",P,"!!!"))),o.a.createElement("br",null),(vt=Object(l.useCallback)((function(e){var t=e.target.value,a=pt(t=String(t).replace(/\D/g,""));Ce(a);var n=String(t).replace(",","");we(n)}),[Ce]),0==W&&0==Ne?o.a.createElement("div",{className:"inputPrice"},o.a.createElement(p.a,null,o.a.createElement(p.a.Text,{style:{backgroundColor:"#00BB00",borderColor:"#00BB00",color:"white",fontSize:"1.5rem",fontWeight:"900"}},"$"),o.a.createElement(f.a,{size:"lg",variant:"success",type:"text",value:Se,onChange:function(e){vt(e)},onKeyPress:function(e){"Enter"===e.key&&dt()},placeholder:"Input a price"}),o.a.createElement(h.a,{onClick:dt,style:{fontSize:"1.5rem",fontWeight:"500",backgroundColor:"#00BB00",borderColor:"#00BB00"},variant:"success",value:"Submit"},"Submit"))):0==W&&1==Ne?o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null," The house price is ",o.a.createElement("span",{className:"blurPrice"}," $",pt(String(Ve).replace(/\D/g,"")))," "),o.a.createElement("h4",null,o.a.createElement(C.Link,{to:"/Signup",style:{color:"#00DD00",fontWeight:"800"}},"Make an account")," to track your score!")):o.a.createElement("h3",null," The house price is $",pt(String(Ve).replace(/\D/g,"")))),o.a.createElement("br",null),o.a.createElement("div",{className:"pageMargin pt-6 mt-6 text-color"},o.a.createElement("div",{className:"basic-grid"},o.a.createElement("div",{className:"boxes pics-grid "},ze?o.a.createElement(ft,{show:Ae,onHide:function(){return Ue(!1)}}):" ",ae?o.a.createElement(Et,{show:ae,onHide:function(){return ne(!1)}}):" ",le?o.a.createElement(bt,{show:le,onHide:function(){return oe(!1)}}):" ",Ge?o.a.createElement(wt,{show:Ge,onHide:function(){return Je(!1)}}):" ",o.a.createElement("div",{className:"picSize"},o.a.createElement(w.a,{images:q,transitionDurationMax:40,style:{height:400,backgroundColor:"transparent"},hasMediaButton:!1,hasIndexBoard:!1}))),o.a.createElement("div",{className:"boxes text-left thicc "},o.a.createElement("hr",{style:{borderTop:"1px solid "+(_e?"white":"black")}}),o.a.createElement("div",{className:"addrMap-grid"},o.a.createElement("div",{className:"addrMapBoxes"},0==W&&0==Ne?o.a.createElement(o.a.Fragment,null,Qe,", ",Xe,", ",tt," ",o.a.createElement("br",null)):o.a.createElement(o.a.Fragment,null,et,", ",Qe,", ",Xe,", ",tt," ",o.a.createElement("br",null)),function(){if(rt)return o.a.createElement(o.a.Fragment,null," ",rt," ",o.a.createElement("div",{className:"thin"},"Year Built")," ",o.a.createElement("br",null)," ")}(),_.beds," ",o.a.createElement("div",{className:"thin"},"Beds")," ",_.baths," ",o.a.createElement("div",{className:"thin"},"Baths")," ",Ze," ",o.a.createElement("div",{className:"thin"},Ke)," ",_.style," ",o.a.createElement("br",null)),o.a.createElement("div",{className:"addrMapBoxes"},function(){if(_&&_.address)return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(yt,{center:[parseFloat(_.address.lat),parseFloat(_.address.lon)],zoom:12}),o.a.createElement("button",{onClick:function(){Je(!0)},style:{opacity:"0.75",backgroundColor:"transparent",border:"none",position:"absolute",bottom:"5px",zIndex:"900"}},o.a.createElement("svg",{style:{stroke:"#555",fill:"#fff"},height:"30",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 30 30",width:"30",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("title",null,"Full Map"),o.a.createElement("path",{d:"m1 1v10h5v-5h5v-5zm18 0v5h5v5h5v-10zm-18 18v10h10v-5h-5v-5zm18 5v5h10v-10h-5v5z"}))))}())),o.a.createElement("hr",{style:{borderTop:"1px solid "+(_e?"white":"black")}})),o.a.createElement("div",{className:"boxes text-left thicc scrolling"},o.a.createElement("u",null,"Description:"),o.a.createElement("br",null),o.a.createElement("div",{className:"thin"},_.description)),o.a.createElement("div",{className:"boxes text-left features-grid thicc "},o.a.createElement(E.a,null,o.a.createElement(E.a.Item,{eventKey:"0",style:{borderColor:"#bbb",borderWidth:"1px"}},o.a.createElement(E.a.Button,{style:{backgroundColor:_e?"#222":"white",color:_e?"white":"black",fontWeight:"900",fontSize:"1.2rem"}},o.a.createElement("u",null,"Details:")),o.a.createElement(E.a.Body,null,o.a.createElement("div",{className:"thin feat-grid"},K.length>0?X?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("ul",null,K&&K.map((function(e,t){if(e.assessment)return o.a.createElement("div",{key:"tax-"+t},o.a.createElement("li",null,e.year," - $",e.assessment.total))}))))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement(h.a,{onClick:function(){ne(!0)},style:{fontWeight:"700",fontSize:"1.5rem",textShadow:"#000 0px 0 5px,#000 0px 0 5px,#000 0px 0 5px"},variant:"primary"},"Unlock Tax Hint?"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"featBoxes"},o.a.createElement("div",{className:"mid"},"Tax Assessed Value "),o.a.createElement("div",{style:{fontWeight:"600",color:"red"}},"There is no Tax data available for this house. "))),G.map((function(e,t){return o.a.createElement("div",{key:"featCat-"+t,className:"featBoxes"},o.a.createElement("div",{className:"mid"},e.category," "),o.a.createElement("ul",null,e.text.map((function(e,t){return o.a.createElement("li",{key:"featList-"+t},e)}))))}))))))))))}}}]);
//# sourceMappingURL=component---src-pages-play-js-67ced0233f549fd64e18.js.map
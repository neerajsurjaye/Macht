(this["webpackJsonpcovid-ujjain"]=this["webpackJsonpcovid-ujjain"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(30),r=c.n(a),i=(c(52),c(20)),d=c(10),o=c(8),l=(c(53),c(76)),j=c.p+"static/media/covid-pandemic.6704f78b.png",h=c(7),b=c.n(h),u=c(15),x=(c(55),c(34)),m=(c(74),c(73),c(72),function(){var e;function t(e,t){var c="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),s=document.createElement("a");s.setAttribute("href",c),s.setAttribute("download",t+".json"),document.body.appendChild(s),s.click(),s.remove()}var c=function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Download Ran"),e.t0=t,e.next=4,s();case 4:return e.t1=e.sent,(0,e.t0)(e.t1,"oxygen"),e.t2=t,e.next=9,r();case 9:return e.t3=e.sent,(0,e.t2)(e.t3,"tiffin"),e.t4=t,e.next=14,n();case 14:return e.t5=e.sent,(0,e.t4)(e.t5,"beds"),e.t6=t,e.next=19,a();case 19:e.t7=e.sent,(0,e.t6)(e.t7,"currData");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var t=Object(u.a)(b.a.mark((function t(){var c,s,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.collection("oxygen"),t.next=3,c.get();case 3:return s=t.sent,n=[],s.forEach((function(e){n.push(e.data())})),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(b.a.mark((function t(){var c,s,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.collection("bed"),t.next=3,c.get();case 3:return s=t.sent,n=[],s.forEach((function(e){n.push(e.data())})),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(u.a)(b.a.mark((function t(){var c,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.collection("info").doc("dailyinfo"),t.next=3,c.get();case 3:return s=t.sent,t.abrupt("return",s.data());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var t=Object(u.a)(b.a.mark((function t(){var c,s,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.collection("tiffin"),t.next=3,c.get();case 3:return s=t.sent,n=[],s.forEach((function(e){n.push(e.data())})),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/tiffin.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/oxygen.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/currData.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{init:function(){x.a.initializeApp({apiKey:"AIzaSyDKFtpDFtdYMi7YRBV8F-aJoCHVCyARnxY",authDomain:"covidarmyujjain.firebaseapp.com",projectId:"covidarmyujjain",storageBucket:"covidarmyujjain.appspot.com",messagingSenderId:"277671483273",appId:"1:277671483273:web:f72d58cd1e463b77ffb358",measurementId:"G-43KVGH532B"}),x.a.analytics()},db_init:function(){e=x.a.firestore()},getOxygen:s,getBeds:n,getData:a,getTiffin:r,downloadData:c,getLocalTiffin:i,getLocalBeds:function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/beds.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getLocalOxygen:d,getLocalCurrData:o}}()),p={title:{en:"Title",hi:"\u0936\u0940\u0930\u094d\u0937\u0915"},home:{en:"Home",hi:"\u0939\u094b\u092e"},resources:{en:"Resources",hi:"\u0938\u093e\u0927\u0928"},fightCovid:{en:"Let's fight with COVID-19 together.",hi:"\u0906\u0907\u090f COVID-19 \u0915\u0947 \u0938\u093e\u0925 \u092e\u093f\u0932\u0915\u0930 \u0932\u0921\u093c\u0947\u0902\u0964"},homeDesc:{en:"We, a group of youngsters created this website to help you and keep a track of covid resources available in ujjain and nearby districts.Here is a small contribution from our side to help you meet your needs. We also expect you to do your bit by abiding to the covid protocols.Powered by DGARAGE and Medevision",hi:"\u0939\u092e, \u092f\u0941\u0935\u093e\u0913\u0902 \u0915\u0947 \u090f\u0915 \u0938\u092e\u0942\u0939 \u0928\u0947 \u0906\u092a\u0915\u0940 \u092e\u0926\u0926 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0914\u0930 \u0909\u091c\u094d\u091c\u0948\u0928 \u0914\u0930 \u0906\u0938\u092a\u093e\u0938 \u0915\u0947 \u091c\u093f\u0932\u094b\u0902 \u092e\u0947\u0902 \u0909\u092a\u0932\u092c\u094d\u0927 \u0915\u094b\u0935\u093f\u0921 \u0938\u0902\u0938\u093e\u0927\u0928\u094b\u0902 \u0915\u093e \u091f\u094d\u0930\u0948\u0915 \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0907\u0938 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0915\u094b \u092c\u0928\u093e\u092f\u093e \u0939\u0948\u0964 \u0906\u092a\u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e\u0913\u0902 \u0915\u094b \u092a\u0942\u0930\u093e \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0939\u092e\u093e\u0930\u0940 \u0913\u0930 \u0938\u0947 \u090f\u0915 \u091b\u094b\u091f\u093e \u0938\u093e \u092f\u094b\u0917\u0926\u093e\u0928 \u0939\u0948\u0964 \u0939\u092e \u092f\u0939 \u092d\u0940 \u0909\u092e\u094d\u092e\u0940\u0926 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0915\u093f \u0906\u092a \u0915\u094b\u0935\u093f\u0921 \u092a\u094d\u0930\u094b\u091f\u094b\u0915\u0949\u0932 \u0915\u093e \u092a\u093e\u0932\u0928 \u0915\u0930\u0915\u0947 \u0905\u092a\u0928\u093e \u0915\u093e\u092e \u0915\u0930\u0947\u0902\u0917\u0947"},mpStat:{en:"Madhya Pradesh Stats:",hi:"\u092e\u0927\u094d\u092f \u092a\u094d\u0930\u0926\u0947\u0936 \u0915\u0947 \u0906\u0901\u0915\u0921\u093c\u0947:"},totalCases:{en:"Total Cases",hi:"\u0915\u0941\u0932 \u092e\u093e\u092e\u0932\u0947"},newCases:{en:"New Cases",hi:"\u0928\u090f \u092e\u093e\u092e\u0932\u0947"},recovered:{en:"Recovered",hi:"\u092c\u0930\u093e\u092e\u0926"},oxygen:{en:"Oxygen provider",hi:"\u0911\u0915\u094d\u0938\u0940\u091c\u0928 \u092a\u094d\u0930\u0926\u093e\u0924\u093e"},hospitalbeds:{en:"Hospital Beds",hi:"\u0905\u0938\u094d\u092a\u0924\u093e\u0932 \u0915\u0947 \u092c\u093f\u0938\u094d\u0924\u0930"},tiffinserv:{en:"Tiffin Service",hi:"\u091f\u093f\u092b\u093f\u0928 \u0938\u0930\u094d\u0935\u093f\u0938"},plasmaassiastance:{en:"Plasma Assiastance",hi:"\u092a\u094d\u0932\u093e\u091c\u093c\u094d\u092e\u093e \u0905\u0938\u094d\u0938\u093f\u0938\u094d\u091f\u0947\u0902\u091f"},oxycon:{en:"Oxygen Concentrators",hi:"\u0911\u0915\u094d\u0938\u0940\u091c\u0928 \u0915\u0949\u0928\u094d\u0938\u0947\u0902\u091f\u094d\u0930\u0947\u091f\u0930"},dashboard:{en:"Dashboard",hi:"\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921"},regPlasma:{en:"Register as Plasma Donor",hi:"\u092a\u094d\u0932\u093e\u091c\u094d\u092e\u093e \u0921\u094b\u0928\u0930 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0930\u091c\u093f\u0938\u094d\u091f\u0930 \u0915\u0930\u0947\u0902"},homeIso:{en:"Home isolation",hi:"\u0906\u0907\u0938\u094b\u0932\u0947\u0936\u0928"},covidHelpline:{en:"Covid Helpline",hi:"\u0915\u094b\u0935\u093f\u0921 \u0939\u0947\u0932\u094d\u092a\u0932\u093e\u0907\u0928"},regVol:{en:"Register as Volunteer",hi:"\u0938\u094d\u0935\u092f\u0902\u0938\u0947\u0935\u0915 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u092a\u0902\u091c\u0940\u0915\u0930\u0923 \u0915\u0930\u0947\u0902"},preCaution:{en:"Precautions to take",hi:"\u092c\u0930\u0924\u0928\u0947 \u0915\u0940 \u0938\u093e\u0935\u0927\u093e\u0928\u093f\u092f\u093e\u0902"},wearFacemask:{en:"Wear facemask",hi:"\u092b\u0947\u0938\u092e\u093e\u0938\u094d\u0915 \u092a\u0939\u0928\u0947\u0902"},socialDistancing:{en:"social distancing",hi:"\u0938\u094b\u0936\u0932 \u0921\u093f\u0938\u094d\u091f\u0928\u094d\u0938\u093f\u0902\u0917"},stayAthome:{en:" Stay at home",hi:"\u0918\u0930 \u092a\u0930 \u0930\u0939\u094b"},washHands:{en:"Wash your hands",hi:"\u0905\u092a\u0928\u0947 \u0939\u093e\u0925 \u0927\u094b\u090f\u0902"},commonSymp:{en:"Common Symptoms of Coronavirus",hi:"\u0915\u094b\u0930\u094b\u0928\u094b\u0935\u093e\u092f\u0930\u0938 \u0915\u0947 \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0932\u0915\u094d\u0937\u0923"},fever:{en:"Fever",hi:"\u092c\u0941\u0916\u093e\u0930"},soarThroat:{en:"Soar Throat",hi:"\u0917\u0932\u0947 \u092e\u0947\u0902 \u0916\u0930\u093e\u0936"},headache:{en:"Headache",hi:"\u0938\u0930\u0926\u0930\u094d\u0926"},cough:{en:"Cough",hi:"\u0916\u093e\u0902\u0938\u0940"},clickHere:{en:"Click Here",hi:"\u092f\u0939\u093e\u0901 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0947\u0902"}},O=c(1),f=function(e){var t=Object(s.useState)({}),c=Object(i.a)(t,2),n=c[0],a=c[1],r=e.lan;return Object(s.useEffect)((function(){(function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,m.getLocalCurrData();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{className:"CurrentDataCont",children:[Object(O.jsx)("h1",{className:"CurrentDataHeader",children:p.mpStat[r]}),Object(O.jsxs)("div",{className:"CurrentDataStat",children:[Object(O.jsxs)("div",{className:"CurrentDataMain",children:[Object(O.jsx)("h4",{children:p.totalCases[r]}),Object(O.jsx)("h5",{children:n.activecases||"NULL"})]}),Object(O.jsxs)("div",{className:"CurrentDataMain",children:[Object(O.jsx)("h4",{children:p.newCases[r]}),Object(O.jsx)("h5",{children:n.newcases||"NULL"})]}),Object(O.jsxs)("div",{className:"CurrentDataMain",children:[Object(O.jsx)("h4",{children:p.recovered[r]}),Object(O.jsx)("h5",{children:n.recovered||"NULL"})]})]})]})},g=c.p+"static/media/facemask.e133dece.svg",v=c.p+"static/media/Social Distancing.8b0d0ec8.svg",y=c.p+"static/media/stayhome.0b01ff80.svg",w=c.p+"static/media/handwash.15494ff0.svg",k=c.p+"static/media/Fever.de31a8dd.svg",C=c.p+"static/media/sore throat.10cca70a.svg",N=c.p+"static/media/headache.754ba74f.svg",D=c.p+"static/media/Cough.24da3940.svg",I=function(e){var t=e.lan;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"LandingContainer",children:[Object(O.jsxs)("div",{className:"LandingCont",children:[Object(O.jsx)("h2",{children:p.fightCovid[t]}),Object(O.jsx)("p",{children:p.homeDesc[t]}),Object(O.jsx)(d.b,{to:"/res/dashboard",children:Object(O.jsx)(l.a,{children:p.resources[t]})})]}),Object(O.jsx)("div",{className:"LandingCont",children:Object(O.jsx)("img",{className:"img-fluid",src:j,alt:"Covid Img"})})]}),Object(O.jsx)(f,{lan:t}),Object(O.jsx)("section",{className:"precautions",children:Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("div",{class:"text-center mb-5",children:Object(O.jsx)("h1",{children:p.preCaution[t]})}),Object(O.jsxs)("div",{class:"row align-items-center justify-content-center",children:[Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsxs)("div",{class:"card shadow p-3 mb-5 bg-white border-0 rounded",children:[Object(O.jsx)("img",{src:g,alt:"face mask"}),Object(O.jsx)("div",{class:"card-body",children:Object(O.jsx)("h2",{class:"card-text text-center",children:p.wearFacemask[t]})})]})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsxs)("div",{class:"card shadow p-3 mb-5 bg-white border-0 rounded",children:[Object(O.jsx)("img",{src:v,alt:"social distancing"}),Object(O.jsx)("div",{class:"card-body",children:Object(O.jsx)("h2",{class:"card-text text-center",children:p.socialDistancing[t]})})]})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsxs)("div",{class:"card shadow p-3 mb-5 bg-white border-0 rounded",children:[Object(O.jsx)("img",{src:y,alt:"stay home"}),Object(O.jsx)("div",{class:"card-body",children:Object(O.jsx)("h2",{class:"card-text text-center",children:p.stayAthome[t]})})]})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsxs)("div",{class:"card shadow p-3 mb-5 bg-white border-0 rounded",children:[Object(O.jsx)("img",{src:w,alt:"wash hands"}),Object(O.jsx)("div",{class:"card-body",children:Object(O.jsx)("h2",{class:"card-text text-center",children:p.washHands[t]})})]})})]})]})}),Object(O.jsx)("section",{className:"symptoms",children:Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("div",{class:"text-center mb-5",children:Object(O.jsx)("h1",{children:p.commonSymp[t]})}),Object(O.jsxs)("div",{class:"row justify-content-center align-items-center",children:[Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsx)("div",{class:"card shadow p-3 mb-5 bg-white rounded text-center",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("img",{src:k,alt:"fever",class:"img-fluid"}),Object(O.jsx)("h2",{children:p.fever[t]})]})})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsx)("div",{class:"card shadow p-3 mb-5 bg-white rounded text-center",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("img",{src:C,alt:"sore throat",class:"img-fluid"}),Object(O.jsx)("h2",{children:p.soarThroat[t]})]})})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsx)("div",{class:"card shadow p-3 mb-5 bg-white rounded text-center",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("img",{src:N,alt:"headache",class:"img-fluid"}),Object(O.jsx)("h2",{children:p.headache[t]})]})})}),Object(O.jsx)("div",{class:"col-lg-3",children:Object(O.jsx)("div",{class:"card shadow p-3 mb-5 bg-white rounded text-center",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("img",{src:D,alt:"cough",class:"img-fluid"}),Object(O.jsx)("h2",{children:p.cough[t]})]})})})]})]})})]})},H=(c(62),c.p+"static/media/oxygen.f3864046.svg"),L=c.p+"static/media/menu.4dfd917f.svg",S=c.p+"static/media/blood-donation.80d8e38b.svg",B=c.p+"static/media/lunch-box.977327bf.svg",A=c.p+"static/media/hospital-bed.462295bb.svg",E=c.p+"static/media/oxygen concentrator.204617e5.svg",T=function(e){var t=e.lan;return Object(O.jsx)("section",{className:"Dashboard",children:Object(O.jsx)("div",{className:"container",onClick:e.onClick,children:Object(O.jsxs)("div",{className:"row justify-content-center align-items-center text-center",children:[Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/dashboard",onClick:function(){e.setLoading(1)},children:[" ",Object(O.jsx)("img",{src:L,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.dashboard[t]})]})}),Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/oxygen",onClick:function(){e.setLoading(1)},children:[Object(O.jsx)("img",{src:H,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.oxygen[t]})]})}),Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/plasmaassiastance",onClick:function(){e.setLoading(1)},children:[" ",Object(O.jsx)("img",{src:S,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.plasmaassiastance[t]})]})}),Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/tiffinserv",onClick:function(){e.setLoading(1)},children:[" ",Object(O.jsx)("img",{src:B,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.tiffinserv[t]})]})}),Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/hospitalbeds",onClick:function(){e.setLoading(1)},children:[" ",Object(O.jsx)("img",{src:A,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.hospitalbeds[t]})]})}),Object(O.jsx)("div",{className:"col-lg-2 col-md-6 my-3 my-lg-0",children:Object(O.jsxs)(d.b,{to:"/res/oxycon",onClick:function(){e.setLoading(1)},children:[" ",Object(O.jsx)("img",{src:E,alt:"Dashboard",className:"img-fluid dashImg"}),Object(O.jsx)("h2",{className:"DashHeading",children:p.oxycon[t]})]})})]})})})},R=c(77),F=c(80),P=(c(63),function(e){var t=function(e,t){var c=[];return e.forEach((function(e){c.push(Object(O.jsxs)("div",{className:"CardField",children:[Object(O.jsxs)("h6",{children:[e.title,"  :  "]}),Object(O.jsxs)("p",{children:["\xa0",t[e.key]]})]},e.key))})),c};return Object(O.jsx)("div",{className:"CustomTable",children:function(){if(e.dataSource&&e.columns){var c=[];return e.dataSource.forEach((function(s){c.push(Object(O.jsx)("div",{className:"DataCard",children:t(e.columns,s)},Math.random()))})),c}}()})}),V=(c(64),function(e){var t=e.lan;return Object(O.jsx)("div",{children:Object(O.jsx)("section",{id:"cardmenu",children:Object(O.jsx)("div",{class:"container",children:Object(O.jsxs)("div",{class:"row justify-content-center align-items-center text-center",children:[Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card shadow border-0 customBox",children:[Object(O.jsx)("h2",{class:"card-title",children:p.covidHelpline[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/helpline",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.regVol[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSf1TcukBNr8GU-fdqcB3RpVGdtg1zvcbn2G1IevIEpkFiNIwA/viewform?usp=sf_link",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.oxygen[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/oxygen",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.tiffinserv[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/tiffinserv",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.oxycon[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/oxycon",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.regPlasma[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSdMoA3naNEoj5T46xgvDGGDJEEyu9Pzr0S-osrbeDmzqsaZLA/viewform?usp=sf_link",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.hospitalbeds[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/hospitalbeds",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})}),Object(O.jsx)("div",{class:"col-lg-3 my-2",children:Object(O.jsxs)("div",{class:"card customBox shadow border-0",children:[Object(O.jsx)("h2",{class:"card-title",children:p.homeIso[t]}),Object(O.jsx)("div",{class:"customCardBody",children:Object(O.jsx)(d.b,{to:"/res/homeiso",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",children:p.clickHere[t]})})})]})})]})})})})}),G=[{title:"Oxygen Supplier",dataIndex:"oxygendsupplier",key:"oxygendsupplier"},{title:"Process to get oxygen",dataIndex:"oxygenprocess",key:"oxygenprocess"},{title:"Contact",dataIndex:"oxygendcontact",key:"oxygendcontact"},{title:"Oxygen Address",dataIndex:"oxygenaddress",key:"oxygenaddress"},{title:"Oxygen Price",dataIndex:"oxygenprice",key:"oxygenprice"},{title:"Oxygen Description",dataIndex:"oxygendescription",key:"oxygendescription"}],M=[{title:"Hospital Name",dataIndex:"hospitalname",key:"hospitalname"},{title:"Hospital Worker Name",dataIndex:"workername",key:"workername"},{title:"Contact",dataIndex:"contactnumber",key:"contactnumber"},{title:"Description",dataIndex:"description",key:"description"}],U=[{title:"Name",dataIndex:"name",key:"name"},{title:"Price",dataIndex:"price",key:"price"},{title:"Home Delivery",dataIndex:"homedelivery",key:"homedelivery"},{title:"Contact",dataIndex:"contact",key:"contact"},{title:"Area",dataIndex:"area",key:"area"},{title:"Description",dataIndex:"description",key:"description"}],W=function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null,"oxygen"!==t){e.next=5;break}return e.next=4,m.getLocalOxygen();case 4:c=e.sent;case 5:if("hospitalbeds"!==t){e.next=9;break}return e.next=8,m.getLocalBeds();case 8:c=e.sent;case 9:if("tiffinserv"!==t){e.next=13;break}return e.next=12,m.getLocalTiffin();case 12:c=e.sent;case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=Object(s.useState)(),c=Object(i.a)(t,2),n=c[0],a=c[1],r=e.setLoading,d=e.lan;return Object(s.useEffect)((function(){(function(){var t=Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,W(e.id);case 3:t.t1=t.sent,(0,t.t0)(t.t1),r(0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.id,e.loading,e.lan]),Object(O.jsx)("div",{className:"container-flex",id:"table",children:function(t,c){return 1===e.loading?Object(O.jsxs)("div",{className:"DataLoading",children:[Object(O.jsx)(R.a,{animation:"border"}),"Loading"]}):"dashboard"!==t&&t?null===c?Object(O.jsx)(F.a,{variant:"danger",children:"No data avilable"}):"oxygen"===t?Object(O.jsx)(P,{dataSource:c,columns:G}):"hospitalbeds"===t?Object(O.jsx)(P,{dataSource:c,columns:M}):"tiffinserv"===t?Object(O.jsx)(P,{dataSource:c,columns:U}):void 0:Object(O.jsx)(V,{lan:d})}(e.id,n)})},J=(c(65),function(e){var t=Object(s.useRef)(null),c=Object(s.useState)(0),n=Object(i.a)(c,2),a=n[0],r=n[1],d=e.lan,l=Object(o.g)(null).id;return Object(O.jsxs)("div",{children:[Object(O.jsx)(T,{lan:d,setLoading:r,onClick:function(){return t.current.scrollIntoView()}}),Object(O.jsx)("h1",{ref:t,className:"ResourcesHeader",children:(p[l]?p[l][d]:"404 not found ".concat(l))+" : "}),Object(O.jsx)(z,{lan:d,id:l,loading:a,setLoading:r}),";"]})}),_=c(79),K=c(78),Y=c.p+"static/media/site-logo.82c09899.png",q=(c(66),function(e){var t=Object(s.useState)("Hindi"),c=Object(i.a)(t,2),n=c[0],a=c[1],r=e.lan,j=Object(o.f)();return Object(O.jsxs)(_.a,{collapseOnSelect:!0,className:"CustomNavbar",expand:"lg",children:[Object(O.jsx)(_.a.Brand,{style:{cursor:"pointer"},onClick:function(){j.push("/")},children:Object(O.jsx)("img",{src:Y,alt:"Covid Ujjain",style:{maxWidth:"200px"}})}),Object(O.jsx)(l.a,{className:"ml-auto",onClick:function(){return"Hindi"===n&&(a("English"),e.setLan("hi")),void("English"===n&&(a("Hindi"),e.setLan("en")))},children:n}),Object(O.jsxs)(K.a,{className:"ml-2",children:[Object(O.jsx)(K.a.Item,{className:"mr-2",children:Object(O.jsx)(d.b,{to:"/",className:"text-secondary",children:p.home[r]})}),Object(O.jsx)(K.a.Item,{className:"mr-2",children:Object(O.jsx)(d.b,{to:"/res/dashboard",className:"text-secondary",children:p.resources[r]})})]})]})}),Q=function(){return Object(O.jsxs)("div",{children:["Download data",Object(O.jsx)(l.a,{onClick:function(){return m.downloadData()},children:"Download Data"})]})};var Z=function(){var e=Object(s.useState)("en"),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(O.jsxs)(d.a,{children:[Object(O.jsx)(q,{lan:c,setLan:n}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(I,{lan:c})}),Object(O.jsx)(o.a,{exact:!0,path:"/res",children:Object(O.jsx)(J,{lan:c})}),Object(O.jsx)(o.a,{exact:!0,path:"/res/:id",children:Object(O.jsx)(J,{lan:c})}),Object(O.jsx)(o.a,{exact:!0,path:"/secretpage",children:Object(O.jsx)(Q,{})})]})]})};c(70);m.init(),m.db_init(),r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(Z,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fadad827.chunk.js.map
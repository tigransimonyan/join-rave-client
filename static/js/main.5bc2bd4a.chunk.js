(this.webpackJsonpjoinrave=this.webpackJsonpjoinrave||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(4),s=n.n(a),r=(n(9),n(2)),o=n.p+"static/media/play.67fb6362.svg",u=n.p+"static/media/pause.12407eb8.svg",d=n(0),j=new Audio;var l=function(){var e,t,n=Object(c.useState)(null),i=Object(r.a)(n,2),a=i[0],s=i[1],l=Object(c.useState)(!1),v=Object(r.a)(l,2),b=v[0],f=v[1],m=Object(c.useState)(!1),p=Object(r.a)(m,2),O=p[0],h=p[1],g=Object(c.useState)(!1),E=Object(r.a)(g,2),x=E[0],y=E[1],L=function(){h(!0),f(!0),fetch("https://api.joinrave.com/current").then((function(e){return e.json()})).then((function(e){s(e),j.src=e.metadata.file})).catch((function(){h(!1),f(!1)}))},S=function(){h(!1),f(!0)},k=function(){y(!0)};return Object(c.useEffect)((function(){x&&a&&(j.currentTime=a.time,j.volume=1,j.play())}),[x,a]),Object(c.useEffect)((function(){return j.addEventListener("ended",L),j.addEventListener("canplay",k),j.addEventListener("playing",S),function(){j.removeEventListener("ended",L),j.removeEventListener("canplay",k),j.removeEventListener("playing",S)}}),[]),Object(d.jsxs)("div",{className:"app",children:[b?Object(d.jsx)("img",{src:u,onClick:function(){j.pause(),f(!1)}}):Object(d.jsx)("img",{src:o,onClick:L}),Object(d.jsxs)("div",{className:"info",children:[O&&"Loading...",!O&&a&&Object(d.jsxs)(d.Fragment,{children:[null===a||void 0===a||null===(e=a.metadata)||void 0===e?void 0:e.title," by ",Object(d.jsx)("b",{children:null===a||void 0===a||null===(t=a.metadata)||void 0===t?void 0:t.artist})]})]})]})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5bc2bd4a.chunk.js.map
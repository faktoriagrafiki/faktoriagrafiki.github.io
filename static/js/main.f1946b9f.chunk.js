(this["webpackJsonpfg-site"]=this["webpackJsonpfg-site"]||[]).push([[0],[,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"header":{"nameAndSurname":"Kamila Wera","companyName":"Graphics Post"}}')},function(e){e.exports=JSON.parse('{"p2":{"name":"YodaEN"}}')},function(e){e.exports=JSON.parse('{"header":{"nameAndSurname":"Kamila Wera","companyName":"Faktoria Grafiki"}}')},function(e){e.exports=JSON.parse('{"p2":{"name":"YodaPL"}}')},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(8),r=t.n(i),o=(t(21),t(22),t(2)),s=t(36),l=function(e,n){return Math.random()*(n-e)+e},u=(t(23),t(0));var j=function(e){var n,t,a,i,r,j,d=Object(s.a)("art").t,m=e.piece,b=m.cols,p=m.image,O=m.key,f=(a=0,n=(t=10*b)>(i=40)?i:t<a?a:t,Math.floor(n)),h=Object(c.useState)(!1),x=Object(o.a)(h,2),v=x[0],g=x[1],N=function(){return g(!v)},k=function(e){return function(n){n.target.style.clipPath=function(e){var n=function(){return l(0,e)},t=function(){return l(100-e,100)};return"polygon(\n      ".concat(n(),"% ").concat(n(),"%,\n      ").concat(t(),"% ").concat(n(),"%,\n      ").concat(t(),"% ").concat(t(),"%,\n      ").concat(n(),"% ").concat(t(),"%\n    )")}(e)}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"ArtPiece cols-".concat(f),onClick:N,onMouseOver:k(5),onMouseOut:k(2),onLoad:k(2),children:[Object(u.jsx)("img",{src:"./art/".concat(p),alt:O}),Object(u.jsx)("label",{children:d("".concat(O,".name"))})]}),(r=v,j=Object(u.jsxs)("div",{className:"art-modal",children:[Object(u.jsx)("div",{className:"img-holder",onClick:N,children:Object(u.jsx)("img",{src:"./art/".concat(p),alt:O})}),Object(u.jsxs)("div",{className:"description-holder",children:[Object(u.jsx)("h1",{children:"lorem"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis odit minima inventore deserunt maxime velit, harum beatae placeat praesentium quo commodi exercitationem tempore neque, vitae aspernatur reiciendis quisquam laborum! Fugiat."}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat natus vitae labore. Distinctio dolore explicabo amet est recusandae provident enim officiis temporibus aperiam voluptatibus soluta quas, tempore quibusdam nihil?"})]})]}),r?j:null)]})};t(30);var d=function(e){var n,t;return Object(u.jsx)("div",{className:"ArtSection",children:Object(u.jsx)("div",{className:"art-pieces-home",children:null===(n=e.art)||void 0===n||null===(t=n.pieces)||void 0===t?void 0:t.map((function(e,n){return Object(u.jsx)(j,{piece:e},n)}))})})};t(31);var m=function(){var e=Object(c.useState)({}),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("./art.json").then((function(e){return e.json()})).then(a)}),[]),Object(u.jsx)("section",{className:"Content",children:Object(u.jsx)(d,{art:t})})};t(32);function b(e){var n=Object(o.a)(e.args,3),t=n[0],c=n[1],a=n[2];return Object(u.jsx)("a",{className:"icon-link",href:a,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("img",{src:t,alt:c})})}var p=function(){var e,n,t,a,i=Object(c.useState)({}),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(c.useEffect)((function(){fetch("./config.json").then((function(e){return e.json()})).then(l)}),[]),Object(u.jsxs)("footer",{className:"Footer",children:[Object(u.jsxs)("div",{className:"icon-link-block",children:[Object(u.jsx)(b,{args:["./icons/facebook.png","facebook",null===(e=s.urls)||void 0===e?void 0:e.facebook]}),Object(u.jsx)(b,{args:["./icons/linkedin.png","linkedin",null===(n=s.urls)||void 0===n?void 0:n.linkedin]}),Object(u.jsx)(b,{args:["./icons/instagram.png","instagram",null===(t=s.urls)||void 0===t?void 0:t.instagram]}),Object(u.jsx)(b,{args:["./icons/artstation.png","artstation",null===(a=s.urls)||void 0===a?void 0:a.artstation]})]}),Object(u.jsx)("div",{className:"email-block",children:Object(u.jsx)("label",{onClick:function(){return navigator.clipboard.writeText(s.email)},children:s.email})})]})};t(33);var O=function(){var e=Object(s.a)("common").t;return Object(u.jsxs)("header",{className:"Header",children:[Object(u.jsx)("h1",{children:e("header.companyName")}),Object(u.jsx)("h3",{children:e("header.nameAndSurname")})]})};var f=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{}),Object(u.jsx)(m,{}),Object(u.jsx)(p,{})]})},h=t(6),x={interpolation:{escapeValue:!1},lng:"pl",resources:{en:{common:t(13),art:t(14)},pl:{common:t(15),art:t(16)}}},v=t(35);h.a.init(x),r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v.a,{i18n:h.a,children:Object(u.jsx)(f,{})})}),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.f1946b9f.chunk.js.map
(this["webpackJsonpfg-site"]=this["webpackJsonpfg-site"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),i=c.n(r),o=(c(9),c(10),c(2)),a=(c(11),c(0));var j=function(e){var t=e.piece,c=t.cols,n=t.image,s=t.key;return Object(a.jsxs)("div",{className:"ArtPiece cols-".concat(c),children:[Object(a.jsx)("img",{src:"./art/".concat(n),alt:s}),Object(a.jsx)("label",{children:s})]})};c(13);var u=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],r=c[1];return Object(a.jsxs)("div",{className:"ArtSection ".concat(s?"expanded":""),children:[Object(a.jsx)("p",{onClick:function(e){r(!s)},children:e.section.key}),Object(a.jsx)("div",{className:"art-pieces-home",children:e.section.pieces.map((function(e,t){return Object(a.jsx)(j,{piece:e},t)}))})]})};c(14);var f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("./art.json").then((function(e){return e.json()})).then((function(e){return s(e.sections)}))}),[]),Object(a.jsx)("section",{className:"Content",children:c.map((function(e,t){return Object(a.jsx)(u,{section:e},t)}))})};c(15);var b=function(){return Object(a.jsx)("footer",{className:"Footer",children:"Footer"})};c(16);var l=function(){return Object(a.jsx)("header",{className:"Header",children:"Header"})};var d=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsx)(f,{}),Object(a.jsx)(b,{})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.53f90d3f.chunk.js.map
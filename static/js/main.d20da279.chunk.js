(this["webpackJsonpfg-site"]=this["webpackJsonpfg-site"]||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"header":{"nameAndSurname":"Kamila Wera","companyName":"Graphics Post","contact":"Contact","flag":{"en":"English","pl":"Polish"}},"footer":{"icon":{"facebook":"Facebook","linkedin":"Linkedin","instagram":"Instagram","artstation":"ArtStation"},"copyToClipboard":"Copy to clipboard"}}')},function(e){e.exports=JSON.parse('{"azariel":{"name":"Vampire emperor"},"environment":{"name":"Moutain enviroment"},"helena":{"name":"Helena","desc":"Castlevania OC."},"bastien1":{"name":"Bastien Laurent","desc":"Character concept art made for proprietary book."},"sarya1":{"name":"Sarya","desc":"Character concept art made for proprietary book."},"castle":{"name":"Lone castle in the mountains"},"elf":{"name":"Elf design"},"girl1":{"name":"Woman in a satin dress"},"girl3":{"name":"Turban girl portrait"},"girl5":{"name":"Girl in a golden crown"},"mine":{"name":"Futuristic mine"},"alucard":{"name":"Alucard and the orphans"},"mira":{"name":"Mira Katsura","desc":"Naturo OC."},"monster":{"name":"Bakeneko","desc":"Japanese folklore inspired."},"obelisk":{"name":"Canyon Portal","desc":"Concept art."},"druid":{"name":"Forest keeper","desc":"Concept art."},"princess":{"name":"Nadia","desc":"Slavic Disney princess."},"steele":{"name":"Peter Steele\'s portrait"},"girl2":{"name":"Barocco"},"witch":{"name":"Necromancer"},"girl6":{"name":"Gentleness"}}')},function(e){e.exports=JSON.parse('{"header":{"nameAndSurname":"Kamila Wera","companyName":"Faktoria Grafiki","contact":"Kontakt","flag":{"en":"Angielski","pl":"Polski"}},"footer":{"icon":{"facebook":"Facebook","linkedin":"Linkedin","instagram":"Instagram","artstation":"ArtStation"},"copyToClipboard":"Kopiuj do schowka"}}')},function(e){e.exports=JSON.parse('{"azariel":{"name":"Wampirzy cesarz"},"environment":{"name":"G\xf3rzysty krajobraz"},"helena":{"name":"Helena","desc":"OC do uniwersum Castlevanii."},"bastien1":{"name":"Bastien Laurent","desc":"Grafika koncepcyjna postaci do autorskiego opowiadania fantasy/science fiction."},"sarya1":{"name":"Sarya","desc":"Grafika koncepcyjna postaci do autorskiego opowiadania fantasy/science fiction."},"castle":{"name":"Samotny zamek w g\xf3rach"},"elf":{"name":"Projekt elfa"},"girl1":{"name":"Kobieta w satynowej koszuli"},"girl3":{"name":"Portret dziewczyny w turbanie"},"girl5":{"name":"Dziewczyna w z\u0142otej koronie"},"mine":{"name":"Futurystyczna kopalnia"},"alucard":{"name":"Alucard i sieroty","desc":"Ilustracja fanowska z uniwersum Castlevanii."},"mira":{"name":"Mira Katsura","desc":"OC do uniwersum Naruto."},"monster":{"name":"Bakeneko","desc":"Grafika inspirowana japo\u0144skim folklorem."},"obelisk":{"name":"Portal w kanionie","desc":"Grafika koncepcyjna."},"druid":{"name":"Stra\u017cnik lasu","desc":"Grafika koncepcyjna."},"princess":{"name":"Nadia","desc":"S\u0142owia\u0144ska ksi\u0119\u017cniczka wykonana kresk\u0105 Walta Disneya."},"steele":{"name":"Portret Petera Steela"},"girl2":{"name":"Barok"},"witch":{"name":"Nekromantka"},"girl6":{"name":"Delikatno\u015b\u0107"}}')},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),o=n(8),r=n.n(o),i=(n(22),n(23),n(24),n(0));var s=function(){return Object(i.jsxs)("div",{className:"Background",children:[Object(i.jsx)("span",{className:"circle a"}),Object(i.jsx)("span",{className:"circle b"}),Object(i.jsx)("span",{className:"circle c"}),Object(i.jsx)("span",{className:"circle d"}),Object(i.jsx)("span",{className:"circle e"}),Object(i.jsx)("span",{className:"circle f"})]})},l=n(2),m=function(e,a){return Math.random()*(a-e)+e},d=function(e,a){fetch(e).then((function(e){return e.json()})).then(a)},u=n(39),j=function(e){var a=e.toString();window.history.replaceState({},"",a?"?".concat(a):"./")},p=function(e){return new URLSearchParams(window.location.search).get(e)},b=function(e,a){var n=new URLSearchParams(window.location.search);n.set(e,a),j(n)};n(26);var f=function(e){var a,n,c,o,r=Object(u.a)("art").t,s=e.piece,d=s.cols,f=s.image,h=s.key,O=(c=0,a=(n=10*d)>(o=40)?o:n<c?c:n,Math.floor(a)),k=Object(t.useState)(!1),g=Object(l.a)(k,2),x=g[0],v=g[1];Object(t.useEffect)((function(){p("p")===h&&w()}),[]);var y,N,w=function(){b("p",h),v(!0)},S=function(e){return function(a){a.target.style.clipPath=function(e){var a=function(){return m(.5*e,e)},n=function(){return m(100-e,100-.5*e)};return"polygon(\n      ".concat(a(),"% ").concat(a(),"%,\n      ").concat(n(),"% ").concat(a(),"%,\n      ").concat(n(),"% ").concat(n(),"%,\n      ").concat(a(),"% ").concat(n(),"%\n    )")}(e)}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"ArtPiece cols-".concat(O),onClick:w,onMouseOver:S(5),onMouseOut:S(2),onLoad:S(2),children:[Object(i.jsx)("img",{src:"./art/".concat(f),alt:h}),Object(i.jsx)("label",{children:r("".concat(h,".name"))})]}),(y=x,N=Object(i.jsxs)("div",{className:"art-modal",children:[Object(i.jsx)("div",{className:"img-holder",onClick:function(){!function(e){var a=new URLSearchParams(window.location.search);a.delete(e),j(a)}("p"),v(!1)},children:Object(i.jsx)("img",{src:"./art/".concat(f),alt:h})}),Object(i.jsxs)("div",{className:"description-holder",children:[Object(i.jsx)("h1",{children:r("".concat(h,".name"))}),Object(i.jsx)("p",{children:r("".concat(h,".desc"))})]})]}),y?N:null)]})};n(32);var h=function(e){var a,n;return Object(i.jsx)("div",{className:"ArtSection",children:Object(i.jsx)("div",{className:"art-pieces-home",children:null===(a=e.art)||void 0===a||null===(n=a.pieces)||void 0===n?void 0:n.map((function(e,a){return Object(i.jsx)(f,{piece:e},a)}))})})};n(33);var O=function(){var e=Object(t.useState)({}),a=Object(l.a)(e,2),n=a[0],c=a[1];return Object(t.useEffect)((function(){d("./art.json",c)}),[]),Object(i.jsx)("section",{className:"Content",children:Object(i.jsx)(h,{art:n})})};n(34);function k(e){var a=Object(u.a)("common").t,n=Object(l.a)(e.args,3),t=n[0],c=n[1],o=n[2];return Object(i.jsxs)("a",{className:"icon-link tooltip-handle",href:o,target:"_blank",rel:"noopener noreferrer",children:[Object(i.jsx)("img",{src:t,alt:c}),Object(i.jsx)("span",{className:"tooltip top right icon-tooltip",children:a("footer.icon.".concat(c))})]})}var g=function(){var e,a,n,c,o=Object(u.a)("common").t,r=Object(t.useState)({}),s=Object(l.a)(r,2),m=s[0],j=s[1];return Object(t.useEffect)((function(){d("./config.json",j)}),[]),Object(i.jsxs)("footer",{className:"Footer",children:[Object(i.jsxs)("div",{className:"icon-link-block",children:[Object(i.jsx)(k,{args:["./icons/facebook.png","facebook",null===(e=m.urls)||void 0===e?void 0:e.facebook]}),Object(i.jsx)(k,{args:["./icons/linkedin.png","linkedin",null===(a=m.urls)||void 0===a?void 0:a.linkedin]}),Object(i.jsx)(k,{args:["./icons/instagram.png","instagram",null===(n=m.urls)||void 0===n?void 0:n.instagram]}),Object(i.jsx)(k,{args:["./icons/artstation.png","artstation",null===(c=m.urls)||void 0===c?void 0:c.artstation]})]}),Object(i.jsxs)("div",{className:"email-block tooltip-handle",children:[Object(i.jsx)("label",{onClick:function(){return navigator.clipboard.writeText(m.email)},children:m.email}),Object(i.jsx)("span",{className:"tooltip top left email-tooltip",children:o("footer.copyToClipboard")})]})]})};n(35);var x=function(){var e=Object(u.a)("common").t;return Object(i.jsxs)("header",{className:"Header",children:[Object(i.jsx)("h1",{children:e("header.companyName")}),Object(i.jsx)("h3",{children:e("header.nameAndSurname")})]})},v=n(4),y=(n(36),n(13)),N=n.n(y);var w=function(){var e=Object(u.a)("common").t;Object(t.useEffect)((function(){var e=p("l");e&&setTimeout((function(){return v.a.changeLanguage(e)}))}),[]);var a=function(e){return function(a){b("l",e),v.a.changeLanguage(e)}};return Object(i.jsxs)("nav",{className:"Nav",children:[Object(i.jsx)("span",{children:["en","pl"].map((function(n){return Object(i.jsxs)("span",{className:"tooltip-handle",children:[Object(i.jsx)("img",{className:N()({active:v.a.language===n}),src:"./icons/flag_".concat(n,".png"),alt:"".concat(n," flag"),onClick:a(n)}),Object(i.jsx)("span",{className:"tooltip bottom right flag-tooltip",children:e("header.flag.".concat(n))})]},n)}))}),Object(i.jsx)("span",{children:Object(i.jsx)("label",{onClick:function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})},children:e("header.contact")})})]})};var S=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(w,{}),Object(i.jsx)(x,{}),Object(i.jsx)(O,{}),Object(i.jsx)(g,{})]})},C={interpolation:{escapeValue:!1},lng:"pl",fallbackLng:["en","pl"],resources:{en:{common:n(14),art:n(15)},pl:{common:n(16),art:n(17)}}},z=n(38);v.a.init(C),r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(z.a,{i18n:v.a,children:Object(i.jsx)(S,{})})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.d20da279.chunk.js.map
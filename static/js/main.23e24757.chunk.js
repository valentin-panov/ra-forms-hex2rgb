(this["webpackJsonpra-comps-store-func"]=this["webpackJsonpra-comps-store-func"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n.n(r),a=n(4),u=n.n(a),o=(n(10),n(1)),s=n(5),b=(n(11),n(0));var i=function(t){var e=t.handleSubmit,n=t.handleHexChange,r=t.form,c=t.prefix;return Object(b.jsx)("div",{className:"Converter",children:Object(b.jsxs)("form",{onSubmit:e,children:[Object(b.jsx)("input",{className:"ConverterInput",type:"text",id:"hexInput",name:"hexInput",value:r.hex,ref:function(t){try{t.value=c,t.focus()}catch(e){}},onChange:n}),Object(b.jsx)("label",{htmlFor:"hexInput",className:"ConverterRGB",children:r.rgb})]})})};var f=function(){var t=Object(r.useState)({hex:"",rgb:"rgb(255, 255, 255)"}),e=Object(s.a)(t,2),n=e[0],c=e[1],a="#";return Object(b.jsx)("div",{className:"App",style:{backgroundColor:"\u041e\u0448\u0438\u0431\u043a\u0430!"===n.rgb?"red":n.rgb},children:Object(b.jsx)(i,{handleSubmit:function(t){t.preventDefault();var e=t.target.textContent;c((function(t){return Object(o.a)(Object(o.a)({},t),{},{rgb:e})}))},handleHexChange:function(t){var e=t.target.value;"#"===e.substr(1,1)&&(e=e.substr(1)),e.length>7&&(e=e.substr(0,7)),e=a+e.substr(a.length),c((function(t){return Object(o.a)(Object(o.a)({},t),{},{hex:e})}));var n=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!e)return!1;var n={r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)};return"".concat(n.r,", ").concat(n.g,", ").concat(n.b)}(e.substr(a.length));c(n?function(t){return Object(o.a)(Object(o.a)({},t),{},{rgb:"rgb(".concat(n,")")})}:function(t){return Object(o.a)(Object(o.a)({},t),{},{rgb:"\u041e\u0448\u0438\u0431\u043a\u0430!"})})},form:n,prefix:a})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),a(t),u(t)}))};u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.23e24757.chunk.js.map
(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,function(e,t,n){},,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),u=(n(10),n(1)),i=(n(3),function(e){return c.a.createElement("div",{className:"Square"},c.a.createElement("button",{className:"buttun",onClick:e.Onclick},e.value))}),o=(n(11),function(e){return c.a.createElement("button",{className:"extra",onClick:e.Restart},"Reset")}),s=(n(12),function(){var e=Object(a.useState)(Array(9).fill(null)),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!0),s=Object(u.a)(l,2),f=s[0],m=s[1],v=function(e){for(var t=0,n=0;n<e.length;n++)e[n]&&t++;return t===e.length||null}(n),E=function(){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var a=Object(u.a)(e[t],3),c=a[0],r=a[1],l=a[2];if(n[c]===n[r]&&n[r]===n[l])return n[c]}return null}(),b=E?"Winner is ".concat(E):v?"No Result":f?"Player X Turn":"Player O turn",d=function(e){return c.a.createElement(i,{value:n[e],Onclick:function(){return function(e){var t=n;n[e]||(t[e]=f?"X":"O",r(t),m(!f))}(e)}})};return c.a.createElement("div",{className:"tc"},c.a.createElement("h1",null,"Tic-Tac-Toe"),c.a.createElement("div",{className:"Row"},d(0),d(1),d(2)),c.a.createElement("div",{className:"Row"},d(3),d(4),d(5)),c.a.createElement("div",{className:"Row"},d(6),d(7),d(8)),c.a.createElement("div",{className:"buffer"},b),c.a.createElement(o,{Restart:function(){return function(){var e=Array(9).fill(null);r(e)}()}}))});l.a.render(c.a.createElement(s,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.5e7da8e5.chunk.js.map
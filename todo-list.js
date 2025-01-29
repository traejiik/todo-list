(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),o=t.n(r),i=t(314),s=t.n(i)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),s.push([e.id,'* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    font-family: "Roboto", Helvetica, sans-serif;\n    position: relative;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    gap: 1rem;\n}\n\n.container>div {\n    border-radius: 0.7rem;\n    background-color: lightgray;\n}\n\n/* SIDEBAR ELEMENTS */\n.sidebar {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: "Outfit", Arial, sans-serif;\n    gap: 0.5rem;\n    margin-bottom: 3rem;\n}\n\n.logo>svg {\n    height: 5rem;\n    fill: orangered;\n}\n\n.sidebar-btns {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 1rem;\n    border-bottom: 1px solid grey;\n    padding-bottom: 1rem;\n    margin-bottom: 3rem;\n}\n\n.sidebar-btns>button {\n    width: 100%;\n    height: 3.4rem;\n    border-radius: 0.7rem;\n    text-transform: capitalize;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    background-color: lightgray;\n}\n\n.sidebar-btns button:hover {\n    filter: brightness(70%);\n    transition: 0.3s ease;\n}\n\n.sidebar-btns button>div {\n    display: grid;\n    grid-template-columns: 2rem 10rem;\n    gap: 0.5rem;\n    font-size: 1.7rem;\n    font-weight: 600;\n    justify-items: left;\n}\n\n.sidebar-btns button div>svg {\n    height: 2rem;\n    align-self: center;\n}\n\n.add-todo svg,\n.add-list svg {\n    fill: green;\n}\n\n.add-todo,\n.add-list {\n    color: green;\n}\n\n.list-ctn {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 1rem;\n}\n\n.list-tag {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    background-color: lightgrey;\n    grid-template-columns: 2rem 10rem 2rem;\n    border-radius: 0.7rem;\n    font-size: 1.7rem;\n    padding: 0 1.4rem;\n    gap: 0.5rem;\n    font-weight: 600;\n    width: 100%;\n    height: 3.4rem;\n}\n\n.list-tag div {\n    justify-self: start;\n}\n\n.list-tag svg {\n    height: 2rem;\n    justify-self: end;\n}\n\n.list-tag:hover {\n    filter: brightness(70%);\n    transition: 0.3s ease;\n}\n\n.input-list {\n    display: none;\n    padding: 1rem 0;\n    transition: 0.3s ease;\n}\n\n#fancy-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 0.4rem;\n}\n\nfieldset {\n    width: 100%;\n    border-radius: 0.8rem;\n    padding: 0.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n}\n\nlegend {\n    text-align: center;\n    font-family: "Outfit", Arial, sans-serif;\n    font-size: 1.5rem;\n}\n\nfieldset > input {\n    height: 2.5rem;\n    font-size: 1.2rem;\n    padding-left: 0.3rem;\n    border-radius: 0.8rem;\n    border: 1px solid;\n    width: 100%;\n}\n\n.lbtn-ctn {\n    display: flex;\n    gap: 1rem;\n}\n\n.lbtn-ctn > button {\n    height: 3rem;\n    width: 6rem;\n    border-radius: 0.5rem;\n    border: 1px solid;\n    font-weight: bold;\n}\n\n.create-list,\n.todo-add {\n    background-color: lightgreen;\n}\n\n.close-list,\n.todo-close {\n    background-color: rgb(255, 141, 141);\n}\n\n.create-list:hover,\n.close-list:hover {\n    filter: brightness(80%);\n}\n\n/* MAIN ELEMENTS */\n.main {\n    padding: 1rem;\n}\n\n.list-header {\n    background-color: white;\n    height: 3rem;\n    width: 50%;\n    border-radius: 4rem;\n    box-shadow: 0px 0px 12px grey;\n    margin: 0 0 2rem 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.list-header > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    letter-spacing: 2px;\n}\n\n.lheader-icon {\n    display: flex;\n    align-items: center;\n}\n\n.lheader-icon > svg {\n    height: 2rem;\n}\n\n.content {\n    overflow-y: scroll;\n    padding: 1rem;\n    width: 100%;\n    height: 800px;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.todo-card {\n    background-color: white;\n    padding: 1rem;\n    border-radius: 1rem;\n    height: 70px;\n    display: flex;\n    align-items: center;\n}\n\n.card-sub {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 2rem 4fr 1fr 3rem 2.8rem;\n    gap: 1rem;\n}\n\n.checkbox {\n    width: 2rem;\n}\n\n.card-sub h3,\n.date-ind {\n    font-size: 1rem;\n    align-self: center;\n}\n\n.card-sub svg {\n    height: 2.5rem;\n}\n\n.priority-ctn {\n    border-right: 1px solid black;\n    display: flex;\n    align-items: center;\n}\n\n.delete-btn,\n.ldelete-btn {\n    border-radius: 5rem;\n    padding: 0;\n    border: none;\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.delete-btn:hover,\n.ldelete-btn:hover {\n    background-color: whitesmoke;\n}\n\n.delete-btn:hover svg,\n.ldelete-btn:hover svg {\n    fill: orangered;\n    filter: brightness(100%);\n}\n\n.todo-card:hover {\n    box-shadow: 0px 5px 24px grey;\n    transition: 0.5s ease;\n}\n\n.complete-todo {\n    background-color: #424769a5;\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: line-through;\n    filter: brightness(70%);\n}\n\n.empty-list {\n    display: flex;\n    flex-direction: row-reverse;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 1rem;\n    width: 50%;\n    background-color: white;\n    border-radius: 0.7rem;\n    box-shadow: 0px 5px 24px grey;\n}\n\n.empty-list-text {\n    text-align: center;\n    font-size: 1.7rem;\n    text-transform: lowercase;\n}\n\n.empty-list-img {\n    height: 3rem;\n    fill: orangered;\n}\n\ndialog {\n    position: fixed;\n    padding: 2rem;\n    border-radius: 1rem;\n    width: 600px;\n    top: 0;\n    left: 0;\n    margin: auto;\n    background-color: rgba(254, 106, 0, 0.5);\n    box-shadow: 0px 0px 24px black;\n    backdrop-filter: blur(5px);\n}\n\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.65);\n}\n\n#fancy-form {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n}\n\n.group h3 {\n    font-family: "Outfit", Arial, sans-serif;\n    font-size: 1.8rem;\n}\n\n.group > label {\n    font-size: 1.2rem;\n}\n\n.group > input,\n.group > select {\n    height: 2.5rem;\n    padding-left: 0.5rem;\n    border-radius: 0.5rem;\n    border: none;\n}\n\n#fancy-form .btn-ctn {\n    display: flex;\n    justify-content: space-around;\n}\n\n#fancy-form .btn-ctn > button {\n    height: 3rem;\n    width: 8rem;\n    border-radius: 0.7rem;\n    text-transform: capitalize;\n    font-weight: 600;\n    border: 1px solid;\n}\n\n#fancy-form .btn-ctn > button:hover {\n    filter: brightness(80%);\n}',""]);const l=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],l=0;l<e.length;l++){var a=e[l],c=r.base?a[0]+r.base:a[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var m=t(u),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=o(p,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=t(i[s]);n[l].references--}for(var a=r(e,o),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=a}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,t.d({},{g:()=>P});var r=t(72),o=t.n(r),i=t(825),s=t.n(i),l=t(659),a=t.n(l),c=t(56),d=t.n(c),u=t(540),m=t.n(u),p=t(113),f=t.n(p),g=t(365),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;let y,v=JSON.parse(localStorage.getItem("lists"));y=v||{"All ToDos":[]};class b{constructor(e,n,t){this.title=e,this.priority=n,this.dueDate=t,this.checkStatus=!1}}function x(e,n=null){y["All ToDos"].push(e),n&&(y[n]||(y[n]=[]),y[n].push(e)),P()}const w='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M7,18H9L9.35,16H13.35L13,18H15L15.35,16H17.35L17.71,14H15.71L16.41,10H18.41L18.76,8H16.76L17.12,6H15.12L14.76,8H10.76L11.12,6H9.12L8.76,8H6.76L6.41,10H8.41L7.71,14H5.71L5.35,16H7.35L7,18M10.41,10H14.41L13.71,14H9.71L10.41,10Z" /></svg>',L='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>',E='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M13 12H11V14H13M13 4H11V10H13Z" /></svg>',H=(Math.pow(10,8),Symbol.for("constructDateFrom"));function k(e,n){return"function"==typeof e?e(n):e&&"object"==typeof e&&H in e?e[H](n):e instanceof Date?new e.constructor(n):new Date(n)}function S(e){return k(e,Date.now())}function C(e,...n){const t=k.bind(null,e||n.find((e=>"object"==typeof e)));return n.map(t)}function T(e,n){return k(n||e,e)}function A(e,n){const t=T(e,n?.in);return t.setHours(0,0,0,0),t}function M(e,n){return function(e,n,t){const[r,o]=C(t?.in,e,n);return+A(r)==+A(o)}(k(n?.in||e,e),S(n?.in||e))}let q={};function j(){return q}function D(e,n){const t=j(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=T(e,n?.in),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function O(e,n){return function(e,n,t){const[r,o]=C(t?.in,e,n);return+D(r,t)==+D(o,t)}(k(n?.in||e,e),S(n?.in||e),n)}function I(){const e=document.querySelector(".list-ctn");e.innerHTML="",Object.keys(y).forEach((n=>{const t=document.createElement("div");t.classList.add("list-tag"),t.innerHTML=w,t.dataset.list=n;const r=document.createElement("div");if(r.classList.add("list-text"),r.textContent=`${n}`,t.appendChild(r),"All ToDos"!==n){const e=document.createElement("button");e.classList.add("ldelete-btn"),e.innerHTML=L,e.dataset.list=n,t.appendChild(e)}e.appendChild(t)}))}function V(e){const n=document.querySelector(".content"),t=document.createElement("div");t.classList.add("todo-card");const r=document.createElement("div");r.classList.add("card-sub");const o=document.createElement("input");o.type="checkbox",o.classList.add("checkbox"),o.checked=e.checkStatus,o.dataset.title=e.title;const i=document.createElement("h3");i.textContent=e.title;const s=document.createElement("div");s.classList.add("priority-ctn"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>';const l=s.querySelector("svg");"high"===e.priority?l.style.fill="red":"medium"===e.priority?l.style.fill="orange":l.style.fill="green";const a=document.createElement("div");a.classList.add("date-ind"),a.textContent=e.dueDate;const c=document.createElement("button");c.classList.add("delete-btn"),c.innerHTML=L,c.dataset.title=e.title,!0===o.checked&&(t.classList.add("complete-todo"),c.style.backgroundColor="#424769a5"),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(s),r.appendChild(c),t.appendChild(r),n.appendChild(t)}function z(e){const n=document.querySelector(".list-header");n.textContent="";const t=document.createElement("div"),r=document.createElement("div");r.innerHTML=w,r.classList.add("lheader-icon");const o=document.createElement("h2");o.textContent=`${e}`,o.style.cssText="font-family: 'Outfit';",o.classList.add("header-title"),t.appendChild(r),t.appendChild(o),n.appendChild(t)}function N(e){const n=document.querySelector(".content");n.innerHTML="",z(e);const t=y[e]||[];if(0===t.length){n.style.cssText="justify-content: space-around;";const e=document.createElement("div");e.classList.add("empty-list");const t=document.createElement("div");t.classList.add("empty-list-text"),t.textContent="This list is empty";const r=document.createElement("div");r.innerHTML=E,r.querySelector("svg").classList.add("empty-list-img"),e.appendChild(t),e.appendChild(r),n.appendChild(e)}else n.style.cssText="justify-content: normal;",t.forEach((e=>{V(e)}))}function B(){const e=document.querySelector(".content");e.innerHTML="",e.style.cssText="justify-content: space-around;";const n=document.createElement("div");n.classList.add("empty-list");const t=document.createElement("div");t.classList.add("empty-list-text"),t.textContent="This list is empty";const r=document.createElement("div");r.innerHTML=E,r.querySelector("svg").classList.add("empty-list-img"),n.appendChild(t),n.appendChild(r),e.appendChild(n)}function P(){localStorage.setItem("lists",JSON.stringify(y))}function R(){const e=document.querySelectorAll(".delete-btn"),n=document.querySelector(".header-title").textContent;e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.title,r=Object.values(y).flat().find((e=>e.title===t));var o;o=r,Object.keys(y).forEach((e=>{y[e]=y[e].filter((e=>e.title!==o.title))})),P(),U(n)}))}))}function Z(){document.querySelectorAll(".ldelete-btn").forEach((e=>{e.addEventListener("click",(n=>{n.stopPropagation(),function(e){const n=y[e].map((e=>e.title));y["All ToDos"]=y["All ToDos"].filter((e=>!n.includes(e.title))),delete y[e],P()}(e.dataset.list),U("All Todos")}))}))}function F(){const e=document.querySelectorAll(".checkbox"),n=document.querySelector(".header-title").textContent;e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.title,r=e.closest(".todo-card");Object.values(y).forEach((n=>{const r=n.find((e=>e.title===t));r&&(r.checkStatus=e.checked)})),e.checked?r.classList.add("complete-todo"):r.classList.remove("complete-todo"),P(),U(n)}))}))}function J(){document.querySelectorAll(".list-tag").forEach((e=>{e.addEventListener("click",(()=>{U(e.dataset.list)}))}))}function U(e){const n=y[e]?e:"All ToDos";I(),N(n),J(),R(),Z(),F()}function $(){I(),J(),R(),Z(),F()}I(),function(){let e="All ToDos";z(e),N(e)}(),function(){const e=document.querySelector(".add-todo"),n=document.querySelector(".input-todo"),t=document.getElementById("fancy-form"),r=document.querySelector(".todo-add"),o=document.querySelector(".todo-close"),i=document.querySelector("#title"),s=document.querySelector("#list"),l=document.querySelector("#prio"),a=document.querySelector("#date-in");e.addEventListener("click",(()=>{n.showModal()})),o.addEventListener("click",(e=>{e.preventDefault(),n.close()})),r.addEventListener("click",(e=>{e.preventDefault(),""===s.value?(x(new b(i.value,l.value,a.value)),U("All ToDos")):(x(new b(i.value,l.value,a.value,s.value),s.value),U(s.value)),n.close(),t.reset()}))}(),function(){const e=document.querySelector(".input-list"),n=document.querySelector(".add-list"),t=document.getElementById("fancy-list"),r=document.getElementById("create-list"),o=document.querySelector(".create-list"),i=document.querySelector(".close-list");n.addEventListener("click",(()=>{e.style.display="flex",r.focus()})),i.addEventListener("click",(n=>{n.preventDefault(),e.style.display="none",t.reset()})),o.addEventListener("click",(n=>{var o;n.preventDefault(),""===r.value?alert("Please enter a list name"):(o=r.value,y[o]=[],P(),e.style.display="none",U(r.value),t.reset())}))}(),R(),Z(),J(),F(),function(){const e=document.querySelector(".today-tab"),n=document.querySelector(".week-tab");e.addEventListener("click",(()=>{!function(){const e=[];if(y["All ToDos"].forEach((n=>{const t=n.dueDate;t&&M(t)&&e.push(n)})),console.log(e),0===e.length)B(),z("today");else{z("today");const n=document.querySelector(".content");n.innerHTML="",n.style.cssText="justify-content: normal;",e.forEach((e=>{V(e)}))}}(),$()})),n.addEventListener("click",(()=>{!function(){const e=[];if(y["All ToDos"].forEach((n=>{const t=n.dueDate;t&&O(t)&&e.push(n)})),console.log(e),0===e.length)B(),z("this week");else{z("this week");const n=document.querySelector(".content");n.innerHTML="",n.style.cssText="justify-content: normal;",e.forEach((e=>{V(e)}))}}(),$()}))}()})();
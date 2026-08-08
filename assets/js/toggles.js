// /* =============================================================
//    scholar-stationery — toggles.js
//    Minimal JS: ONLY dark-mode + RTL toggles. Nothing else.
//    Unobtrusive (no inline event handlers). ~30 lines.
//    ============================================================= */
// (function () {
//   "use strict";

//   var root = document.documentElement;

//   /* ---- Dark mode toggle ---- */
//   function initTheme() {
//     var saved = localStorage.getItem("ss-theme");
//     if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
//       root.setAttribute("data-theme", "dark");
//     }
//     var btn = document.querySelector("[data-theme-toggle]");
//     if (btn) {
//       btn.addEventListener("click", function () {
//         var dark = root.getAttribute("data-theme") === "dark";
//         if (dark) { root.removeAttribute("data-theme"); localStorage.setItem("ss-theme", "light"); }
//         else { root.setAttribute("data-theme", "dark"); localStorage.setItem("ss-theme", "dark"); }
//       });
//     }
//   }

//   /* ---- RTL toggle ---- */
//   function initRtl() {
//     if (localStorage.getItem("ss-dir") === "rtl") {
//         root.setAttribute("dir", "rtl");
//     } else {
//         root.setAttribute("dir", "ltr");
//     }

//     const btn = document.querySelector("[data-rtl-toggle]");

//     if (btn) {
//         btn.addEventListener("click", function () {
//             const rtl = root.getAttribute("dir") === "rtl";

//             if (rtl) {
//                 root.setAttribute("dir", "ltr");
//                 localStorage.setItem("ss-dir", "ltr");
//             } else {
//                 root.setAttribute("dir", "rtl");
//                 localStorage.setItem("ss-dir", "rtl");
//             }
//         });
//     }
// }

//   document.addEventListener("DOMContentLoaded", function () { initTheme(); initRtl(); });
// })();

// ======================
// DARK MODE
// ======================

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {

const currentTheme = document.documentElement.getAttribute("data-theme");

if(currentTheme === "dark"){
document.documentElement.setAttribute("data-theme","light");
localStorage.setItem("theme","light");
}else{
document.documentElement.setAttribute("data-theme","dark");
localStorage.setItem("theme","dark");
}

});

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
document.documentElement.setAttribute("data-theme",savedTheme);
}


// ======================
// RTL MODE
// ======================

const rtlButton = document.querySelector(".rtl-toggle");

rtlButton.addEventListener("click",()=>{

const direction = document.documentElement.getAttribute("dir");

if(direction==="rtl"){

document.documentElement.setAttribute("dir","ltr");
localStorage.setItem("direction","ltr");
rtlButton.innerHTML="RTL";

}else{

document.documentElement.setAttribute("dir","rtl");
localStorage.setItem("direction","rtl");
rtlButton.innerHTML="LTR";

}

});

const savedDirection = localStorage.getItem("direction");

if(savedDirection){

document.documentElement.setAttribute("dir",savedDirection);

if(savedDirection==="rtl"){
rtlButton.innerHTML="LTR";
}

}
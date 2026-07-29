/* =============================================================
   scholar-stationery — toggles.js
   Minimal JS: ONLY dark-mode + RTL toggles. Nothing else.
   Unobtrusive (no inline event handlers). ~30 lines.
   ============================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- Dark mode toggle ---- */
  function initTheme() {
    var saved = localStorage.getItem("ss-theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.setAttribute("data-theme", "dark");
    }
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.addEventListener("click", function () {
        var dark = root.getAttribute("data-theme") === "dark";
        if (dark) { root.removeAttribute("data-theme"); localStorage.setItem("ss-theme", "light"); }
        else { root.setAttribute("data-theme", "dark"); localStorage.setItem("ss-theme", "dark"); }
      });
    }
  }

  /* ---- RTL toggle ---- */
  function initRtl() {
    if (localStorage.getItem("ss-dir") === "rtl") { root.setAttribute("dir", "rtl"); }
    var btn = document.querySelector("[data-rtl-toggle]");
    if (btn) {
      btn.addEventListener("click", function () {
        var rtl = root.getAttribute("dir") === "rtl";
        if (rtl) { root.setAttribute("dir", "ltr"); localStorage.setItem("dir", "ltr"); }
        else { root.setAttribute("dir", "rtl"); localStorage.setItem("ss-dir", "rtl"); }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () { initTheme(); initRtl(); });
})();

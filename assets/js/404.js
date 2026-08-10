document.addEventListener("DOMContentLoaded",function(){
const rtlButton=document.querySelector("[data-rtl-toggle]");
const themeButton=document.querySelector("[data-theme-toggle]");
if(rtlButton){
rtlButton.addEventListener("click",function(){
const currentDirection=document.documentElement.getAttribute("dir");
document.documentElement.setAttribute("dir",currentDirection==="rtl"?"ltr":"rtl");
rtlButton.setAttribute("aria-label",currentDirection==="rtl"?"Switch to right-to-left layout":"Switch to left-to-right layout");
});
}
if(themeButton){
themeButton.addEventListener("click",function(){
document.documentElement.classList.toggle("dark-mode");
});
}
});
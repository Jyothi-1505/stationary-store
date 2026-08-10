document.addEventListener("DOMContentLoaded",function(){
const rtlButton=document.querySelector("[data-rtl-toggle]");
const themeButton=document.querySelector("[data-theme-toggle]");
if(rtlButton){
rtlButton.addEventListener("click",function(){
const currentDirection=document.documentElement.getAttribute("dir");
if(currentDirection==="rtl"){
document.documentElement.setAttribute("dir","ltr");
localStorage.setItem("direction","ltr");
}else{
document.documentElement.setAttribute("dir","rtl");
localStorage.setItem("direction","rtl");
}
});
}
if(localStorage.getItem("direction")==="rtl"){
document.documentElement.setAttribute("dir","rtl");
}
if(themeButton){
themeButton.addEventListener("click",function(){
document.documentElement.classList.toggle("dark-mode");
if(document.documentElement.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
});
}
if(localStorage.getItem("theme")==="dark"){
document.documentElement.classList.add("dark-mode");
}
});
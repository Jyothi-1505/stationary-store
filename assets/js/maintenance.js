/*==================================================*
*MAINTENANCE PAGE JAVASCRIPT*
*EduMart*
*==================================================*/

document.addEventListener("DOMContentLoaded",function(){

const rtlButton=document.querySelector("[data-rtl-toggle]");
const themeButton=document.querySelector("[data-theme-toggle]");
const newsletterForm=document.querySelector(".newsletter-form");

/*==================================================*
*LOAD SAVED THEME*
*==================================================*/

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
}

/*==================================================*
*DARK MODE*
*==================================================*/

if(themeButton){
themeButton.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
});
}

/*==================================================*
*LOAD SAVED RTL*
*==================================================*/

if(localStorage.getItem("direction")==="rtl"){
document.documentElement.setAttribute("dir","rtl");
}else{
document.documentElement.setAttribute("dir","ltr");
}

/*==================================================*
*RTL / LTR*
*==================================================*/

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

/*==================================================*
*NEWSLETTER*
*==================================================*/

if(newsletterForm){
newsletterForm.addEventListener("submit",function(event){

event.preventDefault();

const emailInput=document.getElementById("nl-email");
const email=emailInput.value.trim();

if(email===""){
alert("Please enter your email address.");
return;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Please enter a valid email address.");
return;
}

alert("Thank you! We will notify you when EduMart is back online.");

emailInput.value="";

});
}

});
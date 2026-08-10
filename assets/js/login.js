/*==================================================*
*LOGIN PAGE JAVASCRIPT*
*Scholar Stationery*
*==================================================*/
/*==================================================*
*SELECT ELEMENTS*
*==================================================*/
const loginForm=document.querySelector(".login-form");
const passwordInput=document.getElementById("password");
const passwordButton=document.querySelector(".password-button");
const loginButton=document.querySelector(".login-button");
const darkModeButton=document.querySelector("[data-theme-toggle]");
const rtlButton=document.querySelector("[data-rtl-toggle]");
/*==================================================*
*SHOW / HIDE PASSWORD*
*==================================================*/
if(passwordInput&&passwordButton){
passwordButton.addEventListener("click",function(){
if(passwordInput.type==="password"){
passwordInput.type="text";
passwordButton.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19C5 19 1 12 1 12A21.76 21.76 0 0 1 6.06 6.06"></path><path d="M1 1L23 23"></path><path d="M9.9 4.24A10.94 10.94 0 0 1 12 5C19 5 23 12 23 12A21.76 21.76 0 0 1 17.94 17.94"></path></svg>`;
passwordButton.setAttribute("aria-label","Hide password");
}else{
passwordInput.type="password";
passwordButton.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12S5 5 12 5S23 12 23 12S19 19 12 19S1 12 1 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
passwordButton.setAttribute("aria-label","Show password");
}
});
}
/*==================================================*
*LOGIN FORM*
*==================================================*/
if(loginForm){
loginForm.addEventListener("submit",function(event){
event.preventDefault();
const email=document.getElementById("email").value.trim();
const password=document.getElementById("password").value.trim();
if(email===""){
alert("Please enter your email address.");
return;
}
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
alert("Please enter a valid email address.");
return;
}
if(password===""){
alert("Please enter your password.");
return;
}
if(loginButton){
loginButton.disabled=true;
loginButton.innerHTML="Signing In...";
}
setTimeout(function(){
window.location.href="dashboard.html";
},1500);
});
}
/*==================================================*
*DARK MODE*
*==================================================*/
if(localStorage.getItem("theme")==="dark"){
document.documentElement.setAttribute("data-theme","dark");
}
if(darkModeButton){
darkModeButton.addEventListener("click",function(){
const darkMode=document.documentElement.getAttribute("data-theme")==="dark";
if(darkMode){
document.documentElement.removeAttribute("data-theme");
localStorage.setItem("theme","light");
}else{
document.documentElement.setAttribute("data-theme","dark");
localStorage.setItem("theme","dark");
}
});
}
/*==================================================*
*RTL MODE*
*==================================================*/
if(localStorage.getItem("direction")==="rtl"){
document.documentElement.setAttribute("dir","rtl");
}else{
document.documentElement.setAttribute("dir","ltr");
}
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
*INPUT ANIMATION*
*==================================================*/
const formInputs=document.querySelectorAll(".form-field input");
formInputs.forEach(function(input){
input.addEventListener("focus",function(){
this.parentElement.classList.add("active");
});
input.addEventListener("blur",function(){
this.parentElement.classList.remove("active");
});
});
/*==================================================*
*SOCIAL BUTTONS*
*==================================================*/
const socialButtons=document.querySelectorAll(".social-button");
socialButtons.forEach(function(button){
button.addEventListener("click",function(event){
event.preventDefault();
alert("Social login integration will be available soon.");
});
});
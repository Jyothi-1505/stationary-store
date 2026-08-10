/*==================================================*
*REGISTER PAGE JAVASCRIPT*
*EduMart*
*==================================================*/

/*==================================================*
*SELECT ELEMENTS*
*==================================================*/
const registerForm=document.querySelector(".register-form");
const fullNameInput=document.getElementById("fullName");
const emailInput=document.getElementById("email");
const passwordInput=document.getElementById("password");
const confirmPasswordInput=document.getElementById("confirmPassword");
const termsInput=document.getElementById("terms");
const registerButton=document.querySelector(".register-button");
const darkModeButton=document.getElementById("darkModeButton");
const rtlButton=document.getElementById("rtlButton");

/*==================================================*
*DARK MODE*
*==================================================*/
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
}

if(darkModeButton){
darkModeButton.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}
});
}

/*==================================================*
*RTL MODE*
*==================================================*/
if(localStorage.getItem("direction")==="rtl"){
document.documentElement.setAttribute("dir","rtl");

if(rtlButton){
rtlButton.setAttribute("aria-label","Switch to LTR");
rtlButton.setAttribute("title","Switch to LTR");
}
}

if(rtlButton){
rtlButton.addEventListener("click",function(){

if(document.documentElement.getAttribute("dir")==="rtl"){
document.documentElement.setAttribute("dir","ltr");
localStorage.setItem("direction","ltr");
rtlButton.setAttribute("aria-label","Switch to RTL");
rtlButton.setAttribute("title","Switch to RTL");
}else{
document.documentElement.setAttribute("dir","rtl");
localStorage.setItem("direction","rtl");
rtlButton.setAttribute("aria-label","Switch to LTR");
rtlButton.setAttribute("title","Switch to LTR");
}

});
}

/*==================================================*
*SHOW / HIDE PASSWORD*
*==================================================*/
const passwordButtons=document.querySelectorAll(".password-button");

passwordButtons.forEach(function(button){

button.addEventListener("click",function(){

const passwordField=this.parentElement.querySelector("input");

if(passwordField.type==="password"){

passwordField.type="text";

this.setAttribute("aria-label","Hide password");

this.innerHTML=`
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19C5 19 1 12 1 12A21.76 21.76 0 0 1 6.06 6.06"></path>
<path d="M1 1L23 23"></path>
<path d="M9.9 4.24A10.94 10.94 0 0 1 12 5C19 5 23 12 23 12A21.76 21.76 0 0 1 17.94 17.94"></path>
</svg>
`;

}else{

passwordField.type="password";

this.setAttribute("aria-label","Show password");

this.innerHTML=`
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<path d="M1 12S5 5 12 5S23 12 23 12S19 19 12 19S1 12 1 12Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
`;

}

});

});

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
*REGISTER FORM*
*==================================================*/
if(registerForm){

registerForm.addEventListener("submit",function(event){

event.preventDefault();

const fullName=fullNameInput.value.trim();
const email=emailInput.value.trim();
const password=passwordInput.value;
const confirmPassword=confirmPasswordInput.value;

if(fullName===""){
alert("Please enter your full name.");
fullNameInput.focus();
return;
}

if(fullName.length<3){
alert("Please enter a valid full name.");
fullNameInput.focus();
return;
}

if(email===""){
alert("Please enter your email address.");
emailInput.focus();
return;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
alert("Please enter a valid email address.");
emailInput.focus();
return;
}

if(password===""){
alert("Please create a password.");
passwordInput.focus();
return;
}

if(password.length<8){
alert("Password must contain at least 8 characters.");
passwordInput.focus();
return;
}

if(confirmPassword===""){
alert("Please confirm your password.");
confirmPasswordInput.focus();
return;
}

if(password!==confirmPassword){
alert("Passwords do not match.");
confirmPasswordInput.focus();
return;
}

if(!termsInput.checked){
alert("Please agree to the Terms & Conditions and Privacy Policy.");
termsInput.focus();
return;
}

/*==================================================*
*SUBMIT REGISTRATION*
*==================================================*/
registerButton.disabled=true;

registerButton.innerHTML=`
<span>Creating Account...</span>
`;

setTimeout(function(){

alert("Account created successfully!");

window.location.href="login.html";

},1500);

});

}

/*==================================================*
*SOCIAL LOGIN / SIGN UP*
*==================================================*/
const socialButtons=document.querySelectorAll(".social-button");

socialButtons.forEach(function(button){

button.addEventListener("click",function(event){

event.preventDefault();

const provider=this.querySelector("span");

if(provider){
alert(provider.textContent.trim()+" sign up integration will be available soon.");
}else{
alert("Social sign up integration will be available soon.");
}

});

});

/*==================================================*
*PREVENT DOUBLE SUBMISSION*
*==================================================*/
if(registerForm){

registerForm.addEventListener("keydown",function(event){

if(event.key==="Enter" && event.target.tagName==="INPUT"){
return;
}

});

}
/*==================================================
REGISTER PAGE
==================================================*/

const passwordButtons=document.querySelectorAll(".password-button");

passwordButtons.forEach(function(button){

button.addEventListener("click",function(){

const input=this.previousElementSibling;

if(input.type==="password"){

input.type="text";

this.innerHTML="🙈";

}else{

input.type="password";

this.innerHTML="👁";

}

});

});

/*==================================================
FORM SUBMIT
==================================================*/

const registerForm=document.querySelector(".register-form");

const registerButton=document.querySelector(".register-button");

registerForm.addEventListener("submit",function(event){

event.preventDefault();

const fullName=document.getElementById("fullName").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirmPassword=document.getElementById("confirmPassword").value;

const terms=document.getElementById("terms").checked;

if(fullName===""){

alert("Please enter your full name.");

return;

}

if(email===""){

alert("Please enter your email address.");

return;

}

if(password.length<8){

alert("Password must be at least 8 characters.");

return;

}

if(password!==confirmPassword){

alert("Passwords do not match.");

return;

}

if(!terms){

alert("Please accept the Terms & Conditions.");

return;

}

const originalText=registerButton.innerHTML;

registerButton.disabled=true;

registerButton.innerHTML="Creating Account...";

setTimeout(function(){

registerButton.innerHTML=originalText;

registerButton.disabled=false;

window.location.href="login.html";

},1800);

});

/*==================================================
DARK MODE
==================================================*/

const darkModeButton=document.getElementById("darkModeButton");

if(darkModeButton){

darkModeButton.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

});

}

/*==================================================
RTL
==================================================*/

const rtlButton=document.getElementById("rtlButton");

if(rtlButton){

rtlButton.addEventListener("click",function(){

document.documentElement.dir=

document.documentElement.dir==="rtl"

?

"ltr"

:

"rtl";

});

}
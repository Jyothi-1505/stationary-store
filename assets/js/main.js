const menuButton=document.getElementById("mobileMenuButton");
const mobileMenu=document.querySelector(".navigation");
const backToTopButton=document.getElementById("backToTop");

if(menuButton&&mobileMenu){
menuButton.addEventListener("click",function(){
mobileMenu.classList.toggle("navigation--active");
menuButton.classList.toggle("active");
const opened=mobileMenu.classList.contains("navigation--active");
menuButton.setAttribute("aria-expanded",String(opened));
});
}

document.querySelectorAll(".navigation__dropdown-toggle").forEach(function(button){
button.addEventListener("click",function(event){
if(window.innerWidth<=768){
event.preventDefault();
event.stopPropagation();

const parent=this.closest(".navigation__item--dropdown");

if(!parent){
return;
}

const opened=parent.classList.contains("navigation__item--active");

document.querySelectorAll(".navigation__item--dropdown").forEach(function(item){
item.classList.remove("navigation__item--active");

const dropdownButton=item.querySelector(".navigation__dropdown-toggle");

if(dropdownButton){
dropdownButton.setAttribute("aria-expanded","false");
}
});

if(!opened){
parent.classList.add("navigation__item--active");
this.setAttribute("aria-expanded","true");
}
}
});
});

window.addEventListener("resize",function(){
if(window.innerWidth>768&&menuButton&&mobileMenu){
mobileMenu.classList.remove("navigation--active");
menuButton.classList.remove("active");
menuButton.setAttribute("aria-expanded","false");

document.querySelectorAll(".navigation__item--active").forEach(function(item){
item.classList.remove("navigation__item--active");
});

document.querySelectorAll(".navigation__dropdown-toggle").forEach(function(button){
button.setAttribute("aria-expanded","false");
});
}
});

document.querySelectorAll(".navigation__link").forEach(function(link){
link.addEventListener("click",function(){
if(window.innerWidth<=768&&menuButton&&mobileMenu){
mobileMenu.classList.remove("navigation--active");
menuButton.classList.remove("active");
menuButton.setAttribute("aria-expanded","false");
}
});
});

if(backToTopButton){
window.addEventListener("scroll",function(){
if(window.scrollY>300){
backToTopButton.classList.add("show");
}else{
backToTopButton.classList.remove("show");
}
});

backToTopButton.addEventListener("click",function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
});
}

const revealElements=document.querySelectorAll(".reveal");

if("IntersectionObserver" in window){
const revealObserver=new IntersectionObserver(function(entries){
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{
threshold:0.15
});

revealElements.forEach(function(element){
revealObserver.observe(element);
});
}else{
revealElements.forEach(function(element){
element.classList.add("active");
});
}
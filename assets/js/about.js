
/*=========================================
COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".num");

let started=false;

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !started){

started=true;

counters.forEach(counter=>{

const target=Number(counter.dataset.count);

const suffix=counter.dataset.suffix || "";

const duration=2000;

let start=0;

const increment=target/(duration/16);

function updateCounter(){

start+=increment;

if(start<target){

counter.textContent=Math.floor(start).toLocaleString()+suffix;

requestAnimationFrame(updateCounter);

}else{

counter.textContent=target.toLocaleString()+suffix;

}

}

updateCounter();

});

}

});

},{
threshold:.4
});

const counterSection=document.querySelector(".counter-section");

if(counterSection){

counterObserver.observe(counterSection);

}
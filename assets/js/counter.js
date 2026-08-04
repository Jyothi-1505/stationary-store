// const counters=document.querySelectorAll(".counter");
// const observer=new IntersectionObserver((entries)=>{
// entries.forEach(entry=>{
// if(!entry.isIntersecting)return;
// const counter=entry.target;
// const target=Number(counter.dataset.target);
// const duration=2000;
// const increment=target/(duration/16);
// let current=0;
// const update=()=>{
// current+=increment;
// if(current<target){
// counter.textContent=Math.floor(current).toLocaleString()+"+";
// requestAnimationFrame(update);
// }else{
// counter.textContent=target.toLocaleString()+"+";
// }
// };
// update();
// observer.unobserve(counter);
// });
// },{threshold:.5});
// counters.forEach(counter=>observer.observe(counter));
/*==================================================
COUNTER ANIMATION
==================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(!entry.isIntersecting)return;

const counter=entry.target;
const target=Number(counter.dataset.target);
const suffix=counter.dataset.suffix??"+";

let current=0;
const duration=2000;
const increment=target/(duration/16);

function updateCounter(){
current+=increment;

if(current<target){
counter.textContent=Math.floor(current).toLocaleString()+suffix;
requestAnimationFrame(updateCounter);
}else{
counter.textContent=target.toLocaleString()+suffix;
}
}

updateCounter();
counterObserver.unobserve(counter);
});
},{
threshold:.5
});

counters.forEach(counter=>{
counterObserver.observe(counter);
});
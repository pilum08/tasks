const left=document.querySelector("#left");
const right=document.querySelector("#right");
const itemsList=document.querySelector("#items");
const computedStyles=window.getComputedStyle(itemsList);
const items=document.querySelectorAll(".item")

const minRight=0;
const itemWidth=getComputedStyle(items[0]).width;
const step=parseInt(itemWidth);
const preShowItems=300/step;
const maxRight=(items.length-3)*step;
let currentRight=0;
itemsList.style.right=currentRight;
right.addEventListener("click",e=>{
    e.preventDefault();
    if(currentRight<maxRight) {
        currentRight=currentRight+step;
        itemsList.style.right=`${currentRight}px`;
    }
})
left.addEventListener("click",e=>{
    e.preventDefault();
    if(currentRight>minRight) {
        currentRight=currentRight-step;
        itemsList.style.right=`${currentRight}px`;
    }
})
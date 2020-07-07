const marker = document.querySelector("#marker");
const item = document.querySelectorAll(".nav-bar a");

console.log(marker);
console.log(item);

function indicator(e){
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach(link =>{
  link.addEventListener("mouseover", (e)=>{
    marker.style.opacity = "1";
    indicator(e.target);
  })
  link.addEventListener("mouseleave", fademarker)

})

function fademarker(){
  marker.style.opacity = "0";
}
const tabs = document.querySelectorAll('.tablink');

const tabcontents =document.querySelectorAll('.tabcontent');

tabs.forEach(element => {
  element.addEventListener("mouseover", function(){
    this.style.backgroundColor = "lightgray";
    this.style.cursor = "pointer";
  })

  element.addEventListener("mouseout", function(){
    this.style.backgroundColor = "";
  })

  element.addEventListener("mousedown", function(){
    this.style.backgroundColor = "gray";
  })

})

function activate3(){
  
}

function activate(evt, number){

console.log(number);
console.log(evt);

tabcontents.forEach(element => {
  element.style.opacity = "0";
  element.style.display = "none";
});

tabs.forEach(element => {
  element.className = element.className.replace(" active", "");
  
});

const selected = document.getElementById(number);

selected.style.display = "block";
selected.style.opacity = "1";

evt.currentTarget.className += " active";
}
const nav = document.getElementsByTagName("nav")[0];
let prevScrollpos = window.pageYOffset;

const menuTop = document.querySelector("#menu-top");

window.addEventListener("scroll", scrolling);

window.addEventListener("scroll", navOpacity);

function scrolling(){
  let currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos){
    nav.style.top = "0";
  } else {
    nav.style.top = "-107px";
  }

  prevScrollpos = currentScrollpos;
}

function navOpacity(){
  if (prevScrollpos != 0){
    nav.style.backgroundColor = "rgba(255,255,255,1)";
  } else {
    nav.style.backgroundColor = "rgba(255,255,255,0)";
  }
}



function toggle(){
  const blur = document.getElementById('body-border');

  blur.classList.toggle("active");

  const popUp = document.getElementById('popUp');

  popUp.classList.toggle("active");

  const blur2 = document.getElementsByClassName("certificates-one-row")[0];

  blur2.classList.toggle("active");

  const blur3 = document.getElementById("popUp-area");

  blur3.classList.toggle("active");


  if (nav.style.display === "none"){
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}


function toggle3(){
  const blur = document.getElementById('body-border');

  blur.classList.toggle("active");

  const popUp = document.getElementById('popUp');

  popUp.classList.toggle("active");

  const blur3 = document.getElementById("popUp-area");

  blur3.classList.toggle("active");

  if (nav.style.display === "none"){
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }

}

const bars = document.querySelectorAll(".icon div");



function toggle2(){
  const sideMenu = document.getElementById("side-menu");

  sideMenu.classList.toggle("active");

  console.log(bars);

  bars.forEach(element => {
    element.classList.toggle("change")  
  });

  console.log(bars);

}

function toggleClose1(){
  toggle();
  toggle2();
  nav.style.display="none";
}

function toggleClose2(){
  toggle3();
  toggle2();
  nav.style.display="none";
}


const button = document.querySelectorAll("button");

for (i=0; i < button.length; i++){
  button[i].style.backgroundColor = "whitesmoke";
  button[i].style.borderBottom = "3px solid black";

  button[i].addEventListener('mouseover', mouseover);
  button[i].addEventListener('mouseout', mouseout);

  function mouseout(){
    this.style.backgroundColor = "whitesmoke";
    this.style.color = "black";
  }
  function mouseover(){
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.cursor = "pointer";
  }
}




function toggle(){
  const blur = document.getElementById('body-border');

  blur.classList.toggle("active");

  const popUp = document.getElementById('popUp');

  popUp.classList.toggle("active");

  const blur2 = document.getElementsByClassName("certificates-one-row")[0];

  blur2.classList.toggle("active");

  const blur3 = document.getElementById("popUp-area");

  blur3.classList.toggle("active");

}

function toggle3(){
  const blur = document.getElementById('body-border');

  blur.classList.toggle("active");

  const popUp = document.getElementById('popUp');

  popUp.classList.toggle("active");

  const blur3 = document.getElementById("popUp-area");

  blur3.classList.toggle("active");

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
}

function toggleClose2(){
  toggle3();
  toggle2();
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


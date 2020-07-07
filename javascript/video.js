
const vid = document.getElementsByTagName("video");
let isPlaying = true;


for(i = 0; i < vid.length; i++){

  vid[i].addEventListener("mouseover", mouseover);
  vid[i].addEventListener("click", togglePlay);
  vid[i].addEventListener("ended", load);
  
  function load(){
    this.load();
  }

  function mouseover(){
    this.style.cursor = "pointer";
  }  

  function togglePlay(){
    if(isPlaying){
      this.play();
    } else {
      this.pause();
    }
  }

  vid[i].onplaying = function(){
    isPlaying = false;
  }

  vid[i].onpause = function(){
    isPlaying = true;
  }

}
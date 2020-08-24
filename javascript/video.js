
const vid = document.getElementsByTagName("video");
let isPlaying = true;


for(i = 0; i < vid.length; i++){

  vid[i].addEventListener("mouseover", mouseover);
  vid[i].addEventListener("click", togglePlay);
  vid[i].addEventListener("ended", load);

  let vidSubtext = document.getElementsByTagName("small")[i];

  function load(){
    this.load();
    vidSubtext.style.opacity = "1";
  }

  function mouseover(){
    this.style.cursor = "pointer";
  }  

  function togglePlay(e){
    if(isPlaying){
      this.play();
    } else {
      this.pause();
    }
  }

  vid[i].onplaying = function(){
    isPlaying = false;
    vidSubtext.style.opacity = "0";
  }

  vid[i].onpause = function(){
    isPlaying = true;
    vidSubtext.style.opacity = "1";
  }

}
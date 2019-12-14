var myVideo = document.getElementById("video1"); 
          
function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 900; 
} 

function makeSmall() { 
    myVideo.width = 400; 
} 

function makeNormal() { 
    myVideo.width = 700; 
} 
var z=localStorage.getItem('key');
function videofun(){
  if(z == null){
  window.location.href='loginpage.html';
}
else{ }
}
videofun();
localStorage.setItem('num',2);
            
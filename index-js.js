




// jQuary Plugin
$('.counter').counterUp({
    delay: 10,
    time: 1000
});









// Voice Player Section

var player=document.getElementById("player");
let progress=document.getElementById("progress");
let playBtn=document.getElementById("playBtn");

var playpause = function(){
 
    if(player.paused){
        player.play();
    }
    else{
        player.pause();
    }
}

playBtn.addEventListener("click",playpause);

player.onplay = function(){
 // alert("ok");
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

player.onpause = function(){
 // alert("ok");
     playBtn.classList.add("fa-play");
     playBtn.classList.remove("fa-pause");      
}

player.ontimeupdate=function(){
    let ct=player.currentTime;
    current.innerHTML=timeFormat(ct);


    //progress
    let duration =player.duration;
    prog= Math.floor((ct*100)/duration);
    progress.style.setProperty("--progress",prog+"%");

}
function timeFormat(ct){
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if(seconds<10){
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#ctrl-icon");

const songlist = document.querySelector(".songlist");
//const songURL = ["download-2.mp3" , "download-3.mp3"]

//let currSongIndex = 0;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function forward() {

    let ad = document.createElement("audio")

    ad.setAttribute('src' , 'images/download-2.mp3' ,' type=audio/mpeg' ) ;
    
     if(songlist.children.length>0){

        songlist.removeChild(songlist.children[0])
    }

    songlist.appendChild(ad);

    ad.play();

    ad.volume = 0.10;


    


    // console.log("happen");
    // if(currSongIndex >= songURL.length){

    //     currSongIndex = 0;
    // }    

    // song.src = songURL[currSongIndex];

    // song.play();
}


function backward () {



}

song.addEventListener("play", function () {
    
    setInterval(() => {
      
        progress.value = song.currentTime;

    }, 500);
});


progress.onchange = function() {

    song.play();
    song.currentTime = progress.value;

    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "Heat Waves", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Vardaan - CarryMinati", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "The Nights", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "  Stereo Hearts - Ft. Adam Levine", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Wishlist - Dino James", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Sarkar-Jaura Phagwara", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: " Lakshya", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "wavin' flag", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Kar Har Maidaan Fateh - Sanju", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Standing by you", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Enemy - Imagine Dragons", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Insane - AP Dhillon", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Excuses - Ap Dhillon", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Stay - Justin Bieber", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
]

songitem.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
        mastersongname.innerText = songs[songIndex].songName;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
audioElement.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * (audioElement.duration/100));
    
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add("fa-play");
    });
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

    trackduration = document.querySelector("#currentduration");
    trackcurentrime = document.querySelector("#currenttime");
    audioElement.addEventListener('timeupdate', () => {
        if (audioElement.duration) {
            let curmins = Math.floor(audioElement.currentTime / 60);
            let cursecs = Math.floor(audioElement.currentTime - curmins * 60);

            let durmins = Math.floor(audioElement.duration / 60);
            let dursecs = Math.floor(audioElement.duration - durmins * 60);

            if (dursecs < 10) {
                dursecs = "0" + dursecs;
            }
            if (durmins < 10) {
                durmins = "0" + durmins;
            }
            if (cursecs < 10) {
                cursecs = "0" + cursecs;
            }
            if (curmins < 10) {
                curmins = "0" + curmins;
            }
            trackduration.innerHTML = durmins + ":" + dursecs;
            trackcurentrime.innerHTML = curmins + ":" + cursecs;
        }


        else {
            trackduration.innerHTML = "00" + ":" + "00";
            trackcurentrime.innerHTML = "00" + ":" + "00";

        }

    });
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 13) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    gif.style.opacity = 1;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 13;
    }
    else {
        songIndex -= 1;
    }
    gif.style.opacity = 1;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

});

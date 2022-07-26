console.log("welcome to spotify");

// initialising the variables
let songindex = 1;
let audioElement = new Audio('mp3/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songitem = Array.from(document.getElementsByClassName('song-item'));
let mastersongname = document.getElementById('mastersongname');
let songs = [
    {songName: "Arambh he prachand",filePath: "mp3/1.mp3",coverPath:"cover/1.jpg"},
    {songName: "Mann bhariyaa",filePath: "mp3/2.mp3",coverPath:"cover/2.jpg"},
    {songName: "Rattan lambiya",filePath: "mp3/3.mp3",coverPath:"cover/3.jpg"},
    {songName: "Kesariyaa",filePath: "mp3/4.mp3",coverPath:"cover/4.jpg"},
    {songName: "Dhokha song",filePath: "mp3/5.mp3",coverPath:"cover/5.jpg"},
    {songName: "Rattan lambiya",filePath: "mp3/6.mp3",coverPath:"cover/3.jpg"},
    {songName: "filhal song",filePath: "mp3/7.mp3",coverPath:"cover/3.jpg"},
]

songitem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
    
});

// handle play/pause click
masterplay.addEventListener('click',() =>{
    if(audioElement.paused | audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
// listen to events
audioElement.addEventListener('timeupdate',() =>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change',() =>{
    audioElement.currentTime = (myprogressbar.value*audioElement.duration)/100;
})


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click' , (e) =>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `mp3/${songindex}.mp3`;
        mastersongname.innerText  =songs[songindex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
});


document.getElementById('next').addEventListener('click',() =>{
    if(songindex>=8){
        songindex = 1;
    }
    else{
        songindex+=1;
    }
    audioElement.src = `mp3/${songindex}.mp3`;
    mastersongname.innerText  =songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',() =>{
    if(songindex<=0){
        songindex = 1;
    }
    else{
        songindex-=1;
    }
    audioElement.src = `mp3/${songindex}.mp3`;
    mastersongname.innerText  =songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
// audioElement.play();

//listen to elments
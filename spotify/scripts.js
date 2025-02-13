console.log("Welcome To Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('w1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
    { songname: 'Winning Speech', filepath: 'song/w1.mp3', coverpath: 'covers/ka.png' },
];

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
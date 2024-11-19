const music = new Audio('audio/1.mp3');
//music.play();
const songs = [
  {
    id: "1",
    songName: "All Falls Down <br><div class='subtitle'>Alan Walker</div>",
    poster: "img/1.jpg"
  },
  {
    id: "2",
    songName: "Faded <br><div class='subtitle'>Alan Walker</div>",
    poster: "img/2.jpg"
  },
  {
    id: "3",
    songName: "AVANGARD <br><div class='subtitle'>N/A</div>",
    poster: "img/3.jpg"
  },
  {
    id: "4",
    songName: "Bát Hoang Quyết <br><div class='subtitle'>N/A</div>",
    poster: "img/4.jpg"
  },
  {
    id: "5",
    songName: "Be The One <br><div class='subtitle'>N/A</div>",
    poster: "img/5.jpg"
  },
  {
    id: "6",
    songName: "Celestial Symphony OST Black Myth WuKong BGM <br><div class='subtitle'>N/A</div>",
    poster: "img/6.jpg"
  },
  {
    id: "7",
    songName: "Hero  Cash Cash ft Christina Perri Lyrics  Vietsub  Top Tik Tok  <br><div class='subtitle'>N/A</div>",
    poster: "img/7.jpg"
  },
  {
    id: "8",
    songName: "Lost Sky  Where We Started <br><div class='subtitle'>N/A</div>",
    poster: "img/8.jpg"
  },
  {
    id: "9",
    songName: "TINH VỆ <br><div class='subtitle'>N/A</div>",
    poster: "img/9.jpg"
  },
  {
    id: "10",
    songName: "ĐẢO NGHỊCH <br><div class='subtitle'>N/A</div>",
    poster: "img/10.jpg"
  },
  {
    id: "11",
    songName: "Heroes Tonight <br><div class='subtitle'>N/A</div>",
    poster: "img/11.jpg"
  },
  {
    id: "12",
    songName: "Nếu Ví Anh Như  Đông <br><div class='subtitle'>N/A</div>",
    poster: "img/12.jpg"
  },
  {
    id: "13",
    songName: "Mortals  Warriyo <br><div class='subtitle'>N/A</div>",
    poster: "img/13.jpg"
  },
  {
    id: "14",
    songName: " Light It Up <br><div class='subtitle'>N/A</div>",
    poster: "img/14.jpg"
  },
  {
    id: "15",
    songName: "Sky High <br><div class='subtitle'>N/A</div>",
    poster: "img/15.jpg"
  },
  {
    id: "16",
    songName: "AURA <br><div class='subtitle'>N/A</div>",
    poster: "img/16.jpg"
  },
  {
    id: "17",
    songName: "Invincible <br><div class='subtitle'>N/A</div>",
    poster: "img/17.jpg"
  },
  {
    id: "18",
    songName: "Cartoon Jéja  On & On <br><div class='subtitle'>N/A</div>",
    poster: "img/18.jpg"
  },
  {
    id: "19",
    songName: "TrustLast  <br><div class='subtitle'>N/A</div>",
    poster: "img/19.jpg"
  },
  {
    id: "20",
    songName: "WBX WBoiled Extreme <br><div class='subtitle'>N/A</div>",
    poster: "img/20.jpg"
  },
  {
    id: "21",
    songName: "Give Me Your Love <br><div class='subtitle'>N/A</div>",
    poster: "img/21.jpg"
  },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    if (songs[i]) {  // Kiểm tra xem bài hát có tồn tại trong mảng
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 1;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

let songTitles = songs; // songs là mảng chứa danh sách bài hát
let currentSong = songs[index]; // Lấy bài hát hiện tại
// Làm sạch tên bài hát
let cleanSongName = sanitizeFileName(currentSong.songName);
function sanitizeFileName(songName) {
    return songName.replace(/<[^>]*>/g, '').trim(); // Loại bỏ thẻ HTML
}

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        let index = el.target.id;

        // Cập nhật bài hát
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        // Cập nhật nút phát/tạm dừng
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // Cập nhật thông tin bài hát
        let selectedSong = songs.find((s) => s.id == index);
        if (selectedSong) {
            title.innerHTML = sanitizeFileName(selectedSong.songName);
            download_music.setAttribute('href', `audio/${index}.mp3`);
            download_music.setAttribute('download', `${sanitizeFileName(selectedSong.songName)}.mp3`);
        }

        // Cập nhật giao diện danh sách bài hát
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    })
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_current = music.currentTime;
    let music_durring = music.duration;
    
    let min1 = Math.floor(music_durring / 60);
    let sec1 = Math.floor(music_durring % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_current / 60);
    let sec2 = Math.floor(music_current % 60);
    
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_current / music_durring)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index --;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
})


next.addEventListener('click', () =>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
});










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});


// Xử lý chuyển đổi chế độ phát nhạc
let shuffle = document.getElementsByClassName('shuffle')[0];

let repeatActive = false; // Trạng thái chế độ repeat

// Điều khiển chế độ phát nhạc
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            repeatActive = true; // Bật chế độ repeat
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            repeatActive = false; // Bật chế độ repeat
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            repeatActive = false; // Bật chế độ repeat
            break;
    }
});


// Hàm phát nhạc
const playMusic = () => {
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
};

// Lặp lại bài hát hiện tại
const repeat_music = () => {
    playMusic(); // Phát lại bài hát hiện tại
};

// Chuyển sang bài tiếp theo
const next_music = () => {
    index = (index >= songs.length) ? 1 : index + 1; // Chuyển bài, quay lại từ đầu nếu hết danh sách
    playMusic();
};

// Phát bài ngẫu nhiên
const random_music = () => {
    let randomIndex = Math.floor(Math.random() * songs.length) + 1;
    while (randomIndex === index) { // Đảm bảo bài mới không trùng bài hiện tại
        randomIndex = Math.floor(Math.random() * songs.length) + 1;
    }
    index = randomIndex;
    playMusic();
};

// Xử lý khi bài hát kết thúc
music.addEventListener('ended', () => {
    let mode = shuffle.innerHTML;

    switch (mode) {
        case "next":
            next_music();
            break;

        case "repeat":
            repeat_music();
            break;

        case "random":
            random_music();
            break;
    }
});





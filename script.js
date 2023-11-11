


let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');

day_night2.style.display= "none";
day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1','rgb(184,184,184,.5)');
    document.documentElement.style.setProperty('--color-2','#000');
    document.documentElement.style.setProperty('--color-3','#fff');
    document.documentElement.style.setProperty('--color-4','rgb(0,0,0,.5)');
    document.documentElement.style.setProperty('--color-5','#663da6');
    day_night.style.display="none";
    day_night2.style.display="unset";  
});
day_night2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1','#262b3f');
    document.documentElement.style.setProperty('--color-2','#fff');
    document.documentElement.style.setProperty('--color-3','#1e2337');
    document.documentElement.style.setProperty('--color-4','rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5','greenyellow');
    day_night.style.display="unset";
    day_night2.style.display="none";  
});


// battery navigator

let active_battery= document.getElementById('active_battery');
let battery_icon= document.getElementById('battery_icon');
let battery_level= document.getElementById('battery_level');
let audio1 = new Audio('audio/Charging.mp3');
// audio.play();

navigator.getBattery().then(battery => {
    const battery_level_change = () => {
        battery_level.innerText = (battery.level * 100) + "%";
    }
    setInterval(battery_level_change, 1000);
        battery_level_change();
    battery_icon.value = battery.charging;
    // alert(battery_icon.value);

    battery.addEventListener('chargingchange', () => {
        switch(battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color="#fff";
            audio1.play();
            break;
            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color="unset";
            break;
        }
    });
});

let wifi = document.getElementById('wifi');
const wifi_change = () => {
    if(navigator.onLine) {
        wifi.style.color= "var(--color-5)";
    }else {
        wifi.style.color= "";
    }
}
setInterval(wifi_change, 100);
wifi_change();

// 2nd Page
let img_change = document.getElementById('img_change');
let imageSources = ['img/pubg.jpg', 'img/pubg1.jpg', 'img/pubg2.webp'];
let currentIndex = 0;
let fadingOut = false;

const changeImage = () => {
    if (fadingOut) return;

    fadingOut = true;
    img_change.style.opacity = 0;

    setTimeout(() => {
        img_change.src = imageSources[currentIndex];
        currentIndex = (currentIndex + 1) % imageSources.length;
        img_change.style.opacity = 1;
        fadingOut = false;
    }, 1000); // Delay 1 detik sebelum mengganti gambar
};

const change_img_data = () => {
    changeImage();
    setInterval(changeImage, 3000); // Ganti gambar setiap 3 detik
}

change_img_data();

let play = document.getElementById('play');
let video = document.getElementById('video');

play.addEventListener('click', () => {
    if (video.paused || video.currentTime <= 0) {
      video.play();
      video.style.display = 'block'; // Mengubah tampilan video menjadi 'block'
      play.innerHTML = '<i class="bi bi-pause-fill"></i> Pause';
    } else {
      video.pause();
      video.style.display = 'none';
      play.innerHTML = '<i class="bi bi-play-fill"></i> Play';
    }
  });

  video.addEventListener ('ended',() => {
    video.pause();
    video.style.display= '';
    img_change.style.display = '';
    play.innerHTML = '<i class="bi bi-play-fill"></i> Play';
  });


const Joindata = [
    {
        name: "Rahmat Batu Bata",
        game: "Grand Theft Auto V",
        img_change: "user_img/user1.jfif",
        price: "$800"
    },
    {
        name: "Ujang Icikiwir",
        game: "Call of Duty Mobile",
        img_change: "user_img/user2.png",
        price: "$900"
    },
    {
        name: "Abdul Uranium",
        game: "Battlefield 3",
        img_change: "user_img/user3.png",
        price: "$700"
    }

]

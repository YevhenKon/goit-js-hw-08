import Player from '@vimeo/player';
const throttle = require('lodash.throttle')

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function(evt) {
        // console.log(seconds);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(evt.seconds));
        
        
        
    }, 1000));


    const saveTime = localStorage.getItem("videoplayer-current-time")
const stopVideo = JSON.parse(saveTime) || 0
    
player.setCurrentTime(stopVideo)



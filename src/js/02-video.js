import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const STORAGE_KEY_CURRENT_TIME = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    const timeValue = data.seconds;
    localStorage.setItem(STORAGE_KEY_CURRENT_TIME, timeValue);
}

iframePlayer.setCurrentTime(localStorage.getItem(STORAGE_KEY_CURRENT_TIME)||0)


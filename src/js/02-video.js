import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const initialTime = localStorage.getItem('videoplayer-current-time');


function onTimeUpdate(data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
}

function initializePlayer() {
  if (initialTime) {
    player.setCurrentTime(initialTime);
  }

  player.on('timeupdate', throttle(onTimeUpdate, 1000));
}

initializePlayer();

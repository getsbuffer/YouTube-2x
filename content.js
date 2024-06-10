function setPlaybackRate() {
  var video = document.querySelector('video');
  if (video) {
    video.addEventListener('loadedmetadata', function() {
      video.playbackRate = 2;
    });
  } 
  else {
    setTimeout(setPlaybackRate(rate), 1000);
  }
}
setPlaybackRate();

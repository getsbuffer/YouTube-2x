    var video = document.querySelector('video');
    if (video) {
      if (video.playbackRate === 2) {
        video.playbackRate = 1;
      } else {
        video.playbackRate = 2;
      }
    };

console.log("Script has been loaded");
broswer.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command === 'toggleSpeed') {
    var video = document.querySelector('video');
    if (video) {
      if (video.playbackRate === 2) {
        video.playbackRate = 1;
      } else {
        video.playbackRate = 2;
      }
    }
  }
});

const playBtns = document.querySelectorAll('.play-btn');

playBtns.forEach(btn => {
  const video = btn.closest('.media').querySelector('video');

  btn.addEventListener('click', () => {
    if (video.paused) {
      // Play video
      video.play();
      btn.style.display = "none";
    } else {
      // Stop video
      video.pause();
      video.currentTime = 0;
      btn.style.display = "block";
    }
  });

  // When user clicks directly on the video
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      btn.style.display = "none";
    } else {
      video.pause();
      video.currentTime = 0;
      btn.style.display = "block";
    }
  });

  // Also show play button automatically when video pause
  video.addEventListener('ended', () => {
    btn.style.display = "block";
  });
});

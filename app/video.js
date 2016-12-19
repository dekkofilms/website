var imgArr = [],
    curr,
    start,
    stop,
    arrayReady = false;

$(document).ready(function () {

  var backgroundVideo = $('#current-frame')[0];
  var aboutBtn = $('#about');
  var homeBtn = $('#home');
  backgroundVideo.src = imgArr[0].src

  aboutBtn.click(function () {
    play('forward', 0, 144)
  })

  homeBtn.click(function () {
    play('backward', 144, 0)

    //$('<h1>Oh Hai</h1>').appendTo('body');
  })
})

$(window).on('load', () => {
  curr = 0;
  start = 0;
  stop = 144;
  prepareFrames()
})

function prepareFrames() {
  var img = document.createElement('img');
  img.src = '../assets/video/compressed/video-' + (curr + 1) + '.jpg';

  curr++
  if (curr > stop) {
    curr = 0
  } else {
    imgArr.push(img)
    prepareFrames();
  }
}

function play(direction, startFrame, endFrame) {
  var currentImage = startFrame

  if (direction === "forward") {
    var animate = setInterval(function () {
      currentImage++
      if (currentImage === (endFrame - 1)) {
        clearInterval(animate)
        //then set current frame somehow
      }
      $('#current-frame')[0].src = imgArr[currentImage].src
      // backgroundVideo.src = img[currentImage].src
    }, 1000/24)
  } else if (direction === "backward") {
    var animate = setInterval(function () {
      currentImage--
      if (currentImage === (endFrame)) {
        clearInterval(animate)
        //then set current frame somehow
      }
      $('#current-frame')[0].src = imgArr[currentImage].src
      // backgroundVideo.src = img[currentImage].src
    }, 1000/24)
  }
}

app.controller('homeController', ['$scope', '$interval', '$timeout','$animate', function ($scope, $interval, $timeout, $animate) {
  var curr,
      start,
      stop,
      currFrame,
      arrayReady = false;

  $scope.view = {};
  $scope.view.imgArr = [];

  //Animation booleans
  $scope.view.aboutPageVisible = false;
  $scope.view.workPageVisible = false;
  $scope.view.aboutBtn = true;
  $scope.view.workBtn = true;


    $scope.toggleAbout = function (direction, start, end) {
      return new Promise(function(resolve, reject){
        $scope.view.aboutPageVisible = true;
        $scope.view.workPageVisible = false;
        $scope.view.aboutBtn = false;
        $scope.view.workBtn = true;
        setTimeout(function(){
          let stupidPromise = [direction, start, end]
          resolve(stupidPromise);
        }, 600)
      }).then(function(data){
        play(data[0], data[1], data[2]);
      });
    }

    $scope.toggleWork = function (direction, start, end) {
      return new Promise(function(resolve, reject){
        $scope.view.aboutPageVisible = false;
        $scope.view.workPageVisible = true;
        $scope.view.aboutBtn = true;
        $scope.view.workBtn = false;
        setTimeout(function(){
          let stupidPromise = [direction, start, end]
          resolve(stupidPromise);
        }, 600)
      }).then(function(data){
        play(data[0], data[1], data[2]);
      });
    }


  curr = 0;
  start = 0;
  stop = 119;
  prepareCount();

  $scope.view.backgroundImg = $scope.view.imgArr[curr];


  //helper functions
  var animate;
  function play(direction, startFrame, endFrame) {
    console.log('hit function', direction, endFrame);
    var currentImage = startFrame;

    if (direction === "forward") {
      animate = $interval(function () {
        currentImage++;
        if (currentImage === (endFrame - 1)) {
          $scope.stopAnimate();
          //then set current frame somehow
        }
        $scope.view.backgroundImg = $scope.view.imgArr[currentImage];
      }, 1000/24)
    } else if (direction === "backward") {
      animate = $interval(function () {
        currentImage--;
        if (currentImage === (endFrame)) {
          $scope.stopAnimate();
          //then set current frame somehow
        }
        $scope.view.backgroundImg = $scope.view.imgArr[currentImage];
      }, 1000/24)
    }
  }





  $scope.stopAnimate = function () {
    if (angular.isDefined(animate)) {
      $interval.cancel(animate);
      animate = undefined;
    }
  }

  //preparing the image array
  function prepareCount() {
    var img = '../assets/video/test2/video-' + (curr + 1) + '.jpg';

    curr++;
    if (curr > stop) {
      curr = 0;
    } else {
      $scope.view.imgArr.push(img);
      prepareCount();
    }
  }

}])

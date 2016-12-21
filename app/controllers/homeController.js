app.controller('homeController', ['$scope', '$interval', function ($scope, $interval) {
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

  $scope.toggleAbout = function () {
    $scope.view.aboutPageVisible = true;
    $scope.view.workPageVisible = false;
    $scope.view.aboutBtn = false;
    $scope.view.workBtn = true;
  }

  $scope.toggleWork = function () {
    $scope.view.aboutPageVisible = false;
    $scope.view.workPageVisible = true;
    $scope.view.aboutBtn = true;
    $scope.view.workBtn = false;
  }

  curr = 0;
  start = 0;
  stop = 119;
  prepareCount();

  $scope.view.backgroundImg = $scope.view.imgArr[curr];


  //helper functions
  var animate;
  $scope.play = function (direction, startFrame, endFrame) {
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

  // var preparing = new Promise(function(resolve, reject) {
  //   function prepareCount() {
  //     var img = '../assets/video/compressed/video-' + (curr + 1) + '.jpg';
  //
  //     curr++;
  //     if (curr > stop) {
  //       curr = 0;
  //     } else {
  //       $scope.view.imgArr.push(img);
  //       prepareCount();
  //     }
  //   }
  //
  //   if ($scope.view.imgArr === 144) {
  //     resolve(true);
  //   } else {
  //     reject(Error("It broke"));
  //   }
  // });

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

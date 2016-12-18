app.controller('CarouselDemoCtrl',['$scope', '$animate', '$http', '$window', function ($scope, $animate, $http, $window) {
    $scope.animate = null;
    $scope.animateGlobal = true;
    $scope.isLoaded = false;

    $http.get("https://demo2697834.mockable.io/movies")
    .then(function (response) {
      $scope.movieList = response.data.entries;
      console.log($scope.movieList);
      $scope.isLoaded = true;
      setTimeout(function(){
        $("#owl-demo").owlCarousel({
          autoPlay: 3000,
            items : 4,
            lazyLoad : true,
            navigation : false
        });
      }, 10);

      // window.localStorage.clear();
      var myObj1 = JSON.parse(window.localStorage.getItem("userInfo"));
      if(!myObj1){
        // set user into browser
        var userName = 'userName' + Math.random() + 'dude';
        var timeStamp = Math.floor(Date.now() / 1000);
        var myObj = {
          user: userName,
          time: Date.now(),
          watchTime: Date.now()
        }
        console.log('myObj:----- ',myObj, window.localStorage);
        // set user detail to browser
        window.localStorage.setItem("userInfo", JSON.stringify(myObj));
        // set user to server
        $http.post("/user",
        {
        	"userName": userName,
        	"movies": [{
              "movieId": null,
              "watchTime": null,
              "date": null
            }]
        },
        {
        headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        })
        .success(function(responseData) {
            //do stuff with response
            console.log('responseData:-- ', responseData);
            if(responseData.code == 200){
              console.log('New user created');
              $scope.userName = userName;
            }
            else if(responseData.code == 100){
              console.log('User already exists');
            }
            else{
              console.log(responseData);
            }
        });

      }
      else{
        console.log('fetched item:- ', myObj1, '-- ',myObj1.user);
        $scope.userName = myObj1.user;
      }


    });

    // Render Video functionality
    $scope.renderVideo = function(id, url){
      console.log('userName:- ', $scope.userName);
      document.getElementById('videoPop').src = $scope.movieList[id].contents[0].url;
      console.log($scope.movieList[id]);
      // save user history
      $http.post("/user/history",
      {
        "userName": $scope.userName,
        "movies": [{
            "movieId": $scope.movieList[id].id,
            "title": $scope.movieList[id].title,
            "description": $scope.movieList[id].description,
            "url": $scope.movieList[id].contents[0].url,
            "images": $scope.movieList[id].images[0].url,
            "publishedDate": $scope.movieList[id].publishedDate,
            "watchTime": new Date(),
            "date": new Date()
          }]
      },
      {
      headers: { 'Content-Type': 'application/json; charset=UTF-8'}
      })
      .success(function(responseData) {
          console.log('responseData:-- ', responseData);

      });
    }


    // Animation
    $scope.$watch('animateGlobal', function(val){
        $animate.enabled(val);
    });

    $scope.$watch(function() { return $animate.enabled(); }, function(val){
        $scope.animate = false;
    });
    // Get Time function
    $scope.DisplayCurrentTime =  function() {
        var date = new Date();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        time = hours + ":" + minutes + ":" + seconds;
        return time;
    };

}]);

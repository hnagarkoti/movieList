// Code goes here

var myApp= {};

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ui.bootstrap.setNgAnimate', 'ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            controller: 'CarouselDemoCtrl',
            templateUrl: '/templates/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('history', {
            url: '/history/:userName',
            controller: 'HistoryCtrl',
            templateUrl: '/templates/history.html',
            resolve: {
              user: function ($stateParams,$http) {
                return $http.get('/history/'+ $stateParams.userName)
                    .then(function (response) {
                        var data = response.data;
                        return data;
                    })
              }
            }
            // we'll get to this in a bit
        });

});
// var app = angular.module('myApp', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.setNgAnimate', 'ngStorage']) ;



angular.module('ui.bootstrap.setNgAnimate', ['ngAnimate'])
.directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {

            $scope.$watch( function() {
                    return $scope.$eval($attrs.setNgAnimate, $scope);
                }, function(valnew, valold){
                    console.log('Directive animation Enabled: ' + valnew);
                    $animate.enabled(!!valnew, $element);
            });


        }
    };
}]);

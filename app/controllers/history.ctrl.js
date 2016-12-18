app.controller('HistoryCtrl',['$scope', '$animate', '$http', '$window', 'user', function ($scope, $animate, $http, $window, user) {
  console.log('HistoryCtrl called', user);
  $scope.user = user.data;

  $scope.lastWatched = function(d1){
      var startDate = new Date(d1);
      var endDate = new Date();
      var diffMs = (endDate - startDate); // milliseconds between now & Christmas
      var diffSec = (diffMs/1000).toFixed(0);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      var diffHrs = Math.round((diffMs % 86400000) / 3600000); // hours
      var diffDays = Math.round(diffMs / 86400000); // days
      if(diffDays > 0){
        return diffDays + ' days ago.';
      }
      else if(diffDays <= 0){
        if(diffHrs){
          return diffHrs + ' hours ago.';
        }
        else{
          if(diffMins){
            return diffMins + ' min ago.';
          }
          else{
            return diffSec + ' sec ago.';
          }
        }
      }
    }
}]);

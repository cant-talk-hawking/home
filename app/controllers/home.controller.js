/*eslint-disable*/
var app = angular.module('hawkingApp', []);
  app.controller('HomeController', function ($scope) {
      $scope.test="test";


        var random = Math.floor(Math.random() * 25);
        $scope.random = random.quote;


  });

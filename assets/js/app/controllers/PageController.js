"use strict";

angular.module('minmax')
.controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$scope', '$http'];
function MinMaxCtrl($scope, $http) {
  $scope.formModel = {};

  $scope.onSubmit = function (valid) {
    if (valid) {
      console.log("Hey, I'm submitted!");
      console.dir($scope.formModel);

      // $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
      $http.post('http://localhost:1337/test', $scope.formModel)
        .then(successCb, errorCb);
    }
    else {
      console.log('Invalid form!');
      $scope.emailValid = false;
    }

    function successCb(data) {
      console.log(':)');
      console.dir(data);
    }

    function errorCb(data) {
      console.log(':(');
      console.dir(data);
    }
  }
}
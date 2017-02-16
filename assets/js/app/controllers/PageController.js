"use strict";

angular.module('minmax')
.controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$scope', '$http'];
function MinMaxCtrl($scope, $http) {
  $scope.formModel = {};
  $scope.submitting = false;

  $scope.onSubmit = function () {
    $scope.submitting = true;
    console.log("Hey, I'm submitted!");
    console.dir($scope.formModel);

    // $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
    // $http.post('http://localhost:1337/test', $scope.formModel)
    //   .then(successCb, errorCb);

    setTimeout(function () {
      $http.post('http://localhost:1337/test', $scope.formModel)
        .then(successCb, errorCb);
    }, 3000);

    function successCb(data) {
      $scope.submitting = false;
      console.log(':)');
      console.dir(data);
    }

    function errorCb(data) {
      $scope.submitting = false;
      console.log(':(');
      console.dir(data);
    }
  }
}
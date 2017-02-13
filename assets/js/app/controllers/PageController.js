"use strict";

angular.module('minmax')
.controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$scope', '$http'];
function MinMaxCtrl($scope, $http) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    console.log("Hey, I'm submitted!");
    console.dir($scope.formModel);

    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
      .then(successCb, errorCb);
    function successCb(data) {
      console.log(':)');
    }

    function errorCb(data) {
      console.log(':(');
    }
  }
}
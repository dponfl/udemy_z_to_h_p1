"use strict";

angular.module('minmax')
.controller('MinMaxCtrl', MinMaxCtrl);

MinMaxCtrl.$inject = ['$scope'];
function MinMaxCtrl($scope) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    console.log("Hey, I'm submitted!");
    console.dir($scope.formModel);
  }
}
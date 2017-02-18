"use strict";

angular.module('app')
  .controller('ParentController', ParentController)
  .controller('ChildController', ChildController);

ParentController.$inject = ['$scope'];
function ParentController($scope) {
/*
  $scope.name = 'Parent';

  $scope.reset = function () {
    $scope.name = 'Parent';
  }
*/
}

ChildController.$inject = ['$scope', '$rootScope'];
function ChildController($scope, $rootScope) {
  $scope.reset = function () {
    $rootScope.name = 'Reseted by Child!!!';
  }
}
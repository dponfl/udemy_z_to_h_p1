"use strict";

angular.module('codecraft')
.controller('PersonsListController', PersonsListController)
.controller('PersonDetailsController', PersonDetailsController);

PersonDetailsController.$inject = ['$scope', 'ContactService'];
function PersonDetailsController($scope, ContactService) {
  $scope.contacts = ContactService;
}

PersonsListController.$inject = ['$scope', 'ContactService'];
function PersonsListController($scope, ContactService) {

  $scope.search = '';
  $scope.order = 'email';
  $scope.contacts = ContactService;

  $scope.sensitiveSearch = function (person) {
    if ($scope.search) {
      return person.name.indexOf($scope.search) == 0 ||
              person.email.indexOf($scope.search) == 0;
    }

    return true;
  };
}
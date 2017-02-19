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

  $scope.loadMore = function () {
    console.log('loadMore function is invoked...');
    $scope.contacts.loadMore();
  };

  $scope.$watch('search', function (newVal, oldVal) {
    if (angular.isDefined(newVal)) {
      $scope.contacts.doSearch(newVal);
    }
  });

  $scope.$watch('order', function (newVal, oldVal) {
    if (angular.isDefined(newVal)) {
      $scope.contacts.doOrder(newVal);
    }
  });
}
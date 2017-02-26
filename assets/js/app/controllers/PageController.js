"use strict";

angular.module('codecraft')
.controller('PersonsListController', PersonsListController)
.controller('PersonDetailsController', PersonDetailsController);

PersonDetailsController.$inject = ['$scope', 'ContactService'];
function PersonDetailsController($scope, ContactService) {
  $scope.contacts = ContactService;
  
  $scope.save = function () {
    // $scope.contacts.updateContact($scope.contacts.selectedPerson);
    $scope.contacts.updateDataToBD($scope.contacts.selectedPerson);
  }
} // end of PersonDetailsController

PersonsListController.$inject = ['$scope', 'ContactService'];
function PersonsListController($scope, ContactService) {

  $scope.search = '';
  $scope.order = 'email';
  $scope.contacts = ContactService;

  $scope.saveToLocalDist = function () {
    console.log('start saving persons to LocalDist...');

  };

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

  $scope.loadData = function () {
    console.log('loadData invoked...');
    console.log('persons length:', $scope.contacts.persons.length);
    console.dir($scope.contacts.persons);
    angular.forEach($scope.contacts.persons, function (data) {
      console.log('data:');
      console.dir(data);
      let dataToSave = {
        address: data.address,
        birthdate: data.birthdate,
        city: data.city,
        country: data.country,
        email: data.email,
        favorite: data.favorite,
        id_original: data.id,
        name: data.name,
        phonenumber: data.phonenumber,
        photo: data.photo,
        sex: data.sex,
        createdTs: data.createdTs,
        updatedTs: data.updatedTs,
      };
      $scope.contacts.loadDataToBD(dataToSave);
    });
  };
} // end of PersonsListController
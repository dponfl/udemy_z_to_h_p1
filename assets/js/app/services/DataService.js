"use strict";

angular.module('codecraft')
.factory('Data', Data);

Data.$inject = ['$resource'];
function Data($resource) {
  return $resource('/data/:id',
    {id: '@id'},
    {
      update: {method: 'PUT'},
      find: {
        method: 'GET',
        isArray: true,
        params: {
          id_original: '@id_original',
          sex: '@sex'
        }
      }
    }
  );
}
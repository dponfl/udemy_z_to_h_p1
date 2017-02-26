"use strict";

angular.module('codecraft')
.factory('Data', Data);

Data.$inject = ['$resource'];
function Data($resource) {
  return $resource('/data/:id', {id: '@id'});
}
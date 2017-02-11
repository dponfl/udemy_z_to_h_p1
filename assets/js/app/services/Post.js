"use strict";

(function () {

  angular.module('Project')
    .factory('Post', Post);

  Post.$inject = ['$resource'];
  function Post($resource) {
    return $resource('/post/:id', {id: '@id'});
  }
})();
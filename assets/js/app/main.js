"use strict";

(function () {

  angular.module('codecraft', [
    'ngResource'
  ]).config(CodecraftConfig);

  CodecraftConfig.$inject = ['$httpProvider', '$resourceProvider'];
  function CodecraftConfig($httpProvider, $resourceProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'Token 186cca3d861a9409aba5f7720623cad0b633828e';
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }

})();
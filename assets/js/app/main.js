"use strict";

(function () {

  angular.module('codecraft', [
    'ngResource',
    'infinite-scroll'
  ]).config(CodecraftConfig);

  CodecraftConfig.$inject = ['$httpProvider', '$resourceProvider'];
  function CodecraftConfig($httpProvider, $resourceProvider) {

    $httpProvider.defaults.headers.common['Authorization'] = appConfig.token;
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }

})();
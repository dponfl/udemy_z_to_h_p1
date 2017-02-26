"use strict";

(function () {

  angular.module('codecraft', [
    'ngResource',
    'infinite-scroll',
    'angularSpinner',
    'jcs-autoValidate',
    'angular-ladda'
  ]).config(CodecraftConfig);

  CodecraftConfig.$inject = ['$httpProvider', '$resourceProvider', 'laddaProvider'];
  function CodecraftConfig($httpProvider, $resourceProvider, laddaProvider) {

    $httpProvider.defaults.headers.common['Authorization'] = appConfig.token;
    $resourceProvider.defaults.stripTrailingSlashes = false;
    laddaProvider.setOption({
      style: 'expand-right'
    });
  }

})();
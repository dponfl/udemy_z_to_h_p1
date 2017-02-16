"use strict";

(function () {

  /*angular.module('Project1', [
    'ngRoute',
    'ngResource'
  ]).config(ProjectConfig);

  ProjectConfig.$inject = ['$routeProvider','$locationProvider'];
  function ProjectConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'templates/view/home.html',
    })
      .when('/test', {
        templateUrl: 'templates/view/test.html'
      })
      .when('/404', {
        templateUrl: 'templates/view/404.html'
      })
      .otherwise({
      redirectTo: '/404'
    });

    $locationProvider.hashPrefix('');
  }*/

  angular.module('minmax', [
    'jcs-autoValidate',
    'angular-ladda',
  ])
    .run(autoValidateDefaultErrorMessageResolver);

  autoValidateDefaultErrorMessageResolver.$inject = ['defaultErrorMessageResolver'];
  function autoValidateDefaultErrorMessageResolver(defaultErrorMessageResolver) {
    defaultErrorMessageResolver
      .getErrorMessages()
      .then(function (errorMessages) {
        errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
        errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
        errorMessages['badUsername'] = 'Username can only contain numbers, letters and _';
        errorMessages['tooShortUsername'] = 'Username must be at least {0} characters long';
        errorMessages['pwTooShort'] = 'Password must be at least {0} characters long';
      })
  }

})();
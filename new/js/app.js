'use strict';

angular.module('yaska', ['pascalprecht.translate'])
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/lang/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('fr');
  })
  .controller('LangController', function ($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  });
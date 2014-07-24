'use strict';

angular.module('yaskaTest', ['ui.router', 'angularFileUpload'])
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', function () {
      window.location.href = '/';
    });
    $stateProvider
      .state('backoffice', {
        url: '/backoffice',
        controller: 'BackofficeCtrl',
        //templateUrl: '/partials/index',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('backoffice.clients', {
        url: '/clients',
        controller: 'ClientsCtrl',
        templateUrl: '/partials/clients',
      })
      .state('backoffice.support', {
        url: '/support',
        controller: 'SupportCtrl',
        templateUrl: '/partials/support',
      })
      .state('backoffice.coding', {
        url: '/coding',
        controller: 'CodingCtrl',
        templateUrl: '/partials/coding',
      })
      /*.state('users.all', {
        url: '/all',
        controller: 'AllUsersCtrl',
        templateUrl: '/partials/js/users/views/all',
        resolve: {
          users: function (UsersFactory) {
            return UsersFactory.all();
          }
        }
      })*/;
    $urlRouterProvider.otherwise('/backoffice');
  })
  .factory('ListFactory', function ($http, $q) {
    return {
      all: function (model) {
        if (model) {
          var defer = $q.defer();
          $http.get('/lists?model='+model)
            .success(function(data, response){
              if (angular.isArray(data)) {
                defer.resolve(data);
              } else {
                defer.reject();
              }
            })
            .error(function(reason, response){
              defer.reject(reason);
            });
          return defer.promise;
        };
      }
    };
  })
  .controller('BackofficeCtrl', function ($scope) {
  })
  .controller('ClientsCtrl', function ($scope, $upload) {
    $scope.upload = function (e) {
      console.log('upload');
      console.log($scope.files);
      console.log(e);
      /*$http.post('/upload', $scope.image).success(function(status, response){
        console.log(status);
        console.log(response);
      }).error(function(status, response){
        console.log(status);
        console.log(response);
      });*/

      $upload.http({
        url: '/uploadd',
        //headers: {'Content-Type': file.type},
        data: $scope.files
      }).progress(function(ev) {
        //progress
      }).success(function(data) {
        console.log(data);
      }).error(function(data) {
        console.log(data);
        //error
      });
    };

    $scope.onFileSelect = function ($files) {
    //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: 'upload', //upload.php script, node.js route, or servlet url
          // method: 'POST' or 'PUT',
          // headers: {'header-key': 'header-value'},
          // withCredentials: true,
          data: {myObj: $scope.image},
          file: file, // or list of files: $files for html5 only
          /* set the file formData name ('Content-Desposition'). Default is 'file' */
          //fileFormDataName: myFile, //or a list of names for multiple files (html5).
          /* customize how data is added to formData. See #40#issuecomment-28612000 for sample code */
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
        }).success(function(data, status, headers, config) {
          // file is uploaded successfully
          console.log(data);
        });
        //.error(...)
        //.then(success, error, progress);
        //.xhr(function(xhr){xhr.upload.addEventListener(...)})// access and attach any event listener to XMLHttpRequest.
      }
      /* alternative way of uploading, send the file binary with the file's content-type.
         Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed.
         It could also be used to monitor the progress of a normal http post/put request with large data*/
      // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
    };

    $scope.setFiles = function (element) {
      $scope.$apply(function (scope) {
        console.log('files:', element.files);
        // Turn the FileList object into an Array
          scope.files = [];
          for (var i = 0; i < element.files.length; i++) {
            scope.files.push(element.files[i]);
          }
        //scope.progressVisible = false
      });
      console.log($scope.files);
    };

    $scope.uploadFile = function () {
      var fd = new FormData()
      for (var i in $scope.files) {
        fd.append("uploadedFile", $scope.files[i])
      }
      var xhr = new XMLHttpRequest();
      //xhr.upload.addEventListener("progress", uploadProgress, false)
      /*xhr.addEventListener("load", uploadComplete, false)
      xhr.addEventListener("error", uploadFailed, false)
      xhr.addEventListener("abort", uploadCanceled, false)*/
      xhr.open("POST", "/upload")
      //scope.progressVisible = true
      xhr.send(fd)
    };
  })
  .controller('SupportCtrl', function ($scope, ListFactory) {
    //console.log(ListFactory.all('support'));
    ListFactory.all('support').then(
      function (data) {
        console.log(data);
        $scope.supportitems = data;
      },
      function () {
        console.log('error');
      }
    );
  })
  .controller('CodingCtrl', function ($scope) {
  })
  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      //console.log('$stateChangeStart');
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      //console.log('$stateChangeSuccess');
    });
    /*$scope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
      console.log('$stateNotFound');
      //console.log(unfoundState.to); // "lazy.state"
      //console.log(unfoundState.toParams); // {a:1, b:2}
      //console.log(unfoundState.options); // {inherit:false} + default options
    });*/
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      //console.log('$stateChangeError');
      //console.log(event);
      //console.log(toState);
      //console.log(fromState);
      //console.log(fromParams);
      //console.log(error);
    });
  });
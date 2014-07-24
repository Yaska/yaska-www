'use strict';

angular.module('yaskaBackend', [])
  .directive('editMe', function ($compile, $http) {
    return {
      scope: {}, // {} = isolate, true = child, false/undefined = no change
      restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      link: function (scope, iElm, iAttrs, controller) {
        scope.translationValue = '...loading...';
        var prevAlign = iElm.css('text-align');
        var inputElement = angular.element('<input type="text" ng-model="translationValue" class="input-edit" />'); //data-ng-keypress="submitTranslation()"
        inputElement.css('text-align', prevAlign);

        var el = angular.element('<span class="edit-me">&#9997;</span>');
        //el.append('proheid');
        el.bind('click', function (e) {
          e.preventDefault();

          iElm.empty();

          $http.get('/translate'+'?model='+iAttrs.editMe)
            .success(function(data, status, headers, config) {
              console.log(data);
              scope.translationValue = data.text;
            })
            .error(function(data, status, headers, config) {
              scope.translationValue = data
            });

          var compiled = $compile(inputElement)(scope);
          scope.$apply();
          iElm.append(compiled);
          //iElm.append('<input type="text" /><button type="submit">submit</button>');
        });

        $compile(el)(scope);
        iElm.append(el);

        iElm.bind('keypress', function (event) {
          var translationVal = scope.translationValue;
          if (event.which === 13) {
            var valu = { translation: scope.translationValue };
            console.log('VALU: ', valu);

            $http.post('/translate?model=' + iAttrs.editMe, valu)
              .success(function (data, status, headers, config) {
                console.log(data);
                iElm.empty();
                iElm.append(data.text);
                //$compile(el)(scope);
                iElm.append(el);
              })
              .error(function (data, status, headers, config) {
              });
          }
        });
        inputElement.bind('keypress', function (event) {
          var translationVal = scope.translationValue;

          if (event.which === 27) {
            console.log('cancel');
            iElm.empty();
            iElm.append(translationVal);
            //$compile(el)(scope);
            iElm.append(el);
          }
        });
      }
    };
  });
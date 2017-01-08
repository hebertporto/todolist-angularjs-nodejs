(function () {
  'use strict';
  angular
    .module('task')
    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
          function ($urlRouterProvider, $stateProvider, $httpProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/dashboard/dash.html',
                controller: 'dashboardCtrl',
                controllerAs: 'vm'
            });

            $urlRouterProvider.otherwise('/');
    }]);
})();

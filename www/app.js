(function () {
    'use strict';
    angular.module('task.controllers', []);
    angular.module('task.services', []);
    angular.module('task.components', []);
    angular.module('task.interceptors', []);

    angular.module('task', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'task.controllers',
            'task.services',
            'task.components',
            'task.interceptors',
            'toaster'
        ])
        .run(function ($rootScope, $location, $state) {
            $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, next) {

            });
        });


})();

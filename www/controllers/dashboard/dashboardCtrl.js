(function () {
  'use strict';
  angular
      .module('task.controllers')
      .controller('dashboardCtrl', dashboardCtrl);

      dashboardCtrl.$inject = [];

      function dashboardCtrl () {
        var vm = this;

        vm.title= "Dash App2";
      }
})();

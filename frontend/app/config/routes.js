/**
 * @author Douglas Claumann
 * created on 28.07.2017
 */

(function() {
    'use strict';
angular.module('projeto').config([
  '$stateProvider',
  '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider ){
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "pages/dashboard/dashboard.html"
    }).state('contato', {
      url: "/contato",
      templateUrl: "pages/contato/contato.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
  }
])
})();

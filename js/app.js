'use strict';

// Declare app level module which depends on filters, and services
angular.module('acmeMsgApp', [
  'ngRoute',
  'http-auth-interceptor',
  'acmeMsgApp.filters',
  'acmeMsgApp.services',
  'acmeMsgApp.directives',
  'acmeMsgAppControllers'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: 'views/logon.html', controller: 'LogonCtrl'});
  $routeProvider.when('/dashboard', {templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl'});
  $routeProvider.when('/message/:messageID', {templateUrl: 'views/message.html', controller: 'SingleMsgCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);

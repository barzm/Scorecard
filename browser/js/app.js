window.app = angular.module('SecurityScorecard', ['ui.router', 'ui.bootstrap']);
app.config(function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});

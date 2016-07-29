/*eslint-disable*/

angular
  .module('hawkingApp', ['ui.router'])
  .config(config)

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/home',
    controller: 'HomeController',
    templateUrl: 'app/views/home.html'
  })
  .state('donut', {
    url: '/donut',
    controller: 'HomeController',
    templateUrl: 'app/views/donut.html'
  });
}

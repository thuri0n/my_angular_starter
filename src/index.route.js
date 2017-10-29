function routeConfig($urlRouterProvider, $locationProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
}

export default angular.module('index.routes', []).config(routeConfig);


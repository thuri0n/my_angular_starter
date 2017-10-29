import homeHtml from './home.html';
import homeController from './home.controller';

export default function routeConfig ($stateProvider) {
    'ngInject';

    $stateProvider.state('home', {
        url: '/',
        template: homeHtml,
        controller: homeController,
        controllerAs: 'homeCtrl'
    })
}

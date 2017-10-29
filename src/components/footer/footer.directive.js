import footerController from './footer.controller';
import footerHtml from './footer.html';

export default function headerDirective() {
    'ngInject';

    return {
        restrict: 'AE',
        scope: {},
        controller: footerController.name,
        controllerAs: 'footerCtrl',
        bindToController: true,
        template: footerHtml,
        replace: true
    };
}

import headerController from './header.controller';
import headerHtml from './header.html';

export default function headerDirective() {
    'ngInject';

    return {
        restrict: 'AE',
        scope: {},
        controller: headerController.name,
        controllerAs: 'headerCtrl',
        bindToController: true,
        template: headerHtml,
        replace: true
    };
}

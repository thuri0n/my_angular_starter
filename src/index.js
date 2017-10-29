import './index.scss';

import './index.vendor';

import './index.module';

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});

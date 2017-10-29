import footerController from './footer.controller';
import footerDirective from './footer.directive';

const BlockFooter = angular.module('footer.components', []).controller(footerController.name, footerController).directive('footerComponent', footerDirective);

export default BlockFooter;

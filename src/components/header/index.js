import headerController from './header.controller';
import headerDirective from './header.directive';

const BlockHeader = angular.module('header.components', []).controller(headerController.name, headerController).directive('headerComponent', headerDirective);

export default BlockHeader;

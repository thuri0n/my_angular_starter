import header from './components/header';
import footer from './components/footer';

const indexComponents =  angular.module('index.components', [
    header.name,
    footer.name
]);

export default indexComponents;

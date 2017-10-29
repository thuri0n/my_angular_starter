import ngRoute from '@uirouter/angularjs';

import config from './index.config';
// import run from './index.run';

import indexRoute from './index.route';
import indexComponents from './index.components';

//  pages
import home from './pages/home';


const App = angular.module('app', [
    ngRoute,

    indexRoute.name,

    indexComponents.name,

    home.name
]);

App.config(config);

export default App;

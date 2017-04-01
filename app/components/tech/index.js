import angular from 'angular';
import uiRouter from 'angular-ui-router';
import TechComponent from './tech.component';
import TechCardComponent from './tech-card.component';
import TechListComponent from './tech-list.component';

import EditorComponent from './editor/editor.component';

const TechModule = angular.module('tech', [
    uiRouter
])
    .component('tech', TechComponent)
    .component('techList', TechListComponent)
    .component('techCard', TechCardComponent)
    .component('editor', EditorComponent)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('tech', {
            url: '/tech',
            component: 'tech'
        })
    }])
    .name;
export default TechModule;
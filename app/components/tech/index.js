import angular from 'angular';
import TechComponent from './tech.component';
import TechCardComponent from './tech-card.component';
import TechListComponent from './tech-list.component';

const TechModule = angular.module('tech', [])
    .component('tech', TechComponent)
    .component('techList', TechListComponent)
    .component('techCard', TechCardComponent)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('tech', {
            url: '/tech',
            component: 'tech'
        })
    }])
    .name;
export default TechModule;
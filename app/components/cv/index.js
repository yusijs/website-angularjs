import angular from 'angular';
import component from './cv.component';
import uiRouter from 'angular-ui-router';

const CvModule = angular.module('cv', [
    uiRouter
])
    .component('cv', component)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('cv', {
                url: '/cv',
                component: 'cv'
            })
    }])
    .name;

export default CvModule;
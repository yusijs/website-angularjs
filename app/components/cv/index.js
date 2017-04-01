import angular from 'angular';
import component from './cv.component';

const CvModule = angular.module('cv', [])
    .component('cv', component)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('cv', {
                url: '/cv',
                component: 'cv'
            })
    }])
    .name;

export default CvModule;
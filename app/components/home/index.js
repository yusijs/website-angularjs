import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import HomeComponent from './home.component';

export default angular.module('home', [
    uiRouter,
    ngMaterial
])
    .component('home', HomeComponent)
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
    }])
    .name
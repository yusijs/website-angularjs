import angular from 'angular';
import FooterComponent from './footer.component';
import { FooterService } from './footer.service';

export default angular.module('footer', [])
    .component('footer', FooterComponent)
    .service('FooterService', FooterService)
    .name;
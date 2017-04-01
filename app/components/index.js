import angular from 'angular';
import Home from './home'
import Cv from './cv';
import Tech from './tech';

const components = angular
  .module('app.components', [
    Home,
    Cv,
    Tech
  ])
  .name;

export default components;
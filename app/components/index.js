import angular from 'angular';
import Calendar from './calendar';
import Todo from './todo';
import Home from './home'
import Cv from './cv';
import Tech from './tech';

const components = angular
  .module('app.components', [
    Calendar,
    Todo,
    Home,
    Cv,
    Tech
  ])
  .name;

export default components;
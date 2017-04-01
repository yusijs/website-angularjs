import HeaderComponent from './header.component';

const header = angular
  .module('header', [])
  .component('header', HeaderComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default header;
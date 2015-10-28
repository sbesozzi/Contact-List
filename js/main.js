import $ from 'jquery';


import Router from './router';
import './ajax_setup';

let appElement = $('.app');

// Create router & pass in appElement
let router = new Router(appElement);
// console.log('appElement');
router.start();

console.log('Hello, World');

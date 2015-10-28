import $ from 'jquery';
// Grab keys from API & apply to headers for collection
const APP_ID = 'l5pLXfY0GaysRXctKi4cO8gtUzNelBrIi3zBwl14';
const API_KEY = 's4acSqhaJ8uP7X51xobwA9R2FNLnwZRCvlARph53';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }

});
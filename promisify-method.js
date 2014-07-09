
var Promise = require('bluebird');

function sayMyName(name) {
  console.log('Start sayMyName');
  setTimeout(function() {
    console.log('Hello ' + name);
  }, 1000);
  console.log('End sayMyName');
}

sayMyName('Bowser');
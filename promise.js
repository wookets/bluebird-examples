
var Promise = require('bluebird');

function asyncGreetingFn(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      resolve('Hello ' + name);
    }, 1000);
  });
}

asyncGreetingFn('Mr Meow Pants').then(function(value) {
  console.log(value);
});

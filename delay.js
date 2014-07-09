
var Promise = require('bluebird');

Promise.delay(500).then(function() {
  console.log("500 ms passed");
  return "Hello world";
}).delay(500).then(function(helloWorldString) {
  console.log(helloWorldString);
  console.log("another 500 ms passed") ;
});
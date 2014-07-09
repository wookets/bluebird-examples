
var fs = require('fs');
var Promise = require('bluebird');

Promise.promisifyAll(fs);

// an error read
fs.readFileAsync("file.json").then(JSON.parse).then(function(val) {
  console.log(val.success);
})
.catch(SyntaxError, function(e) {
  console.error("invalid json in file");
})
.catch(function(e){
  console.error("unable to read file")
});


// a successful read
fs.readFileAsync("package.json").then(JSON.parse).then(function(val) {
  console.log(val);
})
.catch(SyntaxError, function(e) {
  console.error("invalid json in file");
})
.catch(function(e){
  console.error("unable to read file")
});
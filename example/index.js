const obj = require('./testObj.js');
let task;

console.clear();

task = () => {
  console.log(obj);
};
describe('This is the plain console.log')(task);

task = () => {
  require('../index.js');
  console.log(obj);
};
describe('This is after loading prettify-console')(task);

task = () => {
  console.log.depth = 2;
  console.log(obj);
};
describe('Same thing but depth contrained to 2nd layer')(task);




// some helper functions
function describe(header) {
  line();
  br();
  console.log(header);
  br();
  return (callback) => {
    callback();
    br();
    line();
  }
}

function line() {
  console.log('–––––––––––––––––––––––––––––––––––––––––––');
}

function br() {
  console.log("\n");
}
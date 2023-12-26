const Tail = require('tail-file');
const mytail = new Tail("log", line => {
  console.log( line );
});
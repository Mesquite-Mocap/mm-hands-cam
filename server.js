var taillog = require('tail-log');
var log = taillog('log');
log.on('line', function(line) {
    console.log(line);
});

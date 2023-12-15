// read bno085 on i2c bus in raspberry pi

var i2c = require('i2c-bus');
var bno085 = require('./bno085.js');

var i2c1 = i2c.openSync(1);

var bno = bno085(i2c1, 0x4a);
bno.init();
bno.start();

setInterval(function() {
    var data = bno.getQuaternion();
    console.log(data);
}
, 100);

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    bno.stop();
    process.exit();
}   );


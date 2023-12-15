// bno085.js

var i2c = require('i2c-bus');

var BNO085 = function(i2cBus, i2cAddress) {
    this.i2cBus = i2cBus;
    this.i2cAddress = i2cAddress;
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
}

BNO085.prototype.init = function() {
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3a, 0x00);
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3d, 0x00);
}

BNO085.prototype.start = function() {
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3e, 0x00);
}

BNO085.prototype.stop = function() {
    this.i2cBus.writeByteSync(this.i2cAddress, 0x3e, 0x01);
}

BNO085.prototype.getQuaternion = function() {
    var data = this.i2cBus.readI2cBlockSync(this.i2cAddress, 0x01, 16, new Buffer(16));
    var q = {
        w: data.readInt16LE(0),
        x: data.readInt16LE(2),
        y: data.readInt16LE(4),
        z: data.readInt16LE(6)
    };
    return q;
}

module.exports = BNO085;
import board
import busio
from adafruit_bno08x.i2c import BNO08X_I2C
from adafruit_bno08x import BNO_REPORT_ACCELEROMETER
from adafruit_bno08x import BNO_REPORT_GYROSCOPE
from adafruit_bno08x import BNO_REPORT_MAGNETOMETER
from adafruit_bno08x import BNO_REPORT_ROTATION_VECTOR

import json
import websocket

# get args
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--hand", help="host to connect to")
args = parser.parse_args()

hand = args.hand or "RightArm"


ws = websocket.WebSocket()
ws.connect("ws://mmdongle.local/hub")

i2c = busio.I2C(board.SCL, board.SDA)
bno = BNO08X_I2C(i2c)
bno.enable_feature(BNO_REPORT_ACCELEROMETER)
bno.enable_feature(BNO_REPORT_GYROSCOPE)
bno.enable_feature(BNO_REPORT_MAGNETOMETER)
bno.enable_feature(BNO_REPORT_ROTATION_VECTOR)

while True:
    quat_i, quat_j, quat_k, quat_real = bno.quaternion  # pylint:disable=no-member
    print("%0.2f  %0.2f %0.2f %0.2f" % (quat_i, quat_j, quat_k, quat_real))

    # send over websocket
    ws.send(json.dumps({"bone": hand, "w": quat_i, "x": quat_j, "y": quat_k, "z": quat_real}))

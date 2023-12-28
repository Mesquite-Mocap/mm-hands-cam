import board
import busio
from adafruit_bno08x.i2c import BNO08X_I2C
from adafruit_bno08x import BNO_REPORT_ROTATION_VECTOR
import json

import time
import argparse

import websocket

ws = websocket.WebSocket()

ws.connect("ws://192.168.1.50:80/hub")

# ws.send("Hello, Server")

parser = argparse.ArgumentParser()
parser.add_argument("--hand", help="host to connect to")
args = parser.parse_args()
hand = args.hand or "RightForeArm"

i2c = busio.I2C(board.SCL, board.SDA)
bno = BNO08X_I2C(i2c)
bno.enable_feature(BNO_REPORT_ROTATION_VECTOR)



while True:
    quat_i, quat_j, quat_k, quat_real = bno.quaternion  # pylint:disable=no-member
    ws.send(json.dumps({"bone": hand, "w": quat_i, "x": quat_j, "y": quat_k, "z": quat_real})) 
    # sleep for a 10 ms
    # time.sleep(0.03)
import board
import busio
from adafruit_bno08x.i2c import BNO08X_I2C
from adafruit_bno08x import BNO_REPORT_ROTATION_VECTOR
import json

import time
import argparse


#from apscheduler.schedulers.background import BackgroundScheduler
#sched = BackgroundScheduler()

def sendMessage():
    ws.send(json.dumps({"bone": hand, "x": quat_i, "y": quat_j, "z": quat_k, "w": quat_real}))


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
#sched.add_job(sendMessage, 'interval', seconds=1/100)
#sched.start()

quat_i = 0
quat_j = 0
quat_k = 0
quat_real = 0

while True:
    quat_i, quat_j, quat_k, quat_real = bno.quaternion  # pylint:disable=no-member
    sendMessage()
    time.sleep(0.025)




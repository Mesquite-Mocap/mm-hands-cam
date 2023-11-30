# mm-hands-cam



### STEP 0: Hardware

Get a 
- [Raspberry Pi Zero](https://www.raspberrypi.com/products/raspberry-pi-zero/) (henceforth shortened as Pi Zero, Pi or rpi), and 
- a SD card (2gb should work, atleast 8gb recommended). Use these recommended options (will allow you to ssh intpo Pi to configure it):


### STEP 1: Installing Node.js and other necessary software on Pi Zero W

a. Flash a **terminal only** image of raspberry pi using [Pi OS Imager](https://www.raspberrypi.com/software/):

<img src="rpiopts.jpg" width=400 style="display:block;margin:auto">


b. SSH into pi from a bash shell
```
ssh mesquite@mm.local 
```

c. Then install node.js and other dependencies for your system: 

```
sudo apt-get update
sudo apt-get install nodejs npm git software-properties-common
```

### STEP 2: Install More Dependencies

a. Run  
```sh
sudo apt-get install --reinstall ca-certificates
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install python2.7
sudo ln -s /usr/bin/python2.7 /usr/bin/python

sudo npm install n
sudo n install 6
hash -r

```
in the rpi shell.
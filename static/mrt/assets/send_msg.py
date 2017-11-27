import OSC
client = OSC.OSCClient()
client.connect(('127.0.0.1', 5000)) # NOTE - must be UDP!

def send_message (addr):
    msg = OSC.OSCMessage()
    msg.setAddress('/Marker/'+addr)
    client.send(msg)

# send OSC message "/Marker/breathe_start" over UDP port 5000
send_message("breathe_start") 
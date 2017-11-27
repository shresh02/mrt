from django.http import HttpResponse
from django.shortcuts import render,render_to_response,get_object_or_404
from django.template import RequestContext
from .models import *

import OSC
client = OSC.OSCClient()
client.connect(('127.0.0.1', 5000)) # NOTE - must be UDP!

def send_message (request, prompt=""):

    msg = OSC.OSCMessage()
    #msg.setAddress('/Marker/'+addr)
    msg.setAddress('/Marker/'+prompt)

    client.send(msg)
    return HttpResponse(prompt)

# # send OSC message "/Marker/breathe_start" over UDP port 5000
# send_message("breathe_start") 



def index(request):
	# return render(request, 'index.html', {})
    return render_to_response('index.html', {'eventobject': Event.objects.all()})


def index2(request):
	# return render(request, 'index.html', {})
    return render_to_response('index2.html', {'eventobject': Event.objects.all()})

def save_readings(request):
    data = request.POST.get("jsonField", "")
    model = YourModel(json_field=data)
    model.save()


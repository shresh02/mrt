from django.http import HttpResponse
from django.shortcuts import render,render_to_response,get_object_or_404
from django.template import RequestContext
from .models import *

def index(request):
    return HttpResponse("Hello, world. You're at the experiments index.")

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
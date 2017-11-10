from django.db import models
from django.utils import timezone

# Create your models here.

class Event(models.Model):
    text = models.CharField(max_length=200)
    def __str__(self):              
        return self.text


class User(models.Model):
    firstname = models.CharField(max_length=200)
    secondname = models.CharField(max_length=200)
    def __str__(self): 
        return str(self.firstname + " "+ self.secondname) 

class Reading(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    time = models.DateTimeField(default=timezone.now)
    def __str__(self): 
        return str(self.user+" "+self.event+" "+self.time)

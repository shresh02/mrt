from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^2$', views.index2, name='index2'),
    url(r'^sendmsg/(?P<prompt>.+)/$', views.send_message),
    url(r'^dashboard/$',views.dashboard)


]
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='surveys_index'),
    url(r'^/new$', views.new, name='surveys_new'),
    url(r'^/create$', views.create, name='surveys_create'),
]

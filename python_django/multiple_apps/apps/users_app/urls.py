from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^/register$', views.register, name='users_register'),
    url(r'^/login$', views.login, name='users_login'),
    url(r'^/create$', views.create, name='users_create'),
]

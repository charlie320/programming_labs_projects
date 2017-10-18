from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^index$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^dashboard$', views.dashboard),
    url(r'^logout$', views.logout),
    url(r'^addWish/(?P<id>\d+)$', views.addWish),
    url(r'^removeWish/(?P<id>\d+)$', views.removeWish, name = 'removeWish'),
    url(r'^createWishItem$', views.createWishItem),
    url(r'^addItem$', views.addItem),
    url(r'^$', views.index),
]

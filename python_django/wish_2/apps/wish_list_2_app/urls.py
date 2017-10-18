from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^index$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
    url(r'^dashboard$', views.dashboard),
    url(r'^deleteWish/(?P<id>\d+)$', views.deleteWish),
    url(r'^removeWish/(?P<id>\d+)$', views.removeWish),
    url(r'^addToWishList/(?P<id>\d+)$', views.addToWishList),
    url(r'^createItem$', views.createItem),
    url(r'^createItemPage$', views.createItemPage),
    url(r'^wish_items/(?P<id>\d+)$', views.wish_items),
    url(r'^$', views.index),
]

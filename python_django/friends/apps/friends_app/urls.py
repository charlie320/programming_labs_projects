from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^index$', views.index),

    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^success$', views.success, name = 'success'),
    url(r'^logout$', views.logout, name = 'logout'),
    url(r'^add-friend/(?P<id>\d+)$', views.addFriend, name = 'add-friend'),
    url(r'^remove-friend/(?P<id>\d+)$', views.removeFriend, name = 'remove-friend'),
    url(r'^user/(?P<id>\d+)$', views.user, name = 'user'),

    url(r'^$', views.index),
]

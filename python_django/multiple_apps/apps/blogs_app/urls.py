from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^blogs/new$', views.new, name='blogs_new'),
    url(r'^blogs/create$', views.create, name='blogs_create'),
    url(r'^blogs/(?P<blog_number>\d)$', views.show, name='blogs_show'),
    url(r'^blogs/(?P<blog_number>\d)/edit$', views.edit, name='blogs_edit'),
    url(r'^blogs/(?P<blog_number>\d)/delete$', views.delete, name='blogs_delete'),
]

from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = "Hello, I am from the blogs app!"
    return HttpResponse(response)

def new(request):
    response = "This is the new page!"
    return HttpResponse(response)

def create(request):
    print "In the create method!"
    return redirect(index)

def show(request, blog_number):
    response = "Show page.  Placeholder to display blog number {}".format(blog_number)
    return HttpResponse(response)

def edit(request, blog_number):
    response = "Edit page.  Placeholder to display blog number {}".format(blog_number)
    return HttpResponse(response)

def delete(request, blog_number):
    response = "Delete method.  Placeholder to display blog number {}".format(blog_number)
    return HttpResponse(response)

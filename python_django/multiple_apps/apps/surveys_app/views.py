from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = "Hello, I am from the surveys app!"
    return HttpResponse(response)

def new(request):
    response = "This is the new page!"
    return HttpResponse(response)

def create(request):
    print "In the create method!"
    return redirect(index)

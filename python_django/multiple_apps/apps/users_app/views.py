from django.shortcuts import render, HttpResponse, redirect

def index(request):
    response = "Hello, I am from the users app!"
    return HttpResponse(response)

def register(request):
    response = "This is the register page!"
    return HttpResponse(response)

def login(request):
    response = "This is the login page!"
    return HttpResponse(response)

def create(request):
    response = "This is the create page!"
    return HttpResponse(response)

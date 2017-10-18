from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request, 'hello_world/index.html')

def register(request):
    if request.method == "POST":
        print "*"*50
        print request.POST
        print request.method
        print "*"*50
        request.session['name'] = request.POST['first_name']
        return redirect("/")
    else:
        return redirect("/")

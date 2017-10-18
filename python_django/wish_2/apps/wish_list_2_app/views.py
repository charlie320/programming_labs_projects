from django.shortcuts import render, redirect, reverse
from django.contrib import messages
import bcrypt
from .models import User, Item

# Create your views here.
def index(request):
    return render(request, 'wish_list_2_app/index.html')

def flashErrors(request, errors):
    for error in errors:
        messages.error(request, error)

def register(request):
    print "Inside the register method"
    if request.method == "POST":
        errors = User.objects.validateRegistration(request.POST)

        if not errors:
            user = User.objects.createUser(request.POST)
            request.session['user_id'] = user.id
            return redirect('/dashboard')

        flashErrors(request, errors)

    return redirect('/index')

def login(request):
    print "Inside the login function"
    if request.method == "POST":
        errors = User.objects.validateLogin(request.POST)

        if not errors:
            user = User.objects.filter(email = request.POST['email']).first()

            if user:
                password = str(request.POST['password'])
                user_password = str(user.password)
                hashed_pw = bcrypt.hashpw(password, user_password)

                if hashed_pw == user.password:
                    request.session['user_id'] = user.id
                    return redirect('/dashboard')
            errors.append("Invalid account information.")

        flashErrors(request, errors)

def logout(request):
    print "Inside the logout function"
    if 'user_id' in request.session:
        request.session.pop('user_id')
    return redirect('/')
    #return render(request, 'wish_list_2_app/index.html')

def dashboard(request):
    print "Inside the dashboard function"
    if 'user_id' in request.session:
        current_user = User.objects.currentUser(request)
        my_wishes = current_user.wished_items.all()
        not_wished_for_yet = Item.objects.exclude(id__in=my_wishes)

        context = {
            'current_user' : current_user,
            'my_wishes' : my_wishes,
            'not_wished_for_yet' : not_wished_for_yet,
        }
        return render(request, 'wish_list_2_app/dashboard.html',context)
    return redirect('/')

def deleteWish(request, id):
    Item.objects.get(id = id).delete() #Item gets deleted
    return redirect ('/dashboard')

def removeWish(request, id):
    thisItem = Item.objects.get(id=id)
    user = User.objects.currentUser(request)
    user.wished_items.remove(thisItem)
    return redirect ('/dashboard')

def addToWishList(request, id):
    thisItem = Item.objects.get(id=id)
    user = User.objects.currentUser(request)
    user.wished_items.add(thisItem)
    return redirect ('/dashboard')

def createItem(request):
    if request.method == "POST":
        errors = Item.objects.validateNewItem(request.POST)
        if not errors:
            Item.objects.createItem(request.POST, request)
            return redirect('/dashboard')
        flashErrors(request, errors)
    return redirect('/createItemPage')

def createItemPage(request):
    if 'user_id' in request.session:
        return render(request, 'wish_list_2_app/createItem.html')
    return redirect ('/')

def wish_items(request, id):
    wished_item = Item.objects.get(id = id)
    wishers = wished_item.wished_by.all()
    context = {
        'wished_item' : wished_item,
        'wishers' : wishers,
    }
    return render(request, 'wish_list_2_app/wish_items.html', context)

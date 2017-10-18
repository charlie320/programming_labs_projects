from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import User
from .models import Item

# Create your views here.

def flashErrors(request, errors):
    for error in errors:
        messages.error(request, error)

def index(request):
    return render(request, 'wish_list_app/index.html')

def register(request):
    print "Inside the register function"
    if request.method == "POST":
        errors = User.objects.validateRegistration(request.POST)

        if not errors:
            user = User.objects.createUser(request.POST)
            request.session['user_id'] = user.id
            return redirect('/dashboard')

        flashErrors(request, errors)

    return redirect('/')

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

    return redirect('/')

def logout(request):
    print "Inside the logout function"
    if 'user_id' in request.session:
        request.session.pop('user_id')
    return redirect('/')

def dashboard(request):
    print "Inside the dashboard function"
    if 'user_id' in request.session:
        current_user = User.objects.currentUser(request)
        print "current_user: "
        print current_user
        wish_items = current_user.wish_item.all()
        print "wish_items: "
        print wish_items
        # users = User.objects.exclude(id__in=wish_items).exclude(id=current_user.id)
        users = User.objects.exclude(id__in=wish_items).exclude(id=current_user.id)
        print "Users: "
        print users
        context = {
            'users' : users,
            'wish_items' : wish_items,
        }
        print context
        return render(request, 'wish_list_app/dashboard.html', context)
    return redirect('/')

def addWish(request, id):
    print "Inside the addWish function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            wish_item = Item.objects.get(id=id)
            current_user.wish_item.add(wish_item)
            return redirect('/dashboard')
    return redirect('/')

def removeWish(request, id):
    print "Inside the removeWish function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            wish_item = User.objects.get(id=id)
            current_user.wish_item.remove(wish_item)
            return redirect('/dashboard')

    return redirect('/')

def addItem(request):
    return render(request, 'wish_list_app/create.html')

def createWishItem(request):
    current_user = User.objects.currentUser(request)
    wish_item = Item.objects.createItem(request.POST, current_user)
    current_user.wish_item.add(wish_item)
    return redirect('/dashboard')

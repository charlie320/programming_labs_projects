from django.shortcuts import render, redirect, reverse
from django.contrib import messages
import bcrypt
from .models import User

# Create your views here.
def flashErrors(request, errors):
    for error in errors:
        messages.error(request, error)

def index(request):
    return render(request, 'friends_app/index.html')

def success(request):
    print "Inside the success function"
    if 'user_id' in request.session:
        current_user = User.objects.currentUser(request)
        friends = current_user.friends.all()
        users = User.objects.exclude(id__in=friends).exclude(id=current_user.id)

        context = {
            'users' : users,
            'friends' : friends,
            'current_user' : current_user,
        }
        return render(request, 'friends_app/success.html', context)
    return redirect('/')

def register(request):
    print "Inside the register function"
    if request.method == "POST":
        errors = User.objects.validateRegistration(request.POST)

        if not errors:
            user = User.objects.createUser(request.POST)
            request.session['user_id'] = user.id
            return redirect('/success')

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
                    return redirect('/success')

            errors.append("Invalid account information.")

        flashErrors(request, errors)

    return redirect('/')


def logout(request):
    print "Inside the logout function"
    if 'user_id' in request.session:
        request.session.pop('user_id')
    return redirect('/')

def addFriend(request, id):
    print "Inside the addFriend function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            friend = User.objects.get(id=id)
            current_user.friends.add(friend)
            return redirect(reverse('success'))
    return redirect('/')

def removeFriend(request, id):
    print "Inside the removeFriend function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            friend = User.objects.get(id=id)
            current_user.friends.remove(friend)
            return redirect(reverse('success'))

    return redirect('/')

def user(request, id):
    user = User.objects.get(id = id)
    context = {
        'first_name' : user.first_name,
        'alias' : user.alias,
        'email' : user.email,
    }
    return render(request, 'friends_app/user.html', context)

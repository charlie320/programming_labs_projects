from django.shortcuts import render, redirect, reverse
from django.contrib import messages
import bcrypt
from .models import User

# Create your views here.
def flashErrors(request, errors):
    for error in errors:
        messages.error(request, error)

def index(request):
    return render(request, 'login_app/index.html')

def success(request):
    print "Inside the success function"
    if 'user_id' in request.session:
        current_user = User.objects.currentUser(request)
        # reviews = Book.objects.filter(id__in=current_user.id)
        # friends = current_user.friends.all()
        # users = User.objects.exclude(id__in=friends).exclude(id=current_user.id)

        # context = {
        #     'users' : users,
        #     'friends' : friends,
        # }
        return render(request, 'login_app/success.html')
    return redirect(reverse('landing'))

def register(request):
    print "Inside the register function"
    if request.method == "POST":
        errors = User.objects.validateRegistration(request.POST)

        if not errors:
            user = User.objects.createUser(request.POST)
            request.session['user_id'] = user.id

            return redirect(reverse('success'))

        flashErrors(request, errors)

    return redirect(reverse('landing'))

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
                    return redirect(reverse('success'))

            errors.append("Invalid account information.")

        flashErrors(request, errors)

    return redirect(reverse('landing'))


def logout(request):
    print "Inside the logout function"
    if 'user_id' in request.session:
        request.session.pop('user_id')
    return redirect(reverse('landing'))

def addFriend(request, id):
    print "Inside the addFriend function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            friend = User.objects.get(id=id)
            current_user.friends.add(friend)
            return redirect(reverse('success'))
    return redirect(reverse('landing'))

def removeFriend(request, id):
    print "Inside the removeFriend function"
    if request.method == "POST":
        if 'user_id' in request.session:
            current_user = User.objects.currentUser(request)
            friend = User.objects.get(id=id)
            current_user.friends.remove(friend)
            return redirect(reverse('success'))

    return redirect(reverse('landing'))

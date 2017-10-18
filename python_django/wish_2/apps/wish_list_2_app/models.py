from __future__ import unicode_literals
from django.db import models
import bcrypt

#managers here

class UserManager(models.Manager):
    def currentUser(self, request):
        id = request.session['user_id']
        return User.objects.get(id=id)

    def validateRegistration(self, form_data):
        errors = []

        if len(form_data['name']) == 0:
            errors.append("Name is required.")
        if len(form_data['email']) == 0:
            errors.append("Email is required.")
        if len(form_data['password']) <  8:
            errors.append("Password is required and must be at least 8 characters.")
        if form_data['password'] != form_data['password_confirmation']:
            errors.append("Passwords do not match.")

        return errors

    def validateLogin(self, form_data):
        errors = []

        if len(form_data['email']) == 0:
            errors.append("Email is required.")
        if len(form_data['password']) == 0:
            errors.append("Password is required.")

        return errors

    def createUser(self, form_data):
        password = str(form_data['password'])
        hashed_pw = bcrypt.hashpw(password, bcrypt.gensalt())

        user = User.objects.create(
            name = form_data['name'],
            email = form_data['email'],
            password = hashed_pw,
        )
        return user


class ItemManager(models.Manager):
    def createItem(self, form_data, request):

        current_user = User.objects.currentUser(request)

        item = Item.objects.create(
        name = form_data['name'],
        created_by = current_user,
        #wished_by = current_user,
        )
        current_user.wished_items.add(item)
        #item.wished_by.add(current_user)

    def validateNewItem(self, form_data):
        errors = []

        if len(form_data['name']) < 3:
            errors.append("Name must be entered and be at least 3 characters.")

        return errors

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 255)
    date_hired = models.CharField(max_length = 255)
    password = models.CharField(max_length = 25)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()

class Item(models.Model):
    name = models.CharField(max_length = 255)
    created_by = models.ForeignKey(User, related_name = 'created_items')
    wished_by = models.ManyToManyField(User, related_name = 'wished_items')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ItemManager()

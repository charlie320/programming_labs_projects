from __future__ import unicode_literals
from django.db import models
import bcrypt

#########################################################################
#Managers:

class UserManager(models.Manager):
    def currentUser(self, request):
        id = request.session['user_id']
        return User.objects.get(id=id)

    def validateRegistration(self, form_data):
        errors = []

        if len(form_data['first_name']) == 0:
            errors.append("First Name is required.")
        if len(form_data['last_name']) == 0:
            errors.append("Last Name is required.")
        if len(form_data['email']) == 0:
            errors.append("Email is required.")
        if len(form_data['password']) == 0:
            errors.append("Password is required.")
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
            first_name = form_data['first_name'],
            last_name = form_data['last_name'],
            email = form_data['email'],
            password = hashed_pw,
        )
        return user

class BookManager(models.Manager):
    def createBook(self, form_data):
        book = Book.objects.create(
            title = form_data['title'],
            author = form_data['author'],
            #avgRating = ?????
        )
        return book

class ReviewManager(models.Manager):
    pass

##########################################################################
#Begin Tables/Models

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length = 255)
    #books = models.ManyToManyField(Book, related_name = 'book_reviews')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length = 255)
    author = models.CharField(max_length = 255)
    #users = models.ManyToManyField(User, related_name = 'reviewed_by')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = BookManager()

class Review(models.Model):
    content = models.TextField(max_length = 1000)
    rating = models.IntegerField()
    book = models.ForeignKey(Book, related_name = 'reviews')
    user = models.ForeignKey(User, related_name = 'reviewed_by')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = ReviewManager()

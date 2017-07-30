from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=140)
    last_login = models.DateTimeField(auto_now=True)

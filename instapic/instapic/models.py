from django.db import models

class User(models.Model):
	is_authenticated = True
	username = models.CharField(max_length=20)
	password = models.CharField(max_length=100)
	email = models.CharField(max_length=100)
	sign_up_date = models.DateTimeField(auto_now=True)
	last_login = models.DateTimeField(auto_now=True)
	profilepic = models.CharField(max_length=255, default="")

class Photo(models.Model):
	baseurl = models.CharField(max_length=255)
	url = models.CharField(max_length=255)
	date_uploaded = models.DateTimeField(auto_now=True)
	owner = models.CharField(max_length=20)
	likes = models.IntegerField()
	caption = models.CharField(max_length=140, default="")
	tags = models.IntegerField(default=0)
	main_colour = models.CharField(max_length=15, default="")

class PhotoLikes(models.Model):
	postid = models.IntegerField()
	liker = models.CharField(max_length=20)

class Followers(models.Model):
	user = models.CharField(max_length=20, default="")
	follower = models.CharField(max_length=20, default="")

class PhotoTag(models.Model):
	photoid = models.IntegerField()
	coords = models.CharField(max_length=20)
	tagged_user = models.CharField(max_length=20, default="")
	tagged_by = models.CharField(max_length=20, default="")

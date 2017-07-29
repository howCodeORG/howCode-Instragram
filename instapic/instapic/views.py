from django.shortcuts import render, redirect
from .models import User
from .forms import *

def signup(request):
    context = {}
    return render(request, 'sign-up.html', context)

def index(request):
    context = {}
    return render(request, 'index.html', context)

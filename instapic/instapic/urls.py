"""insta URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^upload$', views.upload, name='upload'),
    url(r'^sign-up$', views.signup),
    url(r'^logout$', views.logout),
    url(r'^(?P<username>[a-zA-Z0-9_]+)$', views.profile),
    url(r'^ajax-sign-up$', views.ajaxsignup),
    url(r'^ajax-login$', views.ajaxlogin),
    url(r'^ajax-save-photo$', views.ajaxsavephoto),
    url(r'^ajax-set-profile-pic$', views.ajaxsetprofilepic),
    url(r'^ajax-profile-feed$', views.ajaxprofilefeed),
    url(r'^ajax-like-photo$', views.ajaxlikephoto),
    url(r'^ajax-follow$', views.ajaxfollow),
    url(r'^ajax-tag$', views.ajaxtag),
    url(r'^ajax-photo-feed$', views.ajaxphotofeed)
]

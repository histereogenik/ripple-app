from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('register.urls')),
    path('api/newsfeed/', include('newsfeed.urls')),
    path('api/profiles/', include('user_profile.urls')),
]

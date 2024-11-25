from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from register.views import RegisterView, LoginView
from newsfeed.viewsets import RippleetViewSet

router = DefaultRouter()
router.register(r'rippleets', RippleetViewSet, basename='rippleet')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/register/", RegisterView.as_view(), name="register"),
    path("api/auth/login/", LoginView.as_view(), name="login"),
    path("api/", include(router.urls))
]

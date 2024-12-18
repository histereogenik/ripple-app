from django.urls import path
from register.views import RegisterView, LoginView, TestView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("test/", TestView.as_view(), name="test"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

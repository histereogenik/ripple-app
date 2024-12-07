from django.urls import path
from register.views import RegisterView, LoginView, TestView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("test/", TestView.as_view(), name="test"),
]

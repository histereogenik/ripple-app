from rest_framework import generics
from register.serializers import RegisterSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data["message"] = "User created successfully. Please proceed to login."
        return response

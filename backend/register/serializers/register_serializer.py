from rest_framework import serializers
from django.contrib.auth.models import User
from user_profile.serializers import UserProfileSerializer

class RegisterSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(write_only=True, required=True)
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm', 'profile']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password_confirm = attrs.get('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError({"password_confirm": "Passwords do not match."})

        return attrs

    def create(self, validated_data):
        validated_data.pop('password_confirm')

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

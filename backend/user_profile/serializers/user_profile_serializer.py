from rest_framework import serializers
from user_profile.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'profile_picture']
        read_only_fields = ['user', 'profile_picture']

from rest_framework import serializers
from django.contrib.auth.models import User
from user_profile.models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    is_followed_by_user = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "user",
            "profile_picture",
            "followers_count",
            "following_count",
            "is_followed_by_user",
        ]
        read_only_fields = ["followers_count", "following_count", "is_followed_by_user"]

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.user.profile.following.count() if hasattr(obj.user, "profile") else 0

    def get_is_followed_by_user(self, obj):
        user = self.context.get("request").user
        if user.is_authenticated and hasattr(user, "profile"):
            return obj in user.profile.following.all()
        return False

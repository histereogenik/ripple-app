from rest_framework import serializers
from user_profile.models import UserProfile

class FollowSerializer(serializers.Serializer):
    target_user_id = serializers.IntegerField()

    def validate_target_user_id(self, value):
        try:
            self.target_user = UserProfile.objects.get(user_id=value)
        except UserProfile.DoesNotExist:
            raise serializers.ValidationError("User does not exist.")
        return value

    def save(self, **kwargs):
        user_profile = self.context['request'].user.profile
        target_profile = self.target_user

        if target_profile in user_profile.followers.all():
            user_profile.followers.remove(target_profile)
        else:
            user_profile.followers.add(target_profile)

        return target_profile

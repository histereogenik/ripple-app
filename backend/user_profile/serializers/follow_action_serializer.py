from rest_framework import serializers
from user_profile.models import UserProfile

class FollowActionSerializer(serializers.Serializer):
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

        if target_profile == user_profile:
            raise serializers.ValidationError("You cannot follow yourself.")

        if target_profile in user_profile.following.all():
            user_profile.following.remove(target_profile)
            action_status = "unfollowed"
        else:
            user_profile.following.add(target_profile)
            action_status = "followed"

        return {"target_user": target_profile.user.username, "action_status": action_status}

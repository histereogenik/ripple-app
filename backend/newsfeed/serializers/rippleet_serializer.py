from rest_framework import serializers
from newsfeed.models import Rippleet

class RippleetSerializer(serializers.ModelSerializer):
    is_edited = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()

    class Meta:
        model = Rippleet
        fields = ['id', 'author', 'content', 'created_at', 'updated_at', 'is_edited', 'likes_count']
        read_only_fields = ['author', 'created_at', 'updated_at', 'is_edited']

    def get_is_edited(self, obj):
        return obj.updated_at > obj.created_at
    
    def get_likes_count(self, obj):
        return obj.likes.count()

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user
        validated_data.pop('author', None)

        return Rippleet.objects.create(author=user, **validated_data)

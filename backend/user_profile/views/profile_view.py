from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from user_profile.models import UserProfile
from user_profile.serializers import ProfileSerializer, FollowActionSerializer

class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def follow(self, request, pk=None):
        serializer = FollowActionSerializer(data={'target_user_id': pk}, context={'request': request})
        serializer.is_valid(raise_exception=True)

        follow_data = serializer.save()

        return Response(
            {
                "message": f"{request.user.username} successfully {follow_data['action_status']} {follow_data['target_user']}."
            },
            status=status.HTTP_200_OK
        )

from django.http import Http404
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

    lookup_field = 'user_id'

    def get_object(self):
        user_id = self.kwargs.get(self.lookup_field)
        try:
            return UserProfile.objects.get(user__id=user_id)
        except UserProfile.DoesNotExist:
            raise Http404("UserProfile does not exist")


    def update(self, request, *args, **kwargs):
        return Response({"message": "Profile updates are not allowed."},
                        status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def partial_update(self, request, *args, **kwargs):
        return Response({"message": "Profile updates are not allowed."},
                        status=status.HTTP_405_METHOD_NOT_ALLOWED)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def follow(self, request, user_id=None):
        serializer = FollowActionSerializer(data={'target_user_id': user_id}, context={'request': request})
        serializer.is_valid(raise_exception=True)

        follow_data = serializer.save()

        return Response(
            {
                "message": f"{request.user.username} successfully {follow_data['action_status']} {follow_data['target_user']}."
            },
            status=status.HTTP_200_OK
        )

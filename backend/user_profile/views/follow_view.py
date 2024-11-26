from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from user_profile.serializers.follow_serializer import FollowSerializer

class FollowUnfollowView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = FollowSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            target_profile = serializer.save()
            return Response(
                {
                    'message': f"{request.user.username} successfully updated follow status for {target_profile.user.username}."
                },
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

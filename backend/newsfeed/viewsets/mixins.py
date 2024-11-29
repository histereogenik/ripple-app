from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


class LikeToggleMixin:
    @action(detail=True, methods=["post"], permission_classes=[IsAuthenticated])
    def like(self, request, pk=None):
        rippleet = self.get_object()
        user = request.user

        if user in rippleet.likes.all():
            rippleet.likes.remove(user)
            message = "You have unliked this rippleet."
        else:
            rippleet.likes.add(user)
            message = "You have liked this rippleet."

        return Response({"message": message}, status=status.HTTP_200_OK)

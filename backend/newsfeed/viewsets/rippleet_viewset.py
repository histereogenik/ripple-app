from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.pagination import CursorPagination
from newsfeed.models import Rippleet
from newsfeed.serializers import RippleetSerializer
from newsfeed.permissions import IsAuthorOrReadOnly
from .mixins import LikeToggleMixin
from django.utils import timezone


class RippleetPagination(CursorPagination):
    page_size = 10
    ordering = "-created_at"


class RippleetViewSet(LikeToggleMixin, viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsAuthorOrReadOnly]
    serializer_class = RippleetSerializer
    queryset = Rippleet.objects.all()
    pagination_class = RippleetPagination

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def perform_update(self, serializer):
        serializer.save(last_modified=timezone.now())

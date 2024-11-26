from django.urls import path
from user_profile.views.follow_view import FollowUnfollowView

urlpatterns = [
    path('follow/', FollowUnfollowView.as_view(), name='follow_unfollow'),
]

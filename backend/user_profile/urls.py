from rest_framework.routers import DefaultRouter
from user_profile.views import UserProfileViewSet

router = DefaultRouter()
router.register(r"", UserProfileViewSet, basename="userprofile")

urlpatterns = router.urls

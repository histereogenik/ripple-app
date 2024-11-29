from rest_framework.routers import DefaultRouter
from newsfeed.viewsets import RippleetViewSet

router = DefaultRouter()
router.register(r"rippleets", RippleetViewSet, basename="rippleet")

urlpatterns = router.urls

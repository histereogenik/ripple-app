from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from common.factories import UserFactory
from user_profile.models import UserProfile


class FollowUnfollowTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user1 = UserFactory(username="testuser1", email="test1@example.com")
        self.user2 = UserFactory(username="testuser2", email="test2@example.com")
        self.user1_profile = UserProfile.objects.get(user=self.user1)
        self.user2_profile = UserProfile.objects.get(user=self.user2)
        self.client.force_authenticate(user=self.user1)

    def test_follow_user(self):
        url = reverse("userprofile-follow", kwargs={"user_id": self.user2.id})
        response = self.client.post(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data["message"],
            f"{self.user1.username} successfully followed {self.user2.username}.",
        )
        self.assertTrue(self.user2_profile.followers.filter(user=self.user1).exists())

    def test_unfollow_user(self):
        self.user1_profile.following.add(self.user2_profile)

        url = reverse("userprofile-follow", kwargs={"user_id": self.user2.id})
        response = self.client.post(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            response.data["message"],
            f"{self.user1.username} successfully unfollowed {self.user2.username}.",
        )
        self.assertFalse(self.user2_profile.followers.filter(user=self.user1).exists())

    def test_cannot_follow_self(self):
        url = reverse("userprofile-follow", kwargs={"user_id": self.user1.id})
        response = self.client.post(url)

        # import pdb; pdb.set_trace()

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("You cannot follow yourself.", response.json())

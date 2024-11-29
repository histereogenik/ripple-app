from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from user_profile.models import UserProfile
from common.factories import UserFactory


class UserProfileTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user1 = UserFactory(username="testuser1", email="test1@example.com")
        self.user2 = UserFactory(username="testuser2", email="test2@example.com")
        self.user1_profile = UserProfile.objects.get(user=self.user1)
        self.user2_profile = UserProfile.objects.get(user=self.user2)
        self.client.force_authenticate(user=self.user1)

    def test_retrieve_profile(self):
        url = reverse("userprofile-detail", kwargs={"user_id": self.user1.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"], self.user1.id)
        self.assertEqual(
            response.data["profile_picture"],
            f"https://robohash.org/{self.user1.username}.png",
        )
        self.assertEqual(response.data["followers_count"], 0)
        self.assertEqual(response.data["following_count"], 0)
        self.assertFalse(response.data["is_followed_by_user"])

    def test_retrieve_other_user_profile(self):
        url = reverse("userprofile-detail", kwargs={"user_id": self.user2.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"], self.user2.id)
        self.assertEqual(
            response.data["profile_picture"],
            f"https://robohash.org/{self.user2.username}.png",
        )
        self.assertEqual(response.data["followers_count"], 0)
        self.assertEqual(response.data["following_count"], 0)
        self.assertFalse(response.data["is_followed_by_user"])

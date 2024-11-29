from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.urls import reverse
from newsfeed.factories import RippleetFactory
from common.factories import UserFactory
from newsfeed.models import Rippleet


class RippleetViewSetTest(APITestCase):
    client = APIClient()

    def setUp(self):
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)

        self.rippleet = RippleetFactory(author=self.user)
        self.rippleet_url = reverse("rippleet-detail", kwargs={"pk": self.rippleet.id})
        self.rippleet_list_url = reverse("rippleet-list")
        self.like_url = reverse("rippleet-like", kwargs={"pk": self.rippleet.id})

    def test_create_rippleet(self):
        data = {"content": "This is a test rippleet!"}
        response = self.client.post(self.rippleet_list_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Rippleet.objects.count(), 2)
        self.assertEqual(response.data["content"], data["content"])

    def test_get_rippleet_list(self):
        response = self.client.get(self.rippleet_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("results", response.data)
        self.assertEqual(len(response.data["results"]), 1)
        self.assertEqual(response.data["results"][0]["content"], self.rippleet.content)

    def test_update_rippleet(self):
        updated_content = {"content": "This rippleet has been updated!"}
        response = self.client.put(self.rippleet_url, updated_content, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.rippleet.refresh_from_db()
        self.assertEqual(self.rippleet.content, updated_content["content"])

    def test_delete_rippleet(self):
        response = self.client.delete(self.rippleet_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Rippleet.objects.count(), 0)

    def test_delete_rippleet_permission(self):
        another_user = UserFactory()
        self.client.force_authenticate(user=another_user)

        response = self.client.delete(self.rippleet_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(Rippleet.objects.count(), 1)

    def test_get_rippleet_detail(self):
        response = self.client.get(self.rippleet_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["content"], self.rippleet.content)

    def test_like_rippleet(self):
        response = self.client.post(self.like_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["message"], "You have liked this rippleet.")
        self.rippleet.refresh_from_db()
        self.assertEqual(self.rippleet.likes.count(), 1)

        response = self.client.post(self.like_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["message"], "You have unliked this rippleet.")
        self.rippleet.refresh_from_db()
        self.assertEqual(self.rippleet.likes.count(), 0)

from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from common.factories import UserFactory
from newsfeed.factories import RippleetFactory


class RippleetEndlessScrollTest(APITestCase):
    client = APIClient()

    def setUp(self):
        self.user = UserFactory(username="test_user")
        self.client.force_authenticate(user=self.user)

        self.rippleets = RippleetFactory.create_batch(25, author=self.user)

    def test_endless_scroll_pagination(self):
        url = reverse("rippleet-list")

        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        self.assertEqual(len(response.data["results"]), 10)
        next_url = response.data["next"]

        page = 2
        while next_url:
            response = self.client.get(next_url)
            self.assertEqual(response.status_code, status.HTTP_200_OK)

            if page <= 2:
                self.assertEqual(len(response.data["results"]), 10)
            else:
                self.assertEqual(len(response.data["results"]), 5)

            next_url = response.data["next"]
            page += 1

        self.assertIsNone(next_url)

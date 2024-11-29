from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from common.factories import UserFactory
import json


class RegisterViewTest(APITestCase):

    def setUp(self):
        self.user = UserFactory(
            username="existinguser", email="existinguser@example.com"
        )

    def test_register_success(self):
        payload = {
            "username": "newuser",
            "email": "newuser@example.com",
            "password": "strong_password_123",
            "password_confirm": "strong_password_123",
        }
        response = self.client.post(
            reverse("register"),
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        response_data = response.json()
        self.assertEqual(response_data["username"], "newuser")
        self.assertEqual(response_data["email"], "newuser@example.com")
        self.assertNotIn("password", response_data)

    def test_register_password_mismatch(self):
        payload = {
            "username": "testuser2",
            "email": "testuser2@example.com",
            "password": "password123",
            "password_confirm": "different_password",
        }
        response = self.client.post(
            reverse("register"),
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response_data = response.json()
        self.assertIn("password_confirm", response_data)
        self.assertEqual(
            response_data["password_confirm"][0], "Passwords do not match."
        )

    def test_register_existing_username(self):
        payload = {
            "username": "existinguser",
            "email": "newemail@example.com",
            "password": "password123",
            "password_confirm": "password123",
        }
        response = self.client.post(
            reverse("register"),
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response_data = response.json()
        self.assertIn("username", response_data)

    def test_register_missing_fields(self):
        payload = {"username": "testuser3"}
        response = self.client.post(
            reverse("register"),
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response_data = response.json()
        self.assertIn("password", response_data)
        self.assertIn("password_confirm", response_data)

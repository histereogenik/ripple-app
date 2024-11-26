from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from register.factories import UserFactory


class LoginViewTest(APITestCase):
    client = APIClient()

    def setUp(self):
        self.user = UserFactory(username="testuser", password="password123")

    def test_login_success(self):
        data = {
            "username": "testuser",
            "password": "password123"
        }
        response = self.client.post(reverse("login"), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        response_data = response.json()
        self.assertIn("access", response_data)
        self.assertIn("refresh", response_data)
        self.assertEqual(response_data["username"], self.user.username)

    def test_login_incorrect_credentials(self):
        data = {
            "username": "testuser",
            "password": "wrongpassword"
        }
        response = self.client.post(reverse("login"), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        response_data = response.json()
        self.assertIn("non_field_errors", response_data)
        self.assertEqual(response_data["non_field_errors"][0], "Unable to log in with provided credentials.")

    def test_login_missing_fields(self):
        data = {
            "username": "testuser"
        }
        response = self.client.post(reverse("login"), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        response_data = response.json()
        self.assertIn("password", response_data)
        self.assertEqual(response_data["password"], ["This field is required."])

    def test_login_nonexistent_user(self):
        data = {
            "username": "nonexistentuser",
            "password": "password123"
        }
        response = self.client.post(reverse("login"), data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        
        response_data = response.json()
        self.assertIn("non_field_errors", response_data)
        self.assertEqual(response_data["non_field_errors"][0], "Unable to log in with provided credentials.")

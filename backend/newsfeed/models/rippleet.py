from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Rippleet(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="rippleets")
    content = models.TextField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=timezone.now)
    likes = models.ManyToManyField(User, related_name="liked_rippleets", blank=True)

    def save(self, *args, **kwargs):
        if self.pk:
            self.updated_at = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.author.username}: {self.content[:20]}..."

# Generated by Django 5.1.3 on 2024-11-27 19:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("user_profile", "0002_userprofile_followers"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="userprofile",
            name="bio",
        ),
    ]

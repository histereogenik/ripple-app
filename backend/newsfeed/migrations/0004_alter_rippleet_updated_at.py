# Generated by Django 5.1.3 on 2024-11-25 20:54

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsfeed', '0003_alter_rippleet_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rippleet',
            name='updated_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]

import factory
from common.factories import UserFactory
from newsfeed.models import Rippleet
from django.utils import timezone


class RippleetFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Rippleet

    author = factory.SubFactory(UserFactory)
    content = factory.Faker("text", max_nb_chars=280)
    created_at = factory.Faker("date_time_this_year", tzinfo=None)
    updated_at = factory.Faker("date_time", tzinfo=timezone.get_current_timezone())

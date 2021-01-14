from django.urls import path, include
from . import views
from .serializers import RegisterSerialzer
from .api import LoginAPI, RegisterAPI, UserAPI

urlpatterns = [
    path('api/login', LoginAPI.as_view()),
    path('api/register', RegisterAPI.as_view()),
    path('api/user', UserAPI.as_view())
    ]
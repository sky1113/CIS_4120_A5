from django.urls import path
from myapp.views import (
    UserRegisterAPIView,
    UserLoginAPIView,
    UserViewAPI,
    UserLogoutViewAPI
)

urlpatterns = [
    path('register', UserRegisterAPIView.as_view(), name='register'),
    path('login', UserLoginAPIView.as_view(), name='login'),
    path('logout', UserLogoutViewAPI.as_view(), name='logout'),
    path('user', UserViewAPI.as_view(), name='user'),
]
from django.urls import path
from myapp.views import (
    UserRegisterAPIView,
    UserLoginAPIView,
    UserViewAPI,
    UserLogoutViewAPI,
    ExternalDataView, 
    SaveMajorMinorView,
)

urlpatterns = [
    path('save_major_minor', SaveMajorMinorView.as_view(), name='save_major_minor'),
    path('register', UserRegisterAPIView.as_view(), name='register'),
    path('login', UserLoginAPIView.as_view(), name='login'),
    path('logout', UserLogoutViewAPI.as_view(), name='logout'),
    path('user', UserViewAPI.as_view(), name='user'),
    path('external-data', ExternalDataView.as_view(), name='external-data'),
]
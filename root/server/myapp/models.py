from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None, first_name=None, last_name=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self,email,password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user
    
class AppUser(AbstractBaseUser,PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateField(auto_now_add=True)
    major = models.CharField(max_length=50, default='DefaultMajorValue')
    minor = models.CharField(max_length=50, default='DefaultMinorValue')

    groups = models.ManyToManyField(Group, related_name='appuser_groups')
    user_permissions = models.ManyToManyField(Permission, related_name='appuser_permissions')


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    objects = AppUserManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


# Create your models here.

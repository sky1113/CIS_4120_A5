from rest_framework import serializers
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=100, min_length=8)
    class Meta:
        model = UserModel
        fields = ['email','first_name', 'last_name','password']
    
    def create(self, validated_data):
        user_password = validated_data.get('password',None)
        db_instance = self.Meta.model(email=validated_data.get('email'),first_name=validated_data.get('first_name'), last_name=validated_data.get('last_name'))
        db_instance.set_password(user_password)
        db_instance.save()
        return db_instance
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100, min_length=8)
    token = serializers.CharField(max_length=255, read_only=True)

    

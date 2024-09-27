from django.urls import reverse
from rest_framework.test import APITestCase
class UserLoginTestCase(APITestCase):
    def setUp(self):
        self.url = reverse('login')
        self.login = 'edikrvrs'
        self.password = 'QwErT1357'

    def test_user_can_login_with_credentials_data(self):
        data = {
            'username': self.login,
            'password': self.password
        }
        response = self.client.post(data)
        self.assertEqual(response.status_code, 200)
        self.assertIn('refresh',response.data)
        self.assertIn('access',response.data)






import unittest
import json
from app import app

app_tester = app.test_client()


class ExternalProviderTestCase(unittest.TestCase):

    def test_get_external_providers(self):
        """ test get all ExternalProviders in DB"""
        response = app_tester.get('/poc/v1/external-providers/', content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_external_provider_creation_01(self):
        """ test ExternalProvider creation without phone and detail """
        test_external_provider = {
          "external_provider_name": "Cementos Argos"
        }
        response = app_tester.post(
          '/poc/v1/external-provider/',
          headers={'Content-Type': 'application/json'},
          data=json.dumps(test_external_provider)
        )
        self.assertEqual(response.status_code, 201)

    def test_external_provider_creation_02(self):
        """ test ExternalProvider creation with empty request """
        test_external_provider = {}
        response = app_tester.post(
            '/poc/v1/external-provider/',
            headers={'Content-Type': 'application/json'},
            data=json.dumps(test_external_provider)
        )
        self.assertEqual(response.status_code, 400)

    def test_external_provider_01(self):
        """ test ExternalProvider deleted if ExternalProvider doesn't exist """
        ghost_external_provider = 1000000000000000000000
        response = app_tester.delete(
            '/poc/v1/external-provider/'+str(ghost_external_provider),
            headers={'Content-Type': 'application/json'}
        )
        self.assertEqual(response.status_code, 500)


if __name__ == '__main__':
    unittest.main()

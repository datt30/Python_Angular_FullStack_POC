import unittest
import json
from app import app

app_tester = app.test_client()


class ClientTestCase(unittest.TestCase):

    def test_get_clients(self):
        """ test get present clients in DB"""
        response = app_tester.get('/poc/v1/clients/', content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_client_creation_01(self):
        """ test client creation without identity_number """
        test_client = {
          "age": 25,
          "clientName": "David",
          "clientSurname": "Tamayo",
        }
        response = app_tester.post(
          '/poc/v1/client/',
          headers={'Content-Type': 'application/json'},
          data=json.dumps(test_client)
        )
        self.assertEqual(response.status_code, 400)

    def test_client_creation_02(self):
        """ test client creation with empty request """
        test_client = {}
        response = app_tester.post(
            '/poc/v1/client/',
            headers={'Content-Type': 'application/json'},
            data=json.dumps(test_client)
        )
        self.assertEqual(response.status_code, 400)

    def test_client_delete_01(self):
        """ test client deleted if client doesn't exist """
        ghost_client = 1000000000000000000000
        response = app_tester.delete(
            '/poc/v1/client/'+str(ghost_client),
            headers={'Content-Type': 'application/json'}
        )
        self.assertEqual(response.status_code, 500)


if __name__ == '__main__':
    unittest.main()

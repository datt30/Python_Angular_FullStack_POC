import unittest
import json
from app import app

app_tester = app.test_client()


class ProductTestCase(unittest.TestCase):

    def test_get_products(self):
        """ test get present products in DB"""
        response = app_tester.get('/poc/v1/products/', content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_product_creation_01(self):
        """ test product creation without price """
        test_product = {
          "product_name": "awesome product",
          "detail": "quality product with hight comercial value!!"
        }
        response = app_tester.post(
          '/poc/v1/product/',
          headers={'Content-Type': 'application/json'},
          data=json.dumps(test_product)
        )
        self.assertEqual(response.status_code, 400)

    def test_product_creation_02(self):
        """ test product creation with empty request """
        test_product = {}
        response = app_tester.post(
            '/poc/v1/product/',
            headers={'Content-Type': 'application/json'},
            data=json.dumps(test_product)
        )
        self.assertEqual(response.status_code, 400)

    def test_product_delete_01(self):
        """ test product deleted if product doesn't exist """
        ghost_product = 9999999999999999
        response = app_tester.delete(
            '/poc/v1/product/'+str(ghost_product),
            headers={'Content-Type': 'application/json'}
        )
        self.assertEqual(response.status_code, 500)


if __name__ == '__main__':
    unittest.main()

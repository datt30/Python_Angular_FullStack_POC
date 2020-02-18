from app.models import Product as productModel
from flask import request, jsonify
from app import app, db


@app.route('/poc/v1/products/', methods=['GET'])
def get_products():
    try:
        products_list = productModel.Product.query.all()
        return jsonify({'products': [product.serialize() for product in products_list]}), 201
    except Exception as e:
        # usually for server security, the error must be stored in a log,
        # but for practical purposes of the poc we will show it in the response
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/product/<int:id>/', methods=['GET'])
def get_product(id):
    try:
        return jsonify({'product': productModel.Product.query.get(id).serialize()}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/product/', methods=['POST'])
def create_product():
    content = request.json

    if not content or not 'price' in content:
        return jsonify({'message': 'bad request'}), 400
    else:
        try:
            product = productModel.Product(
                content['productName'],
                content['price'],
                content['detail']
            )
            db.session.add(product)
            db.session.commit()
            return jsonify({'message': 'success'}), 201
        except Exception as e:
            return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    try:
        db.session.delete(productModel.Product.query.get(id))
        db.session.commit()
        return jsonify({'message': 'success delete'}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/product/<int:id>', methods=['PUT'])
def update_product(id):
    content = request.json
    try:
        product = productModel.Product.query.get(id)
        product.product_name = content['productName']
        product.price = content['price']
        product.detail = content['detail']
        db.session.commit()
        return jsonify({'message': 'success update'}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500

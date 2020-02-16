from app.models import Client as clientModel
from flask import request, jsonify
from app import app, db


@app.route('/poc/v1/clients/', methods=['GET'])
def get_clients():
    clientsList = clientModel.Client.query.all()
    return jsonify({'clients': [client.serialize() for client in clientsList]}), 201


@app.route('/poc/v1/client/<int:id>/', methods=['GET'])
def get_client(id):
    return jsonify({'client': clientModel.Client.query.get(id).serialize()}), 201


@app.route('/poc/v1/client/', methods=['POST'])
def create_client():
    content = request.json

    if not content or not 'identity_number' in content:
        return jsonify({'message': 'bad request'}), 400
    else:
        try:
            client = clientModel.Client(
                content['identity_number'],
                content['age'],
                content['client_name'],
                content['client_surname'],
            )
            db.session.add(client)
            db.session.commit()
            return jsonify({'message': 'success'}), 201
        except Exception as e:
            # usually for server security, the error must be stored in a log,
            # but for practical purposes of the poc we will show it in the response
            return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/client/<int:id>', methods=['DELETE'])
def delete_client(id):
    try:
        db.session.delete(clientModel.Client.query.get(id))
        db.session.commit()
        return jsonify({'message': 'success delete'}), 201
    except Exception as e:
        # usually for server security, the error must be stored in a log,
        # but for practical purposes of the poc we will show it in the response
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/client/<int:id>', methods=['PUT'])
def update_client(id):
    content = request.json
    try:
        client = clientModel.Client.query.get(id)
        client.identity_number = content['identity_number']
        client.age = content['age']
        client.client_name = content['client_name']
        client.client_surname = content['client_surname']
        db.session.commit()
        return jsonify({'message': 'success update'}), 201
    except Exception as e:
        # usually for server security, the error must be stored in a log,
        # but for practical purposes of the poc we will show it in the response
        return jsonify({'message': 'server error', 'error': str(e)}), 500

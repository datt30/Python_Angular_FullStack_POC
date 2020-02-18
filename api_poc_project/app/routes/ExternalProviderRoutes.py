from app.models import ExternalProvider as providerModel
from flask import request, jsonify
from app import app, db


@app.route('/poc/v1/external-providers/', methods=['GET'])
def get_external_providers():
    try:
        external_providers_list = providerModel.ExternalProvider.query.all()
        return jsonify({'providers': [provider.serialize() for provider in external_providers_list]}), 201
    except Exception as e:
        # usually for server security, the error must be stored in a log,
        # but for practical purposes of the poc we will show it in the response
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/external-provider/<int:id>/', methods=['GET'])
def get_external_provider(id):
    try:
        return jsonify({'provider': providerModel.ExternalProvider.query.get(id).serialize()}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/external-provider/', methods=['POST'])
def create_external_provider():
    content = request.json

    if not content or not 'externalProviderName' in content:
        return jsonify({'message': 'bad request'}), 400
    else:
        try:
            if not 'phone' in content and not 'detail' in content:
                external_provider = providerModel.ExternalProvider(
                    content['externalProviderName'], "", ""
                )
            else:
                external_provider = providerModel.ExternalProvider(
                    content['externalProviderName'],
                    content['phone'],
                    content['detail']
                )
            db.session.add(external_provider)
            db.session.commit()
            return jsonify({'message': 'success'}), 201
        except Exception as e:
            return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/external-provider/<int:id>', methods=['DELETE'])
def delete_external_provider(id):
    try:
        db.session.delete(providerModel.ExternalProvider.query.get(id))
        db.session.commit()
        return jsonify({'message': 'success delete'}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500


@app.route('/poc/v1/external-provider/<int:id>', methods=['PUT'])
def update_external_provider(id):
    content = request.json
    try:
        external_provider = providerModel.ExternalProvider.query.get(id)
        external_provider.external_provider_name = content['externalProviderName']
        external_provider.phone = content['phone']
        external_provider.detail = content['detail']
        db.session.commit()
        return jsonify({'message': 'success update'}), 201
    except Exception as e:
        return jsonify({'message': 'server error', 'error': str(e)}), 500


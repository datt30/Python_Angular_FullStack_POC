from flask import request, jsonify
from flask import current_app as app
from app.init import db
from app.models import Client as clientModel


@app.route('/client/', methods=['POST'])
def create_client():
    content = request.json
    print(content)
    client = clientModel.Client(
        content['identity_number'],
        content['age'],
        content['client_name'],
        content['client_surname'],
    )

    db.session.add(client)
    db.session.commit()

    return jsonify({'client': True}), 201
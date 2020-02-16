from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

from app.models import Client as clientModel


app = Flask(__name__)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)


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


if __name__ == '__main__':
    app.run()
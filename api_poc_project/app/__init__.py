from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_pyfile('config.py')
db = SQLAlchemy(app)


# call the front-end single page created in Angular
@app.route('/')
def home():
    return render_template('index.html')


# import the routes in our API
from app.routes import \
    ClientRoutes,\
    ProductRoutes,\
    ExternalProviderRoutes

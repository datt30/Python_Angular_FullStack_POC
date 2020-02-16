from app.init import db


class Product(db.Model):
    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(25))
    price = db.Column(db.Integer)
    detail = db.Column(db.String(25))

    def __init__(self, product_name, price, detail):
        self.product_name = product_name
        self.price = price
        self.detail = detail

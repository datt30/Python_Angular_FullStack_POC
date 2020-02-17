from app import db


class Product(db.Model):
    __tablename__ = 'Product'

    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(25))
    price = db.Column(db.Integer)
    detail = db.Column(db.String(25))

    def __init__(self, product_name, price, detail):
        self.product_name = product_name
        self.price = price
        self.detail = detail

    def serialize(self):
        return {
            'product_name': self.product_name,
            'price': self.price,
            'detail': self.detail
        }
from app import db


class Bill(db.Model):
    bill_id = db.Column(db.Integer, primary_key=True)
    bill_date = db.Column(db.Date)
    taxes = db.Column(db.Integer)
    sub_total = db.Column(db.Integer)
    total = db.Column(db.Integer)

    def __init__(self, bill_date, taxes, sub_total, total):
        self.bill_date = bill_date
        self.taxes = taxes
        self.sub_total = sub_total
        self.total = total

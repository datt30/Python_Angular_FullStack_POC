
CREATE TABLE Client (
    client_id int NOT NULL IDENTITY PRIMARY KEY,
    identity_number int NOT NULL,
    age int,
    client_name varchar(25),
    client_surname varchar(25)
);

CREATE TABLE Product (
    product_id int NOT NULL IDENTITY PRIMARY KEY,
    product_name varchar(25),
    price money,
    detail varchar(255)
);

CREATE TABLE ExternalProvider (
    external_provider_id int NOT NULL IDENTITY PRIMARY KEY,
    external_provider_name varchar(25),
    phone int,
    detail varchar(255),
);

CREATE TABLE ExternalProviderXProduct (
    product_external_provider_id int NOT NULL IDENTITY PRIMARY KEY,
    price money,
    detail varchar(255),
    product_id int FOREIGN KEY REFERENCES Product(product_id),
    external_provider_id int FOREIGN KEY REFERENCES ExternalProvider(external_provider_id)
);

CREATE TABLE Bill (
    bill_id int NOT NULL IDENTITY PRIMARY KEY,
    bill_date Date,
    taxes money,
    sub_total money,
    total money,
    client_id int FOREIGN KEY REFERENCES Client(client_id)
);


CREATE TABLE BillXProduct (
    bill_x_product_id int NOT NULL IDENTITY PRIMARY KEY,
    quantity int,
    bill_id int FOREIGN KEY REFERENCES Bill(bill_id),
    product_id int FOREIGN KEY REFERENCES Product(product_id),
);





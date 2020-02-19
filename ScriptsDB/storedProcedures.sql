
CREATE PROCEDURE SelectClientsOfLegalAge
AS
SELECT * FROM Client WHERE age >= 18
GO

CREATE PROCEDURE SelectNotDescribedProduct
AS
SELECT * FROM Product WHERE detail = null
GO

CREATE PROCEDURE SelectMoreExpensivesProduct @price money
AS
SELECT * FROM Product WHERE price > @price
GO



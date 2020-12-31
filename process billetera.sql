SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE billeteraInsert
	-- Add the parameters for the stored procedure here
	@nombre varchar(50),
	@CVU nvarchar(50),
	@idCuenta int,
	@tipoDeCuenta nvarchar(50),
	@alias nvarchar(50),
	@numeroDeCuenta nvarchar(50),
	@situacionCrediticia nvarchar(50)
AS
BEGIN
INSERT INTO billetera([Nombre], [CVU] ,[idCuenta], [tipoDeCuenta], [alias], [numeroDeCuenta], [situacionCrediticia]) VALUES (@nombre, @CVU, @idCuenta, 	@tipoDeCuenta,
	@alias ,
	@numeroDeCuenta,
	@situacionCrediticia)
END
GO
CREATE PROCEDURE billeteraSelectAll
AS
	SELECT id, Nombre, CVU, idCuenta, tipoDeCuenta, alias, numeroDeCuenta, situacionCrediticia FROM billetera
GO
CREATE PROCEDURE billeteraSelectByIdCuenta
	@id int
AS
	SELECT Nombre, CVU, tipoDeCuenta, alias, numeroDeCuenta, situacionCrediticia FROM billetera WHERE idCuenta = @id
GO
CREATE PROCEDURE billeteraSelectById
	@id int
AS
	SELECT Nombre, CVU, idCuenta,tipoDeCuenta, alias, numeroDeCuenta, situacionCrediticia FROM billetera WHERE id = @id
GO
CREATE PROCEDURE billeteraUpdateById
	@id int,
	@nombre varchar(50),
	@CVU nvarchar(50),
	@idCuenta int,
	@tipoDeCuenta nvarchar(50),
	@alias nvarchar(50),
	@numeroDeCuenta nvarchar(50),
	@situacionCrediticia nvarchar(50)
AS
	UPDATE billetera SET Nombre = @nombre, CVU = @CVU, idCuenta = @idCuenta, tipoDeCuenta = @tipoDeCuenta, alias = @alias, numeroDeCuenta = @numeroDeCuenta, situacionCrediticia = @situacionCrediticia WHERE @id = id
GO
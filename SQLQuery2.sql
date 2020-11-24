USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[usuarioInsertAll]    Script Date: 24/11/2020 19:09:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[usuarioInsertAll]	
	-- Add the parameters for the stored procedure here
	@id INT,
	@nombreCuenta nvarchar(50),
	@password nvarchar(50),
	@email nvarchar(50),
	@fotoDniFrente nvarchar(50),
	@fotoDniRev nvarchar(50),
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni INT,
	@fecha nvarchar(50),
	@cuil INT
	
AS

BEGIN
	INSERT INTO perfilUsuario ([nombreCuenta], [password], [email], [fotoDniFrente], [fotoDniRev], [nombre], [apellido], [dni], [fechaNacimiento], [cuil_cuit]) 
	VALUES (@nombreCuenta, @password, @email, @fotoDniFrente, @fotoDniRev, @nombre, @apellido, @dni, @fecha, @cuil)
END
GO

CREATE PROCEDURE updateUsuario
(
	@id INT,
	@nombreCuenta nvarchar(50),
	@password nvarchar(50),
	@email nvarchar(50),
	@fotoDniFrente nvarchar(50),
	@fotoDniRev nvarchar(50),
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni INT,
	@fecha nvarchar(50),
	@cuil INT
) 
as
UPDATE perfilUsuario SET @nombreCuenta = nombreCuenta, @password = password, @email = email, @fotoDniFrente = fotoDniFrente, @fotoDniRev = fotoDniFrente, @nombre = nombre, @apellido = apellido, @dni = dni, @fecha = fechaNacimiento, @cuil = cuil_cuit 
WHERE @id = id
GO

CREATE PROCEDURE deleteUsuario
(
@id INT,
@estado nvarchar(50)
)
AS
UPDATE perfilUsuario set @estado = estado
WHERE @id = id
GO
USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[usuarioInsertAll]    Script Date: 18/11/2020 21:00:38 ******/
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

CREATE PROCEDURE updateUsuario
(

) 
as

GO

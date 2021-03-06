USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[update_Usuario]    Script Date: 30/11/2020 1:07:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[update_Usuario]
(
	@id INT,
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni INT,
	@fecha nvarchar(50),
	@cuil INT
) 
AS
BEGIN
	UPDATE perfilUsuario SET @nombre = nombre, @apellido = apellido, @dni = dni, @fecha = fechaNacimiento, @cuil = cuil_cuit 
	WHERE @id = id
END
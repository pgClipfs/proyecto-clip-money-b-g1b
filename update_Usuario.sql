USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[updateUsuario]    Script Date: 28/11/2020 15:14:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create PROCEDURE update_Usuario
(
	@id INT,
	@nombreCuenta nvarchar(50),
	/*
	@fotoDniFrente nvarchar(50),
	@fotoDniRev nvarchar(50),
	*/
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni INT,
	@fecha nvarchar(50),
	@cuil INT
) 
as
UPDATE perfilUsuario SET @nombreCuenta = nombreCuenta, /*@fotoDniFrente = fotoDniFrente, @fotoDniRev = fotoDniRev,*/ @nombre = nombre, @apellido = apellido, @dni = dni, @fecha = fechaNacimiento, @cuil = cuil_cuit 
WHERE @id = id

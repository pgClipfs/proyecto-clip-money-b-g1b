USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuario]    Script Date: 29/11/2020 18:46:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[obtener_usuario]
	@id INT
AS

BEGIN
	SELECT id, nombre, apellido, dni, email, password, fechaNacimiento, cuil_cuit, estado FROM perfilUsuario
	WHERE @id = id
END
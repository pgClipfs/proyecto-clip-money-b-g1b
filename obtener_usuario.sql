USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuario]    Script Date: 30/11/2020 14:27:02 ******/
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
	SELECT id, nombre, apellido, dni, fechaNacimiento, cuil_cuit FROM perfilUsuario
	WHERE @id = id
END
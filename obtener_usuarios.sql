USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuarios]    Script Date: 29/11/2020 18:48:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[obtener_usuarios] 

AS
BEGIN
	SELECT id, nombre, apellido, dni, estado FROM perfilUsuario
END
USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuarios]    Script Date: 30/11/2020 14:17:58 ******/
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
	SELECT id, email, password, estado FROM perfilUsuario
END
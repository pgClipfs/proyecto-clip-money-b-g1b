USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[insertar_usuario]    Script Date: 30/11/2020 14:03:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[insertar_usuario]
	@email nvarchar(50),
	@password nvarchar(50)
AS

BEGIN
	INSERT INTO perfilUsuario (email, password, estado) VALUES (@email, @password, 'TRUE');
	SELECT CAST (scope_identity() AS int)
END
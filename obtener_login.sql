USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_login]    Script Date: 29/11/2020 20:24:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[obtener_login] 
	@email nvarchar(50),
	@password nvarchar(50)

AS
BEGIN
	SELECT * FROM perfilUsuario
	WHERE email = @email AND password = @password AND estado = 'TRUE'
END
USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[obtener_loguin]    Script Date: 28/11/2020 17:50:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[obtener_loguin] 
	@email nvarchar(50),
	@password nvarchar(50),
	@estado nvarchar(50)
AS
BEGIN
	SELECT id, email, password, estado FROM perfilUsuario
	WHERE email = @email AND password = @password AND estado = 'TRUE'
END

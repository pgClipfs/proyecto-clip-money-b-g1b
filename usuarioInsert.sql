USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[usuarioInsert]    Script Date: 28/11/2020 15:02:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[usuarioInsert]
	-- Add the parameters for the stored procedure here
	@id INT,
	@password nvarchar(50),
	@email nvarchar(50),
	@estado nvarchar(50)

AS

BEGIN
	INSERT INTO perfilUsuario ([password], [email], [estado]) 
	VALUES (@password, @email, 'TRUE')
END
USE [billetera_virtual]
GO
/****** Object:  StoredProcedure [dbo].[deleteUsuario]    Script Date: 27/11/2020 16:59:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[deleteUsuario]
(
@id INT,
@estado nvarchar(50)
)
AS
UPDATE perfilUsuario set @estado = 'FALSE'
WHERE @id = id

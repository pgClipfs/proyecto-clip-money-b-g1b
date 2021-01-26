USE [master]
GO
/****** Object:  Database [billetera_virtual]    Script Date: 25/01/2021 22:52:18 ******/
CREATE DATABASE [billetera_virtual]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'billetera_virtual', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\billetera_virtual.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'billetera_virtual_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\billetera_virtual_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [billetera_virtual] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [billetera_virtual].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [billetera_virtual] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [billetera_virtual] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [billetera_virtual] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [billetera_virtual] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [billetera_virtual] SET ARITHABORT OFF 
GO
ALTER DATABASE [billetera_virtual] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [billetera_virtual] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [billetera_virtual] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [billetera_virtual] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [billetera_virtual] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [billetera_virtual] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [billetera_virtual] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [billetera_virtual] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [billetera_virtual] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [billetera_virtual] SET  DISABLE_BROKER 
GO
ALTER DATABASE [billetera_virtual] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [billetera_virtual] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [billetera_virtual] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [billetera_virtual] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [billetera_virtual] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [billetera_virtual] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [billetera_virtual] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [billetera_virtual] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [billetera_virtual] SET  MULTI_USER 
GO
ALTER DATABASE [billetera_virtual] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [billetera_virtual] SET DB_CHAINING OFF 
GO
ALTER DATABASE [billetera_virtual] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [billetera_virtual] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [billetera_virtual] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [billetera_virtual] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [billetera_virtual] SET QUERY_STORE = OFF
GO
USE [billetera_virtual]
GO
/****** Object:  Table [dbo].[billetera]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[billetera](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[CVU] [nvarchar](50) NOT NULL,
	[idCuenta] [int] NOT NULL,
	[tipoDeCuenta] [nvarchar](50) NULL,
	[alias] [nvarchar](50) NULL,
	[numeroDeCuenta] [nvarchar](50) NULL,
	[situacionCrediticia] [nvarchar](50) NULL,
	[saldo] [decimal](18, 0) NULL,
 CONSTRAINT [PK_billetera_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cuentaDestino]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cuentaDestino](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[cvu] [char](22) NOT NULL,
	[cbu] [char](22) NOT NULL,
	[cuil_cuit] [char](11) NOT NULL,
	[tipoDeCuenta] [varchar](50) NOT NULL,
	[alias] [varchar](50) NOT NULL,
 CONSTRAINT [PK_cuenta destino] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[datosBancarios]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[datosBancarios](
	[id] [int] NOT NULL,
	[tipoDeCuenta] [varchar](50) NOT NULL,
	[alias] [varchar](50) NOT NULL,
	[numeroDeCuenta] [char](20) NOT NULL,
	[cbu] [char](22) NOT NULL,
	[cvu] [char](22) NOT NULL,
	[situacionCrediticia] [smallint] NULL,
	[nombre] [varchar](50) NULL,
	[id_billetera] [int] NOT NULL,
 CONSTRAINT [PK_datos bancarios_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalleTransaccion]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalleTransaccion](
	[id] [int] NOT NULL,
	[motivo] [varchar](50) NULL,
	[descripcion] [varchar](50) NULL,
	[monto] [decimal](18, 0) NOT NULL,
	[fecha] [datetime] NOT NULL,
	[id_transaccion] [int] NOT NULL,
 CONSTRAINT [PK_detalle cuenta destino] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[operacion]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[operacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tipoDeOperacion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_operacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[perfilUsuario]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[perfilUsuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[dni] [varchar](50) NULL,
	[genero] [nvarchar](50) NULL,
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[fechaNacimiento] [datetime] NULL,
	[cuil_cuit] [varchar](50) NULL,
	[calle] [nvarchar](50) NULL,
	[numero_de_calle] [nvarchar](50) NULL,
	[barrio] [nvarchar](50) NULL,
	[codigo_postal] [nvarchar](50) NULL,
	[ciudad] [nvarchar](50) NULL,
	[estado] [nvarchar](50) NULL,
	[telefono] [nchar](10) NULL,
	[frente_dni] [image] NULL,
	[dorso_dni] [image] NULL,
	[respuesta] [nvarchar](50) NULL,
 CONSTRAINT [PK_cuenta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transaccion]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transaccion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_billetera] [int] NOT NULL,
	[id_cuentaDestino] [int] NOT NULL,
	[id_operacion] [int] NOT NULL,
	[monto] [decimal](18, 0) NULL,
	[descripcion] [nvarchar](50) NULL,
	[fecha] [datetime] NULL,
 CONSTRAINT [PK_transaccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[billetera]  WITH CHECK ADD  CONSTRAINT [FK_billetera_perfilUsuario] FOREIGN KEY([idCuenta])
REFERENCES [dbo].[perfilUsuario] ([id])
GO
ALTER TABLE [dbo].[billetera] CHECK CONSTRAINT [FK_billetera_perfilUsuario]
GO
ALTER TABLE [dbo].[datosBancarios]  WITH CHECK ADD  CONSTRAINT [FK_datos bancarios_billetera] FOREIGN KEY([id])
REFERENCES [dbo].[billetera] ([id])
GO
ALTER TABLE [dbo].[datosBancarios] CHECK CONSTRAINT [FK_datos bancarios_billetera]
GO
ALTER TABLE [dbo].[detalleTransaccion]  WITH CHECK ADD  CONSTRAINT [FK_detalle cuenta destino_cuenta destino] FOREIGN KEY([id_transaccion])
REFERENCES [dbo].[cuentaDestino] ([id])
GO
ALTER TABLE [dbo].[detalleTransaccion] CHECK CONSTRAINT [FK_detalle cuenta destino_cuenta destino]
GO
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_billetera] FOREIGN KEY([id_billetera])
REFERENCES [dbo].[billetera] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_billetera]
GO
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_operacion] FOREIGN KEY([id_operacion])
REFERENCES [dbo].[operacion] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_operacion]
GO
/****** Object:  StoredProcedure [dbo].[billeteraInsert]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[billeteraInsert]
	-- Add the parameters for the stored procedure here
	@nombre varchar(50),
	@CVU nvarchar(50),
	@idCuenta int,
	@tipoDeCuenta nvarchar(50),
	@alias nvarchar(50),
	@numeroDeCuenta nvarchar(50),
	@situacionCrediticia nvarchar(50)
AS
BEGIN
INSERT INTO billetera([Nombre], [CVU] ,[idCuenta], [tipoDeCuenta], [alias], [numeroDeCuenta], [situacionCrediticia], [saldo]) VALUES (@nombre, @CVU, @idCuenta, 	@tipoDeCuenta,
	@alias ,
	@numeroDeCuenta,
	@situacionCrediticia,
	0)
	SELECT CAST (scope_identity() AS int)
END
GO
/****** Object:  StoredProcedure [dbo].[billeteraSelectAll]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[billeteraSelectAll]
AS
	SELECT id, Nombre, CVU, idCuenta, tipoDeCuenta, alias, numeroDeCuenta, situacionCrediticia FROM billetera
GO
/****** Object:  StoredProcedure [dbo].[billeteraSelectById]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[billeteraSelectById]
	@id int
AS
	SELECT b.Nombre, b.CVU, pu.nombre, b.tipoDeCuenta, b.alias, b.numeroDeCuenta, b.situacionCrediticia, b.idCuenta FROM billetera as b 
	INNER JOIN perfilUsuario as pu ON b.idCuenta = pu.id
	WHERE b.id = @id
GO
/****** Object:  StoredProcedure [dbo].[billeteraSelectByIdCuenta]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[billeteraSelectByIdCuenta]
	@id int
AS
	SELECT b.id, b.Nombre, b.CVU, pu.nombre, b.tipoDeCuenta, b.alias, b.numeroDeCuenta, b.situacionCrediticia, saldo, b.idCuenta FROM billetera as b
	INNER JOIN perfilUsuario as pu ON b.idCuenta = pu.id
	WHERE idCuenta = @id
GO
/****** Object:  StoredProcedure [dbo].[billeteraUpdateById]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[billeteraUpdateById]
	@id int,
	@nombre varchar(50),
	@CVU nvarchar(50),
	@idCuenta int,
	@tipoDeCuenta nvarchar(50),
	@alias nvarchar(50),
	@numeroDeCuenta nvarchar(50),
	@situacionCrediticia nvarchar(50)
AS
	UPDATE billetera SET Nombre = @nombre, CVU = @CVU, idCuenta = @idCuenta, tipoDeCuenta = @tipoDeCuenta, alias = @alias, numeroDeCuenta = @numeroDeCuenta, situacionCrediticia = @situacionCrediticia WHERE @id = id
GO
/****** Object:  StoredProcedure [dbo].[deleteUsuario]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[deleteUsuario]
(
@id INT,
@estado nvarchar(50)
)
AS
UPDATE perfilUsuario set @estado = 'FALSE'
WHERE @id = id
GO
/****** Object:  StoredProcedure [dbo].[insertar_usuario]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[insertar_usuario]
	@email nvarchar(50),
	@password nvarchar(50)
AS

BEGIN
	INSERT INTO perfilUsuario (email, password, estado) VALUES (@email, @password, 'TRUE');
	SELECT CAST (scope_identity() AS int)
END
GO
/****** Object:  StoredProcedure [dbo].[InsertdetalleTransaccion]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[InsertdetalleTransaccion]
	@motivo nvarchar(50),
	@descripcion nvarchar(50),
	@monto decimal,
	@fecha dateTime,
	@idTransaccion int

AS
BEGIN
	INSERT INTO detalleTransaccion (motivo, descripcion, monto, fecha, id_transaccion) VALUES (@motivo, @descripcion, @monto, @fecha, @idTransaccion);
	SELECT CAST (scope_identity() AS int)
END

GO
/****** Object:  StoredProcedure [dbo].[insertTransacciones]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[insertTransacciones]
@idBilletera int,
@idCuentaDestino int,
@idOperacion int,
@monto decimal,
@descripcion nvarchar(50),
@fecha datetime
AS
BEGIN
INSERT INTO transaccion ([id_billetera], [id_cuentaDestino], [id_operacion], [monto], [descripcion], [fecha]) VALUES (@idBilletera, @idCuentaDestino, @idOperacion, @monto, @descripcion, @fecha);	
SELECT CAST (scope_identity() AS int) 
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_login]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[obtener_login] 
	@email nvarchar(50),
	@password nvarchar(50)

AS
BEGIN
	SELECT id FROM perfilUsuario
	WHERE email = @email AND password = @password AND estado = 'TRUE'
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_respuestaSecreta]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[obtener_respuestaSecreta] 
	@email nvarchar(50)

AS
BEGIN
	SELECT * FROM perfilUsuario
	WHERE email = @email 
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuario]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[obtener_usuario]
	@id int
AS

BEGIN
	SELECT id, nombre, apellido, dni, genero, fechaNacimiento, cuil_cuit,  calle, numero_de_calle, barrio, codigo_postal, ciudad, telefono FROM perfilUsuario
	WHERE @id = id
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuarioLogin]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[obtener_usuarioLogin]
	@email nvarchar(50),
	@password nvarchar(50)
AS

BEGIN
	SELECT id FROM perfilUsuario
	WHERE email = @email AND password = @password
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuarios]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[obtener_usuarios] 

AS
BEGIN
	SELECT id, email, password, estado FROM perfilUsuario
END
GO
/****** Object:  StoredProcedure [dbo].[SelectBilleteraByCbu]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SelectBilleteraByCbu]
	@cvu nvarchar(50)
AS
BEGIN

	SELECT id, idCuenta FROM billetera WHERE cvu = @cvu
END
GO
/****** Object:  StoredProcedure [dbo].[selectBilleteraIDByCuentaId]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[selectBilleteraIDByCuentaId]
@idCuenta int
AS
BEGIN

	SELECT id FROM billetera WHERE idCuenta = @idCuenta
END
GO
/****** Object:  StoredProcedure [dbo].[SelectOperacion]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SelectOperacion]
 @nombre nvarchar(50)
 AS
 BEGIN
	SELECT id FROM operacion WHERE tipoDeOperacion = @nombre
END
GO
/****** Object:  StoredProcedure [dbo].[selectSaldo]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[selectSaldo]
@id int
AS
SELECT saldo FROM billetera WHERE idCuenta = @id 
GO
/****** Object:  StoredProcedure [dbo].[selectTransaccionById]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[selectTransaccionById]
@id int
AS
SELECT TOP 10 t.monto, t.descripcion, b.Nombre, b2.Nombre, o.tipoDeOperacion FROM transaccion as t 
INNER JOIN billetera as b ON b.id = t.id_billetera
INNER JOIN billetera as b2 ON b2.id = t.id_cuentaDestino
INNER JOIN operacion as o ON t.id_operacion = o.id
WHERE (t.id_billetera = @id) ORDER BY t.id DESC
GO
/****** Object:  StoredProcedure [dbo].[update_Usuario]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[update_Usuario]
(
	@id INT,
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni nvarchar(50),
	@genero nvarchar(50),
	@fechaNacimiento date,
	@cuil_cuit nvarchar(50),
	@calle nvarchar(50),
	@numero_de_calle nvarchar(50),
	@barrio nvarchar(50),
	@codigo_postal nvarchar(50),
	@ciudad nvarchar(50),
	@telefono nchar(50)


) 
AS
BEGIN 
	UPDATE perfilUsuario 
	SET nombre = @nombre, apellido = @apellido, dni = @dni, genero = @genero, fechaNacimiento = @fechaNacimiento, cuil_cuit = @cuil_cuit, calle = @calle, numero_de_calle = @numero_de_calle, barrio = @barrio, codigo_postal = @codigo_postal, ciudad = @ciudad, telefono = @telefono
	WHERE @id = id
END
GO
/****** Object:  StoredProcedure [dbo].[updateSaldo]    Script Date: 25/01/2021 22:52:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[updateSaldo]
@id int,
@saldo float --crear campo en billetera
AS
BEGIN
UPDATE billetera SET saldo = @saldo WHERE idCuenta  = @id
END
GO
USE [master]
GO
ALTER DATABASE [billetera_virtual] SET  READ_WRITE 
GO

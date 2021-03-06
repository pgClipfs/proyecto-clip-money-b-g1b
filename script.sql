USE [billetera_virtual]
GO
/****** Object:  Table [dbo].[billetera]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[billetera](
	[id] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[CVU] [nvarchar](50) NOT NULL,
	[idCuenta] [int] NOT NULL,
 CONSTRAINT [PK_billetera_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cuenta destino]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cuenta destino](
	[id] [int] NOT NULL,
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
/****** Object:  Table [dbo].[datos bancarios]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[datos bancarios](
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
/****** Object:  Table [dbo].[detalle cuenta destino]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalle cuenta destino](
	[id] [int] NOT NULL,
	[motivo] [varchar](50) NULL,
	[descripcion] [varchar](50) NULL,
	[monto] [float] NOT NULL,
	[fecha] [datetime] NOT NULL,
	[tipoDeOperacion] [varchar](50) NOT NULL,
	[id_cuentaDestino] [int] NOT NULL,
 CONSTRAINT [PK_detalle cuenta destino] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[operacion]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[operacion](
	[id] [int] NOT NULL,
	[tipoDeOperacion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_operacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[perfilUsuario]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[perfilUsuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[dni] [varchar](50) NULL,
	[email] [nvarchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[fechaNacimiento] [nvarchar](50) NULL,
	[cuil_cuit] [varchar](50) NULL,
	[estado] [nvarchar](50) NULL,
 CONSTRAINT [PK_cuenta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transaccion]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transaccion](
	[id] [int] NOT NULL,
	[id_billetera] [int] NOT NULL,
	[id_cuentaDestino] [int] NOT NULL,
	[id_operacion] [int] NOT NULL,
 CONSTRAINT [PK_transaccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[perfilUsuario] ON 

INSERT [dbo].[perfilUsuario] ([id], [nombre], [apellido], [dni], [email], [password], [fechaNacimiento], [cuil_cuit], [estado]) VALUES (0, N'Markus Ezequiel', N'Heredia Cifuentes', N'99999999', N'eze.heredia023@gmail.com', N'123456', N'3 2 1990', N'20-99999999-2', N'TRUE')
INSERT [dbo].[perfilUsuario] ([id], [nombre], [apellido], [dni], [email], [password], [fechaNacimiento], [cuil_cuit], [estado]) VALUES (1, NULL, NULL, NULL, N'eze023@gmail.com', N'123456', NULL, NULL, N'TRUE')
INSERT [dbo].[perfilUsuario] ([id], [nombre], [apellido], [dni], [email], [password], [fechaNacimiento], [cuil_cuit], [estado]) VALUES (2, NULL, NULL, NULL, N'gime@gmail.com', N'123456', NULL, NULL, N'TRUE')
INSERT [dbo].[perfilUsuario] ([id], [nombre], [apellido], [dni], [email], [password], [fechaNacimiento], [cuil_cuit], [estado]) VALUES (4, NULL, NULL, NULL, N'felisa@gmail.com', N'123456', NULL, NULL, N'TRUE')
SET IDENTITY_INSERT [dbo].[perfilUsuario] OFF
GO
ALTER TABLE [dbo].[billetera]  WITH CHECK ADD  CONSTRAINT [FK_billetera_perfilUsuario] FOREIGN KEY([idCuenta])
REFERENCES [dbo].[perfilUsuario] ([id])
GO
ALTER TABLE [dbo].[billetera] CHECK CONSTRAINT [FK_billetera_perfilUsuario]
GO
ALTER TABLE [dbo].[datos bancarios]  WITH CHECK ADD  CONSTRAINT [FK_datos bancarios_billetera] FOREIGN KEY([id])
REFERENCES [dbo].[billetera] ([id])
GO
ALTER TABLE [dbo].[datos bancarios] CHECK CONSTRAINT [FK_datos bancarios_billetera]
GO
ALTER TABLE [dbo].[detalle cuenta destino]  WITH CHECK ADD  CONSTRAINT [FK_detalle cuenta destino_cuenta destino] FOREIGN KEY([id_cuentaDestino])
REFERENCES [dbo].[cuenta destino] ([id])
GO
ALTER TABLE [dbo].[detalle cuenta destino] CHECK CONSTRAINT [FK_detalle cuenta destino_cuenta destino]
GO
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_billetera] FOREIGN KEY([id_billetera])
REFERENCES [dbo].[billetera] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_billetera]
GO
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_cuenta destino] FOREIGN KEY([id_cuentaDestino])
REFERENCES [dbo].[cuenta destino] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_cuenta destino]
GO
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_operacion] FOREIGN KEY([id_operacion])
REFERENCES [dbo].[operacion] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_operacion]
GO
/****** Object:  StoredProcedure [dbo].[deleteUsuario]    Script Date: 30/11/2020 16:31:06 ******/
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
/****** Object:  StoredProcedure [dbo].[insertar_usuario]    Script Date: 30/11/2020 16:31:06 ******/
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
/****** Object:  StoredProcedure [dbo].[obtener_login]    Script Date: 30/11/2020 16:31:06 ******/
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
	SELECT * FROM perfilUsuario
	WHERE email = @email AND password = @password AND estado = 'TRUE'
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuario]    Script Date: 30/11/2020 16:31:06 ******/
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
	@id INT
AS

BEGIN
	SELECT id, nombre, apellido, dni, fechaNacimiento, cuil_cuit FROM perfilUsuario
	WHERE @id = id
END
GO
/****** Object:  StoredProcedure [dbo].[obtener_usuarios]    Script Date: 30/11/2020 16:31:06 ******/
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
/****** Object:  StoredProcedure [dbo].[update_Usuario]    Script Date: 30/11/2020 16:31:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[update_Usuario]
(
	@id INT,
	@nombre nvarchar(50),
	@apellido nvarchar(50),
	@dni INT,
	@fecha nvarchar(50),
	@cuil INT
) 
AS
BEGIN
	UPDATE perfilUsuario SET @nombre = nombre, @apellido = apellido, @dni = dni, @fecha = fechaNacimiento, @cuil = cuil_cuit 
	WHERE @id = id
END
GO

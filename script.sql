USE [master]
GO
/****** Object:  Database [Billetera_Virtual]    Script Date: 9/30/2020 7:53:21 PM ******/
CREATE DATABASE [Billetera_Virtual]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Billetera_Virtual', FILENAME = N'D:\SQL2019\Microsoft SQL Server\MSSQL15.MSSQL\MSSQL\DATA\Billetera_Virtual.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Billetera_Virtual_log', FILENAME = N'D:\SQL2019\Microsoft SQL Server\MSSQL15.MSSQL\MSSQL\DATA\Billetera_Virtual_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Billetera_Virtual] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Billetera_Virtual].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Billetera_Virtual] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET ARITHABORT OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Billetera_Virtual] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Billetera_Virtual] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Billetera_Virtual] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Billetera_Virtual] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Billetera_Virtual] SET  MULTI_USER 
GO
ALTER DATABASE [Billetera_Virtual] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Billetera_Virtual] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Billetera_Virtual] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Billetera_Virtual] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Billetera_Virtual] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Billetera_Virtual] SET QUERY_STORE = OFF
GO
USE [Billetera_Virtual]
GO
/****** Object:  Table [dbo].[banco]    Script Date: 9/30/2020 7:53:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[banco](
	[id] [int] NOT NULL,
	[cvu] [char](22) NOT NULL,
	[nombre] [varchar](50) NULL,
	[idCuenta] [int] NOT NULL,
 CONSTRAINT [PK_banco] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[billetera]    Script Date: 9/30/2020 7:53:21 PM ******/
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
/****** Object:  Table [dbo].[cuenta destino]    Script Date: 9/30/2020 7:53:21 PM ******/
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
/****** Object:  Table [dbo].[datos bancarios]    Script Date: 9/30/2020 7:53:21 PM ******/
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
	[situacionCrediticia] [smallint] NULL,
 CONSTRAINT [PK_datos bancarios_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalle cuenta destino]    Script Date: 9/30/2020 7:53:21 PM ******/
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
/****** Object:  Table [dbo].[operacion]    Script Date: 9/30/2020 7:53:21 PM ******/
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
/****** Object:  Table [dbo].[perfilUsuario]    Script Date: 9/30/2020 7:53:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[perfilUsuario](
	[id] [int] NOT NULL,
	[fotoDniFrente] [varchar](50) NOT NULL,
	[fotoDniRev] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[dni] [int] NOT NULL,
	[fechaNacimiento] [datetime] NOT NULL,
	[cuil_cuit] [int] NOT NULL,
 CONSTRAINT [PK_cuenta] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[transaccion]    Script Date: 9/30/2020 7:53:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[transaccion](
	[id] [int] NOT NULL,
	[id_perfilUsuario] [int] NOT NULL,
	[id_cuentaDestino] [int] NOT NULL,
	[id_operacion] [int] NOT NULL,
 CONSTRAINT [PK_transaccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuario]    Script Date: 9/30/2020 7:53:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuario](
	[id] [int] NOT NULL,
	[nombreCuenta] [varchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[banco]  WITH CHECK ADD  CONSTRAINT [FK_banco_cuenta] FOREIGN KEY([idCuenta])
REFERENCES [dbo].[perfilUsuario] ([id])
GO
ALTER TABLE [dbo].[banco] CHECK CONSTRAINT [FK_banco_cuenta]
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
ALTER TABLE [dbo].[perfilUsuario]  WITH CHECK ADD  CONSTRAINT [FK_cuenta_usuario] FOREIGN KEY([id])
REFERENCES [dbo].[usuario] ([id])
GO
ALTER TABLE [dbo].[perfilUsuario] CHECK CONSTRAINT [FK_cuenta_usuario]
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
ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_perfilUsuario] FOREIGN KEY([id_perfilUsuario])
REFERENCES [dbo].[perfilUsuario] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_perfilUsuario]
GO
USE [master]
GO
ALTER DATABASE [Billetera_Virtual] SET  READ_WRITE 
GO

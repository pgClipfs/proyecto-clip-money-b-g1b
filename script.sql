USE [master]
GO
/****** Object:  Database [billetera_virtual]    Script Date: 9/30/2020 7:53:21 PM ******/
CREATE DATABASE [billetera_virtual]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Billetera_Virtual', FILENAME = N'D:\SQL2019\Microsoft SQL Server\MSSQL15.MSSQL\MSSQL\DATA\Billetera_Virtual.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Billetera_Virtual_log', FILENAME = N'D:\SQL2019\Microsoft SQL Server\MSSQL15.MSSQL\MSSQL\DATA\Billetera_Virtual_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
ALTER DATABASE [billetera_virtual] SET QUERY_STORE = OFF
GO
USE [billetera_virtual]
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
	[nombreCuenta] [varchar](50) NOT NULL,
	[password] [nvarchar](50) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
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
	[id_billetera] [int] NOT NULL,
	[id_cuentaDestino] [int] NOT NULL,
	[id_operacion] [int] NOT NULL,
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

ALTER TABLE [dbo].[transaccion]  WITH CHECK ADD  CONSTRAINT [FK_transaccion_billetera] FOREIGN KEY([id_billetera])
REFERENCES [dbo].[billetera] ([id])
GO
ALTER TABLE [dbo].[transaccion] CHECK CONSTRAINT [FK_transaccion_billetera]
GO

USE [master]
GO
ALTER DATABASE [billetera_virtual] SET  READ_WRITE 
GO
USE [FileDB]
GO
/****** Object:  Table [dbo].[PostFile]    Script Date: 12/20/2021 10:23:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostFile](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[flname] [varchar](500) NULL,
	[flpath] [varchar](500) NULL
) ON [PRIMARY]
GO

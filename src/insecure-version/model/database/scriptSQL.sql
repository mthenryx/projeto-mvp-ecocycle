create database db_ecocycle_2026;

use db_ecocycle_2026;

show databases;

show tables;

create table tbl_doador (
	id 					int not null auto_increment primary key,
    nome 				varchar(100) not null,
    email				varchar(256) not null,
    senha				varchar(20) not null,
    data_criacao_conta	date not null default (current_date)
);

create table tbl_coletor (
	id 					int not null auto_increment primary key,
    nome 				varchar(100) not null,
    email				varchar(256) not null,
    senha				varchar(20) not null,
    data_criacao_conta  date not null
);

create table tbl_categoria_residuos (
	id 						 int not null auto_increment primary key,
	nome_categoria_residuos  varchar(30) not null
);

create table tbl_estado (
	id 			 int not null auto_increment primary key,
    nome_estado  varchar(35) not null,
    sigla 		 varchar(3) not null
);

create table tbl_cidade (
	id 			 int not null auto_increment primary key,
	nome_cidade  varchar(35) not null,
    id_estado	 int not null,
    
    constraint FK_ESTADO_CIDADE
    foreign key (id_estado)
    references tbl_estado(id)
);

create table tbl_endereco (
	id 			 int not null auto_increment primary key,
    logradouro	 varchar(50) not null,
    complemento  varchar(50),
    cep 		 varchar(10) not null,
    numero 		 varchar(5),
    id_cidade 	 int not null,
    
    constraint FK_CIDADE_ENDERECO
    foreign key (id_cidade)
    references tbl_cidade(id)
);

create table tbl_ponto_de_coleta (
	id 					   int not null auto_increment primary key,
    descricao_do_material  varchar(100) not null,
    titulo 				   varchar(35) not null,
    status_ponto           varchar(20) not null,
    quantidade_estimada    int not null,
    data_horario           datetime not null,
    foto                   varchar(2000) not null,
    id_doador              int not null,
    id_endereco            int not null,
    
    constraint FK_DOADOR_PONTO_DE_COLETA
    foreign key (id_doador)
    references tbl_doador(id),
    
    constraint FK_ENDERECO_PONTO_DE_COLETA
    foreign key (id_endereco)
    references tbl_endereco(id)
);

create table tbl_ponto_de_coleta_categoria_residuos (
	id                     int not null auto_increment primary key,
    id_ponto_de_coleta     int not null,
    id_categoria_residuos  int not null,
    
    constraint FK_PONTO_DE_COLETA_PONTO_DE_COLETA_CATEGORIA_RESIDUOS
    foreign key (id_ponto_de_coleta)
    references tbl_ponto_de_coleta(id),
    
    constraint FK_CATEGORIA_RESIDUOS_PONTO_DE_COLETA_CATEGORIA_RESIDUOS
    foreign key (id_categoria_residuos)
    references tbl_categoria_residuos(id)
);

create table tbl_coletor_ponto_de_coleta (
	id                  int not null auto_increment primary key,
    id_coletor          int not null,
    id_ponto_de_coleta  int not null,
    
    constraint FK_COLETOR_COLETOR_PONTO_DE_COLETA
    foreign key (id_coletor)
    references tbl_coletor(id),
    
    constraint FK_PONTO_DE_COLETA_COLETOR_PONTO_DE_COLETA
    foreign key (id_ponto_de_coleta)
    references tbl_ponto_de_coleta(id)
);
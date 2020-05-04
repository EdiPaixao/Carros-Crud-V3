create database db_carros

use db_carros;

CREATE TABLE usuario (
	id INT auto_increment primary key,
    usuarioidnome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(250) NOT NULL,
    idade INT(3) NOT NULL,
    dataNascimento DATE NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(250) NOT NULL,
    senha VARCHAR(20) NOT NULL
)

CREATE TABLE marca (
	id INT auto_increment primary key,
    nome VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL,
    anoFundacao INT(4) NOT NULL,
    urlLogo VARCHAR(250) NOT NULL
)

CREATE TABLE veiculo (
	id INT auto_increment primary key,
    idMarca INT NOT NULL,
    idUsuario INT NOT NULL,
    nomeMarca VARCHAR(100) NOT NULL,
    nomeVeiculo VARCHAR(100) NOT NULL,
    versao VARCHAR(100) NOT NULL,
    ano INT(4) NOT NULL,
    modelo INT(4) NOT NULL,
    km VARCHAR(10) NOT NULL,
    placa VARCHAR(10) NOT NULL,
    chassis VARCHAR(50) NOT NULL,
    urlImagemCarro VARCHAR(250) NOT NULL
)

CREATE TABLE chaveAcesso (
	id INT auto_increment primary key,
	idUsuario INT NOT NULL,
    chaveAcesso VARCHAR(15) NOT NULL,
    validade DATE NOT NULL
)


drop table veiculo

select * from usuario
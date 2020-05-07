create database instagram;

use instagram;

CREATE TABLE usuarios(
id int primary key auto_increment,
nome varchar(45) not null,
email varchar(192) unique not null,
nome_usuario varchar(45) unique not null,
senha varchar (45) unique not null
);

CREATE TABLE publicacoes(
id int primary key auto_increment,
titulo varchar(45) not null,
texto varchar(45),
imagem varchar(11) not null,
usuarios_id int,
foreign key(usuarios_id) references usuarios(id)
);

CREATE TABLE comentarios(
id int primary key auto_increment,
comentario varchar(45) not null,
usuarios_id int,
foreign key(usuarios_id) references usuarios(id),
publicacoes_id int,
foreign key(publicacoes_id) references publicacoes(id)
);


insert into usuarios(nome, email, nome_usuario, senha) values();
insert into publicacoes (titulo, texto, imagem, usuarios_id) values ();
insert into comentarios (comentario, usuarios_id, publicacoes_id) values();






use escola;

CREATE TABLE alunos(
id int primary key auto_increment,
nome varchar(45),
email varchar(192) unique not null
);

CREATE TABLE professores(
id int primary key auto_increment,
nome varchar(45),
cpf varchar(11) unique not null
);

CREATE TABLE cursos(
id int primary key auto_increment,
nome varchar(45),
duracao varchar(45),
professor_id int,
foreign key(professor_id) references professores(id)
);

alter table alunos add curso_id int;
alter table alunos add foreign key(curso_id) references cursos(id);


insert into cursos(nome, duracao) values("fullStack", "5 meses");
insert into cursos values (null, "Marketing", "5 meses", null);
select * from cursos;

insert into professores (nome, cpf) values("Vini", "12345678911");
select * from professores;

update cursos set professores_id = 1 where id = 1;

delete from cursos where id =2;

insert into alunos values(null, "Marcelo", "marcelo@aluno.br",  1);
insert into alunos values(null, "Pedro", "pedro@aluno.br",  1);
insert into alunos values(null, "Mariana", "mariana@aluno.br", 1);

select * from alunos;

select alunos.id, alunos.nome, cursos.nome as "cursando" from alunos
inner join cursos on alunos.curso_id =  curso_id;

create table materias (
	id int primary key auto_increment,
    nome varchar(45)
);

create table grade_curso(
	id int primary key auto_increment,
    curso_id int,
    materia_id int,
    foreign key(curso_id) references cursos(id),
	foreign key(materia_id) references materias(id)
);

select * from grade_curso;


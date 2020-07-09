create database escola;
use escola;
drop table cursos;

create table cursos (
id int primary key auto_increment,
nome varchar(50) ,
descricao varchar(300) 
); 

insert into cursos values (1,'Curso de java', 'Curso com duração de 24 horas');

select * from cursos;


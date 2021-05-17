CREATE DATABASE nodedbdesafio;

use nodedbdesafio;

CREATE TABLE clubes(
  id int(11) auto_increment not null,
  nome varchar(255) not null,
  pontuacao int null,
  PRIMARY KEY (id)
);

INSERT INTO clubes(nome,pontuacao) values('Grêmio',100);
INSERT INTO clubes(nome,pontuacao) values('Internacional',0);
INSERT INTO clubes(nome,pontuacao) values('IBIS',50);
INSERT INTO clubes(nome,pontuacao) values('Nautico',30);
INSERT INTO clubes(nome,pontuacao) values('Juventude',65);
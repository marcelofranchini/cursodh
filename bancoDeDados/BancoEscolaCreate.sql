
use escola;

CREATE TABLE logs_usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(192),
    email VARCHAR(192) UNIQUE,
    create_at DATETIME,
    update_at DATETIME,
);
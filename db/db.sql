/*
Server: sql9.freemysqlhosting.net
Name: sql9650030
Username: sql9650030
Password: rFxy2GqGA5
Port number: 3306
*/

USE grupo_mexico;

CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (180) NOT NULL UNIQUE,
    name VARCHAR (90) NOT NULL,
    lastname VARCHAR (90) NOT NULL,
    phone VARCHAR (90) NOT NULL UNIQUE,
    image VARCHAR (255) NULL,
	password VARCHAR (90) NOT NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL
    
);


USE grupo_mexico;

CREATE TABLE roles(
	id BIGINT PRIMARY KEY auto_increment,
    name varchar(90) NOT NULL UNIQUE,
    image varchar(255) null,
    route varchar(180) not null,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);

INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
 )
 VALUES(
	'RESTAURANTE', 
    '/restaurant/orders/list',
    '2023-08-16',
    '2023-08-16'
    
 );
 
 
INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
 )
 VALUES(
	'CLIENTE', 
    '/client/products/list',
    '2023-08-16',
    '2023-08-16'
    
 );
 
 INSERT INTO roles(
	name,
    route,
    created_at,
    updated_at
 )
 VALUES(
	'REPARTIDOR', 
    '/delivery/orders/list',
    '2023-08-16',
    '2023-08-16'
    
 );
 
 CREATE TABLE user_has_roles(
	id_user BIGINT NOT NULL,
    id_rol bigint NOT NULL,
	created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
    foreign key(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    foreign key(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_user, id_rol)
 );


//--------------------------------------------------

  USE grupo_mexico;

  
  CREATE TABLE user_has_car(
    id_user BIGINT NOT NULL,
    image VARCHAR (255) NULL,
    alias VARCHAR (90) NOT NULL,
    number_plate VARCHAR (90) NOT NULL,
    mark VARCHAR (90) NOT NULL,
    model VARCHAR (90) NOT NULL,
    year VARCHAR (90) NOT NULL,
    edges VARCHAR (90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
    foreign key(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_user)
 );


//---------------------------------------------
  USE grupo_mexico;

  
  CREATE TABLE user_card(
    id_user BIGINT NOT NULL,
    id_card VARCHAR (255) NULL,
    number_card VARCHAR (255) NULL,
    nip VARCHAR (90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
    foreign key(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
 );




  SET SQL_SAFE_UPDATES = 0;
DELETE FROM grupo_mexico.user_has_car
 WHERE alias='Milk';
 
 SET SQL_SAFE_UPDATES = 1;


 USE grupo_mexico;

  
  CREATE TABLE road_services(
    id_user BIGINT NOT NULL,
    id_card VARCHAR (255) NULL,
    number_card VARCHAR (255) NULL,
    nip VARCHAR (90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
    foreign key(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
 );


  CREATE TABLE road_services(
    id_services BIGINT NOT NULL,
    name VARCHAR (255) NULL,
    adress VARCHAR (255) NULL,
    lat VARCHAR (255) NULL,
    lon VARCHAR (255) NULL,
    cost VARCHAR (255) NULL,
        created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
 );


//--
USE reactrojo;

CREATE TABLE USUARIO_ACCIDENTE(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(255),
apellido VARCHAR(255),
email VARCHAR(255),
telefono VARCHAR(255),
coche VARCHAR(255),
latitud VARCHAR(255),
longuitud VARCHAR(255),
placa VARCHAR(255)
);

select * from USUARIO_ACCIDENTE;

CREATE TABLE NOTIFICACIONES_IMG(
	Id INT AUTO_INCREMENT PRIMARY KEY,
	Titulo VARCHAR(255),
    Descripcion TEXT,
    URLImagen VARCHAR(255),
    Emission_date DATE,
    Finalizacion_date DATE
);

CREATE TABLE road_services(
    id_services BIGINT NOT NULL,
    name VARCHAR(255),
    adress VARCHAR(255),
    lat VARCHAR(255),
    lon VARCHAR(255),
    cost VARCHAR(255),
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);

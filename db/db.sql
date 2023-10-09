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
    id_services BIGINT NULL,
    name VARCHAR (255) NULL,
    adress VARCHAR (255) NULL,
    lat VARCHAR (90)  NULL,
    lat VARCHAR (90)  NULL,
    cost VARCHAR (90)  NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL,
 );


'SALAMANCA', 'León - Salamanca, 36821 Gto., México', '20.7512171', '-101.3382715', '180', '2023-10-05 15:40:12', '2023-10-05 15:40:12', NULL
'PERRO DE MUNDO', 'Alfonso Reyes 84, Hipódromo Condesa, Cuauhtémoc, 06170 Ciudad de México, CDMX', '19.4123884', '-99.1770728', '180', '2023-10-05 15:46:13', '2023-10-05 15:46:13', NULL
'Walmart Express', 'C. Pachuca 99, Colonia Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX', '19.4126523', '-99.1801639', '180', '2023-10-05 15:47:29', '2023-10-05 15:47:29', NULL
'Lovecraft Café', 'A una cuadra del metro Juanacatlán, Circuito Interior José Vasconcelos, 1a sección #115 Col, San Miguel Chapultepec I Secc, Miguel Hidalgo, 11850 Ciudad de México, CDMX', '19.4116534', '-99.1802201', '180', '2023-10-05 15:48:18', '2023-10-05 15:48:18', NULL

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

 );
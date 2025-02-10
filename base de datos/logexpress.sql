create database log_express;
use log_express;

create table usuarios(
id int primary key ,
nombre varchar (50)not null,
email varchar (100)not null,
password float (50)null ,
telefono float (13)not null
);
create table localizacion (
id int auto_increment ,
direccion varchar(40)not null,
fecha_salida timestamp not null,
fecha_entrega timestamp not null,
ciudad varchar (20)not null,
codigo_psotal varchar (30)not null,
primary key (id)
);
create table Ruta_entrega(
id int auto_increment ,
    origen varchar(1000) not null,
    destino varchar(1000) not null,
    distancia float not null,
    tiempo_estimado float not null,
punto_referencia varchar(30) not null,
primary key (id)
);

create table estados_envio(
    id int auto_increment,
    estado varchar(30) not null,
    descripcion varchar(500) not null,
    primary key(id)
);

create table paqueteria(
    id int auto_increment,
    id_usuario int not null,
    titulo varchar(100) not null,
    descripcion varchar(500) not null,
    peso float not null,
    fecha_salida timestamp not null,
    fecha_entrega timestamp not null,
    dimensiones varchar (35) not null, 
    id_estado int not null,
    id_ruta int not null,
    id_localizacion  int not null,
    primary key(id),
    foreign key(id_usuario) references usuarios(id),
    foreign key(id_estado) references estados_envio(id),
    foreign key(id_ruta) references Ruta_entrega(id),
    foreign key(id_localizacion) references localizacion(id)
);

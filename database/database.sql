
CREATE DATABASE peluqueria;
USE peluqueria;
CREATE TABLE empleados(
    dni INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellido_paterno VARCHAR(180),
    apellido_materno VARCHAR(180),
    especialidad VARCHAR(180)
);

DESCRIBE empleados;

/* Crear tabla especialidad */

INSERT INTO empleados VALUES (DEFAULT, 'Maria', 'Lopez', 'Aguilar', 'Corte caballero');
INSERT INTO empleados VALUES (DEFAULT, 'Armando', 'Martinez', 'Najera', 'Masaje');
INSERT INTO empleados VALUES (DEFAULT, 'Sofia', 'Villanueva', 'Garcia', 'Rulos');

CREATE TABLE clientes(
    dni INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    apellido_paterno VARCHAR(180),
    apellido_materno VARCHAR(180),
    profesion VARCHAR(180),
    telefono VARCHAR(180),
    calle VARCHAR(180),
    colonia VARCHAR(180),
    numero_casa VARCHAR(180),
    tratamientos_medicos VARCHAR(255)
);

DESCRIBE clientes;

/* Pendiente tabla tratamientos_medicos */

INSERT INTO clientes VALUES (DEFAULT, 'Manuel', 'Rosales', 'Hernandez', 'Profesor', '844-556-6316', 'Salvador Rueda', 'Anahuac', '345A', 'Apendicitis');
INSERT INTO clientes VALUES (DEFAULT, 'Abigail', 'Gutierrez', 'Perez', 'Contadora', '811-776-9981', 'Pedro Ampudia', 'Guayulera', '784', 'Ninguno');
INSERT INTO clientes VALUES (DEFAULT, 'Hortensia', 'Ortega', 'Ortiz', 'Quimica', '844-160-0964', 'Juan Saade Murra', 'Tulipanes', '635', 'Mareos');
INSERT INTO clientes VALUES (DEFAULT, 'Rodolfo', 'Rivera', 'Monjaras', 'Programador', '811-333-0955', 'Puerta de Oriente', 'Asia', '342', 'Ninguno');
INSERT INTO clientes VALUES (DEFAULT, 'Ezra', 'Medina', 'Ortega', 'Directora de primaria', '844-231-6065', 'Cactus', 'Sol naciente', '654A', 'Paro cardiaco');

CREATE TABLE servicios(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dni_cliente INT(11),
    dni_empleado INT(11),
    servicio VARCHAR(180),
    fecha_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dni_cliente) REFERENCES clientes(dni),
    FOREIGN KEY (dni_empleado) REFERENCES empleados(dni)
);

INSERT INTO servicios VALUES (DEFAULT, 1, 1, 'Corte caballero', TIMESTAMP('2019-03-30'));
INSERT INTO servicios VALUES (DEFAULT, 2, 3, 'Rulos', DEFAULT);
INSERT INTO servicios VALUES (DEFAULT, 3, 2, 'Masaje', TIMESTAMP('2018-12-12'));

DESCRIBE servicios;

CREATE TABLE citas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha_hora TIMESTAMP,
    dni_cliente INT(11),
    dni_empleado INT(11),
    FOREIGN KEY (dni_cliente) REFERENCES clientes(dni),
    FOREIGN KEY (dni_empleado) REFERENCES empleados(dni)
);

INSERT INTO citas VALUES (DEFAULT, TIMESTAMP('2019-05-20', '13:30:00'), 5, 3);
INSERT INTO citas VALUES (DEFAULT, TIMESTAMP('2019-05-21', '16:30:00'), 4, 1);
INSERT INTO citas VALUES (DEFAULT, TIMESTAMP('2019-05-21', '17:00:00'), 3, 3);

DESCRIBE citas;

CREATE TABLE cosmeticos(
    codigo INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    cantidad INT,
    PRECIO FLOAT
);

INSERT INTO cosmeticos VALUES (DEFAULT, 'Brocha para ojos', 10, 161.90);
INSERT INTO cosmeticos VALUES (DEFAULT, 'Tratamiento para pestañas', 20, 233.90);
INSERT INTO cosmeticos VALUES (DEFAULT, 'Crema rizado natural', 10, 300.50);
INSERT INTO cosmeticos VALUES (DEFAULT, 'Pete and Pedro Putty', 50, 100.50);

DESCRIBE cosmeticos;

CREATE TABLE ventas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    comision FLOAT,
    dni_cliente INT(11),
    dni_empleado INT(11),
    codigo_cosmetico INT(11),
    FOREIGN KEY (dni_empleado) REFERENCES empleados(dni),
    FOREIGN KEY (dni_cliente) REFERENCES clientes(dni),
    FOREIGN KEY (codigo_cosmetico) REFERENCES cosmeticos(codigo)
);

INSERT INTO ventas VALUES (DEFAULT, .12, 2, 1, 1);
INSERT INTO ventas VALUES (DEFAULT, .10, 3, 3, 3);
INSERT INTO ventas VALUES (DEFAULT, .20, 1, 2, 4);

DESCRIBE ventas;






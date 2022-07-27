# Prueba-copywrite
Para iniciar clonar el repositorio

#backend
-crear una base de datos en postgres SQL, nombre: text
-crear archivo .env 
  - crear las siguientes variables de entorno
  DB_USER, DB_PASSWORD, DB_HOST
#db.js

- en el archivo db copiar lo siguiente:
 const {
     DB_USER, DB_PASSWORD, DB_HOST,
   } = process.env;
- La constante DATABASEURL cambiarla por lo siguiente:
-`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`

- No olvidar hacer npm install
- Hacer npm start para levantar el proyecto 
- npm test para correr los test

#Frontend

- Hacer npm install
-luego npm start para levantar el proyecto

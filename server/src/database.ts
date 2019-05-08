import mysql from 'promise-mysql';

import keys from './keys'; // el objeto general se llama keys

// Crear conexion
const pool = mysql.createPool(keys.database);

// Conexion
pool.getConnection()
    .then(connection => { // si Si existió una conexion, la lanzo. 
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });

export default pool;










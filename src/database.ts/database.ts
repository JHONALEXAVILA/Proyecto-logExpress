import mysql2, { ConnectionOptions,ResultSetHeader, RowDataPacket } from 'mysql2/promise';


const connfig:ConnectionOptions = {
    host: 'localhost',
    user: ' root',          
    password: 'theviking4s',
    database: 'log_express',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
};

const pool = mysql2.createPool(connfig);

class Database{
   async query<t extends RowDataPacket[]|ResultSetHeader>( sql:string, values :any=null ){
const connection = await pool.getConnection();
 try{
     const [result]= await connection.query(sql, values);    
     return result as t;
 }finally{
        connection.release();
    }
 }
}

export default new Database;
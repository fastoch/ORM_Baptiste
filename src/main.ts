import { MySQLConnection } from "./connection/mySQL_connection";
import { ConnectionConfig } from "./connection/db_connection";
import { InsertQueryBuilder } from "./query_builders/insertQueryBuilder"
import { SelectQueryBuilder } from "./query_builders/selectQueryBuilder"
import { config } from 'dotenv';  

// Load environment variables from .env file
config();

/**
 * Our main method handles the full lifecycle: 
 * - reading configuration, 
 * - connecting, 
 * - executing the parameterized query, 
 * - and disconnecting safely.
 */
async function main() {

  // 1. Create connection config from environment variables
  // Make sure your .env file has DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, and DB_DATABASE
  const dbConfig: ConnectionConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  };

  // 2. Instantiate the connection
  const db = new MySQLConnection(dbConfig);

  try {
    // 3. Connect to the database
    await db.connect();
    console.log('Connected to the database');
    
    // 4. Build the insert query
    // NOTE: as noted in the README, the InsertQueryBuilder should be updated
    // to return the query string and paramaters separately to prevent SQL injection.
    // For now, we'll define them manually here.
    const userData = {
      username: "Baptiste",
      email: "baptiste@orm.com",
      password: "a_very_secure_password"
    };

    // This is what our builder should ideally produce:
    // const { query, params } = new InsertQueryBuilder().into("user").values(userData).build();
    const query = "";
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {

  }
}

main();


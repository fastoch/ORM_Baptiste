 //connection/mysql-connection.ts
import * as mysql from 'mysql2/promise';
import { ConnectionConfig } from "./connection-config";
import { IDatabaseConnection } from "./database-connection";

/**
 * Implementation of IDatabaseConnection for MySQL
 */
export class MySQLConnection implements IDatabaseConnection {
  private pool: mysql.Pool | null = null;
  private config: ConnectionConfig;

  /**
   * Creates a new instance of MySQLConnection
   * @param config The connection configuration
   */
  constructor(config: ConnectionConfig) {
    this.config = config;
  }

  /**
   * Establishes a connection to the MySQL database
   */
  async connect(): Promise<void> {
    try {
      this.pool = mysql.createPool({
        host: this.config.host,
        port: this.config.port,
        user: this.config.user,
        password: this.config.password,
        database: this.config.database
      });

      // Check that the connection works
      await this.pool.query("SELECT 1");
    } catch (error: any) {
      throw new Error(`Failed to connect to database: ${error.message}`);
    }
  }

  /**
   * Closes the database connection
   */
  async disconnect(): Promise<void> {
    if (this.pool) {
      try {
        await this.pool.end();
        this.pool = null;
      } catch (error: any) {
        throw new Error(`Failed to disconnect from database: ${error.message}`);
      }
    }
  }
  /**
   * Executes an SQL query that returns a single result
   * @param query The SQL query to execute
   * @param params The query parameters
   * @returns An object of the specified type
   */
  async execute<T>(query: string, params: any[] = []): Promise<T> {
    if (!this.pool) {
      throw new Error("Not connected to database");
    }

    try {
      const [result] = await this.pool.execute(query, params);
      return result as T;
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }
}
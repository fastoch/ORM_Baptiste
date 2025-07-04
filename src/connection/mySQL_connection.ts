import * as mysql from 'mysql2/promise'; // the standard library for modern, asynchronous MySQL operations in Node.js
import { ConnectionConfig } from "./db_connection";
import { DatabaseConnection } from "./db_connection";

/**
 * Implementation of DatabaseConnection for MySQL
 */
export class MySQLConnection implements DatabaseConnection {
  private pool: mysql.Pool | null = null; // holds a connection pool
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
   * @returns an object of the specified type
   */
  async execute<T>(query: string, params: any[] = []): Promise<T> {
    if (!this.pool) {
      throw new Error("Not connected to database");
    }

    try {
      // the result from execute is an array of rows
      const [rows] = await this.pool.execute(query, params);
      return (rows as T[])[0]; // we want the first row
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }

  /**
   * Executes an SQL query that returns multiple results
   */
  async executeMultiple<T>(query: string, params?: any[]): Promise<T[]> {
    if (!this.pool) {
      throw new Error("Not connected to database");
    }

    try {
      const [rows] = await this.pool.execute(query, params);
      return rows as T[];
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }

  /**
   * Execites an INSERT query and returns the ID of the new row
   * @param query - the SQL INSERT query to execute
   * @param params - the query parameters
   * @returns the ID of the inserted row
   */
  async executeInsert(query: string, params: any[] = []): Promise<number> {
    if (!this.pool) {
      throw new Error("Not connected to database");
    }

    try {
      const [result] = await this.pool.execute(query, params);
      return (result as mysql.ResultSetHeader).insertId;
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }
}

/**
 * IMPORTANT NOTES
 * The mysql2 library's execute() method always returns an array of rows
 */

/**
 * TODO
 * our own execute method has the same name as the execute method from the mysql2 library
 */
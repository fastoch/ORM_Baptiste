import * as mysql from 'mysql2/promise'; // the standard library for modern, asynchronous MySQL operations in Node.js
import { config } from 'dotenv';  
import { ConnectionConfig } from "./db_connection";
import { DatabaseConnection } from "./db_connection";

// Load environment variables from .env file
config();

/**
 * Implementation of DatabaseConnection for MySQL
 */
export class MySQLConnection implements DatabaseConnection {
  private session: mysql.Pool | null = null;
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
      this.session = mysql.createPool({
        host: this.config.host,
        port: this.config.port,
        user: this.config.user,
        password: this.config.password,
        database: this.config.database
      });

      // Check that the connection works
      await this.session.query("SELECT 1");
    } catch (error: any) {
      throw new Error(`Failed to connect to database: ${error.message}`);
    }
  }

  /**
   * Closes the database connection
   */
  async disconnect(): Promise<void> {
    if (this.session) {
      try {
        await this.session.end();
        this.session = null;
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
    if (!this.session) {
      throw new Error("Not connected to database");
    }

    try {
      const [result] = await this.session.execute(query, params);
      return result as T;
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }

  /**
   * Executes an SQL query that returns multiple results
   */
  async executeMultiple<T>(query: string, params?: any[]): Promise<T[]> {
    if (!this.session) {
      throw new Error("Not connected to database");
    }

    try {
      const [result] = await this.session.execute(query, params);
      return result as T[];
    } catch (error: any) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }
}

/**
 * IMPORTANT NOTES
 * The mysql2 library's execute() method always returns an array of rows
 */
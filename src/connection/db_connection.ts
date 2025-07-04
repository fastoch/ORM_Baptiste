/**
 * Type alias defining methods to connect to the database (could be an interface)
 */
export type DatabaseConnection = {
  /**
   * method signature that establishes a connection to the database
   * the connect method is asynchronous (doesn't complete instantly) 
   * <void> = doesn't return any specific value when the connection is established
   */
  connect(): Promise<void>;  

  
  /**
   * Closes the database connection 
   */
  disconnect(): Promise<void>;
  
  /**
   * Executes an SQL query that returns multiple results (from a SELECT statement)
   * @param query The SQL query to execute
   * @param params The query parameters
   * @returns An array of objects of the specified type
   */
  executeMultiple<T>(query: string, params?: any[]): Promise<T[]>;
  
  /**
   * Executes an SQL query that returns a single result
   * @param query The SQL query to execute
   * @param params The query parameters
   * @returns An object of the specified type
   */
  execute<T>(query: string, params?: any[]): Promise<T>;

  /**
   * Executes an INSERT query and returns the ID of the new row.
   * This method is required because an INSERT statement doesn't return rows.
   * @param query - the SQL INSERT query to execute
   * @param params - the query parameters
   * @returns the ID of the inserted row
   */
  executeInsert(query: string, params?: any[]): Promise<number>;
}


/**
 * type alias for database connection configuration
 */
export type ConnectionConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}
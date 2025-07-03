/**
 * Type alias defining methods to connect to the database
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
   * Executes an SQL query that returns multiple results
   * @param query The SQL query to execute
   * @param params The query parameters
   * @returns An array of objects of the specified type
   */
  query<T>(query: string, params?: any[]): Promise<T[]>;
  
  /**
   * Executes an SQL query that returns a single result
   * @param query The SQL query to execute
   * @param params The query parameters
   * @returns An object of the specified type
   */
  execute<T>(query: string, params?: any[]): Promise<T>;
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
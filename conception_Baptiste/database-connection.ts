 /**
 * Interface defining methods to connect to the database
 */
export interface IDatabaseConnection {
  /**
   * Establishes a connection to the database
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



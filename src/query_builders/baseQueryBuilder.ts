/**
 * Type alias for what's common to all query builders (could be an interface)
 */
export type QueryBuilder = {
  buildQuery(): string; // returns the complete SQL query as a string
}

/**
 * Abstract base class for all query builders
 */
export abstract class BaseQueryBuilder implements QueryBuilder {
  protected tableName: string = "";  // targeted SQL table

  /**
   * sets the table on which the query will be executed 
   * @param tableName 
   * @returns the current instance of our base class
   * This current instance is required to chain methods when we build the query in our child classes
   */
  protected setTable(tableName: string): this {
    this.tableName = tableName;
    return this;
  }

 /**
   * Formats a value for inclusion in an SQL query string.
   * Handles null, undefined, strings, booleans, and numbers.
   * @param value The value to format.
   * @returns The formatted value as a string or number.
   */
  protected formatValue(value: any): string | number {
    if (value === null || typeof value === 'undefined') {
      return 'NULL';
    }
    if (typeof value === 'string') {
      // Escape single quotes to prevent basic SQL injection (to be improved with parameterized queries)
      const escapedValue = value.replace(/'/g, "''");
      return `'${escapedValue}'`;
    }
    if (typeof value === 'boolean') {
      return value ? 'TRUE' : 'FALSE';
    }
    // numbers are returned as is
    return value;
  }

  /**
   * méthode qui génère la requête SQL (implémentée dans les classes enfants)
   */
  abstract buildQuery(): string;  

  // TODO: implement a method that generates parameterized queries to prevent SQL injection

}
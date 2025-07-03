/**
 * Type alias for all query builders (could be an interface)
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
   * méthode qui génère la requête SQL (implémentée dans les classes enfants)
   */
  abstract buildQuery(): string;  

  // TODO: implement a method that generates parameterized queries to prevent SQL injection

}
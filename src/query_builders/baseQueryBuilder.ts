/**
 * Abstract base class for all query builders
 */
export abstract class BaseQueryBuilder {
  protected tableName: string = "";  // targeted SQL table

  /**
   * sets the table on which the query will be executed 
   * @param tableName 
   * @returns the current instance (required to chain methods when building the query)
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
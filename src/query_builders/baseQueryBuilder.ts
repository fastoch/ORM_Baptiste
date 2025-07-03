// export interface QueryResult<T> {
//   sql: string;
//   params: <T>[];
// }

export abstract class BaseQueryBuilder<T> {
  protected tableName: string;  // targeted SQL table

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  /**
   * méthode qui génère la requête SQL (implémentée dans les classes enfants)
   */
  abstract buildQuery(): string;  

  // TODO: implement Paramterization to prevent SQL injection

}
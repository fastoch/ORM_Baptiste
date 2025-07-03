/* REMINDER: 
 * SQL Query format = INSERT INTO table ('nom_colonne1', 'nom_colonne2', ...) values ('value1', 'value2, ...)
 */

import { BaseQueryBuilder } from "./baseQueryBuilder";

export class InsertQueryBuilder extends BaseQueryBuilder {
  /** 
   * { key, value } pairs that match the column names (keys) and the values for each one of them
   */
  private data: Record<string, any> = {};  

  /**
   * method that builds and returns an SQL INSERT query as a string. 
   */
  buildQuery(): string {
    const columns = Object.keys(this.data)
    
    return ``
  }
}

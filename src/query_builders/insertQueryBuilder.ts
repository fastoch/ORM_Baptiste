/* REMINDER: 
* SQL Query format = INSERT INTO table ('nom_colonne1', 'nom_colonne2', ...) values ('value1', 'value2, ...)
*/

import { BaseQueryBuilder } from "./baseQueryBuilder";

export class InsertQueryBuilder extends BaseQueryBuilder {
  /** 
   * { key, value } pairs that match the column names (keys) and the values for each column
   */
  private data: Record<string, any> = {};  

  /**
   * sets the table into which the new values will be inserted
   */
  into(tableName: string): this {
    return this.setTable(tableName);
  }

  /**
   * method that builds and returns an SQL INSERT query as a string. 
   */
  buildQuery(): string {
    const columns = Object.keys(this.data)
    
    return ``
  }
}

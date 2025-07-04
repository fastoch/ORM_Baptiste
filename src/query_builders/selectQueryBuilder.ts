import { BaseQueryBuilder } from "./baseQueryBuilder";  

export class SelectQueryBuilder<T> extends BaseQueryBuilder {
  private columnsToSelect: string[] = ['*'];
  private whereClauses: string[] = [];
  private orderByClauses: string[] = [];
  private limit: number | null = null;
  private offset: number | null = null;

  /**
   * Sets the columns to be selected
   * Defaults to '*' if no columns provided
   * @param columns - The columns to select
   * @example: .select('id', 'name', 'email')
   */
  select(...columns: string[]): this {
    if (columns.length > 0) {
      this.columnsToSelect = columns;
    }
    return this;
  }

  /**
   * 
   * @returns Sets the table from which to retrieve data
   */
  from(tableName: string): this {
    return this.setTable(tableName);
  }

  /**
   * Adds a WHERE condition to the query.
   * Multiple calls will be joined with 'AND'
   * @ 
   */


  buildQuery(): string {
    return ``
  }
}
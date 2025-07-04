import { BaseQueryBuilder } from "./baseQueryBuilder";  

export class SelectQueryBuilder<T> extends BaseQueryBuilder {
  private columnsToSelect: string[] = ['*'];
  private whereClauses: string[] = [];
  private orderByClauses: string[] = [];
  private limitValue: number | null = null;
  private offsetValue: number | null = null;

  /**
   * Sets the columns to be selected
   * Defaults to '*' if no columns provided
   * @param columns - The columns to select
   * @example 
   * .select('id', 'name', 'email')
   */
  select(...columns: string[]): this {
    if (columns.length > 0) {
      this.columnsToSelect = columns;
    }
    return this;
  }

  /**
   * Sets the table from which to retrieve data
   */
  from(tableName: string): this {
    return this.setTable(tableName);
  }

  /**
   * Adds a WHERE condition to the query. 
   * Multiple calls will be joined with 'AND'.
   * The method is overloaded to support 3 signatures:
     * If only 2 arguments are provided (column, value), it assumes = as the operator
     * If 3 arguments are provided (column, operator, value), it uses the specified operator
   * @returns this, so we can chain the method calls when building the query
   */
  where(column: string, value: any): this;
  where(column: string, operator: string, value: any): this;
  where(column: string, operatorOrValue: any, value?: any): this {
    let operator = '=';
    let conditionValue = operatorOrValue;

    if (value !== undefined) {
      operator = String(operatorOrValue);
      conditionValue = value;
    }

    this.whereClauses.push(`${column} ${operator} ${this.formatValue(conditionValue)}`);
    return this;
  }

  /**
   * Adds an ORDER BY clause to the query
   * @param column - the column to order by
   * @param direction - the sort direction, 'ASC' or 'DESC', defaults to 'ASC'
   * @returns this, so we can chain the method calls when building the query
   */
  orderBy(column: string, direction: 'ASC' | 'DESC' = 'ASC'): this {
    this.orderByClauses.push(`${column} ${direction}`);
    return this;
  }

  /**
   * Adds a LIMIT clause to the query
   * @param count - the maximum number of rows to return
   * @returns this, so we can chain the method calls when building the query
   */
  limit(count: number): this {
    this.limitValue = count;
    return this;
  }

  /**
   * Adds an OFFSET clause to the query
   * @param count - the number of rows to skip
   * @returns this, so we can chain the method calls when building the query
   */
  offset(count: number): this {
    this.offsetValue = count;
    return this;
  }

  /**
   * Builds and returns the SQL SELECT query 
   */
  buildQuery(): string {
    if (!this.tableName) throw new Error("FROM clause is missing.");

    let query = `SELECT ${this.columnsToSelect.join(', ')} FROM ${this.tableName}`;
    if (this.whereClauses.length > 0) query += ` WHERE ${this.whereClauses.join(' AND ')}`;

    return query;
  }
}
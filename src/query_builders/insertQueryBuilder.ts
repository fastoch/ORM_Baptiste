import { BaseQueryBuilder } from "./baseQueryBuilder";

export class InsertQueryBuilder<T> extends BaseQueryBuilder<T> {
  private data: Partial<T> = {};

  /**
   * method that builds and returns an SQL INSERT query as a string. 
   */
  buildQuery(): string {
    const columns = Object.keys(this.data)
    
    return ``
  }
}

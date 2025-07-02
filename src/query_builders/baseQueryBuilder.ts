export abstract class BaseQueryBuilder<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  abstract select(fields?: string[]): this;
  abstract where(condition: Partial<T>): this;
  abstract insert(data: Partial<T>): this;
  abstract update(data: Partial<T>): this;
  abstract delete(): this;
  abstract toSQL(): string;  // génère la requête SQL brute
  abstract execute(): Promise<T>;
}
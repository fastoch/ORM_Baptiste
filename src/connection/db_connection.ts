/**
 * Type alias defining methods to connect to the database
 */
export type DatabaseConnection = {
  connect(): Promise<any>;
  disconnect(): Promise<void>;
}

export abstract class Connection implements DatabaseConnection {
  protected host: string;
  protected port: number;
  protected user: string;
  protected password: string;
  protected database: string;

  constructor(host: string, port: number, user: string, password: string, database: string) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
  }

  public abstract connect(): Promise<any>;
  public abstract disconnect(): Promise<void>;
  public abstract query(sql: string, params?: any[]): Promise<any>;

}
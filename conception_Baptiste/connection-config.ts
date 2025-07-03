/**
 * Interface for database connection configuration
 */
export interface ConnectionConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}
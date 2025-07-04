/**
 * Implementing a robust BaseModel is a cornerstone of building a good ORM. 
 * It will contain the shared logic for all our future table models, like handling database connections 
 * and performing common operations such as creating and finding records.
 */

import { DatabaseConnection  } from "../connection/db_connection";
import { InsertQueryBuilder } from "../query_builders/insertQueryBuilder";  
import { SelectQueryBuilder } from "../query_builders/selectQueryBuilder";

/**
 * Base class for the creation of our actual MySQL tables
 */
export abstract class BaseModel {
  /**
   * The name of the table in the database, to be define in each subclass
   */
  public abstract readonly tableName: string;

  /**
   * The primary key column name.
   * Defaults to 'id', can be overridden in subclasses
   */
  public static primaryKey: string = 'id';

  /**
   * The properties of the model instance
   * e.g. { id: 1, name, "John Doe", email: 'john@\example.com' }
   */
  [key: string]: any;

  /**
   * Creates an instance of a model.
   * @param properties The properties to initialize the model with.
   */
  constructor(properties?: { [key: string]: any }) {
      if (properties) {
          Object.assign(this, properties);
      }
  }

  /**
   * Creates a new record in the database from the provided data.
   * @param data The data for the new record.
   * @returns A promise that resolves with the created model instance, fetched from the DB.
   */
  
  // The implementation of this class needs to be completed
}
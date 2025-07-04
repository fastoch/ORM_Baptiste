/**
 * Base class for the creation of the actual MySQL tables, from which all tables will inherit
 */
export abstract class BaseModel {
    /**
     * The name of the table in the database
     */
    public abstract readonly tableName: string;

    
}
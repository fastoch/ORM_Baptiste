export abstract class BaseQueryBuilder<T> {
  protected tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  /**
   * // génère la requête SQL (à implémenter dans les classes enfants)
   * @param tableName = nom de la table ciblée dans la BDD
   * @param data = données à insérer, supprimer, récupérer ou modifier
   */
  abstract buildQuery(): string;  
}
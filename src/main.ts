import { InsertQueryBuilder } from "./query_builders/insertQueryBuilder"
import { SelectQueryBuilder } from "./query_builders/selectQueryBuilder"

async function main() {
  const qb = new SelectQueryBuilder<User>('users');
  const sql = qb.select(['id', 'name'])
                .where({ id: 1 })
                .toSQL();
  // sql = "SELECT id, name FROM users WHERE id = '1'"
  console.log(sql)
}

main();
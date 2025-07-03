import { InsertQueryBuilder } from "./query_builders/insertQueryBuilder"
import { SelectQueryBuilder } from "./query_builders/selectQueryBuilder"

async function main() {
  const insertQuery = new InsertQueryBuilder()
    .into("user")
    .values({
      id: 1,
      username: "John",
      email: "john.callaghan@bidon.com",
      password: "1234"
    })
    .buildQuery()
  console.log(insertQuery)
}

main();
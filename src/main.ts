import { InsertQueryBuilder } from "./query_builders/insertQueryBuilder"
import { SelectQueryBuilder } from "./query_builders/selectQueryBuilder"
import { config } from 'dotenv';  

// Load environment variables from .env file
config();

async function main() {
  const insertQuery = new InsertQueryBuilder()
    .into("user")
    .values({
      id: 1,
      username: "Fabrice",
      email: "fastoch@bidon.com",
      password: "secret_pwd"
    })
    .buildQuery()
  console.log(insertQuery)
}

main();


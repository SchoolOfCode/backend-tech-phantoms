import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (user_ID SERIAL PRIMARY KEY, email VARCHAR(60), saved_recipes TEXT[]);`
);

console.log(response);

db.end();
import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(60), level INT);`
);

console.log(response);

db.end();

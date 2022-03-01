import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO users (email, saved_recipes) VALUES ($1, $2);`,
  ["example@email.com", {}]
);

console.log(response);

db.end();

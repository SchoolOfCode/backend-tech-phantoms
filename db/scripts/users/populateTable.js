import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO users (email, level) VALUES ($1, $2);`,
["example@email.com", 1]
);

console.log(response);

db.end();
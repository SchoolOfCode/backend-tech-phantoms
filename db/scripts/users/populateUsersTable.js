import db from "../../connection.js";

const response = await db.query(
  `INSERT INTO users (email) VALUES ($1);`,
["example@email.com"]
);



console.log(response);

db.end();
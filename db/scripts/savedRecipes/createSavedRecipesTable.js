import db from "../../connection.js";

const response = await db.query(
  `CREATE TABLE IF NOT EXISTS savedRecipes (RecipeID SERIAL PRIMARY KEY, UserID INT, saved INTEGER[]);`
);

console.log(response);

db.end();

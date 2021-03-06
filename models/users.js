import db from "../db/connection.js";

export async function getAllUsers() {
  const result = await db.query(`SELECT * FROM users;`);
  return result.rows;
}

export async function getUsersById(reqID) {
  const result = await db.query(`SELECT * FROM users WHERE id = $1;`, [reqID]);
  return result.rows;
}

export async function postNewUser(reqBody) {
  const email = reqBody.email;
  const updated = await db.query(`INSERT INTO users (email) VALUES($1);`, [
    email,
  ]);
  return updated.rows;
}

export async function deleteUser(reqID) {
  const deleted = await db.query(`DELETE FROM users WHERE id = $1;`, [reqID]);
  return deleted.rows;
}

export async function saveRecipe(email, recipeID) {
  const savedRecipe = await db.query(
    `UPDATE users SET saved_recipes = array_append(saved_recipes, $2) WHERE email = $1 RETURNING *;`,
    [email, recipeID]
  );
  //returns the user record that was updated
  return savedRecipe.rows;
}

export async function getSavedRecipes(email) {
  const savedRecipes = await db.query(
    `SELECT DISTINCT saved_recipes FROM users WHERE email = $1;`,
    [email]
  );
  return savedRecipes.rows;
}

export async function removeSavedRecipe(email, recipeID) {
  const removing = await db.query(
    `UPDATE users SET saved_recipes = array_remove(saved_recipes, $2) WHERE email = $1 RETURNING *;`,
    [email, recipeID]
  );
  //returns the user record that was updated
  return removing.rows;
}

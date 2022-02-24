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
  const updated = await db.query(`INSERT INTO users (email, level) VALUES($1, $2);`, [email]);
  return updated.rows;
}

export async function deleteUser(reqID) {
  const deleted = await db.query(`DELETE FROM users WHERE id = $1;`, [reqID]);
  return deleted.rows;
}
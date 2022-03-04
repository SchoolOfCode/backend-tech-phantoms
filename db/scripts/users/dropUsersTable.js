import { connectionString } from "../../../config.js";
import db from "../../connection.js";

//FOR DEBUG, DON'T USE UNLESS YOU WANT THE TABLE DEFINITION AND ROWS TO BE GONE

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("TESTING_DATABASE_URL", typeof process.env.TESTING_DATABASE_URL);
console.log("DATABASE_URL", typeof process.env.DATABASE_URL);
console.log(
  "Is connectionString TESTING_DATABASE_URL? ",
  process.env.TESTING_DATABASE_URL === connectionString
);

const response = await db.query(`DROP TABLE IF EXISTS users`);

console.log(response);

db.end();

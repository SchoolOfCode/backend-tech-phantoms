import db from "../../connection.js";

//FOR DEBUG, DON'T USE UNLESS YOU WANT THE TABLE ROWS TO BE GONE

const response = await db.query(
  `TRUNCATE TABLE users RESTART IDENTITY CASCADE;`
);

console.log(response);

db.end();
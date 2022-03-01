import db from "../../connection.js";

//FOR DEBUG, DON'T USE UNLESS YOU WANT THE TABLE DEFINITION AND ROWS TO BE GONE

const response = await db.query(
    `DROP TABLE IF EXISTS users`
);

console.log(response)

db.end();
import request from "supertest";
import app from "../app.js";
import { describe, it, afterAll } from "@jest/globals";
import pool from "../db/connection.js";

afterAll(async () => {
  await pool.end();
});

describe("Save Recipes Feature", () => {
  it("Add a recipe to a user's saved_recipes", async () => {
    //arrange
    const userEmail = "example@email.com";
    const recipeID = "RecipeID123";
    const URI = `users/` + userEmail + `/favourites/` + recipeID;

    //act
    const res = await request(app).post(URI).set("Accept", "application/json");

    //assert
    expect(res.statusCode).toEqual(200);
  });
});

// describe("get students current books", () => {
//   it("returns status code 200 if student exists", async () => {
//     const res = await request(app)
//       .get("/books/s01")
//       .set("Accept", "application/json");
//     // expect(res.headers["Content-Type"]).toMatch(/json/);
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe("given summary details", () => {
//   it("should respond with a 200 status once posted", async () => {
//     const res = await request(app).post("/summaries").send({
//       bookId: 7,
//       studentId: "s01",
//       currentPage: 54,
//       summary: "this wasn't great",
//       isComplete: false,
//       minutesRead: 54,
//       pagesRead: 100,
//     });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toEqual(true);
//   });
// });

import express from "express";
import {
  getAllUsers,
  getUsersById,
  postNewUser,
  deleteUser,
  saveRecipe,
  getSavedRecipes
} from "../models/users.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await getAllUsers();

  res.json({
    success: true,
    payload: users,
  });
});

router.get("/:id", async function (req, res, next) {
  const reqId = Number(req.params.id);
  const user = await getUsersById(reqId);

  res.json({
    success: true,
    payload: user,
  });
});

router.post("/", async function (req, res) {
  const newUser = req.body;
  const update = await postNewUser(newUser);

  res.json({
    success: true,
    payload: update,
  });
});

router.delete("/:id", async function (req, res) {
  const reqId = Number(req.params.id);
  const deleted = await deleteUser(reqId);

  res.json({
    success: true,
    payload: deleted,
  });
});

//save a recipe for a user
router.post("/:email/favourites/:recipeID", async function (req, res) {
  const savedRecipe = await saveRecipe(req.params.email, req.params.recipeID);

  res.json({
    success: true,
    payload: savedRecipe,
  });
});

//get savedRecipe for a userSelect: 
router.get("/:email/favourites/", async function (req, res) {
  const savedRecipes = await getSavedRecipes(req.params.email);

  res.json({
    success: true,
    payload: savedRecipes,
  });
});


export default router;

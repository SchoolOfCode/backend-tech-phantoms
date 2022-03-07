import express from "express";
import {
  getShoppingList,
  addIngredients,
  deleteIngredient,
} from "../models/users.js";

const router = express.Router();

//get savedRecipe for a userSelect:
router.get("/:email", async function (req, res) {
  const savedRecipes = await getShoppingList(req.params.email);

  res.json({
    success: true,
    payload: savedRecipes,
  });
});

//save a recipe for a user
router.post("/:email", async function (req, res) {
  /*   NEEDS TO BE WRITTEN
  const savedRecipe = await addIngredients(
    req.params.email,
    req.params.recipeID
  );

  res.json({
    success: true,
    payload: savedRecipe,
  }); 
  */
});

//remove a recipe from a user's saved recipes
router.delete("/:email/shopping/:itemIndex", async function (req, res) {
  /*    NEEDS TO BE WRITTEN
    const removedRecipe = await deleteIngredient(
    req.params.email,
    req.params.recipeID
  );

  res.json({
    success: true,
    payload: removedRecipe,
  });
  */
});

export default router;

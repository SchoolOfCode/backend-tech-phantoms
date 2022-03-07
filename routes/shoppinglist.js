import express from "express";
import {
  getShoppingList,
  addIngredients,
  deleteIngredient,
} from "../models/shoppingList.js";

const router = express.Router();

//get savedRecipe for a user
router.get("/:email", async function (req, res) {
  const savedRecipes = await getShoppingList(req.params.email);

  res.json({
    success: true,
    payload: savedRecipes,
  });
});

//add ingredient to shoppingList for this user
router.post("/:email", async function (req, res) {
  const addedIngredients = await addIngredients(req.params.email, req.body);

  res.json({
    success: true,
    payload: addedIngredients,
  });
});

//remove an ingredient from a user's shoppingList
router.delete("/:email", async function (req, res) {
  /*    NEEDS TO BE WRITTEN
    const removedRecipe = await deleteIngredient(
    req.params.email,
    req.body.shoppingList
  );

  res.json({
    success: true,
    payload: removedRecipe,
  });
  */
});

export default router;

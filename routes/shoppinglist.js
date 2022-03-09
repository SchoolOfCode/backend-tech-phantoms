import express from "express";
import {
  getShoppingList,
  addIngredients,
  markIngredientAsDone,
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

//check off ingredient in shoppingList for this user /shopping/:email/checkOff/:ingredientName
router.post("/:email/checkOff/:item", async function (req, res) {
  const updatedList = await markIngredientAsDone(
    req.params.email,
    req.params.item
  );

  res.json({
    success: true,
    payload: updatedList,
  });
});

//remove an ingredient from a user's shoppingList
router.delete("/:email/delete/:item", async function (req, res) {
  const updatedList = await deleteIngredient(req.params.email, req.params.item);

  res.json({
    success: true,
    payload: updatedList,
  });
});

export default router;

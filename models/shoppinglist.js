import { shoppingListData } from "../db/shoppingListData.js";

export async function getShoppingList(email) {
  const data = shoppingListData.filter((user) => {
    if (user.email === email) {
      return user.shoppingList;
    }

    return ["No user found"];
  });

  return data;
}

export async function addIngredients(email, recipeID) {
  //add to shoppingListData immutably
  return "a shoppingList array";
}

export async function deleteIngredient(email, recipeID) {
  //remove from shoppingListData immutably
  return "a shoppingList array";
}

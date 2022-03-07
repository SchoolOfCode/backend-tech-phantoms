import allShoppingLists from "../db/shoppingListData.js";

export async function getShoppingList(email) {
  const data = allShoppingLists.filter((user) => {
    if (user.email === email) {
      return user.shoppingList;
    }
  });

  return data;
}

export async function addIngredients(email, newItems) {
  //find a shopping list that matches with the user's email
  const updatedShoppingList = allShoppingLists.filter((user) => {
    if (user.email === email) {
      //update this users shopping list
      user.shoppingList = [...user.shoppingList, ...newItems];

      return user.shoppingList;
    }
  });
  return updatedShoppingList;
}

export async function deleteIngredient(email) {
  //remove from shoppingListData immutably
  const data = allShoppingLists.filter((user) => {
    if (user.email === email) {
      shoppingListData = [...user.shoppingList, ...newItems];
      return shoppingListData;
    }
  });

  return data;
}

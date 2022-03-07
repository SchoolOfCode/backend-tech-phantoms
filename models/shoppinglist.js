import { shoppingListData } from "../db/shoppingListData.js";

export async function getShoppingList(email) {
  const data = shoppingListData.filter((user) => {
    if (user.email === email) {
      return user.shoppingList;
    }
  });

  return data;
}
export async function addIngredients(email, newItems) {
  //find a shopping list that matches with the user's email
  const data = shoppingListData.filter((user)=>{ 
    if (user.email===email) {
      shoppingListData = [...user.shoppingList, ...newItems];
      return shoppingListData;
    }
  });
  return data;
}

export async function deleteIngredient(email, ) {
  //remove from shoppingListData immutably
  const data = shoppingListData.filter((user)=>{ 
    if (user.email===email) {
      shoppingListData = [...user.shoppingList, ...newItems];
      return shoppingListData;
    }
  });
  
  return data;
}
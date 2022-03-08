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

export async function markIngredientAsDone(email, ingredientName) {
  //item is the name of the ingredient
  // console.log("email:", email);
  // console.log("ingredientName:", ingredientName);
  const updatedShoppingList = allShoppingLists.filter((user) => {
    if (user.email === email) {
      //update this users shopping list
      //console.log("Found users shopping list");
      const updatedShoppingList = user.shoppingList.filter((listItem) => {
        console.log(
          `Checking if ${ingredientName} matches ${listItem.ingredient}`
        );

        if (listItem.ingredient === ingredientName) {
          //find the ingredient in the shopping list
          console.log("Match found (listItem):", listItem);
          listItem.needToBuy = !listItem.needToBuy; //toggle boolean value

          console.log("listItem after being changed", listItem);
        }
      });

      console.log("updatedShoppingList:", updatedShoppingList);
      return updatedShoppingList;
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

import express from "express";
import { getAllUsers, getUsersById, postNewUser, deleteUser } from "../models/users.js";

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

router.delete("/:id", async function (req, res){
  const reqId = Number(req.params.id);
  const deleted = await deleteUser(reqId);
  
  res.json({
    success: true,
    payload: deleted
  });
  
});
//host:/users/email/favourites
router.post("/:email/favourites/:recipeID", async function (req, res) {
  const newRecipe = req.params.recipeID;
  //const data = await postNewRecipe(newRecipe,req.params.email);
  console.log(newRecipe)
  console.log(req.params.email)
  res.json({
    success: true,
    payload: [newRecipe, req.params.email]
  });
});

export default router;


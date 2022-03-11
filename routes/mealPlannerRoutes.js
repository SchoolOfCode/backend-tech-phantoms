import express from "express";
import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
} from "../db/mealPlannerData.js";

const router = express.Router();

router.get("/Monday", async function (req, res) {
  res.json({
    Monday,
  });
});
router.get("/Tuesday", async function (req, res) {
  res.json({
    Tuesday,
  });
});
router.get("/Wednesday", async function (req, res) {
  res.json({
    Wednesday,
  });
});
router.get("/Thursday", async function (req, res) {
  res.json({
    Thursday,
  });
});
router.get("/Friday", async function (req, res) {
  res.json({
    Friday,
  });
});
router.get("/Saturday", async function (req, res) {
  res.json({
    Saturday,
  });
});
router.get("/Sunday", async function (req, res) {
  res.json({
    Sunday,
  });
});

export default router;

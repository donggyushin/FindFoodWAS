import express from "express";
import { getNeayByFoods } from "../controllers/Foods";
const router = express.Router();

router.get("", getNeayByFoods);

export default router;

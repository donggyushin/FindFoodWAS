import express from "express";
import { getAddressByGeoLocation } from "../controllers/address";
const router = express.Router();

router.get("", getAddressByGeoLocation);

export default router;

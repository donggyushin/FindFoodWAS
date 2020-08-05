import express from "express";
import test from "./test";
import user from "./user";
import address from "./address";

const router = express.Router();

router.use("/test", test);
router.use("/user", user);
router.use("/address", address);

export default router;

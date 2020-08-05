"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Foods_1 = require("../controllers/Foods");
const router = express_1.default.Router();
router.get("", Foods_1.getNeayByFoods);
exports.default = router;

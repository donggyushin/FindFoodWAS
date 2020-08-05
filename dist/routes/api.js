"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("./test"));
const user_1 = __importDefault(require("./user"));
const address_1 = __importDefault(require("./address"));
const router = express_1.default.Router();
router.use("/test", test_1.default);
router.use("/user", user_1.default);
router.use("/address", address_1.default);
exports.default = router;

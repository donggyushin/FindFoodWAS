"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNeayByFoods = void 0;
const axios_1 = __importDefault(require("axios"));
exports.getNeayByFoods = (req, res) => {
    const { area1Name, area2Name, area3Name } = req.query;
    const encodedUri = encodeURI(`http://store.naver.com/sogum/api/businesses?start=1&display=100&query=${area1Name}+${area2Name}+${area3Name}+맛집&sortingOrder=reviewCount`);
    if (!area1Name || !area2Name || !area3Name) {
        return res.status(400).json({
            ok: true,
            status: 400,
            error: "클라이언트로 부터 변수를 제대로 전달받지 못하였습니다.",
        });
    }
    axios_1.default
        .get(encodedUri)
        .then((res) => res.data)
        .then((data) => {
        const foods = data.items;
        return res.json({
            ok: true,
            status: 200,
            foods,
            length: foods.length,
        });
    })
        .catch((err) => {
        console.error(err.message);
        return res.status(500).json({
            ok: false,
            status: 500,
            error: err.message,
        });
    });
};

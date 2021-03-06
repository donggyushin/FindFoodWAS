"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testController = void 0;
const axios_1 = __importDefault(require("axios"));
exports.testController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=127.1054065,37.3595669&orders=legalcode,admcode,addr,roadaddr&output=json&X-NCP-APIGW-API-KEY-ID=310fs9bh52&X-NCP-APIGW-API-KEY=ucYdCXs1EBCoXUNhhhHyB06SddsprhfDdX8Yv5iC
    // 해당 url로 좌표로부터 주소를 호출할 수 있음. Naver Maps API
    const encodedUri = encodeURI(`http://store.naver.com/sogum/api/businesses?start=1&display=100&query=공릉동+맛집&sortingOrder=reviewCount`);
    console.log(encodedUri);
    try {
        const please = yield axios_1.default.get(encodedUri);
        // @ts-ignore
        const datas = please.data.items;
        datas.map((data) => {
            console.log(data);
        });
        res.json({
            ok: true,
        });
    }
    catch (err) {
        res.json({
            ok: true,
        });
    }
});

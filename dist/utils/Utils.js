"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeErrorLogs = exports.decodeToken = exports.generateJwtToken = void 0;
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants/constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const errorLoggerDev = fs_1.default.createWriteStream("error_development.log", {
    flags: "a",
});
const errorLoggerPrd = fs_1.default.createWriteStream("error_production.log", {
    flags: "a",
});
const secretKey = process.env.SECRET_KEY_JWT || "";
exports.generateJwtToken = (id) => {
    const token = jsonwebtoken_1.default.sign({
        id,
    }, secretKey);
    return token;
};
exports.decodeToken = (token) => {
    const decoded = jsonwebtoken_1.default.verify(token, secretKey);
    const id = decoded.id;
    return id;
};
exports.writeErrorLogs = (errorMessage) => {
    const date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    const datetime = year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    const text = `[${datetime}]: ${errorMessage}\r\n`;
    if (constants_1.env === "production") {
        errorLoggerPrd.write(text);
    }
    else {
        errorLoggerDev.write(text);
    }
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const test_1 = require("./test/test");
const CreateAdmin_1 = require("./src/CreateAdmin");
const login_1 = require("./src/login");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).send('Welcome to bamadar');
});
app.get('/test', () => {
    console.log('hello ');
});
app.get('/test/test', test_1.test);
app.post('/CreateAdmin', CreateAdmin_1.CreateAdmin);
app.post('/login', login_1.login);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

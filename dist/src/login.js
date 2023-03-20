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
exports.login = void 0;
const client_1 = require("@prisma/client");
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const prisma = new client_1.PrismaClient();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const pass = req.body.password;
        if (!pass || !email) {
            res.status(400).json('dataProblem');
        }
        else {
            const match = yield prisma.admins.findMany({
                where: {
                    email: email,
                    password: pass,
                },
            });
            if (match.length == 0) {
                res.status(403).json('notexist');
            }
            else if (match.length == 1) {
                const usId = match[0].id;
                const secret = process.env.API_SECRET;
                const payLoad = {
                    id: usId,
                };
                const token = jwt_simple_1.default.encode(payLoad, secret);
                if (token) {
                    const chtk = yield prisma.admins.updateMany({
                        where: {
                            id: usId,
                        },
                        data: {
                            token: token,
                            updated: new Date(),
                        },
                    });
                    if (chtk) {
                        res.status(200).json(token);
                    }
                }
            }
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
exports.login = login;

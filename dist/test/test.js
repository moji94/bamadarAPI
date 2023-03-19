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
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const create = yield prisma.admins.create({
            data: {
                id: undefined,
                name: "mojtaba",
                phone: 9367028267,
                email: "mojtababahadori94@gmail.com",
                password: "mojtaba94",
                token: "aodhoawhdojawo",
                updated: new Date(),
                created: new Date(),
            },
        });
        if (create) {
            console.log(create);
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.test = test;

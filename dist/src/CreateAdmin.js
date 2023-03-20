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
exports.CreateAdmin = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const CreateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body);
        const create = yield prisma.admins.create({
            data: {
                id: undefined,
                name: name,
                phone: phone,
                email: email,
                password: password,
                token: 'empty',
                created: new Date(),
                updated: new Date(),
            },
        });
        if (create) {
            res.status(200).json('done');
        }
        else {
            res.status(400).json('data problem');
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
exports.CreateAdmin = CreateAdmin;

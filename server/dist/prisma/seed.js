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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const old_version = yield prisma.doenetmlVersions.upsert({
            where: { displayedVersion: "0.6" },
            update: {},
            create: {
                displayedVersion: "0.6",
                fullVersion: "0.6.0",
                deprecated: true,
                deprecationMessage: "It will be removed after June 2025.",
            },
        });
        const current_version = yield prisma.doenetmlVersions.upsert({
            where: { displayedVersion: "0.7" },
            update: {},
            create: {
                displayedVersion: "0.7",
                fullVersion: "0.7.0-alpha1",
                default: true,
            },
        });
        const dev_user = yield prisma.users.upsert({
            where: { email: "devuser@doenet.org" },
            update: {},
            create: {
                email: "devuser@doenet.org",
                name: "Dev User",
            },
        });
        const admin_user = yield prisma.users.upsert({
            where: { email: "admin@doenet.org" },
            update: {},
            create: {
                email: "admin@doenet.org",
                name: "Admin User",
                isAdmin: true,
            },
        });
        console.log({ old_version, current_version, dev_user, admin_user });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));

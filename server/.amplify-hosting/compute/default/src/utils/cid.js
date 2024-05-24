"use strict";
// Copied from doenetml utils
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
exports.cidFromArrayBuffer = exports.cidFromText = void 0;
const hi_base32_1 = __importDefault(require("hi-base32"));
function cidFromText(text) {
    return __awaiter(this, void 0, void 0, function* () {
        let encoder = new TextEncoder();
        let data = encoder.encode(text);
        return yield cidFromArrayBuffer(data);
    });
}
exports.cidFromText = cidFromText;
function cidFromArrayBuffer(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let hashBuffer = yield crypto.subtle.digest("SHA-256", data);
        let cidArray = new Uint8Array(36);
        // 0x01: cidV1
        // 0x55: raw binary IPLD
        // 0x12: code for SHA256
        // 0x20: 32 bytes (or 256 bits)
        cidArray.set([0x01, 0x55, 0x12, 0x20]);
        cidArray.set(new Uint8Array(hashBuffer), 4);
        // b: prefix for base 32
        // base32: hi-base uses RFC 4648 encoding
        // cid uses lowercase letter and does not include the padding at the end
        let cid = "b" + hi_base32_1.default.encode(cidArray).toLowerCase().replace(/=+/, "");
        return cid;
    });
}
exports.cidFromArrayBuffer = cidFromArrayBuffer;

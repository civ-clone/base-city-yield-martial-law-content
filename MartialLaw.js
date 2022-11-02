"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MartialLaw_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MartialLaw = void 0;
const Unhappiness_1 = require("@civ-clone/base-city-yield-unhappiness/Unhappiness");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class MartialLaw extends Unhappiness_1.default {
    constructor(value, unit) {
        super(value, unit.id());
        _MartialLaw_unit.set(this, void 0);
        __classPrivateFieldSet(this, _MartialLaw_unit, unit, "f");
    }
    unit() {
        return __classPrivateFieldGet(this, _MartialLaw_unit, "f");
    }
}
exports.MartialLaw = MartialLaw;
_MartialLaw_unit = new WeakMap();
(0, NegativeYield_1.makeNegative)(MartialLaw);
exports.default = MartialLaw;
//# sourceMappingURL=MartialLaw.js.map
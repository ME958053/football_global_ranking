"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global(rank, name, off, def, spi, association) {
        this.rank = rank;
        this.name = name;
        this.association = association;
        this.off = off;
        this.def = def;
        this.spi = spi;
    }
    Global.prototype.getRank = function () {
        return this.rank;
    };
    Global.prototype.getName = function () {
        return this.name;
    };
    Global.prototype.getAssociation = function () {
        return this.association;
    };
    Global.prototype.getOff = function () {
        return this.off;
    };
    Global.prototype.getDef = function () {
        return this.def;
    };
    Global.prototype.getSpi = function () {
        return this.spi;
    };
    Global.prototype.setAvg = function (arr) {
        var divident = 0;
        for (var i in arr) {
            divident += arr[i];
        }
        var divisor = arr.length;
        var quotient = divident / divisor;
        // const remainder = divident % divisor; use Later I guess
        return quotient.toFixed(2);
    };
    return Global;
}());
exports.default = Global;

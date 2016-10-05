"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var all_mips_1 = require("../../all-mips");
var ArrowsViewModel = (function (_super) {
    __extends(ArrowsViewModel, _super);
    function ArrowsViewModel() {
        _super.apply(this, arguments);
        this._speed = 24;
        this._turnSpeed = 16;
    }
    Object.defineProperty(ArrowsViewModel.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            this._speed = Math.round(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrowsViewModel.prototype, "turnSpeed", {
        get: function () {
            return this._turnSpeed;
        },
        set: function (val) {
            this._turnSpeed = Math.round(val);
        },
        enumerable: true,
        configurable: true
    });
    ArrowsViewModel.prototype.moveForward = function () {
        all_mips_1.AllMips.moveForward(this.speed);
    };
    ArrowsViewModel.prototype.moveBack = function () {
        all_mips_1.AllMips.moveBack(this.speed);
    };
    ArrowsViewModel.prototype.turnLeft = function () {
        all_mips_1.AllMips.turnLeft(this.speed, this.turnSpeed);
    };
    ArrowsViewModel.prototype.turnRight = function () {
        all_mips_1.AllMips.turnRight(this.speed, this.turnSpeed);
    };
    return ArrowsViewModel;
}(observable_1.Observable));
exports.ArrowsViewModel = ArrowsViewModel;
//# sourceMappingURL=arrows-view-model.js.map
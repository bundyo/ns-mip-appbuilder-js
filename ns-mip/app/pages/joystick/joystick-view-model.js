"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var all_mips_1 = require("../../all-mips");
var JoyStickViewModel = (function (_super) {
    __extends(JoyStickViewModel, _super);
    function JoyStickViewModel() {
        _super.apply(this, arguments);
        this.turnSpeed = 0;
        this.speed = 0;
        this.loop = null;
    }
    JoyStickViewModel.prototype.startJoystick = function () {
        if (this.loop)
            return;
        this.startContinousMove();
    };
    JoyStickViewModel.prototype.stopJoystick = function () {
        this.set("turnSpeed", 0);
        this.set("speed", 0);
        this.stopContinousMove();
    };
    JoyStickViewModel.prototype.startContinousMove = function () {
        var _this = this;
        if (this.loop)
            return;
        this.loop = setInterval(function () {
            all_mips_1.AllMips.drive(_this.speed, _this.turnSpeed);
        }, 50);
    };
    JoyStickViewModel.prototype.stopContinousMove = function () {
        clearInterval(this.loop);
        this.loop = null;
    };
    return JoyStickViewModel;
}(observable_1.Observable));
exports.JoyStickViewModel = JoyStickViewModel;
//# sourceMappingURL=joystick-view-model.js.map
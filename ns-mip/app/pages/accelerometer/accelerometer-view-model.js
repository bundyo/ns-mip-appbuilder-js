"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var nativescript_accelerometer_1 = require("nativescript-accelerometer");
var all_mips_1 = require("../../all-mips");
var AccelerometerViewModel = (function (_super) {
    __extends(AccelerometerViewModel, _super);
    function AccelerometerViewModel() {
        _super.apply(this, arguments);
        this.turnSpeed = 0;
        this.speed = 0;
        this.gear = 1.5;
        this.accelerometerActive = false;
        this.loop = null;
    }
    AccelerometerViewModel.prototype.startAccelerometer = function () {
        var _this = this;
        if (this.accelerometerActive)
            return;
        this.accelerometerActive = true;
        nativescript_accelerometer_1.startAccelerometerUpdates(function (data) {
            _this.turnSpeed = data.x * _this.gear; // left (0 to -1) / right (0 to 1)
            _this.speed = data.y * _this.gear; // lean forward (0 to -1) / back (0 to 1)
        });
        this.startContinousMove();
    };
    AccelerometerViewModel.prototype.stopAccelerometer = function () {
        if (this.accelerometerActive) {
            nativescript_accelerometer_1.stopAccelerometerUpdates();
            this.accelerometerActive = false;
            this.stopContinousMove();
        }
    };
    AccelerometerViewModel.prototype.startContinousMove = function () {
        var _this = this;
        if (this.loop)
            return;
        this.loop = setInterval(function () {
            all_mips_1.AllMips.drive(_this.speed, _this.turnSpeed);
        }, 50);
    };
    AccelerometerViewModel.prototype.stopContinousMove = function () {
        clearInterval(this.loop);
        this.loop = null;
    };
    AccelerometerViewModel.prototype.switchGear = function () {
        this.gear = 1 / this.gear;
    };
    return AccelerometerViewModel;
}(observable_1.Observable));
exports.AccelerometerViewModel = AccelerometerViewModel;
//# sourceMappingURL=accelerometer-view-model.js.map
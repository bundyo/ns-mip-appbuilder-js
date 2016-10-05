"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var all_mips_1 = require("../all-mips");
var nativescript_accelerometer_1 = require("nativescript-accelerometer");
var AccelerometerComponent = (function () {
    function AccelerometerComponent() {
        this.turnSpeed = 0;
        this.speed = 0;
        this.gear = 1.5;
        this.accelerometerActive = false;
        this.loop = null;
    }
    AccelerometerComponent.prototype.startAccelerometer = function () {
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
    AccelerometerComponent.prototype.stopAccelerometer = function () {
        if (this.accelerometerActive) {
            nativescript_accelerometer_1.stopAccelerometerUpdates();
            this.accelerometerActive = false;
            this.stopContinousMove();
        }
    };
    AccelerometerComponent.prototype.startContinousMove = function () {
        var _this = this;
        if (this.loop)
            return;
        this.loop = setInterval(function () {
            all_mips_1.AllMips.drive(_this.speed, _this.turnSpeed);
        }, 50);
    };
    AccelerometerComponent.prototype.stopContinousMove = function () {
        clearInterval(this.loop);
        this.loop = null;
    };
    AccelerometerComponent.prototype.switchGear = function () {
        this.gear = 1 / this.gear;
    };
    AccelerometerComponent = __decorate([
        core_1.Component({
            selector: 'mip-accelerometer',
            templateUrl: 'accelerometer/accelerometer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AccelerometerComponent);
    return AccelerometerComponent;
}());
exports.AccelerometerComponent = AccelerometerComponent;
//# sourceMappingURL=accelerometer.component.js.map
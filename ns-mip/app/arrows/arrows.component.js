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
var ArrowsComponent = (function () {
    function ArrowsComponent() {
        this._speed = 24;
        this._turnSpeed = 16;
    }
    Object.defineProperty(ArrowsComponent.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            this._speed = Math.round(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrowsComponent.prototype, "turnSpeed", {
        get: function () {
            return this._turnSpeed;
        },
        set: function (val) {
            this._turnSpeed = Math.round(val);
        },
        enumerable: true,
        configurable: true
    });
    ArrowsComponent.prototype.moveForward = function () {
        all_mips_1.AllMips.moveForward(this.speed);
    };
    ArrowsComponent.prototype.moveBack = function () {
        all_mips_1.AllMips.moveBack(this.speed);
    };
    ArrowsComponent.prototype.turnLeft = function () {
        all_mips_1.AllMips.turnLeft(this.speed, this.turnSpeed);
    };
    ArrowsComponent.prototype.turnRight = function () {
        all_mips_1.AllMips.turnRight(this.speed, this.turnSpeed);
    };
    ArrowsComponent = __decorate([
        core_1.Component({
            selector: 'mip-arrows',
            templateUrl: 'arrows/arrows.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ArrowsComponent);
    return ArrowsComponent;
}());
exports.ArrowsComponent = ArrowsComponent;
//# sourceMappingURL=arrows.component.js.map
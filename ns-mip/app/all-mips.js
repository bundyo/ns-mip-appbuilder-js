"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var AllMipsModel = (function (_super) {
    __extends(AllMipsModel, _super);
    function AllMipsModel() {
        _super.call(this);
        this.mips = [];
    }
    AllMipsModel.prototype.addMipDevice = function (mip) {
        this.mips.push(mip);
    };
    AllMipsModel.prototype.removeMip = function (mip) {
        var index = this.mips.indexOf(mip);
        if (index > -1)
            this.mips.splice(index, 1);
    };
    AllMipsModel.prototype.drive = function (speed, turnSpeed) {
        this.mips.forEach(function (mip) {
            mip.drive(speed, turnSpeed);
        });
    };
    AllMipsModel.prototype.moveForward = function (speed) {
        this.mips.forEach(function (mip) {
            mip.moveForward(speed);
        });
    };
    AllMipsModel.prototype.moveBack = function (speed) {
        this.mips.forEach(function (mip) {
            mip.moveBack(speed);
        });
    };
    AllMipsModel.prototype.turnLeft = function (speed, turnSpeed) {
        this.mips.forEach(function (mip) {
            mip.turnLeft(speed, turnSpeed);
        });
    };
    AllMipsModel.prototype.turnRight = function (speed, turnSpeed) {
        this.mips.forEach(function (mip) {
            mip.turnRight(speed, turnSpeed);
        });
    };
    AllMipsModel.prototype.setVolume = function (val) {
        this.mips.forEach(function (mip) {
            mip.mipController.setVolume(val);
        });
    };
    AllMipsModel.prototype.playOneSound = function (soundIndex, soundDelay, soundRepeat) {
        this.mips.forEach(function (mip) {
            mip.mipController.playOneSound(soundIndex, soundDelay, soundRepeat);
        });
    };
    // call like this AllMips.setHeadLED(HeadLightState.On, HeadLightState.Off, HeadLightState.FastBlink, HeadLightState.SlowBlink);
    AllMipsModel.prototype.setHeadLED = function (light1, light2, light3, light4) {
        this.mips.forEach(function (mip) {
            mip.mipController.setHeadLED(light1, light2, light3, light4);
        });
    };
    AllMipsModel.prototype.setChestLED = function (red, green, blue) {
        this.mips.forEach(function (mip) {
            mip.mipController.setChestLED(red, green, blue);
        });
    };
    return AllMipsModel;
}(observable_1.Observable));
exports.AllMipsModel = AllMipsModel;
exports.AllMips = new AllMipsModel();
//# sourceMappingURL=all-mips.js.map
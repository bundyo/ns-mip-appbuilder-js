"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var bluetooth = require("nativescript-bluetooth");
var mip_controller_1 = require("./mip-controller");
var mip_status_reader_1 = require("./mip-status-reader");
var MipDevice = (function (_super) {
    __extends(MipDevice, _super);
    function MipDevice(UUID, name, state) {
        _super.call(this);
        this.UUID = UUID;
        this.name = name;
        this.state = state;
    }
    MipDevice.prototype.connect = function (disconnectFn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            bluetooth.connect({
                UUID: _this.UUID,
                onConnected: (function (peripheral) {
                    //this.connectedDevice = device;
                    console.log("Periperhal connected with UUID: " + peripheral.UUID);
                    _this.mipController = new mip_controller_1.MipController(_this.UUID);
                    _this.mipStatusReader = new mip_status_reader_1.MipStatusReader(_this.UUID);
                    resolve(_this.UUID);
                }),
                onDisconnected: function (peripheral) {
                    if (disconnectFn)
                        disconnectFn(this);
                    alert("Device disconnected");
                }
            });
        });
    };
    MipDevice.prototype.disconnect = function () {
        return bluetooth.disconnect(this.UUID);
    };
    //speed     [-1]-[0] Back speed / [0]-[1] Forward
    //turnspeed [-1]-[0] Left : [0]-[1] Right
    MipDevice.prototype.drive = function (speed, turnSpeed) {
        speed = this.convertSpeed(speed);
        turnSpeed = this.convertTurnSpeed(turnSpeed);
        //this.executeInstruction(codes.ContinousDrive, [speed, turnSpeed]);
        this.mipController.continousDrive(speed, turnSpeed);
    };
    MipDevice.prototype.convertSpeed = function (speed) {
        if (speed > 1)
            return 0x20;
        else if (speed < -1)
            return 0x40;
        // going backwards
        if (speed < 0)
            return Math.round(-speed * 0x20 + 0x20);
        return Math.round(speed * 0x20);
    };
    MipDevice.prototype.convertTurnSpeed = function (turnSpeed) {
        if (turnSpeed > 1)
            return 0x60;
        else if (turnSpeed < -1)
            return 0x80;
        if (turnSpeed < 0)
            return Math.round(-turnSpeed * 0x20 + 0x60);
        return Math.round(turnSpeed * 0x20 + 0x40);
    };
    //Speed fwd 0x01 (slow) - 0x20 (fast) / bwd 0x21 (slow) - 0x40 (fast)
    //Turn Right 0x41 (slow) - 0x60 (fast) / Left 0x61 (slow) - 0x80 (fast)
    MipDevice.prototype.move = function (speed, turn) {
        var _this = this;
        var repeat = 5;
        var loop = setInterval(function () {
            //this.executeInstruction(codes.ContinousDrive, [speed, turn]);
            _this.mipController.continousDrive(speed, turn);
            if (repeat-- < 0)
                clearInterval(loop);
        }, 50);
    };
    MipDevice.prototype.moveForward = function (speed) {
        this.move(speed, 0);
    };
    MipDevice.prototype.moveBack = function (speed) {
        this.move(speed + 0x20, 0);
    };
    MipDevice.prototype.turnLeft = function (forwardSpeed, turnSpeed) {
        this.move(forwardSpeed, turnSpeed + 0x60);
    };
    MipDevice.prototype.turnRight = function (forwardSpeed, turnSpeed) {
        this.move(forwardSpeed, turnSpeed + 0x40);
    };
    MipDevice.prototype.getOdometer = function () {
        this.mipStatusReader.getOdometer()
            .then(function (res) {
            alert("getOdometer:" + JSON.stringify(res));
        });
    };
    MipDevice.prototype.getStatus = function () {
        this.mipStatusReader.getMipStatus()
            .then(function (res) {
            alert("getMipStatus res:" + JSON.stringify(res));
        });
    };
    MipDevice.prototype.setHeadLED = function (light1, light2, light3, light4) {
        this.mipController.setHeadLED(light1, light2, light3, light4);
    };
    return MipDevice;
}(observable_1.Observable));
exports.MipDevice = MipDevice;
function convertToHexString(code) {
    return "0x" + code.toString(16);
}
//# sourceMappingURL=mip-device.js.map
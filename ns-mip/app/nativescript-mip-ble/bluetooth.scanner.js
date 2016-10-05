"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var bluetooth = require("nativescript-bluetooth");
var mip_device_1 = require("./mip-device");
var BluetoothScanner = (function (_super) {
    __extends(BluetoothScanner, _super);
    function BluetoothScanner() {
        _super.call(this);
        this.initialisePermissionsIfRequired();
        this.devicesAround = new observable_array_1.ObservableArray();
        this.devicesAround.push(new mip_device_1.MipDevice("B4:99:4C:48:14:24", "Test", "who knows?"));
    }
    BluetoothScanner.prototype.scan = function () {
        var _this = this;
        this.devicesAround.splice(0);
        return bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 3,
            onDiscovered: function (peripheral) {
                if (peripheral.UUID === null)
                    peripheral.UUID = "no UUID";
                if (peripheral.name === null)
                    peripheral.name = "no name";
                if (peripheral.state === null)
                    peripheral.state = "no state";
                console.log("");
                console.log("Periperhal found with UUID: " + peripheral.UUID);
                console.log("Periperhal found with name: " + peripheral.name);
                console.log("Periperhal found with state: " + peripheral.state);
                _this.devicesAround.push(new mip_device_1.MipDevice(peripheral.UUID, peripheral.name, peripheral.state));
            }
        });
    };
    BluetoothScanner.prototype.initialisePermissionsIfRequired = function () {
        var _this = this;
        this.hasPermissions()
            .then(function (granted) {
            if (granted == false) {
                console.log("Requesting permissions");
                _this.requestPermissions();
            }
        });
    };
    BluetoothScanner.prototype.hasPermissions = function () {
        return bluetooth.hasCoarseLocationPermission();
    };
    BluetoothScanner.prototype.requestPermissions = function () {
        bluetooth.requestCoarseLocationPermission().then(function () {
            console.log("Location permission requested");
        });
    };
    return BluetoothScanner;
}(observable_1.Observable));
exports.BluetoothScanner = BluetoothScanner;
//# sourceMappingURL=bluetooth.scanner.js.map
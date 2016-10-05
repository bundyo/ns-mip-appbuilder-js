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
var bluetooth_scanner_1 = require("../nativescript-mip-ble/bluetooth.scanner");
var all_mips_1 = require("../all-mips");
var core_1 = require('@angular/core');
var ScanComponent = (function () {
    function ScanComponent() {
        this.scanner = new bluetooth_scanner_1.BluetoothScanner();
        this.scanner.initialisePermissionsIfRequired();
    }
    ScanComponent.prototype.getPermissions = function () {
        this.scanner.initialisePermissionsIfRequired();
    };
    ScanComponent.prototype.connect = function (args) {
        console.log("args: " + args.index);
        var mipDevice = this.scanner.devicesAround.getItem(args.index);
        // mipDevice.connect(this.onDisconnected)
        mipDevice.connect(function () { })
            .then(function (UUID) {
            all_mips_1.AllMips.addMipDevice(mipDevice);
            alert("Device Connected");
        });
    };
    ScanComponent.prototype.scan = function () {
        // var listView: RadListView = eventData.object;
        this.scanner.scan()
            .then(function () {
            // listView.notifyPullToRefreshFinished();
        }, function (err) {
            // listView.notifyPullToRefreshFinished();
            alert("error while scanning: " + err);
        });
    };
    ScanComponent.prototype.onDisconnected = function (mip) {
        all_mips_1.AllMips.removeMip(mip);
    };
    ScanComponent = __decorate([
        core_1.Component({
            selector: 'mip-scan',
            templateUrl: 'scan/scan.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ScanComponent);
    return ScanComponent;
}());
exports.ScanComponent = ScanComponent;
//# sourceMappingURL=scan.component.js.map
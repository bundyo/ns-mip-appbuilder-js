"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable = require("data/observable");
var bluetooth_scanner_1 = require("../../nativescript-mip-ble/bluetooth.scanner");
var all_mips_1 = require("../../all-mips");
var ScanViewModel = (function (_super) {
    __extends(ScanViewModel, _super);
    function ScanViewModel() {
        _super.call(this);
        this.scanner = new bluetooth_scanner_1.BluetoothScanner();
        this.scanner.initialisePermissionsIfRequired();
    }
    ScanViewModel.prototype.getPermissions = function () {
        this.scanner.initialisePermissionsIfRequired();
    };
    ScanViewModel.prototype.connect = function (args) {
        var mipDevice = this.scanner.devicesAround.getItem(args.itemIndex);
        // mipDevice.connect(this.onDisconnected)
        mipDevice.connect(function () { })
            .then(function (UUID) {
            all_mips_1.AllMips.addMipDevice(mipDevice);
            alert("Device Connected");
        });
    };
    ScanViewModel.prototype.scan = function (eventData) {
        var listView = eventData.object;
        this.scanner.scan()
            .then(function () {
            listView.notifyPullToRefreshFinished();
        }, function (err) {
            listView.notifyPullToRefreshFinished();
            alert("error while scanning: " + err);
        });
    };
    ScanViewModel.prototype.onDisconnected = function (mip) {
        all_mips_1.AllMips.removeMip(mip);
    };
    return ScanViewModel;
}(observable.Observable));
exports.ScanViewModel = ScanViewModel;
//# sourceMappingURL=scan-view-model.js.map
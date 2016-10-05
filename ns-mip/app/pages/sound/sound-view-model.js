"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var all_mips_1 = require("../../all-mips");
var SoundViewModel = (function (_super) {
    __extends(SoundViewModel, _super);
    function SoundViewModel() {
        _super.apply(this, arguments);
        this._volume = 0;
    }
    Object.defineProperty(SoundViewModel.prototype, "volume", {
        get: function () {
            return this._volume;
        },
        set: function (val) {
            this._volume = val;
            all_mips_1.AllMips.setVolume(val);
        },
        enumerable: true,
        configurable: true
    });
    SoundViewModel.prototype.playSound = function () {
        all_mips_1.AllMips.playOneSound(this.soundIndex, this.soundDelay, this.soundRepeat);
    };
    return SoundViewModel;
}(observable_1.Observable));
exports.SoundViewModel = SoundViewModel;
//# sourceMappingURL=sound-view-model.js.map
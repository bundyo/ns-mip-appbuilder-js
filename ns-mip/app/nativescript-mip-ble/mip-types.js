"use strict";
var SoundInstruction = (function () {
    function SoundInstruction(soundFileIndex, delay) {
        this.soundFileIndex = soundFileIndex;
        this.delay = delay;
    }
    return SoundInstruction;
}());
exports.SoundInstruction = SoundInstruction;
(function (Position) {
    Position[Position["OnBack"] = 0] = "OnBack";
    Position[Position["FaceDown"] = 1] = "FaceDown";
})(exports.Position || (exports.Position = {}));
var Position = exports.Position;
(function (Direction) {
    Direction[Direction["Forward"] = 0] = "Forward";
    Direction[Direction["Backward"] = 1] = "Backward";
})(exports.Direction || (exports.Direction = {}));
var Direction = exports.Direction;
(function (TurnDirection) {
    TurnDirection[TurnDirection["Left"] = 0] = "Left";
    TurnDirection[TurnDirection["Right"] = 1] = "Right";
})(exports.TurnDirection || (exports.TurnDirection = {}));
var TurnDirection = exports.TurnDirection;
(function (GameMode) {
    GameMode[GameMode["App"] = 1] = "App";
    GameMode[GameMode["Cage"] = 2] = "Cage";
    GameMode[GameMode["Tracking"] = 3] = "Tracking";
    GameMode[GameMode["Dance"] = 4] = "Dance";
    GameMode[GameMode["Default"] = 5] = "Default";
    GameMode[GameMode["Stack"] = 6] = "Stack";
    GameMode[GameMode["TrickProgramming"] = 7] = "TrickProgramming";
    GameMode[GameMode["RoamMode"] = 8] = "RoamMode";
})(exports.GameMode || (exports.GameMode = {}));
var GameMode = exports.GameMode;
var SoftwareVersion = (function () {
    function SoftwareVersion(year, month, day, version) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.version = version;
    }
    return SoftwareVersion;
}());
exports.SoftwareVersion = SoftwareVersion;
(function (PositionStatus) {
    PositionStatus[PositionStatus["OnBack"] = 0] = "OnBack";
    PositionStatus[PositionStatus["FaceDown"] = 1] = "FaceDown";
    PositionStatus[PositionStatus["Upright"] = 2] = "Upright";
    PositionStatus[PositionStatus["PickedUp"] = 3] = "PickedUp";
    PositionStatus[PositionStatus["Handstand"] = 4] = "Handstand";
    PositionStatus[PositionStatus["FaceDownOnTray"] = 5] = "FaceDownOnTray";
    PositionStatus[PositionStatus["OnBackWithKickstand"] = 6] = "OnBackWithKickstand";
})(exports.PositionStatus || (exports.PositionStatus = {}));
var PositionStatus = exports.PositionStatus;
var Status = (function () {
    function Status(batteryLevel, position) {
        this._batteryLevel = batteryLevel;
        this.position = position;
    }
    Object.defineProperty(Status.prototype, "batteryLevel", {
        /**
         * The battery level in Volt, with the precision of one digit after comma
         */
        get: function () {
            // value is recorded in steps of 0.052 Volt
            return Math.round(this._batteryLevel * 0.52) / 10;
        },
        enumerable: true,
        configurable: true
    });
    Status.prototype.toString = function () {
        return "Position:" + PositionStatus[this.position] + "\nBattery level:" + this.batteryLevel + "V";
    };
    return Status;
}());
exports.Status = Status;
var WeightStatus = (function () {
    function WeightStatus(code) {
        // BYTE 1 : 0xD3(-45 degree) - 0x2D(+45 degree)	
        // 0x00(min)~0x2D(max) is holding the weight on the back
        if (code < 0x2e) {
            this.degree = code;
        }
        else if (code > 0xd2) {
            this.degree = code - 0xff;
        }
        else {
            this.degree = 0;
        }
    }
    return WeightStatus;
}());
exports.WeightStatus = WeightStatus;
var ChestLedInfo = (function () {
    function ChestLedInfo(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    return ChestLedInfo;
}());
exports.ChestLedInfo = ChestLedInfo;
(function (HeadLightState) {
    HeadLightState[HeadLightState["Off"] = 0] = "Off";
    HeadLightState[HeadLightState["On"] = 1] = "On";
    HeadLightState[HeadLightState["SlowBlink"] = 2] = "SlowBlink";
    HeadLightState[HeadLightState["FastBlink"] = 3] = "FastBlink";
})(exports.HeadLightState || (exports.HeadLightState = {}));
var HeadLightState = exports.HeadLightState;
var HeadLedInfo = (function () {
    function HeadLedInfo(light1, light2, light3, light4) {
        this.light1 = light1;
        this.light2 = light2;
        this.light3 = light3;
        this.light4 = light4;
    }
    return HeadLedInfo;
}());
exports.HeadLedInfo = HeadLedInfo;
//# sourceMappingURL=mip-types.js.map
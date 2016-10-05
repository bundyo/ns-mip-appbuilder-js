"use strict";
var frame_1 = require("ui/frame");
var navigationEntry = {
    moduleName: "pages/controller/controller-page",
    //    context: {mipDevice: mipDevice},
    animated: false,
    backstackVisible: false
};
function navigateToScanner() {
    navigationEntry.moduleName = "pages/scan/scan-page";
    frame_1.topmost().navigate(navigationEntry);
}
exports.navigateToScanner = navigateToScanner;
function navigateToArrows() {
    navigationEntry.moduleName = "pages/arrows/arrows-page";
    frame_1.topmost().navigate(navigationEntry);
}
exports.navigateToArrows = navigateToArrows;
function navigateToAccelerometer() {
    navigationEntry.moduleName = "pages/accelerometer/accelerometer-page";
    frame_1.topmost().navigate(navigationEntry);
}
exports.navigateToAccelerometer = navigateToAccelerometer;
function navigateToJoystick() {
    navigationEntry.moduleName = "pages/joystick/joystick-page";
    frame_1.topmost().navigate(navigationEntry);
}
exports.navigateToJoystick = navigateToJoystick;
function navigateToSound() {
    navigationEntry.moduleName = "pages/sound/sound-page";
    frame_1.topmost().navigate(navigationEntry);
}
exports.navigateToSound = navigateToSound;
//# sourceMappingURL=drawer-content.js.map
"use strict";
var joystick_view_model_1 = require("./joystick-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new joystick_view_model_1.JoyStickViewModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=joystick-page.js.map
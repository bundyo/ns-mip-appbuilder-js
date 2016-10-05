"use strict";
var accelerometer_view_model_1 = require("./accelerometer-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new accelerometer_view_model_1.AccelerometerViewModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=accelerometer-page.js.map
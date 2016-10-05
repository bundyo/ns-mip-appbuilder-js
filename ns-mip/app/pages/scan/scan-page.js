"use strict";
var scan_view_model_1 = require("./scan-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new scan_view_model_1.ScanViewModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=scan-page.js.map
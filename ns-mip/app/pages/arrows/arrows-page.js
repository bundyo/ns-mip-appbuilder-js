"use strict";
var arrows_view_model_1 = require("./arrows-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new arrows_view_model_1.ArrowsViewModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=arrows-page.js.map
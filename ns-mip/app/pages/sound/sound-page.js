"use strict";
var sound_view_model_1 = require("./sound-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new sound_view_model_1.SoundViewModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=sound-page.js.map
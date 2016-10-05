"use strict";
var scan_component_1 = require("./scan/scan.component");
var arrows_component_1 = require("./arrows/arrows.component");
var accelerometer_component_1 = require("./accelerometer/accelerometer.component");
exports.appRoutes = [
    { path: "", redirectTo: "/scan", pathMatch: "full", },
    { path: "scan", component: scan_component_1.ScanComponent },
    { path: "arrows", component: arrows_component_1.ArrowsComponent },
    { path: "accelerometer", component: accelerometer_component_1.AccelerometerComponent },
];
//# sourceMappingURL=app.routing.js.map
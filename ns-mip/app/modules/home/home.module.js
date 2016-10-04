"use strict";
var core_1 = require("@angular/core");
var platform_1 = require("nativescript-angular/platform");
var home_routes_1 = require("./home.routes");
var home_component_1 = require("./home.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                home_routes_1.homeRouting
            ],
            declarations: [
                home_component_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map
import { NgModule } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/platform";

import { homeRouting } from "./home.routes";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    NativeScriptModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
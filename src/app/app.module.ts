import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./commponents/home/home.component";
import {declareI18nVariable} from "@angular/compiler/src/render3/view/i18n/util";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent } from './textbox';

import * as $ from "jquery";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    TextBoxComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

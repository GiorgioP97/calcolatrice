import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcolatriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

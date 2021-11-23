import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro-component/primeiro.component'
import { SegundoComponentComponent } from './segundo-component/segundo-component.component'
@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

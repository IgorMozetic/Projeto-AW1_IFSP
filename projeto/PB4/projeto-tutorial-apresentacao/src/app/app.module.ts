import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenet } from './primiero-component/primeiro.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component'

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenet,
    SegundoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

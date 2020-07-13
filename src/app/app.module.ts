import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopoComponent} from "./topo/topo.component";

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Indicação do componente que será injetado na aplicação
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app/app.router';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

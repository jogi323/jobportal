import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
// import {CalendarComponent} from "ap-angular2-fullcalendar";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing';

//shared modules import
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    // CalendarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BootstrapModalModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ LoginComponent ]
})
export class AppModule { }

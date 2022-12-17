import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    FirstPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

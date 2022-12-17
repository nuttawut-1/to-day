

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './page/first-page/first-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';

const routes: Routes = [
{
  path: 'home',
  component: HomePageComponent
},
{
  path: 'main',
  component: MainPageComponent
},
{
  path: 'first',
  component: FirstPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

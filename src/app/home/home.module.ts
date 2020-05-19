import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [HomeRoutingModule.Components],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

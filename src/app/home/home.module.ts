import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, MatIconModule],
})
export class HomeModule {



}

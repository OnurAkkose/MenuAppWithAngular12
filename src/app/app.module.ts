import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { ProductState } from './store/state/product.state';
import { CategoryState } from './store/state/category.state';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import { ThemaState } from './store/state/thema.state';
@NgModule({
  declarations: [
    
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    NgxsModule.forRoot([ProductState, CategoryState, ThemaState], {}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

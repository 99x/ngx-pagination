import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { PaginationModule } from '@99xt/ngx-pagination';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PaginationModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

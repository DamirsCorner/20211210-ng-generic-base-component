import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ItemAListComponent,
  ItemBListComponent,
} from './item-list/item-list.component';

@NgModule({
  declarations: [AppComponent, ItemAListComponent, ItemBListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

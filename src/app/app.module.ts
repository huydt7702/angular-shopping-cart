import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [AppComponent, CartHeaderComponent, ProductListComponent, PromoCodeComponent, CartSummaryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent {
  title = 'Shopping Cart';
  numberItems: number = 4;
}

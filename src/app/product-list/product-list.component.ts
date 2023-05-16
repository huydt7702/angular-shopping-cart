import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 1,
    },
    {
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    },
  ];

  ngAfterViewInit(): void {
    this.renderProducts(this.show);
  }

  show(innerHTML: string) {
    const productsBlock = document.querySelector('.products');
    if (productsBlock) {
      productsBlock.innerHTML = innerHTML;
    }
  }

  renderProducts(callback: (data: string) => any) {
    let innerHTML = this.products
      .map((product) => {
        return `
      <li class="row">
      <div class="col left">
        <div class="thumbnail">
          <a href="#">
            <img src="${product.thumbnail}" alt="${product.name}" />
          </a>
        </div>
        <div class="detail">
          <div class="name"><a href="#">${product.name}</a></div>
          <div class="description">${product.description}</div>
          <div class="price">$${product.price}</div>
        </div>
      </div>
  
      <div class="col right">
        <div class="quantity">
          <input type="number" class="quantity" step="1" value="${product.quantity}" />
        </div>
  
        <div class="remove">
          <svg
            version="1.1"
            class="close"
            xmlns="//www.w3.org/2000/svg"
            xmlns:xlink="//www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 60 60"
            enable-background="new 0 0 60 60"
            xml:space="preserve"
          >
            <polygon
              points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"
            ></polygon>
          </svg>
        </div>
      </div>
    </li>
      `;
      })
      .join('');
    callback(innerHTML);
  }
}

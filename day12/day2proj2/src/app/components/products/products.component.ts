import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  product = [
    { name: 'laptop', price: 540, description: 'High-performance laptop' },
    { name: 'phone', price: 550, description: 'Latest smartphone' },
    { name: 'pc', price: 570, description: 'Powerful desktop computer' },
    { name: 'tab', price: 500, description: 'Lightweight tablet' },
    { name: 'disk', price: 100, description: 'External storage disk' },
  ];

  cart: any[] = [];

  // AddedToCart(it: any) {
  //   this.cart.push(it);
  // }

  deleteProd(it: any) {
    this.product = this.product.filter((e) => e.name !== it.name);
    this.cart = this.cart.filter((e) => e.name !== it.name);
  }

  ngOnChanges() {
    this.cart = this.CartService.getCart();
    console.log(this.cart);
  }
  constructor(private CartService: CartService) {}
  addprod(product: any) {
    this.CartService.addToCart(product);
    console.log('cart');
    this.cart.push(product);
  }
}

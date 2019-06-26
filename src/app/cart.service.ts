import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  //add item to cart.
  addToCart(product){
    this.items.push(product);
  }

  //return cart items
  getItems(){
    return this.items;
  }

  //Empty the cart.
  clearCart(){
    this.items = [];
    return this.items;
  }

  //Calculate shipping cost.
  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }

  constructor(
    private http: HttpClient
  ) { }

}
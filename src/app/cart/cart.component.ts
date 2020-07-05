import {Component, OnInit} from '@angular/core';
import {CartItem} from "../products/product.model";
import {select, Store} from "@ngrx/store";
import {getSelectedSelector, ProductsState} from "../products/store/products.reducer";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItemList: CartItem[];
  private header = {
    product: {
      cover: '',
      title: 'Title',
      price: 'Price',
      amount: 'Amount'
    },
    quantity: 'Quantity',
    icon: ''
  }
  private total: number;
  private totalPricesList: number[];

  constructor(private store: Store<ProductsState>) {
  }

  ngOnInit() {
    this.store.pipe(select(getSelectedSelector)).subscribe((cartItems: CartItem[]) => {
      this.cartItemList = cartItems;
      this.totalPricesList = this.cartItemList.map(item => {
        return item.product.price * item.quantity;
      });
      this.total = this.totalPricesList && this.totalPricesList.length
        ? (this.totalPricesList.length > 1 ? this.totalPricesList.reduce((a, b) => a + b) : this.totalPricesList[0] )
        : 0;
    })
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../products/product.model";
import {Store} from "@ngrx/store";
import {ProductsState} from "../../products/store/products.reducer";
import {DeleteGroupAction, DeleteProductFromCartAction} from "../../products/store/products.action";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
@Input() item: CartItem;
@Input() icon: string;
  constructor(private store: Store<ProductsState>) { }

  ngOnInit() {
  }

  getItemAmount(item){
    return typeof item.product.price === 'string' ? 'Amount' : item.product.price * item.quantity;
  }

  removeItem(itemId) {  // future improvement
    this.store.dispatch(new DeleteProductFromCartAction(itemId));
  }

  removeGroupOfItems(itemId) {
    console.log('remove group: ', itemId);

    this.store.dispatch(new DeleteGroupAction(itemId));
  }
}

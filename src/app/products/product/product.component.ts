import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product.model";
import {Store} from "@ngrx/store";
import {ProductsState} from "../store/products.reducer";
import {AddToCartAction} from "../store/products.action";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product: Product;

  constructor(private store: Store<ProductsState>) { }

  ngOnInit() {
  }


  addToCard(product) {
    this.store.dispatch(new AddToCartAction(product));
  }
}

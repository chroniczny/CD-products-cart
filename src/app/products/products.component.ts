import {Component, OnInit} from '@angular/core';
import {Product} from './product.model';
import {getItemsSelector, ProductsState} from "./store/products.reducer";
import {Store, select} from "@ngrx/store";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public productsList: Product[];

  constructor(
    public productsService: ProductsService,
    private store: Store<ProductsState>) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(response => {
      if (response) {
        this.productsList = response;
      }
    });

    this.store.pipe(select(getItemsSelector)).subscribe((products: Product[]) => {
      this.productsList = products;
    })
  }
}

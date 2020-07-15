import { Injectable } from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import {map, catchError, withLatestFrom} from 'rxjs/operators';
import {
  ADD_TO_CART, DELETE_GROUP,
  DELETE_PRODUCT_FROM_CART,
  IncreaseCartFailureAction,
  UpdateCartAction
} from "./products.action";
import {select, Store} from "@ngrx/store";
import {getSelectedSelector, ProductsState} from "./products.reducer";
import {CartItem, Product} from "../product.model";
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<ProductsState>
  ) {}

@Effect({})
  addProductToCart: Observable<any> = this.actions$.pipe(
    ofType(ADD_TO_CART),
    map((action: any) => action.payload),
    withLatestFrom(this.store.pipe(select(getSelectedSelector))),
    map(([payload, selected]: [Product, CartItem[]]) => {
      const existItems = selected.filter(item => item.product.id === payload.id);
      let updatedCartItemsList;
      if (existItems && existItems.length) {
        updatedCartItemsList = selected.map((item: CartItem) => {
          if(item.product.id === payload.id) {
            item.quantity += 1;
          }
          return item;
        })

      } else {
        updatedCartItemsList = [...selected, {product: payload, quantity: 1}];
      }

      return new UpdateCartAction(updatedCartItemsList);
    }),
    catchError(error => of (new IncreaseCartFailureAction(error)))
  );

  @Effect({}) // just for the future improvement
  deleteProductFromCart: Observable<any> = this.actions$.pipe(
    ofType(DELETE_PRODUCT_FROM_CART),
    map((action: any) => action.payload),
    withLatestFrom(this.store.pipe(select(getSelectedSelector))),
    map(([payload, selected]: [number, CartItem[]]) => {
      const existItems = selected.filter(item => item.product.id === payload);
      let updatedCartItemsList;
      if (existItems && existItems.length) {
        updatedCartItemsList = selected.map((item: CartItem) => {
          if(item.product.id === payload) {
            item.quantity -= 1;
          }

          if(item.quantity) {
            return item;
          }
        })
      } else {
        updatedCartItemsList = [...selected];
      }

      return new UpdateCartAction(updatedCartItemsList);
    }),
    catchError(error => of (new IncreaseCartFailureAction(error)))
  );

  @Effect({})
  deleteGroupFromCart: Observable<any> = this.actions$.pipe(
    ofType(DELETE_GROUP),
    map((action: any) => action.payload),
    withLatestFrom(this.store.pipe(select(getSelectedSelector))),
    map(([payload, selected]: [number, CartItem[]]) => {
      const updatedCartItemsList = selected.filter(item => item.product.id !== payload);

      return new UpdateCartAction(updatedCartItemsList);
    }),
    catchError(error => of (new IncreaseCartFailureAction(error)))
  );
}

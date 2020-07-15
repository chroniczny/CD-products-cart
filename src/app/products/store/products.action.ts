import { Action } from '@ngrx/store';
import { CartItem, Product } from "../product.model";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const INCREASE_CART_FAILURE = 'INCREASE_CART_FAILURE';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART'; // future improvement
export const DELETE_GROUP = 'DELETE_GROUP';

export class LoadProductsAction implements Action {
  readonly type = LOAD_PRODUCTS;
}
export class AddToCartAction implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: Product) {};
}

export class UpdateCartAction implements Action {
  readonly type = UPDATE_CART;
  constructor(public payload: CartItem[]) {};
}


export class IncreaseCartFailureAction implements Action {
  readonly type = INCREASE_CART_FAILURE;
  constructor(public payload: any) {};
}

export class DeleteProductFromCartAction implements Action {
  readonly type = DELETE_PRODUCT_FROM_CART;
  constructor(public payload: number) {};
}

export class DeleteGroupAction implements Action {
  readonly type = DELETE_GROUP;
  constructor(public payload: number) {};
}

export type ProductsActions = LoadProductsAction
  | AddToCartAction
  | UpdateCartAction
  | IncreaseCartFailureAction
  | DeleteProductFromCartAction
  | DeleteGroupAction;

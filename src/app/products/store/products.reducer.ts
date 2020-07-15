import {CartItem, Product} from "../product.model";
import {LOAD_PRODUCTS, ProductsActions, UPDATE_CART} from './products.action';
import { createSelector } from "@ngrx/store";


export interface ProductsState {
  amount: number;
  items: Product[];
  selectedItems: CartItem[];
}

export const initialState: ProductsState = {
  amount: 0,
  selectedItems: [],
  items: [
    {
      id: 11,
      title: "Doom Eternal",
      cover: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1lvj.jpg",
      availability: true,
      price: 129.99,
      currency: "PLN"
    }
  ]
}

export function reducer (
  state: ProductsState = initialState,
  action: ProductsActions): ProductsState {

  if (!state.items) {
    state = initialState;
  }
  switch(action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state
      };
      case UPDATE_CART:
      return {
        ...state,
        selectedItems: action.payload
      };
    default: {
      return state;
    }
  }
}

export const getMainProductsSelector = state => state.products;
const getItems = (productsState: ProductsState): Product[] => productsState.items;
const getSelected = (productsState: ProductsState): CartItem[] => productsState.selectedItems;
const getAmount = (productsState: ProductsState): number => productsState.amount;
export const getAmountSelector = createSelector(getMainProductsSelector, getAmount);
export const getSelectedSelector = createSelector(getMainProductsSelector, getSelected);
export const getItemsSelector = createSelector(getMainProductsSelector, getItems);

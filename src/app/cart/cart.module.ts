import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {CartItemComponent} from "./cart-item/cart-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ],
  declarations: [
    CartComponent,
    CartItemComponent

  ]
})
export class CartModule { }

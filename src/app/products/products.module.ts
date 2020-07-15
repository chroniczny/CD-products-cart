import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { reducer } from './store/products.reducer';
import { ProductComponent } from "./product/product.component";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./store/products.effect";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('products', reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductsComponent
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductsModule { }

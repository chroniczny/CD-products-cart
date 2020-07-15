import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutes, EmptyComponent } from './app.routes';
import { RouterModule } from "@angular/router";
import { ProductsBoardComponent } from './products-board/products-board.component';
import { ProductsModule } from "./products/products.module";
import { CartModule } from "./cart/cart.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    ProductsBoardComponent
  ],
  imports: [
    HttpClientModule,
    ProductsModule,
    CartModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

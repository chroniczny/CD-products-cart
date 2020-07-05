import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { ProductsBoardComponent } from "./products-board/products-board.component";

@Component({
  selector: 'cc-empty',
  template: ''
})
export class EmptyComponent {}

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
      path: 'products',
      component: ProductsBoardComponent,
    }
  ];

export class AppRoutes {
}

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`https://d3d7b19d-6b29-48c2-9367-65e29d180812.mock.pstmn.io/CD-items`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}

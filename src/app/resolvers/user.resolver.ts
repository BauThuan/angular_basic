import { Injectable, signal } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ProductDetailResolver implements Resolve<any> {
  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');
    return this.service.getListProduct().pipe(
      map(products => products.data.filter((product: any) => product.id == id )),
      catchError((error) => {
        return throwError(() => new Error(`Error ${error}`))
      })
    );;
  }
}
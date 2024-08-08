import { Injectable, signal } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ServicesComponent } from "../services/todo.service";
import { ProductService } from "../services/product.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

// Truyền data cùng với router trước khi screen được load xong
// Sang bên màn kia sẽ không phải mất thời gian call api từ trước nữa,
// Mà có sẵn data để render ra ngoài
@Injectable({ providedIn: 'root' })
export class ProductDetailResolver implements Resolve<any> {
  id: any = ''
  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
// call api trước khi load page
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id');
    return this.service.getListProduct().pipe(
      map(products => products.data.filter((product: any) => product.id === Number(id))),
      catchError((error) => {
        return throwError(() => new Error(`Error ${error}`))
      })
    );;
  }
}
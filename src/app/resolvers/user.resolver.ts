import { Injectable, signal } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ServicesComponent } from "../services/todo.service";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";
import { LIST_ROUTER } from "../app.constant";

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
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.service.getListProduct();
  }
}
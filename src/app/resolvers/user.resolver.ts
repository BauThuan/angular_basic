import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServicesComponent } from "../services/todo.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {
  constructor(private service: ServicesComponent) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.service.getBooksIdList('24');
  }
}
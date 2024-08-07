import { Injectable, signal } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ServicesComponent } from "../services/todo.service";
import { Observable } from "rxjs";
import { LIST_ROUTER } from "../app.constant";

@Injectable({ providedIn: 'root' })
// Router fix bug navigate to login
export class UserResolver implements Resolve<any> {
  id = signal<string>('')
  // token = signal(localStorage.getItem('jwt'))
  constructor(
    private service: ServicesComponent,
    // private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // if(!this.token()){
    //   this.router.navigate([LIST_ROUTER.LOGIN])
    // }
    return this.service.getBooksIdList(this.id());
  }
}
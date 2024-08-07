import { Injectable, signal } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LIST_ROUTER } from './app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}
  token = signal<string | null>(localStorage.getItem('jwt'))
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.token()) {
      console.log(">> chay vao day");
      return true; 
    } else {
      console.log(">> chay vao day");
      this.router.navigate([`/${LIST_ROUTER.LOGIN}`]);
      return false;
    }
  }
}

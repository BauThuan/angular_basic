import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(clonedRequest);
  }
  private getToken(): string {
    return localStorage.getItem('jwt') || '';
  }
}

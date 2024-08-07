import { inject, Injectable } from "@angular/core";
import { environment } from "../environments/apiUrl.environments";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = `${environment.domain}/auth/local`
    private http = inject(HttpClient)
    loginUser(data: any): Observable<any> {
        return this.http.post<any>(this.url, data).pipe(
          map(response => response),
          catchError(error => {
            console.error(`Error ${error}`);
            return throwError(() => new Error(`Error ${error}`));
          })
        );
    }
    SignUpUser(data: any){
      return this.http.post<any>(`${this.url}/register`, data).pipe(
        map(response => response),
        catchError(error => {
          return throwError(() => new Error(`Error ${error}`)) 
        })
      )
    }

}
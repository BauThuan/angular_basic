import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../environments/apiUrl.environments";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    token = signal(localStorage.getItem('jwt'))
    private url = `${environment.apiUrl}/products`
    private http = inject(HttpClient)
    getListProduct(): Observable<any> {
        return this.http.get<any>(this.url).pipe(
          map(response =>  response),
          catchError(error => {
            console.error(`Error ${error}`);
            return throwError(() => new Error(`Error ${error}`));
          })
        );
    }
    getProductBySlug(slug: string){
      return this.http.get(`${this.url}/${slug}`).pipe(
        map(responsive => responsive),
        catchError((error) => {
          return throwError(() => new Error(`Error ${error}`))

        })
      )
    }
    getProductByCategory(category: string) {
      return this.http.get(`${this.url}?filters[idCategories][slug]=${category}`).pipe(
        map(responsive => responsive),
        catchError((error) => {
          return throwError(() => new Error(`Error ${error}`))
        }) 
      )
    }
    searchProductByName(name: string){
      return this.http.get(`${this.url}?populate=*&filters[name][$contains]=${name}`).pipe(
        map(responsive => responsive),
        catchError((error) => {
          return  throwError(() => new Error(`Error ${error}`))
        })
      )
    }
    searchProductByBrand(brand: string){
      return this.http.get(`${this.url}?filters[idBrand][name]=${brand}`).pipe(
        map(responsive => responsive),
        catchError((error) => {
          return throwError(() => new Error(`Error ${error}`))
        })
      )
    }
    
}
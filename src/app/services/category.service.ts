import { Injectable } from "@angular/core";
import { environment } from "../environments/apiUrl.environments";
import { HttpClient } from "@angular/common/http";
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryService{
    private url = `${environment.apiUrl}/categories`
    constructor(private http: HttpClient){}
    getAllCategory(){
        return this.http.get<any>(this.url).pipe(
            map(responsive => responsive),
            catchError((error) => {
                return throwError(() => new Error(`Error ${error}`))
            })
        )
    }
    getAllBrand(){
        return this.http.get<any>(`${environment.apiUrl}/brands`).pipe(
            map(responsive => responsive),
            catchError((error) => {
                return throwError(() => new Error(`Error ${error}`))
            } )
        )
    }
    

}
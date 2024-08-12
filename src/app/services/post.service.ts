import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/apiUrl.environments';
import { catchError, throwError, map } from 'rxjs';
@Injectable({
    providedIn:'root'
})
export class PostServices {
    private url = `${environment.apiUrl}/blogs?populate=*`
    constructor(private http: HttpClient){}
    getAllPost(){
        return this.http.get<any>(this.url).pipe(
            map(responsive => responsive),
            catchError((err) => {
                return throwError(() => new Error(`Error ${err}`))
            })
        )
    }
    getPostBySlug(slug: string){
        return this.http.get<any>(`${environment.apiUrl}/blogs/${slug}?populate=*`).pipe(
            map(responsive => responsive),
            catchError((err) => {
                return throwError(() => new Error(`Error ${err}`))
            })
        )
    }
    searchPostByContent(content: string){
        return this.http.get<any>(`${this.url}&filters[content][$contains]=${content}`).pipe(
            map(responsive => responsive),
            catchError((err) => {
                return throwError(() => new Error(`Error ${err}`))
            } )
        )
    }

}
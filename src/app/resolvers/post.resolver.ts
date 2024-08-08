import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { PostServices } from "../services/post.service";

@Injectable({providedIn: 'root'})
export class PostDetailResolver implements Resolve<any>{
    constructor(private post: PostServices){}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any>
        {
            const id = route.paramMap.get('id')
            return this.post.getAllPost().pipe(
                map(post => post.data.filter((item: any) => {
                    return item.id == id
                })),
                catchError((error) => {
                  return throwError(() => new Error(`Error ${error}`))
                })
            )
    }

}
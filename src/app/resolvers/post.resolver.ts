import { Inject, Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { PostServices } from "../services/post.service";
import { APP_SOME_ID } from "../core/token/route-parameters.token";

@Injectable({providedIn: 'root'})
export class PostDetailResolver implements Resolve<any>{
    constructor(
        private post: PostServices,
        @Inject(APP_SOME_ID) private readonly id$: Observable<string | null>
    ){}
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
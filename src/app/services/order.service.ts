import { Injectable } from '@angular/core';
import { environment } from '../environments/apiUrl.environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { type Payload_Order } from '../app.type';
import { DataFormatService } from '../shared/data-format.service';
@Injectable({
    providedIn:'root'
})
export class OrderService{
    private url = `${environment.apiUrl}/orders?populate=*`
    constructor(
        private http: HttpClient,
        private formatData: DataFormatService
    ){}
    getAllOrder(){
        return this.http.get<any>(this.url).pipe(
            map(responsive => responsive),
            catchError((error) => {
                return throwError(() => new Error(`Error ${error}`))
            })
        )
    }
    postOrder(data: Payload_Order){
        const payload = this.formatData.handleFormatDataOrder(data)
        return this.http.post<Payload_Order>(`${environment.apiUrl}/orders`, payload).pipe(
            map(responsive => responsive),
            catchError((error) => {
                return throwError(() => new Error(`Error ${error}`))
            })
        )

    }
    


}
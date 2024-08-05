import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/apiUrl.environments';

@Injectable({
  providedIn: 'root'
})
export class ServicesComponent {
  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);
  data: any = []

  getBooksList(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error fetching books:', error);
        return throwError(() => new Error('Error fetching books'));
      })
    );
  }
  postBooks(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error posting book:', error);
        return throwError(() => new Error('Error posting book'));
      })
    );
  }
  updateBookId(data: any, id: any){
    const updateBookUrl = `${this.apiUrl}/${id}`
    return this.http.put<any>(updateBookUrl, data).pipe(
      map(respone =>  respone),
      catchError(error => {
        console.log('>>> check error', error)
        return throwError(() => new Error(`Error update book ${id}`))
      }) 
    )
  }
  deleteBookId(id: any): Observable<any> { 
    const deleteUrl = `${this.apiUrl}/${id}`; 
    return this.http.delete<any>(deleteUrl, id).pipe(
      map(response => response),
      catchError(error => {
        console.error(`Error delete book ${id}`, error);
        return throwError(() => new Error(`Error delete book ${id}`));
      })
    );
  }
}

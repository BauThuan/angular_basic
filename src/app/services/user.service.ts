import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/apiUrl.environments';

@Injectable({
  providedIn: 'root'
})

export class ServicesComponent {
  private apiUrl = environment.apiUrl
  private http = inject(HttpClient)
  getBooksList(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        console.error('Error fetching tasks:', error);
        return from([]);
      })
    );
  }
}


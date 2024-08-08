import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PropsDatatService {
    private dataSubject = new BehaviorSubject<string>(''); 
    data: Observable<string> = this.dataSubject.asObservable(); 
    updateData(newData: string) {
      this.dataSubject.next(newData);
    }
}
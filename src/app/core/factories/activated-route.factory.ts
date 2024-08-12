import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Factory function to get route parameter as an observable
export function routeParamFactory(paramKey: string) {
  return (route: ActivatedRoute): Observable<string | null> => {
    return route.paramMap.pipe(map(params => params.get(paramKey)));
    // cái này datta động
  };
}

// Factory function to get route parameter as a snapshot- cách nàyd data tĩnh
export function routeParamSnapshotFactory(paramKey: string) {
  return (route: ActivatedRoute): string | null => {
    return route.snapshot.paramMap.get(paramKey);
  };
}       

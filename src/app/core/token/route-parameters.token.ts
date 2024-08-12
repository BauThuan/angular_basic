import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

// Injection token for route parameter observable
export const APP_SOME_ID = new InjectionToken<Observable<string | null>>(
  'stream of id from route param'
);

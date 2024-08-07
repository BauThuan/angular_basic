import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigInterceptor } from './config.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ConfigInterceptor, multi: true },
];
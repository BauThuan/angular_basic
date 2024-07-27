import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'YOUR_ACCESS_TOKEN';
  console.log('Intercepting request:', req); 
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  console.log('Modified request:', authReq);
  return next(authReq);
};
// bug call api không có gửi header nhưng ko có token

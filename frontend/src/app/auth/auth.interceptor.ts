import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // List of endpoints to exclude from token injection
  const excludedEndpoints = ['/public-endpoint', '/health-check'];

  if (excludedEndpoints.some(endpoint => req.url.includes(endpoint))) {
    return next(req);
  }

  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token) {
    // Clone the request and add the token to the Authorization header
    const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    return next(authReq);
  }

  return next(req);
};

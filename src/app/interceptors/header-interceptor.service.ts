import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const header = req.headers.set(
      'authorization',
      this.authService.getToken()
    );
    const request = req.clone({
      headers: header,
    });
    // console.log(request);
    return next.handle(request);
  }
}

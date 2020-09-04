import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginViewModel } from '../class/login-view-model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://127.0.0.1:5000/api/v1/auth';
  constructor(private http: HttpClient) {}

  login(user: LoginViewModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getToken(): any {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  isLoggedIn(): any {
    if (this.getToken() != '') {
      return true;
    } else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginViewModel } from '../class/login-view-model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string = null;
  baseUrl: string = 'http://127.0.0.1:5000/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(user: LoginViewModel): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/login`, user, { responseType: 'json' })
      .pipe(
        map((res: any) => {
          // console.log(res);
          this.userName = res.name;

          localStorage.setItem('token', res.token);
          return res;
        })
      );
  }

  logout() {
    this.userName = null;
    localStorage.clear();
  }

  getToken(): any {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  }

  getCurrentUser(): any {
    return this.http.get(`${this.baseUrl}/me`);
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') {
      return true;
    } else {
      return false;
    }
  }
}

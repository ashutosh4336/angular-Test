import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let flag = false;
    //  console.log('user Auth guard Check');
    if (this.authService.isLoggedIn()) {
      console.log('User authenticated');
      flag = true;
    } else {
      console.log('User not authenticated');
      this.router.navigate(['login']);
    }
    return flag;
  }
}

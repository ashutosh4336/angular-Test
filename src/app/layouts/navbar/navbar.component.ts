import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { User } from '../../class/user';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  authToken: string = null;
  curUser: User = null;
  email: string = null;
  errMessage: string = null;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {
    // authService.getCurrentUser().subscribe(
    //   (res) => {
    //     // console.log(res);
    //     this.curUser = res.user;
    //     this.email = res.user?.email;
    //     console.log(this.curUser);
    //   },
    //   (err) => {
    //     // console.log(err.error.message);
    //     this.errMessage = err.error.message;
    //   }
    // );
  }

  ngOnInit(): void {}

  helper() {
    this.authToken = localStorage.getItem('token');
    return this.authToken;
  }

  logOut() {
    this.router.navigate(['']);
    this.toastr.success('Logout Successfull', 'Success', {
      timeOut: 3000,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
    });
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // loggedInUserDetials() {
  //   this.authService.getCurrentUser().subscribe(
  //     (res) => {
  //       // console.log(res);
  //       this.curUser = res.user;
  //       console.log(this.curUser);
  //     },
  //     (err) => {
  //       // console.log(err.error.message);
  //       this.errMessage = err.error.message;
  //     }
  //   );
  // }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/class/login-view-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(loginform: NgForm) {
    // console.log(loginform.value);
    this.authService.login(loginform.value).subscribe(
      (res) => {
        // console.log('loginComponent Respose', res);
        this.toastr.success('Login Successfull', 'Success', {
          timeOut: 3000,
          progressBar: true,
          closeButton: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl('/dashboard');
      },
      (err) => {
        // console.log('loginComponent Error Respose', err, err.error.err);
        this.toastr.error(`${err.error.message}`, 'Error', {
          timeOut: 3000,
          progressBar: true,
          closeButton: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
        });
        this.loginError = `${err.error.message}`;
      }
    );
  }
}

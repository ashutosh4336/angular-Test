import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.router.navigate(['']);
    this.toastr.success('Logout Successfull', 'Success', {
      timeOut: 3000,
      progressBar: true,
      closeButton: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
    });
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

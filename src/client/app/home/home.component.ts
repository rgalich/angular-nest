import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'app/service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  isCollapsed = false;
  isCollapsedProfil = false;

  logout() {
    this.authService.removeAuthStorage();
    this.router.navigate(['/authentication']);
  }

  get initialUserConnect() {
    return this.userService.userConnect && this.userService.userConnect.firstName && this.userService.userConnect.lastName
            ? this.userService.userConnect.firstName.charAt(0).toUpperCase() +
            this.userService.userConnect.lastName.charAt(0).toUpperCase() : null;
  }

  get iconProfil() {
    return this.isCollapsedProfil ? 'up' : 'down';
  }

  ngOnInit() {
    this.userService.findAll().subscribe();
  }

}

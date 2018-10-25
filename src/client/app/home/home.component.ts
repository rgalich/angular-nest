import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  isCollapsed = false;
  isCollapsedProfil = false;

  logout() {
    this.authService.removeAuthStorage();
    this.router.navigate(['/authentication']);
  }

  get iconProfil() {
    return this.isCollapsedProfil ? 'up' : 'down';
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Auth, AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth: Auth;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe(auth => this.auth = auth);
  }
}

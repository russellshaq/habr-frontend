import {Component, OnInit} from '@angular/core';
import {Auth, AuthService} from '../../auth/auth.service';
import {User} from '../../model/User';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  auth: Auth;
  id: string;
  component = 'info';

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe(auth => this.auth = auth);
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUserById(this.id);
    });
  }

  getUserById(id: string): void {
    this.userService.getById(id).subscribe(user => this.user = user);
  }

  updateUser(user: User): void {
    this.user = user;
    this.authService.auth$.next({signedIn: this.auth.signedIn, user: this.user});
  }
}

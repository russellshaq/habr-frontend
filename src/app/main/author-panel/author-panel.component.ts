import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../service/post.service';
import {UserService} from '../service/user.service';
import {User} from '../../model/User';
import {Auth, AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-author-panel',
  templateUrl: './author-panel.component.html',
  styleUrls: ['./author-panel.component.css']
})
export class AuthorPanelComponent implements OnInit {
  @Input() post: Post;
  subscribed = false;
  userImage = User.defaultImage;
  auth: Auth;

  constructor(private userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe(auth => this.auth = auth);
    this.userService.checkSubscribed(this.post.author.id).subscribe({
      next: (response) => this.subscribed = response.value
    });
  }

  onSubscribe(): void {
    this.userService.subscribe({id: this.post.author.id, value: !this.subscribed})
      .subscribe({
        next: () => this.subscribed = !this.subscribed
      });
  }

}

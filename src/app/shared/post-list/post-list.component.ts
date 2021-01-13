import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {User} from '../../model/User';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.auth$.subscribe(auth => this.user = auth.user);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/Post';
import {PostService} from '../../service/post.service';
import {User} from '../../../model/User';
import {Location} from '@angular/common';
import {AuthService} from '../../../auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  posts: Post[] = [];
  @Input() userId: string;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.postService.getBookmarkedByUser(this.userId).subscribe({
      next: (response) => this.posts = response.content
    });
  }

}

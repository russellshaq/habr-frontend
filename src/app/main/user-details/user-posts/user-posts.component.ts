import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/Post';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Post[] = [];
  @Input() userId: string;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getByAuthor(this.userId).subscribe({
      next: (response) => {
        this.posts = response.content;
      }
    });
  }

}

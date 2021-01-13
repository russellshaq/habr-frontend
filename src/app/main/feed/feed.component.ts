import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  totalPages: number;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPaginated(0);
  }

  getPaginated(page: number): void {
    this.postService.getAll(page).subscribe(response => {
      this.posts = response.content;
      this.totalPages = response.totalPages;
    });
  }


}

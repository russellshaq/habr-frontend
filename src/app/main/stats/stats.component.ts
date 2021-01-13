import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() post: Post;
  voted = false;
  bookmarked = false;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  vote(value) {
    this.postService.vote({id: this.post.id, value}).subscribe({
      next: () => {
        this.post.voteCount += this.getNumber(value);
        this.voted = true;
      },
      error: () => {
        this.voted = true;
      }
    });
  }

  bookmark(value) {
    this.postService.bookmark({id: this.post.id, value}).subscribe({
      next: () => {
        this.post.bookmarkCount += this.getNumber(value);
        this.bookmarked = true;
      },
      error: () => this.bookmarked = true
    });
  }

  getNumber(value) {
    return value ? 1 : -1;
  }
}

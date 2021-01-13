import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../../model/Post';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((result) => this.posts = result.content);
  }

}

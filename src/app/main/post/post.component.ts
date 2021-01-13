import {Component, OnInit} from '@angular/core';
import {PostService} from '../service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postService.getById(params.get('id')).subscribe(r => this.post = r);
    });
  }
}

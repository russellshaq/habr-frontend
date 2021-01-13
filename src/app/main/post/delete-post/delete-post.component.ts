import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postService.deleteById(params.get('id')).subscribe(() => {
        this.location.back();
      });
    });
  }

}

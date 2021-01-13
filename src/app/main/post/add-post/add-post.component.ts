import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileService} from '../../service/file.service';
import {Topic} from '../../../model/Topic';
import {TopicService} from '../../service/topic.service';
import {PostService} from '../../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm = this.fb.group({
    title: ['', Validators.required],
    topicIds: ['', Validators.required],
    body: ['', Validators.required]
  });
  topics: Topic[] = [];

  constructor(private fb: FormBuilder,
              private fileService: FileService,
              private topicService: TopicService,
              private postService: PostService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.topicService.getAll().subscribe(topics => this.topics = topics);
  }

  uploadImage = (blobInfo, success, failure): void => {
    const formData = new FormData();
    formData.append('file', blobInfo.blob());
    this.fileService.upload(formData).subscribe({
      next: (fileDto) => success('/api/img/' + fileDto.location),
      error: (e) => failure('Image save error')
    });
  }

  onSubmit(): void {
    this.postService.create(this.postForm.value)
      .subscribe(response => this.router.navigateByUrl('/main/posts'));
  }
}

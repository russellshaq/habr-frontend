import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/User';
import {CommentService} from '../service/comment.service';
import {Post} from '../../model/Post';
import {Auth, AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() post: Post;
  @ViewChild('form') form: ElementRef;
  comment: string;
  auth: Auth;

  constructor(private commentService: CommentService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe(auth => this.auth = auth);
  }

  onSubmit(): void {
    this.commentService.create({postId: this.post.id, body: this.comment}).subscribe({
      next: (comment) => {
        this.post.comments.push(comment);
        this.post.commentCount += 1;
        this.form.nativeElement.reset();
      }
    });
  }

  onDelete(id: number): void {
    this.commentService.delete(id).subscribe({
      next: () => {
        const index = this.post.comments.findIndex(c => c.id === id);
        if (index >= 0) {
          this.post.comments.splice(index, 1);
          this.post.commentCount -= 1;

        }
      }
    });
  }
}

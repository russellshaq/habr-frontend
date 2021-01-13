import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../../model/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = '/api/comments';

  constructor(private client: HttpClient) {
  }

  create(body): Observable<any> {
    return this.client.post<Comment>(this.url, body);
  }

  delete(id: number): Observable<any> {
    return this.client.delete(`${this.url}/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../model/Post';
import {CreateActionDto} from '../../model/CreateActionDto';
import {Observable} from 'rxjs';
import {CollectionResponse} from '../../model/CollectionResponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = '/api/posts';

  constructor(private client: HttpClient) {
  }

  create(post): Observable<any> {
    return this.client.post<Post>(this.url, post);
  }

  getAll(page = 0): Observable<any> {
    return this.client.get<CollectionResponse<Post>>(this.url, {
      params: {
        page: page.toString()
      }
    });
  }

  getById(id: string): Observable<any> {
    return this.client.get<Post>(`${this.url}/${id}`);
  }

  getByAuthor(authorId: string, page = 0): Observable<any> {
    return this.client.get<CollectionResponse<Post>>(`${this.url}/by-author`, {
      params: {
        page: page.toString(),
        authorId
      }
    });
  }

  getBookmarkedByUser(userId: string, page = 0): Observable<any> {
    return this.client.get<CollectionResponse<Post>>(`${this.url}/bookmarked`, {
      params: {
        page: page.toString(),
        userId
      }
    });
  }

  deleteById(id: string): Observable<any> {
    return this.client.delete(`${this.url}/${id}`);
  }

  bookmark(bookmark: CreateActionDto): Observable<any> {
    return this.client.post(`${this.url}/bookmark`, bookmark);
  }

  vote(vote: CreateActionDto): Observable<any> {
    return this.client.post(`${this.url}/vote`, vote);
  }
}

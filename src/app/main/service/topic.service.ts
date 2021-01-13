import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Topic} from '../../model/Topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  url = '/api/topics';

  constructor(private client: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.client.get<Topic>(this.url);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {File} from '../../model/File';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  url = '/api/files';

  constructor(private client: HttpClient) {
  }

  upload(formData): Observable<any> {
    return this.client.post<File>(this.url, formData);
  }
}

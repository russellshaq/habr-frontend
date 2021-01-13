import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateActionDto} from '../../model/CreateActionDto';
import {Observable} from 'rxjs';
import {CheckActionDto} from '../../model/CheckActionDto';
import {User} from '../../model/User';
import {Profile} from '../../model/Profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api/users';

  constructor(private client: HttpClient) {
  }

  subscribe(body: CreateActionDto): Observable<any> {
    return this.client.post(`${this.url}/subscribe`, body);
  }

  checkSubscribed(id: number): Observable<any> {
    return this.client.get<CheckActionDto>(`${this.url}/${id}/check-subscribed`);
  }

  updateProfile(profile: Profile, id: number): Observable<any> {
    return this.client.put<User>(`${this.url}/${id}`, profile);
  }

  updateDataProfile(formData: FormData, id: number): Observable<any> {
    return this.client.post<User>(`${this.url}/update`, formData);
  }

  getById(id: string): Observable<any> {
    return this.client.get<User>(`${this.url}/${id}`);
  }
}

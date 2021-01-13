import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {User} from '../model/User';

export interface Auth {
  signedIn: boolean;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '/api/auth';
  auth$ = new BehaviorSubject({signedIn: false, user: null});


  constructor(private client: HttpClient) {
  }

  checkAuth(): Observable<any> {
    return this.client.get(`${this.url}/check`).pipe(tap((user) => {
      this.auth$.next({signedIn: true, user});
    }));
  }

  signup(credentials): Observable<any> {
    return this.client.post<User>(`${this.url}/signup`, credentials).pipe(tap((user) => {
      this.auth$.next({signedIn: true, user});
    }));
  }

  signout(): Observable<any> {
    return this.client.post(`${this.url}/signout`, {}).pipe(tap((user) => {
      this.auth$.next({signedIn: false, user});
    }));
  }

  signIn({email, password}): Observable<any> {
    return this.client.post(`${this.url}/signin`, {}, {
      params: {email, password}
    }).pipe(tap((user) => {
      this.auth$.next({signedIn: true, user});
    }));
  }
}

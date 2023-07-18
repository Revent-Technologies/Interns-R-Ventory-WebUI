import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 2000);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  loginCheck(username: string): Observable<User> {
    return this.http
      .get<User[]>(`http://localhost:3000/users?username=${username}`)
      .pipe(map((users) => users[0]));
  }
}

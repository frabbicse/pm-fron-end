import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser | any>(null);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUserValue() {
    return this.currentUserSource.value;
  }

  register(values: any) {
    return this.http.post(this.baseUrl + 'Auth/register', values).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  login(values: any) {
    type user = IUser;

    return this.http.post(this.baseUrl + 'Auth/login', values).pipe(
      map((user: any): void => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }
}

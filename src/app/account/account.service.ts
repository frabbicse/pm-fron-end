import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

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
          console.log(user);

          localStorage.setItem('token', user.token);
        }
      })
    );
  }
}

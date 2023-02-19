import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProject } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  projectList() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<IProject>(this.baseUrl + 'Project', { headers }).pipe(
      map(
        (response) => {
          return response;
        },
        (error: any) => {
          console.log(error);
        }
      )
    );
  }
}

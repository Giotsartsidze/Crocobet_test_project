import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private http: HttpClient) {}

  // Get all users
  getAllUsers(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users`).pipe(delay(100));
  }

  //Get user by id 
  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/${id}`);
  }

  // Get posts by user 
  getPosts(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/users/${id}/posts`);
  }
}
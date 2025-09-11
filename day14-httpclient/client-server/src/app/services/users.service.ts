import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userApi = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.userApi);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.userApi, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.userApi}/${id}`, user);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.userApi}/${id}`);
  }
}

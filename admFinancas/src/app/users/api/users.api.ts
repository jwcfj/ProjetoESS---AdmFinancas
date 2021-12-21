import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { Users } from '../../../../../common/users';
import { Observable } from 'rxjs';

@Injectable()
export class UsersApi {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/api/users/';

  public constructor(private readonly http: HttpClient) {}

  public getUsers() {
    return this.http
      .get<Users[]>(this.baseUrl, { headers: this.headers })
      .pipe(retry(2));
  }

  public insertUser(
    userToInsert: Users
  ): Observable<Users> {
    return this.http
      .post<any>(this.baseUrl, userToInsert, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) return userToInsert;
          return new Users();//AJEITAR
        })
      );
  }

  public updateUser(
    userToUpdate: Users
  ): Observable<Users> {
    return this.http
      .put<any>(this.baseUrl, userToUpdate, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }

  public deleteUser(userId: number): Observable<Users> {
    return this.http
      .delete<any>(this.baseUrl, {
        headers: this.headers,
        body: { expense: userId },
      })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }
}

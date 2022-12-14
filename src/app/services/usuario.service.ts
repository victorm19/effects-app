import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = 'https://reqres.in/api';
  constructor(private readonly _http: HttpClient) { }

  getUsers() {
    return this._http.get<any>(`${this.URL}/users?per_page=10`)
        .pipe(
          map(({ data }) => data)
        );
  }

  getUserById(id: string) {
    return this._http.get<any>(`${this.URL}/users/${id}`)
        .pipe(
          map(({ data }) => data)
        );
  }
}

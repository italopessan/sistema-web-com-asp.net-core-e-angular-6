
import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:52543/api'

  list() {
    return this.http.get<Curso[]>(`${this.API}/cursos`);
  }

  loadById(id)  {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso) {
    return this.http.post(`${this.API}`, curso).pipe(take(1));
  }

  update(curso) {
    return this.http.put<Curso>(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './../app/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = 'http://localhost:8080/api/pessoa';

  constructor(private http: HttpClient) { }

  getPessoa(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  criarPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.url}`, pessoa);
  }

  editarPessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deletarPessoa(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }

  getPessoas(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = 'http://localhost:8080/api/pessoa';

  constructor(private http: HttpClient) { }

  getPessoaPorId(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  // tslint:disable-next-line: ban-types
  criarPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.url}`, pessoa);
  }

  // tslint:disable-next-line: ban-types
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

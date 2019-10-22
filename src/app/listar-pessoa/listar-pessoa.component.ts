import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getPessoas();
  }

  detalhePessoa(id: number) {
    this.router.navigate(['detalhe', id]);
  }

  editarPessoa(id: number) {
    this.router.navigate(['editar', id]);
  }

  deletarPessoa(id: number) {
    this.pessoaService.deletarPessoa(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}

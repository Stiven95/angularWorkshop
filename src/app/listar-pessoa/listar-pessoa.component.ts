import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;
  email: string;
  nome: string;
  id: number;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      // tslint:disable-next-line: only-arrow-functions
      $('#fecharAlerta').fadeTo(3000, 500).slideUp(500, function() {
        $('#fecharAlerta').slideUp(500);
      });
    });
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

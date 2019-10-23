import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  submitted = false;

  constructor(private pessoaService: PessoaService, private router: Router, private alertaService: AlertaService) { }

  ngOnInit() {
  }

  salvar() {
    this.pessoaService.criarPessoa(this.pessoa)
      .subscribe(
        data => { this.alertaService.success('Salvo com Sucesso!', true);
                  this.listarPessoas();
        }, error => this.alertaService.error(error));
    this.pessoa = new Pessoa();

  }

  onSubmit() {
    this.submitted = true;
    this.alertaService.clear();
    this.salvar();
  }

  listarPessoas() {
    this.router.navigate(['/pessoas'], { queryParams: { registered: true }});
  }

}

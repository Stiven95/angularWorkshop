import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from '../alerta.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private route: ActivatedRoute, private router: Router,
              private pessoaService: PessoaService, private alertaService: AlertaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params.id;

    this.pessoaService.getPessoaPorId(this.id).subscribe(data => {
      this.pessoa = data;
    }, error => this.alertaService.error(error));
  }

  editarPessoa() {
    this.pessoaService.editarPessoa(this.id, this.pessoa).subscribe(
      data => { this.alertaService.success('Salvo com Sucesso!', true);
                this.listarPessoas();
      }, error => this.alertaService.error(error));
    this.pessoa = new Pessoa();
  }

  onSubmit() {
    this.editarPessoa();
  }

  listarPessoas() {
    this.router.navigate(['/pessoas']);
  }
}

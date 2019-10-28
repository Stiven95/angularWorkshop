import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;

  constructor(private route: ActivatedRoute, private router: Router,
              private pessoaService: PessoaService, private alertaService: AlertaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoaPorId(this.id).subscribe(data => {
      this.pessoa = data;
    },  error => this.alertaService.error(error));
  }

  listaPessoas() {
    this.router.navigate(['pessoas']);
  }
}

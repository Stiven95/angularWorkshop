import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { CriarPessoaComponent } from './criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { DetalhePessoaComponent } from './detalhe-pessoa/detalhe-pessoa.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pessoas', component: ListarPessoaComponent },
  { path: 'criar', component: CriarPessoaComponent },
  { path: 'editar/:id', component: EditarPessoaComponent },
  { path: 'detalhe/:id', component: DetalhePessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

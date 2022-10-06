import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {CadastroListagemComponent} from './usuario/cadastro-listagem/cadastro-listagem.component';

const routes: Routes = [
  {
    path: "listagemusuarios",
    component: ListagemUsuarioComponent
  },
  {
    path: "cadastrousuario",
    component: CadastroUsuarioComponent
  },
  {
    path: "editausuario/:id",
    component: CadastroUsuarioComponent
  },
  {
    path: "cadastrolistausuarios",
    component: CadastroListagemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

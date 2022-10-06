import { Component, OnInit } from '@angular/core';
import {USUARIOS} from '../../shared/modelo/USUARIOS';
import {Usuario} from '../../shared/modelo/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios = USUARIOS;

  constructor(private roteador: Router) { }

  ngOnInit(): void {
  }

  removerUsuario(usuarioARemover: Usuario): void {
    const indx = this.usuarios.findIndex(usuario => usuario.id === usuarioARemover.id);
    if (indx > -1) {
      this.usuarios.splice(indx, 1);
    }
  }

}
